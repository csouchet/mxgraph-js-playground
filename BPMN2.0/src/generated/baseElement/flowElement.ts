// abstract="true"
import { TExpression } from './expression';
import { TAuditing, TBaseElement, TMonitoring } from './baseElement';

export interface TFlowElement extends TBaseElement {
  auditing?: TAuditing;
  monitoring?: TMonitoring;
  categoryValueRef?: string[];
  name?: string;
}

// abstract="true"
export interface TFlowNode extends TFlowElement {
  incoming?: string[];
  outgoing?: string[];
}

// substitutionGroup="flowElement"
export interface TSequenceFlow extends TFlowElement {
  conditionExpression?: TExpression;
  sourceRef: string;
  targetRef: string;
  isImmediate?: boolean;
}
