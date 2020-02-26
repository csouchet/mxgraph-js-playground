/***********
generated template classes for ./src/BPMN20.xsd 2/26/2020, 11:42:11 AM
***********/
import { Extension } from './DI';
import { BPMNDiagram } from './BPMNDI';
import { Semantic, TRelationship, TRootElement } from './Semantic';

export class BPMN20 extends Semantic {
  public tDefinitions: TDefinitions;
  public tImport: TImport;

  public constructor(props?: BPMN20) {
    super();
    this['@class'] = '.BPMN20';

    (<any>Object).assign(this, <any>props);
  }
}

export class TDefinitions {
  public import?: TImport[];
  public extension?: Extension[];
  public rootElement?: TRootElement[];
  public BPMNDiagram?: BPMNDiagram[];
  public relationship?: TRelationship[];

  public constructor(props?: TDefinitions) {
    this['@class'] = '.TDefinitions';

    (<any>Object).assign(this, <any>props);
  }
}

export class TImport {
  public namespace: string;
  public location: string;
  public importType: string;

  public constructor(props?: TImport) {
    this['@class'] = '.TImport';

    (<any>Object).assign(this, <any>props);
  }
}
