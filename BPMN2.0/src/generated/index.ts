/***********
generated template classes for ./src/BPMN20.xsd 2/26/2020, 11:42:11 AM
***********/





import * as xsd from "";

export class BPMN20 {
    public tDefinitions: TDefinitions;
    public tImport: TImport;

    public constructor(props?: BPMN20) {
        this["@class"] = ".BPMN20";

        (<any>Object).assign(this, <any> props);
    }
}

export class TDefinitions {
    public import?: Import[];
    public extension?: Extension[];
    public rootElement?: RootElement[];
    public BPMNDiagram?: bpmndi.BPMNDiagram[];
    public relationship?: Relationship[];

    public constructor(props?: TDefinitions) {
        this["@class"] = ".TDefinitions";

        (<any>Object).assign(this, <any> props);
    }
}

export class TImport {
    public namespace: xsd.anyURI;
    public location: string;
    public importType: xsd.anyURI;

    public constructor(props?: TImport) {
        this["@class"] = ".TImport";

        (<any>Object).assign(this, <any> props);
    }
}
