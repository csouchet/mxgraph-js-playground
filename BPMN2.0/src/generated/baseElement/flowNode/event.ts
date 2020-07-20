import { TProperty } from '../baseElement';
import { TDataInput, TDataInputAssociation, TDataOutput, TDataOutputAssociation } from '../data';
import { TInputSet, TOutputSet } from '../input-output';
import { TEventDefinition } from '../rootElement/eventDefinition';
import { TFlowNode } from '../flowElement';

// substitutionGroup="flowElement"
// abstract="true"
export interface TEvent extends TFlowNode {
  property?: TProperty[];
}
// ======================== Catch event ========================
// abstract="true"
export interface TCatchEvent extends TEvent {
  dataOutput?: TDataOutput[];
  dataOutputAssociation?: TDataOutputAssociation[];
  outputSet: TOutputSet;
  eventDefinition?: TEventDefinition[];
  eventDefinitionRef?: string[];
  parallelMultiple?: boolean; // default="false"
}

// substitutionGroup="flowElement"
export type TIntermediateCatchEvent = TCatchEvent;

// substitutionGroup="flowElement"
export interface TBoundaryEvent extends TCatchEvent {
  cancelActivity?: boolean; // default="true"
  attachedToRef: string;
}

// substitutionGroup="flowElement"
export interface TStartEvent extends TCatchEvent {
  isInterrupting?: boolean; // default="true"
}

// ======================== Throw event ========================
// abstract="true"
export interface TThrowEvent extends TEvent {
  dataInput?: TDataInput[];
  dataInputAssociation?: TDataInputAssociation[];
  inputSet?: TInputSet;
  eventDefinition?: TEventDefinition[];
  eventDefinitionRef?: string[];
}

// substitutionGroup="flowElement"
export type TImplicitThrowEvent = TThrowEvent;

// substitutionGroup="flowElement"
export type TIntermediateThrowEvent = TThrowEvent;

// substitutionGroup="flowElement"
export type TEndEvent = TThrowEvent;
