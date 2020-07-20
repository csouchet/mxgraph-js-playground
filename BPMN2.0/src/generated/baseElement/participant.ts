import { TBaseElement } from './baseElement';

export interface TParticipant extends TBaseElement {
  participantMultiplicity?: TParticipantMultiplicity;
  interfaceRef?: string[];
  endPointRef?: string[];
  name?: string;
  processRef?: string;
}

export interface TParticipantAssociation extends TBaseElement {
  innerParticipantRef: string;
  outerParticipantRef: string;
}

export interface TParticipantMultiplicity extends TBaseElement {
  minimum?: number; // default="0"
  maximum?: number; // default="1"
}