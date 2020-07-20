import { TRootElement } from './rootElement';
import { TCallConversation, TConversation, TConversationAssociation, TConversationLink, TConversationNode, TSubConversation } from '../conversation';
import { TMessageFlow, TMessageFlowAssociation } from '../baseElement';
import { TParticipant, TParticipantAssociation } from '../participant';
import { TArtifact, TAssociation, TGroup, TTextAnnotation } from '../artifact';
import { TCorrelationKey } from '../correlation';
import { TFlowElement } from '../flowElement';

export interface TCollaboration extends TRootElement {
  participant?: TParticipant[];
  messageFlow?: TMessageFlow[];

  // artifact
  artifact?: TArtifact[];
  association?: TAssociation[];
  group?: TGroup[];
  textAnnotation?: TTextAnnotation[];

  // conversationNode
  conversationNode?: TConversationNode[];
  callConversation?: TCallConversation[];
  conversation?: TConversation[];
  subConversation?: TSubConversation[];

  conversationAssociation?: TConversationAssociation[];
  participantAssociation?: TParticipantAssociation[];
  messageFlowAssociation?: TMessageFlowAssociation[];
  correlationKey?: TCorrelationKey[];
  choreographyRef?: string[];
  conversationLink?: TConversationLink[];
  name?: string;
  isClosed?: boolean; // default="false"
}

export type TGlobalConversation = TCollaboration;

export interface TChoreography extends TCollaboration {
  flowElement?: TFlowElement[];
}

export interface TGlobalChoreographyTask extends TChoreography {
  initiatingParticipantRef?: string;
}
