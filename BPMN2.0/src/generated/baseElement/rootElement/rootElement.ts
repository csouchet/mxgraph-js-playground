import { TInputOutputBinding, TInputOutputSpecification } from '../input-output';
import { TAuditing, TBaseElement, TCategoryValue, TLaneSet, TMonitoring, TOperation, TProperty } from '../baseElement';
import { TResourceParameter, TResourceRole } from '../resource';
import { TCorrelationSubscription } from '../correlation';
import { TArtifact } from '../artifact';
import { TFlowElement } from '../flowElement';

// abstract="true"
export type TRootElement = TBaseElement;

export interface TCallableElement extends TRootElement {
  ioSpecification?: TInputOutputSpecification;
  ioBinding?: TInputOutputBinding[];
  supportedInterfaceRef?: string[];
  name?: string;
}

// substitutionGroup="rootElement"
export interface TCategory extends TRootElement {
  categoryValue?: TCategoryValue[];
  name?: string;
}

// substitutionGroup="rootElement"
export type TEndPoint = TRootElement;

// substitutionGroup="rootElement"
export interface TError extends TRootElement {
  name?: string;
  errorCode?: string;
  structureRef?: string;
}

// substitutionGroup="rootElement"
export interface TEscalation extends TRootElement {
  name?: string;
  escalationCode?: string;
  structureRef?: string;
}

// substitutionGroup="rootElement"
export interface TItemDefinition extends TRootElement {
  structureRef?: string;
  isCollection?: boolean; // default="false"
  itemKind?: tItemKind; // default="Information"
}

enum tItemKind {
  Information = 'Information',
  Physical = 'Physical',
}

// substitutionGroup="rootElement"
export interface TMessage extends TRootElement {
  name?: string;
  itemRef?: string;
}

// substitutionGroup="rootElement"
export interface TInterface extends TRootElement {
  operation: TOperation[];
  name: string;
  implementationRef?: string;
}

// substitutionGroup="rootElement"
export interface TPartnerEntity extends TRootElement {
  participantRef?: string[];
  name?: string;
}

// substitutionGroup="rootElement"
export interface TPartnerRole extends TRootElement {
  participantRef?: string[];
  name?: string;
}

// substitutionGroup="rootElement"
export interface TResource extends TRootElement {
  resourceParameter?: TResourceParameter[];
  name: string;
}

// substitutionGroup="rootElement"
export interface TSignal extends TRootElement {
  name?: string;
  structureRef?: string;
}

// substitutionGroup="rootElement"
export interface TProcess extends TCallableElement {
  auditing?: TAuditing;
  monitoring?: TMonitoring;
  property?: TProperty[];
  laneSet?: TLaneSet[];
  flowElement?: TFlowElement[];
  artifact?: TArtifact[];
  resourceRole?: TResourceRole[];
  correlationSubscription?: TCorrelationSubscription[];
  supports?: string[];
  processType?: tProcessType; // default="None"
  isClosed?: boolean; // default="false"
  isExecutable?: boolean;
  definitionalCollaborationRef?: string;
}

export enum tProcessType {
  None = 'None',
  Public = 'Public',
  Private = 'Private',
}
