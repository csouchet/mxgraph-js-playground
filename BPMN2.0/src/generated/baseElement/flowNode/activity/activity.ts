import { TInputOutputSpecification } from '../../input-output';
import { TLaneSet, TProperty } from '../../baseElement';
import { TDataInputAssociation, TDataObject, TDataObjectReference, TDataOutputAssociation, TDataStoreReference } from '../../data';
import { THumanPerformer, TPerformer, TPotentialOwner, TResourceRole } from '../../resource';
import { TLoopCharacteristics, TMultiInstanceLoopCharacteristics, TStandardLoopCharacteristics } from '../../loopCharacteristics';
import { TExpression } from '../../expression';
import { TArtifact, TAssociation, TGroup, TTextAnnotation } from '../../artifact';
import { TFlowElement, TFlowNode, TSequenceFlow } from '../../flowElement';
import { TCallChoreography, TChoreographyTask, TSubChoreography } from '../choreographyActivity';
import { TBoundaryEvent, TEndEvent, TEvent, TImplicitThrowEvent, TIntermediateCatchEvent, TIntermediateThrowEvent, TStartEvent } from '../event';
import { TComplexGateway, TEventBasedGateway, TExclusiveGateway, TInclusiveGateway, TParallelGateway } from '../gateway';
import { TBusinessRuleTask, TManualTask, TReceiveTask, TScriptTask, TSendTask, TServiceTask, TTask, TUserTask } from './task';

// abstract="true"
export interface TActivity extends TFlowNode {
  ioSpecification?: TInputOutputSpecification;
  property?: TProperty | TProperty[];
  dataInputAssociation?: TDataInputAssociation | TDataInputAssociation[];
  dataOutputAssociation?: TDataOutputAssociation | TDataOutputAssociation[];

  // resourceRole
  resourceRole?: TResourceRole | TResourceRole[];
  performer?: TPerformer | TPerformer[];
  humanPerformer?: THumanPerformer | THumanPerformer[];
  potentialOwner?: TPotentialOwner | TPotentialOwner[];

  // loopCharacteristics
  loopCharacteristics?: TLoopCharacteristics | TLoopCharacteristics[];
  multiInstanceLoopCharacteristics?: TMultiInstanceLoopCharacteristics | TMultiInstanceLoopCharacteristics[];
  standardLoopCharacteristics?: TStandardLoopCharacteristics | TStandardLoopCharacteristics[];

  isForCompensation?: boolean; // default="false"
  startQuantity?: number; // default="1"
  completionQuantity?: number; // default="1"
  default?: string;
}

export interface TCallActivity extends TActivity {
  calledElement?: string;
}

export interface TSubProcess extends TActivity {
  laneSet?: TLaneSet | TLaneSet[];

  // flowElement
  flowElement?: TFlowElement | TFlowElement[];
  sequenceFlow?: TSequenceFlow | TSequenceFlow[];
  callChoreography?: TCallChoreography | TCallChoreography[];
  choreographyTask?: TChoreographyTask | TChoreographyTask[];
  subChoreography?: TSubChoreography | TSubChoreography[];
  callActivity?: TCallActivity | TCallActivity[];

  // dataObject
  dataObject?: TDataObject | TDataObject[];
  dataObjectReference?: TDataObjectReference | TDataObjectReference[];
  dataStoreReference?: TDataStoreReference | TDataStoreReference[];

  // event
  event?: TEvent | TEvent[];
  intermediateCatchEvent?: TIntermediateCatchEvent | TIntermediateCatchEvent[];
  boundaryEvent?: TBoundaryEvent | TBoundaryEvent[];
  startEvent?: TStartEvent | TStartEvent[];
  implicitThrowEvent?: TImplicitThrowEvent | TImplicitThrowEvent[];
  intermediateThrowEvent?: TIntermediateThrowEvent | TIntermediateThrowEvent[];
  endEvent?: TEndEvent | TEndEvent[];

  // sub process
  subProcess?: TSubProcess | TSubProcess[];
  adHocSubProcess?: TAdHocSubProcess | TAdHocSubProcess[];
  transaction?: TTransaction | TTransaction[];

  // gateway
  complexGateway?: TComplexGateway | TComplexGateway[];
  eventBasedGateway?: TEventBasedGateway | TEventBasedGateway[];
  exclusiveGateway?: TExclusiveGateway | TExclusiveGateway[];
  inclusiveGateway?: TInclusiveGateway | TInclusiveGateway[];
  parallelGateway?: TParallelGateway | TParallelGateway[];

  // task
  task?: TTask | TTask[];
  businessRuleTask?: TBusinessRuleTask | TBusinessRuleTask[];
  manualTask?: TManualTask | TManualTask[];
  receiveTask?: TReceiveTask | TReceiveTask[];
  sendTask?: TSendTask | TSendTask[];
  serviceTask?: TServiceTask | TServiceTask[];
  scriptTask?: TScriptTask | TScriptTask[];
  userTask?: TUserTask | TUserTask[];

  // artifact
  artifact?: TArtifact | TArtifact[];
  association?: TAssociation | TAssociation[];
  group?: TGroup | TGroup[];
  textAnnotation?: TTextAnnotation | TTextAnnotation[];

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
