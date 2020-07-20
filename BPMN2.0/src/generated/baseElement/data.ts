import { TAssignment, TBaseElement } from './baseElement';
import { TRootElement } from './rootElement/rootElement';
import { TFormalExpression } from './expression';
import { TFlowElement } from './flowElement';

export type TDataInputAssociation = TDataAssociation;

export type TDataOutputAssociation = TDataAssociation;

export interface TDataState {
  name?: string;
}

export interface TDataObject extends TFlowElement {
  dataState?: TDataState;
  itemSubjectRef?: string;
  isCollection?: boolean; // default="false"
}

export interface TDataObjectReference extends TFlowElement {
  dataState?: TDataState;
  itemSubjectRef?: string;
  dataObjectRef?: string;
}

export interface TDataStoreReference extends TFlowElement {
  dataState?: TDataState;
  itemSubjectRef?: string;
  dataStoreRef?: string;
}

export interface TDataAssociation extends TBaseElement {
  assignment?: TAssignment[];
  sourceRef?: string[];
  targetRef: string;
  transformation?: TFormalExpression;
}

export interface TDataInput extends TBaseElement {
  dataState?: TDataState;
  name?: string;
  itemSubjectRef?: string;
  isCollection?: boolean; // default="false"
}

export interface TDataOutput extends TBaseElement {
  dataState?: TDataState;
  name?: string;
  itemSubjectRef?: string;
  isCollection?: boolean; // default="false"
}

export interface TDataStore extends TRootElement {
  dataState?: TDataState;
  name?: string;
  capacity?: number;
  isUnlimited?: boolean; // default="true"
  itemSubjectRef?: string;
}
