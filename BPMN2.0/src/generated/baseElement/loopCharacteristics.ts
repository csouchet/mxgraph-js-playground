import { TExpression } from './expression';
import { TDataInput, TDataOutput } from './data';
import { TBaseElement, TComplexBehaviorDefinition } from './baseElement';

// abstract="true"
export type TLoopCharacteristics = TBaseElement;

export interface TMultiInstanceLoopCharacteristics extends TLoopCharacteristics {
  complexBehaviorDefinition?: TComplexBehaviorDefinition[];
  loopCardinality?: TExpression;
  loopDataInputRef?: string;
  loopDataOutputRef?: string;
  inputDataItem?: TDataInput;
  outputDataItem?: TDataOutput;
  completionCondition?: TExpression;
  isSequential?: boolean; // default="false"
  behavior?: tMultiInstanceFlowCondition; // default="All"
  oneBehaviorEventRef?: string;
  noneBehaviorEventRef?: string;
}

export interface TStandardLoopCharacteristics extends TLoopCharacteristics {
  loopCondition?: TExpression;
  testBefore?: boolean; // default="false"
  loopMaximum?: number;
}

export enum tMultiInstanceFlowCondition {
  None = 'None',
  One = 'One',
  All = 'All',
  Complex = 'Complex',
}
