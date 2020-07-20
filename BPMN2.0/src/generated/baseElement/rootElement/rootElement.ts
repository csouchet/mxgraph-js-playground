import { TInputOutputBinding, TInputOutputSpecification } from '../input-output';
import { TAuditing, TBaseElement, TCategoryValue, TLaneSet, TMonitoring, TOperation, TProperty } from '../baseElement';
import { THumanPerformer, TPerformer, TPotentialOwner, TResourceParameter, TResourceRole } from '../resource';
import { TCorrelationSubscription } from '../correlation';
import { TArtifact, TAssociation, TGroup, TTextAnnotation } from '../artifact';
import { TFlowElement, TSequenceFlow } from '../flowElement';
import { TBoundaryEvent, TEndEvent, TEvent, TImplicitThrowEvent, TIntermediateCatchEvent, TIntermediateThrowEvent, TStartEvent } from '../flowNode/event';
import { TCallChoreography, TChoreographyTask, TSubChoreography } from '../flowNode/choreographyActivity';
import { TAdHocSubProcess, TCallActivity, TSubProcess, TTransaction } from '../flowNode/activity/activity';
import { TComplexGateway, TEventBasedGateway, TExclusiveGateway, TInclusiveGateway, TParallelGateway } from '../flowNode/gateway';
import { TDataObject, TDataObjectReference, TDataStoreReference } from '../data';
import { TBusinessRuleTask, TManualTask, TReceiveTask, TScriptTask, TSendTask, TServiceTask, TTask, TUserTask } from '../flowNode/activity/task';

// abstract="true"
export type TRootElement = TBaseElement;

export interface TCallableElement extends TRootElement {
  ioSpecification?: TInputOutputSpecification;
  ioBinding?: TInputOutputBinding[];
  supportedInterfaceRef?: string[];
  name?: string;
}

export interface TCategory extends TRootElement {
  categoryValue?: TCategoryValue[];
  name?: string;
}

export type TEndPoint = TRootElement;

export interface TError extends TRootElement {
  name?: string;
  errorCode?: string;
  structureRef?: string;
}

export interface TEscalation extends TRootElement {
  name?: string;
  escalationCode?: string;
  structureRef?: string;
}

export interface TItemDefinition extends TRootElement {
  structureRef?: string;
  isCollection?: boolean; // default="false"
  itemKind?: tItemKind; // default="Information"
}

enum tItemKind {
  Information = 'Information',
  Physical = 'Physical',
}

export interface TMessage extends TRootElement {
  name?: string;
  itemRef?: string;
}

export interface TInterface extends TRootElement {
  operation: TOperation[];
  name: string;
  implementationRef?: string;
}

export interface TPartnerEntity extends TRootElement {
  participantRef?: string[];
  name?: string;
}

export interface TPartnerRole extends TRootElement {
  participantRef?: string[];
  name?: string;
}

export interface TResource extends TRootElement {
  resourceParameter?: TResourceParameter[];
  name: string;
}

export interface TSignal extends TRootElement {
  name?: string;
  structureRef?: string;
}

export interface TProcess extends TCallableElement {
  auditing?: TAuditing;
  monitoring?: TMonitoring;
  property?: TProperty[];
  laneSet?: TLaneSet[];

  // flowElement
  flowElement?: TFlowElement[];
  sequenceFlow?: TSequenceFlow[];
  callChoreography?: TCallChoreography[];
  choreographyTask?: TChoreographyTask[];
  subChoreography?: TSubChoreography[];
  callActivity?: TCallActivity[];

  // dataObject
  dataObject?: TDataObject[];
  dataObjectReference?: TDataObjectReference[];
  dataStoreReference?: TDataStoreReference[];

  // event
  event?: TEvent[];
  intermediateCatchEvent?: TIntermediateCatchEvent[];
  boundaryEvent?: TBoundaryEvent[];
  startEvent?: TStartEvent[];
  implicitThrowEvent?: TImplicitThrowEvent[];
  intermediateThrowEvent?: TIntermediateThrowEvent[];
  endEvent?: TEndEvent[];

  // sub process
  subProcess?: TSubProcess[];
  adHocSubProcess?: TAdHocSubProcess[];
  transaction?: TTransaction[];

  // gateway
  complexGateway?: TComplexGateway[];
  eventBasedGateway?: TEventBasedGateway[];
  exclusiveGateway?: TExclusiveGateway[];
  inclusiveGateway?: TInclusiveGateway[];
  parallelGateway?: TParallelGateway[];

  // task
  task?: TTask[];
  businessRuleTask?: TBusinessRuleTask[];
  manualTask?: TManualTask[];
  receiveTask?: TReceiveTask[];
  sendTask?: TSendTask[];
  serviceTask?: TServiceTask[];
  scriptTask?: TScriptTask[];
  userTask?: TUserTask[];

  // artifact
  artifact?: TArtifact[];
  association?: TAssociation[];
  group?: TGroup[];
  textAnnotation?: TTextAnnotation[];

  // resourceRole
  resourceRole?: TResourceRole[];
  performer?: TPerformer[];
  humanPerformer?: THumanPerformer[];
  potentialOwner?: TPotentialOwner[];

  correlationSubscription?: TCorrelationSubscription[];
  supports?: string[];
  processType?: tProcessType; // default="None"
  isClosed?: boolean; // default="false"
  isExecutable?: boolean;
  definitionalCollaborationRef?: string;
}

export enum tProcessType {
  None = 'None',
  Public = 'Public',
  Private = 'Private',
}
