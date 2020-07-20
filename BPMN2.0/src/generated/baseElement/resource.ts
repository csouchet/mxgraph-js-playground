import { TBaseElement } from './baseElement';
import { TExpression, TFormalExpression } from './expression';

export interface TResourceAssignmentExpression extends TBaseElement {
  // expression
  expression: TExpression;
  formalExpression: TFormalExpression;
}

export interface TResourceParameter extends TBaseElement {
  name?: string;
  type?: string;
  isRequired?: boolean;
}

export interface TResourceParameterBinding extends TBaseElement {
  // expression
  expression: TExpression;
  formalExpression: TFormalExpression;

  parameterRef: string;
}

export interface TResourceRole extends TBaseElement {
  resourceRef?: string;
  resourceParameterBinding?: TResourceParameterBinding | TResourceParameterBinding[];
  resourceAssignmentExpression?: TResourceAssignmentExpression | TResourceAssignmentExpression;
  name?: string;
}

// ======================== Performer ========================
export type TPerformer = TResourceRole;

export type THumanPerformer = TPerformer;

export type TPotentialOwner = THumanPerformer;
