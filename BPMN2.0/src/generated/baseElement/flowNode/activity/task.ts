import { TScript } from '../../../Semantic';
import { TActivity } from './activity';
import { tImplementation } from '../../rootElement/globalTask';
import { TRendering } from '../../baseElement';

// substitutionGroup="flowElement"
export type TTask = TActivity;

// substitutionGroup="flowElement"
export interface TBusinessRuleTask extends TTask {
  implementation?: tImplementation; // default="##unspecified"
}

// substitutionGroup="flowElement"
export type TManualTask = TTask;

// substitutionGroup="flowElement"
export interface TReceiveTask extends TTask {
  implementation?: tImplementation; // default="##WebService"
  instantiate?: boolean; // default="##false"
  messageRef?: string;
  operationRef?: string;
}

// substitutionGroup="flowElement"
export interface TSendTask extends TTask {
  implementation?: tImplementation; // default="##WebService"
  messageRef?: string;
  operationRef?: string;
}

// substitutionGroup="flowElement"
export interface TServiceTask extends TTask {
  implementation?: tImplementation; // default="##WebService"
  operationRef?: string;
}

// substitutionGroup="flowElement"
export interface TScriptTask extends TTask {
  script?: TScript;
  scriptFormat?: string;
}

// substitutionGroup="flowElement"
export interface TUserTask extends TTask {
  rendering?: TRendering[];
  implementation?: tImplementation; // default="##unspecified"
}
