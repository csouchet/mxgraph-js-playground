import { TBaseElement } from './baseElement';
import { TRootElement } from './rootElement/rootElement';
import { TFormalExpression } from './expression';

export interface TCorrelationProperty extends TRootElement {
  correlationPropertyRetrievalExpression: TCorrelationPropertyRetrievalExpression[];
  name?: string;
  type?: string;
}

export interface TCorrelationKey extends TBaseElement {
  correlationPropertyRef?: string[];
  name?: string;
}

export interface TCorrelationPropertyBinding extends TBaseElement {
  dataPath: TFormalExpression;
  correlationPropertyRef: string;
}

export interface TCorrelationPropertyRetrievalExpression extends TBaseElement {
  messagePath: TFormalExpression;
  messageRef: string;
}

export interface TCorrelationSubscription extends TBaseElement {
  correlationPropertyBinding?: TCorrelationPropertyBinding[];
  correlationKeyRef: string;
}
