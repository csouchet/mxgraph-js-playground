import { TExpression } from '../expression';
import { TFlowNode } from '../flowElement';

// abstract="true"
export interface TGateway extends TFlowNode {
  gatewayDirection?: tGatewayDirection; // default="Unspecified"
}

export interface TComplexGateway extends TGateway {
  activationCondition?: TExpression;
  default?: string;
}

export interface TEventBasedGateway extends TGateway {
  instantiate?: boolean; // default="false"
  eventGatewayType?: tEventBasedGatewayType; // default="Exclusive"
}

export interface TExclusiveGateway extends TGateway {
  default?: string;
}

export interface TInclusiveGateway extends TGateway {
  default?: string;
}

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
