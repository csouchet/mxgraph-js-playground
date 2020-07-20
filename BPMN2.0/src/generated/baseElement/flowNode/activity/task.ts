import { TScript } from '../../../Semantic';
import { TActivity } from './activity';
import { tImplementation } from '../../rootElement/globalTask';
import { TRendering } from '../../baseElement';

export type TTask = TActivity;

export interface TBusinessRuleTask extends TTask {
  implementation?: tImplementation; // default="##unspecified"
}

export type TManualTask = TTask;

export interface TReceiveTask extends TTask {
  implementation?: tImplementation; // default="##WebService"
  instantiate?: boolean; // default="##false"
  messageRef?: string;
  operationRef?: string;
}

export interface TSendTask extends TTask {
  implementation?: tImplementation; // default="##WebService"
  messageRef?: string;
  operationRef?: string;
}

export interface TServiceTask extends TTask {
  implementation?: tImplementation; // default="##WebService"
  operationRef?: string;
}

export interface TScriptTask extends TTask {
  script?: TScript;
  scriptFormat?: string;
}

export interface TUserTask extends TTask {
  rendering?: TRendering[];
  implementation?: tImplementation; // default="##unspecified"
}
