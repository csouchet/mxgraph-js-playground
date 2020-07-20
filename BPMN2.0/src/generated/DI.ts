import { Bounds, Point } from './DC';
import { BPMNEdge, BPMNLabel, BPMNShape } from './BPMNDI';

export interface DiagramElement {
  id: string;
  extension?: Extension[];
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Extension {}

export interface Diagram {
  name: string;
  documentation: string;
  resolution: number;
  id: string;
}

export type Node = DiagramElement;

export interface Edge extends DiagramElement {
  waypoint: Point[];
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
  BPMNEdge?: BPMNEdge[];
  BPMNShape?: BPMNShape[];
  BPMNLabel?: BPMNLabel[];
}

export interface Style {
  id: string;
}
