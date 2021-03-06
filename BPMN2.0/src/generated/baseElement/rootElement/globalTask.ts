import { TCallableElement } from './rootElement';
import { THumanPerformer, TPerformer, TPotentialOwner, TResourceRole } from '../resource';
import { TScript } from '../../Semantic';
import { TRendering } from '../baseElement';

export interface TGlobalTask extends TCallableElement {
  // resourceRole
  resourceRole?: TResourceRole | TResourceRole[];
  performer?: TPerformer | TPerformer[];
  humanPerformer?: THumanPerformer | THumanPerformer[];
  potentialOwner?: TPotentialOwner | TPotentialOwner[];
}

export interface TGlobalBusinessRuleTask extends TGlobalTask {
  implementation?: tImplementation; // default="##unspecified"
}

export type TGlobalManualTask = TGlobalTask;

export interface TGlobalScriptTask extends TGlobalTask {
  script?: TScript;
  scriptLanguage?: string;
}

export interface TGlobalUserTask extends TGlobalTask {
  rendering?: TRendering | TRendering[];
  implementation?: tImplementation; // default="##unspecified"
}

export enum tImplementation {
  Unspecified = '##unspecified',
  WebService = '##WebService',
}
