import { TBaseElement } from './baseElement';

// abstract="true"
export type TArtifact = TBaseElement;

// substitutionGroup="artifact"
export interface TAssociation extends TArtifact {
  sourceRef: string;
  targetRef: string;
  associationDirection?: tAssociationDirection; // default="None"
}

// substitutionGroup="artifact"
export interface TGroup extends TArtifact {
  categoryValueRef?: string;
}

// substitutionGroup="artifact"
export interface TTextAnnotation extends TArtifact {
  text?: Text;
  textFormat?: string; // default="text/plain"
}

export enum tAssociationDirection {
  None = 'None',
  One = 'One',
  Both = 'Both',
}
