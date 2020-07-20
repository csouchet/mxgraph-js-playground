import { TExpression } from '../expression';
import { TFlowNode } from '../../Semantic';

// abstract="true"
export interface TGateway extends TFlowNode {
  gatewayDirection?: tGatewayDirection; // default="Unspecified"
}

// substitutionGroup="flowElement"
export interface TComplexGateway extends TGateway {
  activationCondition?: TExpression;
  default?: string;
}

// substitutionGroup="flowElement"
export interface TEventBasedGateway extends TGateway {
  instantiate?: boolean; // default="false"
  eventGatewayType?: tEventBasedGatewayType; // default="Exclusive"
}

// substitutionGroup="flowElement"
export interface TExclusiveGateway extends TGateway {
  default?: string;
}

// substitutionGroup="flowElement"
export interface TInclusiveGateway extends TGateway {
  default?: string;
}

// substitutionGroup="flowElement"
export type TParallelGateway = TGateway;

enum tEventBasedGatewayType {
  Exclusive = 'Exclusive',
  Parallel = 'Parallel',
}

enum tGatewayDirection {
  Unspecified = 'Unspecified',
  Converging = 'Converging',
  Diverging = 'Diverging',
  Mixed = 'Mixed',
}
