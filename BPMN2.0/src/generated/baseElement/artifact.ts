import { TBaseElement } from './baseElement';

// abstract="true"
export type TArtifact = TBaseElement;

export interface TAssociation extends TArtifact {
  sourceRef: string;
  targetRef: string;
  associationDirection?: tAssociationDirection; // default="None"
}

export interface TGroup extends TArtifact {
  categoryValueRef?: string;
}

export interface TTextAnnotation extends TArtifact {
  text?: Text;
  textFormat?: string; // default="text/plain"
}

export enum tAssociationDirection {
  None = 'None',
  One = 'One',
  Both = 'Both',
}
