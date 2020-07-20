import { TInputOutputSpecification } from '../../input-output';
import { TLaneSet, TProperty } from '../../baseElement';
import { TDataInputAssociation, TDataOutputAssociation } from '../../data';
import { THumanPerformer, TPerformer, TPotentialOwner, TResourceRole } from '../../resource';
import { TLoopCharacteristics, TMultiInstanceLoopCharacteristics, TStandardLoopCharacteristics } from '../../loopCharacteristics';
import { TExpression } from '../../expression';
import { TArtifact, TAssociation, TGroup, TTextAnnotation } from '../../artifact';
import { TFlowElement, TFlowNode } from '../../flowElement';

// abstract="true"
export interface TActivity extends TFlowNode {
  ioSpecification?: TInputOutputSpecification;
  property?: TProperty[];
  dataInputAssociation?: TDataInputAssociation[];
  dataOutputAssociation?: TDataOutputAssociation[];

  // resourceRole
  resourceRole?: TResourceRole[];
  performer?: TPerformer[];
  humanPerformer?: THumanPerformer[];
  potentialOwner?: TPotentialOwner[];

  // loopCharacteristics
  loopCharacteristics?: TLoopCharacteristics[];
  multiInstanceLoopCharacteristics?: TMultiInstanceLoopCharacteristics[];
  standardLoopCharacteristics?: TStandardLoopCharacteristics[];

  isForCompensation?: boolean; // default="false"
  startQuantity?: number; // default="1"
  completionQuantity?: number; // default="1"
  default?: string;
}

export interface TCallActivity extends TActivity {
  calledElement?: string;
}

export interface TSubProcess extends TActivity {
  laneSet?: TLaneSet[];
  flowElement?: TFlowElement[];

  // artifact
  artifact?: TArtifact[];
  association?: TAssociation[];
  group?: TGroup[];
  textAnnotation?: TTextAnnotation[];

  triggeredByEvent?: boolean; // default="false"
}

export interface TAdHocSubProcess extends TSubProcess {
  completionCondition?: TExpression;
  cancelRemainingInstances?: boolean; // default="true"
  ordering?: tAdHocOrdering;
}

enum tAdHocOrdering {
  Parallel = 'Parallel',
  Sequential = 'Sequential',
}

export interface TTransaction extends TSubProcess {
  method?: tTransactionMethod; //default="##Compensate"
}

enum tTransactionMethod {
  Compensate = '##Compensate',
  Image = '##Image',
  Store = '##Store',
}
