import { BPMNDiagram } from './BPMNDI';
import { TRelationship } from './baseElement/baseElement';
import { TExtension } from './Semantic';
import { TGlobalBusinessRuleTask, TGlobalManualTask, TGlobalScriptTask, TGlobalTask, TGlobalUserTask } from './baseElement/rootElement/globalTask';
import { TCorrelationProperty } from './baseElement/correlation';
import { TDataStore } from './baseElement/data';
import {
  TCategory,
  TEndPoint,
  TError,
  TEscalation,
  TInterface,
  TItemDefinition,
  TMessage,
  TPartnerEntity,
  TPartnerRole,
  TProcess,
  TResource,
  TRootElement,
  TSignal,
} from './baseElement/rootElement/rootElement';
import { TChoreography, TCollaboration, TGlobalChoreographyTask, TGlobalConversation } from './baseElement/rootElement/collaboration';
import {
  TCancelEventDefinition,
  TCompensateEventDefinition,
  TConditionalEventDefinition,
  TErrorEventDefinition,
  TEscalationEventDefinition,
  TEventDefinition,
  TLinkEventDefinition,
  TMessageEventDefinition,
  TSignalEventDefinition,
  TTerminateEventDefinition,
  TTimerEventDefinition,
} from './baseElement/rootElement/eventDefinition';

export interface Model {
  definitions?: TDefinitions[];
  import?: TImport[];
}

export interface TDefinitions {
  import?: TImport[];
  extension?: TExtension[];

  // rootElement
  category?: TCategory[];
  choreography?: TChoreography[];
  collaboration?: TCollaboration[];
  correlationProperty?: TCorrelationProperty[];
  dataStore?: TDataStore[];
  endPoint?: TEndPoint[];
  error?: TError[];
  escalation?: TEscalation[];
  globalBusinessRuleTask?: TGlobalBusinessRuleTask[];
  globalChoreographyTask?: TGlobalChoreographyTask[];
  globalConversation?: TGlobalConversation[];
  globalManualTask?: TGlobalManualTask[];
  globalScriptTask?: TGlobalScriptTask[];
  globalTask?: TGlobalTask[];
  globalUserTask?: TGlobalUserTask[];
  interface?: TInterface[];
  itemDefinition?: TItemDefinition[];
  message?: TMessage[];
  partnerEntity?: TPartnerEntity[];
  partnerRole?: TPartnerRole[];
  process?: TProcess[];
  resource?: TResource[];
  rootElement?: TRootElement[];
  signal?: TSignal[];

  // eventDefinition
  eventDefinition?: TEventDefinition[];
  cancelEventDefinition?: TCancelEventDefinition[];
  compensateEventDefinition?: TCompensateEventDefinition[];
  conditionalEventDefinition?: TConditionalEventDefinition[];
  errorEventDefinition?: TErrorEventDefinition[];
  escalationEventDefinition?: TEscalationEventDefinition[];
  linkEventDefinition?: TLinkEventDefinition[];
  messageEventDefinition?: TMessageEventDefinition[];
  signalEventDefinition?: TSignalEventDefinition[];
  terminateEventDefinition?: TTerminateEventDefinition[];
  timerEventDefinition?: TTimerEventDefinition[];

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
