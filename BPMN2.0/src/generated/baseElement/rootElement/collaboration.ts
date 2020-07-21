import { TRootElement } from './rootElement';
import { TCallConversation, TConversation, TConversationAssociation, TConversationLink, TConversationNode, TSubConversation } from '../conversation';
import { TMessageFlow, TMessageFlowAssociation } from '../baseElement';
import { TParticipant, TParticipantAssociation } from '../participant';
import { TArtifact, TAssociation, TGroup, TTextAnnotation } from '../artifact';
import { TCorrelationKey } from '../correlation';
import { TFlowElement, TSequenceFlow } from '../flowElement';
import { TCallChoreography, TChoreographyTask, TSubChoreography } from '../flowNode/choreographyActivity';
import { TAdHocSubProcess, TCallActivity, TSubProcess, TTransaction } from '../flowNode/activity/activity';
import { TDataObject, TDataObjectReference, TDataStoreReference } from '../data';
import { TBoundaryEvent, TEndEvent, TEvent, TImplicitThrowEvent, TIntermediateCatchEvent, TIntermediateThrowEvent, TStartEvent } from '../flowNode/event';
import { TComplexGateway, TEventBasedGateway, TExclusiveGateway, TInclusiveGateway, TParallelGateway } from '../flowNode/gateway';
import { TBusinessRuleTask, TManualTask, TReceiveTask, TScriptTask, TSendTask, TServiceTask, TTask, TUserTask } from '../flowNode/activity/task';

export interface TCollaboration extends TRootElement {
  participant?: TParticipant | TParticipant[];
  messageFlow?: TMessageFlow | TMessageFlow[];

  // artifact
  artifact?: TArtifact | TArtifact[];
  association?: TAssociation | TAssociation[];
  group?: TGroup | TGroup[];
  textAnnotation?: TTextAnnotation | TTextAnnotation[];

  // conversationNode
  conversationNode?: TConversationNode | TConversationNode[];
  callConversation?: TCallConversation | TCallConversation[];
  conversation?: TConversation | TConversation[];
  subConversation?: TSubConversation | TSubConversation[];

  conversationAssociation?: TConversationAssociation | TConversationAssociation[];
  participantAssociation?: TParticipantAssociation | TParticipantAssociation[];
  messageFlowAssociation?: TMessageFlowAssociation | TMessageFlowAssociation[];
  correlationKey?: TCorrelationKey | TCorrelationKey[];
  choreographyRef?: string | string[];
  conversationLink?: TConversationLink | TConversationLink[];
  name?: string;
  isClosed?: boolean; // default="false"
}

export type TGlobalConversation = TCollaboration;

export interface TChoreography extends TCollaboration {
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
}

export interface TGlobalChoreographyTask extends TChoreography {
  initiatingParticipantRef?: string;
}
