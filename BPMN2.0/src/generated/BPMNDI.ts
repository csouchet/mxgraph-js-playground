import { Diagram, Label, LabeledEdge, LabeledShape, Plane, Style } from './DI';
import { Font } from './DC';

export interface BPMNDiagram extends Diagram {
  BPMNPlane: BPMNPlane;
  BPMNLabelStyle?: BPMNLabelStyle | BPMNLabelStyle[];
}

export interface BPMNPlane extends Plane {
  bpmnElement?: string;
}

export interface BPMNEdge extends LabeledEdge {
  BPMNLabel?: BPMNLabel | BPMNLabel[];
  bpmnElement?: string;
  sourceElement?: string;
  targetElement?: string;
  messageVisibleKind?: MessageVisibleKind;
}

export interface BPMNShape extends LabeledShape {
  BPMNLabel?: BPMNLabel | BPMNLabel[];
  bpmnElement?: string;
  isHorizontal?: boolean;
  isExpanded?: boolean;
  isMarkerVisible?: boolean;
  isMessageVisible?: boolean;
  participantBandKind?: ParticipantBandKind;
  choreographyActivityShape?: string;
}

export interface BPMNLabel extends Label {
  labelStyle?: string;
}

export interface BPMNLabelStyle extends Style {
  Font?: Font | Font[];
}

export enum ParticipantBandKind {
  topInitiating = 'top_initiating',
  middleInitiating = 'middle_initiating',
  bottomInitiating = 'bottom_initiating',
  topNonInitiating = 'top_non_initiating',
  middleNonInitiating = 'middle_non_initiating',
  bottomNonInitiating = 'bottom_non_initiating',
}

export enum MessageVisibleKind {
  initiating = 'initiating',
  nonInitiating = 'non_initiating',
}
