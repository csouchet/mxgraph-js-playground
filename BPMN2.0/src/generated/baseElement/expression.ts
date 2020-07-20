import { TBaseElementWithMixedContent } from './baseElement';

export type TExpression = TBaseElementWithMixedContent;

export interface TFormalExpression extends TExpression {
  language?: string;
  evaluatesToTypeRef?: string;
}
