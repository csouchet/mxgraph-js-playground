import { BPMNDiagram } from './BPMNDI';
import { TExtension, TRelationship, TRootElement } from './Semantic';

export interface Model {
  definitions?: TDefinitions[];
  import?: TImport[];
}

export interface TDefinitions {
  import?: TImport[];
  extension?: TExtension[];

  // TODO : To replace by implementations
  rootElement?: TRootElement[];

  BPMNDiagram?: BPMNDiagram[];
  relationship?: TRelationship[];
  id: string;
  name: string;
  targetNamespace: string;
  expressionLanguage: string;
  typeLanguage: string;
  exporter: string;
  exporterVersion: string;
}

export interface TImport {
  namespace: string;
  location: string;
  importType: string;
}
