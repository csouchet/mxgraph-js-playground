import TImport from './TImport';

export default class TDefinitions {
    constructor(data) {
        if (!data) return;

        this.bpmndi:BPMNDiagram = data['bpmndi:BPMNDiagram'];
        this.exporter = data.exporter; // string
        this.exporterVersion = data.exporterVersion; // string
        this.expressionLanguage = data.expressionLanguage;
        this.extension = data.extension;
        this.id = data.id;
        this.import = data['import'].map(function(value){ return new TImport(data.value); }); // array // import
        this.name = data.name; // string
        this.relationship = data.relationship;
        this.rootElement = data.rootElement;
        this.targetNamespace = data.targetNamespace;
        this.typeLanguage = data.typeLanguage;
    }

    toString() {
        return JSON.stringify(this, null, 4);
    }
}