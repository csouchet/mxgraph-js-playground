import { TProperty } from '../baseElement';
import { TDataInput, TDataInputAssociation, TDataOutput, TDataOutputAssociation } from '../data';
import { TInputSet, TOutputSet } from '../input-output';
import {
  TCancelEventDefinition,
  TCompensateEventDefinition,
  TConditionalEventDefinition,
  TErrorEventDefinition,
  TEscalationEventDefinition,
  TEventDefinition,
  TLinkEventDefinition,
  TMessageEventDefinition,
  TSignalEventDefinition,
  TTerminateEventDefinition,
  TTimerEventDefinition,
} from '../rootElement/eventDefinition';
import { TFlowNode } from '../flowElement';

// abstract="true"
export interface TEvent extends TFlowNode {
  property?: TProperty | TProperty[];
}
// ======================== Catch event ========================
// abstract="true"
export interface TCatchEvent extends TEvent {
  dataOutput?: TDataOutput | TDataOutput[];
  dataOutputAssociation?: TDataOutputAssociation | TDataOutputAssociation[];
  outputSet?: TOutputSet;

  // eventDefinition
  eventDefinition?: TEventDefinition | TEventDefinition[];
  cancelEventDefinition?: TCancelEventDefinition | TCancelEventDefinition[];
  compensateEventDefinition?: TCompensateEventDefinition | TCompensateEventDefinition[];
  conditionalEventDefinition?: TConditionalEventDefinition | TConditionalEventDefinition[];
  errorEventDefinition?: TErrorEventDefinition | TErrorEventDefinition[];
  escalationEventDefinition?: TEscalationEventDefinition | TEscalationEventDefinition[];
  linkEventDefinition?: TLinkEventDefinition | TLinkEventDefinition[];
  messageEventDefinition?: TMessageEventDefinition | TMessageEventDefinition[];
  signalEventDefinition?: TSignalEventDefinition | TSignalEventDefinition[];
  terminateEventDefinition?: TTerminateEventDefinition | TTerminateEventDefinition[];
  timerEventDefinition?: TTimerEventDefinition | TTimerEventDefinition[];

  eventDefinitionRef?: string | string[];
  parallelMultiple?: boolean; // default="false"
}

export type TIntermediateCatchEvent = TCatchEvent;

export interface TBoundaryEvent extends TCatchEvent {
  cancelActivity?: boolean; // default="true"
  attachedToRef: string;
}

export interface TStartEvent extends TCatchEvent {
  isInterrupting?: boolean; // default="true"
}

// ======================== Throw event ========================
// abstract="true"
export interface TThrowEvent extends TEvent {
  dataInput?: TDataInput | TDataInput[];
  dataInputAssociation?: TDataInputAssociation | TDataInputAssociation[];
  inputSet?: TInputSet;

  // eventDefinition
  eventDefinition?: TEventDefinition | TEventDefinition[];
  cancelEventDefinition?: TCancelEventDefinition | TCancelEventDefinition[];
  compensateEventDefinition?: TCompensateEventDefinition | TCompensateEventDefinition[];
  conditionalEventDefinition?: TConditionalEventDefinition | TConditionalEventDefinition[];
  errorEventDefinition?: TErrorEventDefinition | TErrorEventDefinition[];
  escalationEventDefinition?: TEscalationEventDefinition | TEscalationEventDefinition[];
  linkEventDefinition?: TLinkEventDefinition | TLinkEventDefinition[];
  messageEventDefinition?: TMessageEventDefinition | TMessageEventDefinition[];
  signalEventDefinition?: TSignalEventDefinition | TSignalEventDefinition[];
  terminateEventDefinition?: TTerminateEventDefinition | TTerminateEventDefinition[];
  timerEventDefinition?: TTimerEventDefinition | TTimerEventDefinition[];

  eventDefinitionRef?: string | string[];
}

export type TImplicitThrowEvent = TThrowEvent;

export type TIntermediateThrowEvent = TThrowEvent;

export type TEndEvent = TThrowEvent;
