import { TBaseElement } from './baseElement';
import { TCorrelationKey } from './correlation';
import { TParticipantAssociation } from './participant';

// abstract="true"
export interface TConversationNode extends TBaseElement {
  correlationKey?: TCorrelationKey[];
  participantRef?: string[];
  messageFlowRef?: string[];
  name?: string;
}

// substitutionGroup="conversationNode"
export interface TCallConversation extends TConversationNode {
  participantAssociation?: TParticipantAssociation[];
  calledCollaborationRef?: string;
}

// substitutionGroup="conversationNode"
export interface TSubConversation extends TConversationNode {
  conversationNode?: TConversationNode[];
}

// substitutionGroup="conversationNode"
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
