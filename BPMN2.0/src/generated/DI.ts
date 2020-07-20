import { Bounds, Point } from './DC';
import { BPMNEdge, BPMNLabel, BPMNShape } from './BPMNDI';
import { TExtension } from './Semantic';

// <xsd:any namespace="##other" minOccurs="0" maxOccurs="unbounded" />
export interface DiagramElement {
  id?: string;
  extension?: TExtension | TExtension[];
}

export interface Diagram {
  name?: string;
  documentation?: string;
  resolution?: number;
  id?: string;
}

export type Node = DiagramElement;

export interface Edge extends DiagramElement {
  waypoint: Point | Point[];
}

export type LabeledEdge = Edge;

export interface Shape extends Node {
  Bounds: Bounds;
}

export type LabeledShape = Shape;

export interface Label extends Node {
  Bounds?: Bounds;
}

export interface Plane extends Node {
  BPMNEdge?: BPMNEdge | BPMNEdge[];
  BPMNShape?: BPMNShape | BPMNShape[];
  BPMNLabel?: BPMNLabel | BPMNLabel[];
}

export interface Style {
  id: string;
}
