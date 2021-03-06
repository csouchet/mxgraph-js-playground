import { TBaseElement } from './baseElement';
import { TCorrelationKey } from './correlation';
import { TParticipantAssociation } from './participant';

// abstract="true"
export interface TConversationNode extends TBaseElement {
  correlationKey?: TCorrelationKey[];
  participantRef?: string | string[];
  messageFlowRef?: string | string[];
  name?: string;
}

export interface TCallConversation extends TConversationNode {
  participantAssociation?: TParticipantAssociation | TParticipantAssociation[];
  calledCollaborationRef?: string;
}

export interface TSubConversation extends TConversationNode {
  // conversationNode
  conversationNode?: TConversationNode | TConversationNode[];
  callConversation?: TCallConversation | TCallConversation[];
  conversation?: TConversation[];
}

export type TConversation = TConversationNode;

export interface TConversationAssociation extends TBaseElement {
  innerConversationNodeRef: string;
  outerConversationNodeRef: string;
}

export interface TConversationLink extends TBaseElement {
  name?: string;
  sourceRef: string;
  targetRef: string;
}
