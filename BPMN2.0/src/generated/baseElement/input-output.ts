import { TBaseElement } from './baseElement';
import { TDataInput, TDataOutput } from './data';

export interface TInputOutputBinding extends TBaseElement {
  operationRef: string;
  inputDataRef: string;
  outputDataRef: string;
}

export interface TInputOutputSpecification extends TBaseElement {
  dataInput?: TDataInput | TDataInput[];
  dataOutput?: TDataOutput | TDataOutput[];
  inputSet: TInputSet | TInputSet[];
  outputSet: TOutputSet | TOutputSet[];
}

export interface TInputSet extends TBaseElement {
  dataInputRefs?: string | string[];
  optionalInputRefs?: string | string[];
  whileExecutingInputRefs?: string | string[];
  outputSetRefs?: string | string[];
  name?: string;
}

export interface TOutputSet extends TBaseElement {
  dataOutputRefs?: string | string[];
  optionalOutputRefs?: string | string[];
  whileExecutingOutputRefs?: string | string[];
  inputSetRefs?: string | string[];
  name?: string;
}
