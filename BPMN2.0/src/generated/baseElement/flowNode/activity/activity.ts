import { TFlowNode } from '../../../Semantic';
import { TInputOutputSpecification } from '../../input-output';
import { TFlowElement, TLaneSet, TProperty } from '../../baseElement';
import { TDataInputAssociation, TDataOutputAssociation } from '../../data';
import { TResourceRole } from '../../resource';
import { TLoopCharacteristics } from '../../loopCharacteristics';
import { TExpression } from '../../expression';
import { TArtifact } from '../../artifact';

// abstract="true"
export interface TActivity extends TFlowNode{
  ioSpecification?: TInputOutputSpecification;
  property?: TProperty[];
  dataInputAssociation?: TDataInputAssociation[];
  dataOutputAssociation?: TDataOutputAssociation[];
  resourceRole?: TResourceRole[];
  loopCharacteristics?: TLoopCharacteristics[];
  isForCompensation?: boolean; // default="false"
  startQuantity?: number; // default="1"
  completionQuantity?: number; // default="1"
  default?: string;
}

// substitutionGroup="flowElement"
export interface TCallActivity extends TActivity{
  calledElement?: string;
}

// substitutionGroup="flowElement"
export interface TSubProcess extends TActivity {
  laneSet?: TLaneSet[];
  flowElement?: TFlowElement[];
  artifact?: TArtifact[];
  triggeredByEvent?: boolean; // default="false"
}

// substitutionGroup="flowElement"
export interface TAdHocSubProcess extends TSubProcess {
  completionCondition?: TExpression;
  cancelRemainingInstances?: boolean; // default="true"
  ordering?: tAdHocOrdering;
}

enum tAdHocOrdering {
  Parallel = 'Parallel',
  Sequential = 'Sequential',
}

// substitutionGroup="flowElement"
export interface TTransaction extends TSubProcess {
  method?: tTransactionMethod; //default="##Compensate"
}

enum tTransactionMethod {
  Compensate = '##Compensate',
  Image = '##Image',
  Store = '##Store',
}
