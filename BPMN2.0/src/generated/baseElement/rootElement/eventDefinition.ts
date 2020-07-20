import { TRootElement } from './rootElement';
import { TExpression } from '../expression';

// abstract="true"
export type TEventDefinition = TRootElement;

export interface TConditionalEventDefinition extends TEventDefinition {
  condition?: TExpression;
}

export interface TLinkEventDefinition extends TEventDefinition {
  source?: string[];
  target?: string;
  name: string;
}

export interface TMessageEventDefinition extends TEventDefinition {
  operationRef?: string;
  messageRef?: string;
}

export type TCancelEventDefinition = TEventDefinition;

export interface TCompensateEventDefinition extends TEventDefinition {
  waitForCompletion?: boolean;
  activityRef?: string;
}

export interface TErrorEventDefinition extends TEventDefinition {
  errorRef?: string;
}

export interface TEscalationEventDefinition extends TEventDefinition {
  escalationRef?: string;
}

export interface TSignalEventDefinition extends TEventDefinition {
  signalRef?: string;
}

export type TTerminateEventDefinition = TEventDefinition;

export interface TTimerEventDefinition extends TEventDefinition {
  timeDate?: TExpression;
  timeDuration?: TExpression;
  timeCycle?: TExpression;
}
