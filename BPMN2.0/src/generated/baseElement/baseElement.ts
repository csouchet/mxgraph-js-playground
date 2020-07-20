import { TImplicitThrowEvent } from './flowNode/event';
import { TDocumentation, TExtensionElements } from '../Semantic';
import { TDataState } from './data';
import { TExpression, TFormalExpression } from './expression';

// abstract="true"
// <xsd:anyAttribute namespace="##other" processContents="lax"/>
export interface TBaseElement {
  documentation?: TDocumentation[];
  extensionElements?: TExtensionElements;
  id?: string;
}

// abstract="true" mixed="true"
// <xsd:anyAttribute namespace="##other" processContents="lax"/>
export interface TBaseElementWithMixedContent {
  documentation?: TDocumentation[];
  extensionElements?: TExtensionElements;
  id?: string;
}

export interface TCategoryValue extends TBaseElement {
  value?: string;
}

export interface TAssignment extends TBaseElement {
  from: TExpression;
  to: TExpression;
}

export type TAuditing = TBaseElement;

export interface TMessageFlow extends TBaseElement {
  name?: string;
  sourceRef: string;
  targetRef: string;
  messageRef?: string;
}

export interface TMessageFlowAssociation extends TBaseElement {
  innerMessageFlowRef: string;
  outerMessageFlowRef: string;
}

export type TMonitoring = TBaseElement;

export interface TProperty extends TBaseElement {
  dataState?: TDataState;
  name?: string;
  itemSubjectRef?: string;
}

export interface TRelationship extends TBaseElement {
  source: string[];
  target: string[];
  type: string;
  direction?: tRelationshipDirection;
}

enum tRelationshipDirection {
  None = 'None',
  Forward = 'Forward',
  Backward = 'Backward',
  Both = 'Both',
}

export interface TComplexBehaviorDefinition extends TBaseElement {
  condition: TFormalExpression;
  event?: TImplicitThrowEvent;
}

export interface TLane extends TBaseElement {
  partitionElement?: TBaseElement;
  flowNodeRef?: string[];
  childLaneSet?: TLaneSet;
  name?: string;
  partitionElementRef?: string;
}

export interface TLaneSet extends TBaseElement {
  lane?: TLane[];
  name?: string;
}

export interface TOperation extends TBaseElement {
  inMessageRef: string;
  outMessageRef?: string;
  errorRef?: string[];
  name: string;
  implementationRef?: string;
}

export type TRendering = TBaseElement;
