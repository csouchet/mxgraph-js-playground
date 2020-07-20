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
  property?: TProperty[];
}
// ======================== Catch event ========================
// abstract="true"
export interface TCatchEvent extends TEvent {
  dataOutput?: TDataOutput[];
  dataOutputAssociation?: TDataOutputAssociation[];
  outputSet: TOutputSet;

  // eventDefinition
  eventDefinition?: TEventDefinition[];
  cancelEventDefinition?: TCancelEventDefinition[];
  compensateEventDefinition?: TCompensateEventDefinition[];
  conditionalEventDefinition?: TConditionalEventDefinition[];
  errorEventDefinition?: TErrorEventDefinition[];
  escalationEventDefinition?: TEscalationEventDefinition[];
  linkEventDefinition?: TLinkEventDefinition[];
  messageEventDefinition?: TMessageEventDefinition[];
  signalEventDefinition?: TSignalEventDefinition[];
  terminateEventDefinition?: TTerminateEventDefinition[];
  timerEventDefinition?: TTimerEventDefinition[];

  eventDefinitionRef?: string[];
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
  dataInput?: TDataInput[];
  dataInputAssociation?: TDataInputAssociation[];
  inputSet?: TInputSet;

  // eventDefinition
  eventDefinition?: TEventDefinition[];
  cancelEventDefinition?: TCancelEventDefinition[];
  compensateEventDefinition?: TCompensateEventDefinition[];
  conditionalEventDefinition?: TConditionalEventDefinition[];
  errorEventDefinition?: TErrorEventDefinition[];
  escalationEventDefinition?: TEscalationEventDefinition[];
  linkEventDefinition?: TLinkEventDefinition[];
  messageEventDefinition?: TMessageEventDefinition[];
  signalEventDefinition?: TSignalEventDefinition[];
  terminateEventDefinition?: TTerminateEventDefinition[];
  timerEventDefinition?: TTimerEventDefinition[];

  eventDefinitionRef?: string[];
}

export type TImplicitThrowEvent = TThrowEvent;

export type TIntermediateThrowEvent = TThrowEvent;

export type TEndEvent = TThrowEvent;
