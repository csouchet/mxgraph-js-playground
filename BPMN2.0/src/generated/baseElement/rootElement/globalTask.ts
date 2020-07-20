import { TCallableElement } from './rootElement';
import { TResourceRole } from '../resource';
import { TScript } from '../../Semantic';
import { TRendering } from '../baseElement';

// substitutionGroup="rootElement"
export interface TGlobalTask extends TCallableElement {
  resourceRole?: TResourceRole[];
}

// substitutionGroup="rootElement"
export interface TGlobalBusinessRuleTask extends TGlobalTask {
  implementation?: tImplementation; // default="##unspecified"
}

// substitutionGroup="rootElement"
export type TGlobalManualTask = TGlobalTask;

// substitutionGroup="rootElement"
export interface TGlobalScriptTask extends TGlobalTask {
  script?: TScript;
  scriptLanguage?: string;
}

// substitutionGroup="rootElement"
export interface TGlobalUserTask extends TGlobalTask {
  rendering?: TRendering[];
  implementation?: tImplementation; // default="##unspecified"
}

export enum tImplementation {
  Unspecified = '##unspecified',
  WebService = '##WebService',
}
