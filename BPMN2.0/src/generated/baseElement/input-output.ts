import { TBaseElement } from './baseElement';
import { TDataInput, TDataOutput } from './data';

export interface TInputOutputBinding extends TBaseElement {
  operationRef: string;
  inputDataRef: string;
  outputDataRef: string;
}

export interface TInputOutputSpecification extends TBaseElement {
  dataInput?: TDataInput[];
  dataOutput?: TDataOutput[];
  inputSet: TInputSet[];
  outputSet: TOutputSet[];
}

export interface TInputSet extends TBaseElement {
  dataInputRefs?: string[];
  optionalInputRefs?: string[];
  whileExecutingInputRefs?: string[];
  outputSetRefs?: string[];
  name?: string;
}

export interface TOutputSet extends TBaseElement {
  dataOutputRefs?: string[];
  optionalOutputRefs?: string[];
  whileExecutingOutputRefs?: string[];
  inputSetRefs?: string[];
  name?: string;
}
