import { TBaseElementWithMixedContent } from './baseElement';

export type TExpression = TBaseElementWithMixedContent;

// substitutionGroup="expression"
export interface TFormalExpression extends TExpression {
  language?: string;
  evaluatesToTypeRef?: string;
}
