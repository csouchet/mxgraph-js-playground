import { TBaseElement } from './baseElement';
import { TExpression } from './expression';

export interface TResourceAssignmentExpression extends TBaseElement {
  expression: TExpression;
}

export interface TResourceParameter extends TBaseElement {
  name?: string;
  type?: string;
  isRequired?: boolean;
}

export interface TResourceParameterBinding extends TBaseElement {
  expression: TExpression;
  parameterRef: string;
}

export interface TResourceRole extends TBaseElement {
  resourceRef?: string;
  resourceParameterBinding?: TResourceParameterBinding[];
  resourceAssignmentExpression?: TResourceAssignmentExpression;
  name?: string;
}

// ======================== Performer ========================
// substitutionGroup="resourceRole"
export type TPerformer = TResourceRole;

// substitutionGroup="performer"
export type THumanPerformer = TPerformer;

// substitutionGroup="performer"
export type TPotentialOwner = THumanPerformer;
