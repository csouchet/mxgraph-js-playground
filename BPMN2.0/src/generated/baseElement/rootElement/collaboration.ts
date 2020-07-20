import { TRootElement } from './rootElement';
import { TConversationAssociation, TConversationLink, TConversationNode } from '../conversation';
import { TMessageFlow, TMessageFlowAssociation } from '../baseElement';
import { TParticipant, TParticipantAssociation } from '../participant';
import { TArtifact } from '../artifact';
import { TCorrelationKey } from '../correlation';
import { TFlowElement } from '../flowElement';

// substitutionGroup="rootElement"
export interface TCollaboration extends TRootElement {
  participant?: TParticipant[];
  messageFlow?: TMessageFlow[];
  artifact?: TArtifact[];
  conversationNode?: TConversationNode[];
  conversationAssociation?: TConversationAssociation[];
  participantAssociation?: TParticipantAssociation[];
  messageFlowAssociation?: TMessageFlowAssociation[];
  correlationKey?: TCorrelationKey[];
  choreographyRef?: string[];
  conversationLink?: TConversationLink[];
  name?: string;
  isClosed?: boolean; // default="false"
}

// substitutionGroup="collaboration"
export type TGlobalConversation = TCollaboration;

// substitutionGroup="collaboration"
export interface TChoreography extends TCollaboration {
  flowElement?: TFlowElement[];
}

// substitutionGroup="choreography"
export interface TGlobalChoreographyTask extends TChoreography {
  initiatingParticipantRef?: string;
}
