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
  definitions?: TDefinitions | TDefinitions[];
  import?: TImport | TImport[];
}

// <xsd:anyAttribute namespace="##other" processContents="lax"/>
export interface TDefinitions {
  import?: TImport | TImport[];
  extension?: TExtension | TExtension[];

  // rootElement
  category?: TCategory | TCategory[];
  choreography?: TChoreography | TChoreography[];
  collaboration?: TCollaboration | TCollaboration[];
  correlationProperty?: TCorrelationProperty | TCorrelationProperty[];
  dataStore?: TDataStore | TDataStore[];
  endPoint?: TEndPoint | TEndPoint[];
  error?: TError | TError[];
  escalation?: TEscalation | TEscalation[];
  globalBusinessRuleTask?: TGlobalBusinessRuleTask | TGlobalBusinessRuleTask[];
  globalChoreographyTask?: TGlobalChoreographyTask | TGlobalChoreographyTask[];
  globalConversation?: TGlobalConversation | TGlobalConversation[];
  globalManualTask?: TGlobalManualTask | TGlobalManualTask[];
  globalScriptTask?: TGlobalScriptTask | TGlobalScriptTask[];
  globalTask?: TGlobalTask | TGlobalTask[];
  globalUserTask?: TGlobalUserTask | TGlobalUserTask[];
  interface?: TInterface | TInterface[];
  itemDefinition?: TItemDefinition | TItemDefinition[];
  message?: TMessage | TMessage[];
  partnerEntity?: TPartnerEntity | TPartnerEntity[];
  partnerRole?: TPartnerRole | TPartnerRole[];
  process?: TProcess | TProcess[];
  resource?: TResource | TResource[];
  rootElement?: TRootElement | TRootElement[];
  signal?: TSignal | TSignal[];

  // eventDefinition
  eventDefinition?: TEventDefinition | TEventDefinition[];
  cancelEventDefinition?: TCancelEventDefinition | TCancelEventDefinition[];
  compensateEventDefinition?: TCompensateEventDefinition | TCompensateEventDefinition[];
  conditionalEventDefinition?: TConditionalEventDefinition | TConditionalEventDefinition[];
  errorEventDefinition?: TErrorEventDefinition | TErrorEventDefinition[];
  escalationEventDefinition?: TEscalationEventDefinition | TEscalationEventDefinition[];
  linkEventDefinition?: TLinkEventDefinition | TLinkEventDefinition[];
  messageEventDefinition?: TMessageEventDefinition | TMessageEventDefinition[];
  signalEventDefinition?: TSignalEventDefinition | TSignalEventDefinition[];
  terminateEventDefinition?: TTerminateEventDefinition | TTerminateEventDefinition[];
  timerEventDefinition?: TTimerEventDefinition | TTimerEventDefinition[];

  BPMNDiagram?: BPMNDiagram | BPMNDiagram[];
  relationship?: TRelationship | TRelationship[];
  id?: string;
  name?: string;
  targetNamespace: string;
  expressionLanguage?: string; // default="http://www.w3.org/1999/XPath"
  typeLanguage?: string; // default="http://www.w3.org/2001/XMLSchema"
  exporter?: string;
  exporterVersion?: string;
}

export interface TImport {
  namespace: string;
  location: string;
  importType: string;
}
