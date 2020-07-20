import { TRootElement } from './rootElement';
import { TExpression } from '../expression';

// substitutionGroup="rootElement"
// abstract="true"
export type TEventDefinition = TRootElement;

// substitutionGroup="eventDefinition"
export interface TConditionalEventDefinition extends TEventDefinition {
  condition?: TExpression;
}

// substitutionGroup="eventDefinition"
export interface TLinkEventDefinition extends TEventDefinition {
  source?: string[];
  target?: string;
  name: string;
}

// substitutionGroup="eventDefinition"
export interface TMessageEventDefinition extends TEventDefinition {
  operationRef?: string;
  messageRef?: string;
}

//substitutionGroup="eventDefinition"
export type TCancelEventDefinition = TEventDefinition;

// substitutionGroup="eventDefinition"
export interface TCompensateEventDefinition extends TEventDefinition {
  waitForCompletion?: boolean;
  activityRef?: string;
}

// substitutionGroup="eventDefinition"
export interface TErrorEventDefinition extends TEventDefinition {
  errorRef?: string;
}

// substitutionGroup="eventDefinition"
export interface TEscalationEventDefinition extends TEventDefinition {
  escalationRef?: string;
}

// substitutionGroup="eventDefinition"
export interface TSignalEventDefinition extends TEventDefinition {
  signalRef?: string;
}

// substitutionGroup="eventDefinition"
export type TTerminateEventDefinition = TEventDefinition;

// substitutionGroup="eventDefinition"
export interface TTimerEventDefinition extends TEventDefinition {
  timeDate?: TExpression;
  timeDuration?: TExpression;
  timeCycle?: TExpression;
}
