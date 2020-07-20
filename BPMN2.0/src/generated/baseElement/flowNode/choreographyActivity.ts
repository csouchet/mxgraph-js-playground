import { TCorrelationKey } from '../correlation';
import { TParticipantAssociation } from '../participant';
import { TArtifact, TAssociation, TGroup, TTextAnnotation } from '../artifact';
import { TFlowElement, TFlowNode, TSequenceFlow } from '../flowElement';
import { TAdHocSubProcess, TCallActivity, TSubProcess, TTransaction } from './activity/activity';
import { TDataObject, TDataObjectReference, TDataStoreReference } from '../data';
import { TBoundaryEvent, TEndEvent, TEvent, TImplicitThrowEvent, TIntermediateCatchEvent, TIntermediateThrowEvent, TStartEvent } from './event';
import { TComplexGateway, TEventBasedGateway, TExclusiveGateway, TInclusiveGateway, TParallelGateway } from './gateway';
import { TBusinessRuleTask, TManualTask, TReceiveTask, TScriptTask, TSendTask, TServiceTask, TTask, TUserTask } from './activity/task';

// abstract="true"
export interface TChoreographyActivity extends TFlowNode {
  correlationKey?: TCorrelationKey | TCorrelationKey[];
  participantRef: string | string[];
  initiatingParticipantRef: string;
  loopType?: tChoreographyLoopType; // default="None"
}

export interface TCallChoreography extends TChoreographyActivity {
  participantAssociation?: TParticipantAssociation | TParticipantAssociation[];
  calledChoreographyRef?: string;
}

export interface TChoreographyTask extends TChoreographyActivity {
  messageFlowRef: string|string[];
}

export interface TSubChoreography extends TChoreographyActivity {
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
}

enum tChoreographyLoopType {
  None = 'None',
  Standard = 'Standard',
  MultiInstanceSequential = 'MultiInstanceSequential',
  MultiInstanceParallel = 'MultiInstanceParallel',
}
