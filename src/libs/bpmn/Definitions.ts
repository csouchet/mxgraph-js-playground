import { JsonConvert, JsonConverter, JsonCustomConvert, JsonObject, JsonProperty, OperationMode, ValueCheckingMode } from 'json2typescript';
import Font from './Font';
import Edge from './edge/Edge';
import Shape from './shape/Shape';
import EdgeBpmnElement from './edge/EdgeBpmnElement';
import ShapeBpmnElement from './shape/ShapeBpmnElement';
import { ShapeBpmnElementKind } from './shape/ShapeBpmnElementKind';

const jsonConvert: JsonConvert = new JsonConvert();
jsonConvert.operationMode = OperationMode.ENABLE;
jsonConvert.ignorePrimitiveChecks = false; // don't allow assigning number to string etc.
jsonConvert.valueCheckingMode = ValueCheckingMode.DISALLOW_NULL; // never allow null

let convertedFonts: Font[] = [];
const convertedEdgeBpmnElements: EdgeBpmnElement[] = [];
const convertedShapeBpmnElements: ShapeBpmnElement[] = [];

export function findFont(id: string): Font {
  return convertedFonts.find(i => i.getId() === id);
}

export function findShapeBpmnElement(id: string): ShapeBpmnElement {
  return convertedShapeBpmnElements.find(i => i.id === id);
}

export function findEdgeBpmnElement(id: string): EdgeBpmnElement {
  return convertedEdgeBpmnElements.find(i => i.id === id);
}

@JsonConverter
export class ShapeConverter implements JsonCustomConvert<Shape[]> {
  // BPMNDiagram: Object { name: "LoanManagement",
  // BPMNPlane: { BPMNEdge: [ {…} ], BPMNShape: [ {…} ], bpmnElement: "_RLk98HH_Eei9Z4IY4QeFuA", id: "plane__RLk98HH_Eei9Z4IY4QeFuA" },
  // BPMNLabelStyle: […] }

  deserialize(data: any): Shape[] {
    try {
      const shapes = data.BPMNPlane.BPMNShape;
      if (shapes === undefined || shapes === null) {
        return undefined;
      }
      return jsonConvert.deserializeArray(shapes, Shape);
    } catch (e) {
      console.log(<Error>e);
    }
  }

  serialize(data: Shape[]): any {
    console.log('Not implemented !!');
  }
}

@JsonConverter
export class EdgeConverter implements JsonCustomConvert<Edge[]> {
  // BPMNDiagram: Object { name: "LoanManagement",
  // BPMNPlane: { BPMNEdge: [ {…} ], BPMNShape: [ {…} ], bpmnElement: "_RLk98HH_Eei9Z4IY4QeFuA", id: "plane__RLk98HH_Eei9Z4IY4QeFuA" },
  // BPMNLabelStyle: […] }

  deserialize(data: any): Edge[] {
    const edges = data.BPMNPlane.BPMNEdge;
    if (edges === undefined || edges === null || edges === '') {
      return undefined;
    }
    return jsonConvert.deserializeArray(edges, Edge);
  }

  serialize(data: Edge[]): any {
    console.log('Not implemented !!');
  }
}

@JsonConverter
export class FontConverter implements JsonCustomConvert<Font[]> {
  // BPMNDiagram: Object { name: "LoanManagement",
  // BPMNPlane: { },
  // BPMNLabelStyle: [{ Font: { isBold: false, isItalic: false, isStrikeThrough: false, isUnderline: false, name: 'Ubuntu', size: 9 }, id: '_WrSenhszEeqkhYLXtt1BFw' }] }

  deserialize(data: any): Font[] {
    const styles = data.BPMNLabelStyle;
    if (styles === undefined || styles === null || styles === '') {
      return undefined;
    }

    convertedFonts = styles.map(value => {
      const font = value.Font;
      if (font !== undefined && font !== null && font !== '') {
        return new Font(value.id, font.name, font.size, font.isBold, font.isItalic, font.isUnderline, font.isStrikeThrough);
      }
    });
    return convertedFonts;
  }

  serialize(data: Font[]): any {
    console.log('Not implemented !!');
  }
}

@JsonConverter
export class EdgeBpmnElementConverter implements JsonCustomConvert<EdgeBpmnElement[]> {
  // process: (6) […]
  // 0:
  // boundaryEvent: {…}
  // dataObject: Array(3) [ {…}, {…}, {…} ]
  // endEvent: Array(3) [ {…}, {…}, {…} ]
  // exclusiveGateway: Array(5) [ {…}, {…}, {…}, … ]
  // id: "_RLk98XH_Eei9Z4IY4QeFuA"
  // intermediateCatchEvent: Object { id: "_RLk_hHH_Eei9Z4IY4QeFuA", name: "Credit History Received", eventDefinitionRef: "creditHistory" }
  // ioSpecification: Object { id: "_WrR3ghszEeqkhYLXtt1BFw", dataInput: (3) […], inputSet: (3) […], … }
  // laneSet: Object { id: "RequestLoan_laneSet", lane: (3) […] }
  // name: "RequestLoan"
  // sequenceFlow: Array(23) [ {…}, {…}, {…}, … ]
  // serviceTask: Array(5) [ {…}, {…}, {…}, … ]
  // startEvent: Object { id: "_RLk983H_Eei9Z4IY4QeFuA", name: "Request a Loan" }
  // userTask: Array(6) [ {…}, {…}, {…}, … ]
  // 1: Object { id: "_RLlAI3H_Eei9Z4IY4QeFuA", name: "Notify Credit History Available", ioSpecification: {…}, … }

  deserialize(data: any): EdgeBpmnElement[] {
    try {
      function parseProcess(process) {
        function buildEdgeBpmnElement(sequenceFlow) {
          const sourceRef = sequenceFlow.sourceRef;
          let source;
          if (sourceRef !== undefined && sourceRef !== null && sourceRef !== '') {
            source = findShapeBpmnElement(sourceRef);
          }

          const targetRef = sequenceFlow.targetRef;
          let target;
          if (targetRef !== undefined && targetRef !== null && targetRef !== '') {
            target = findShapeBpmnElement(targetRef);
          }

          /*        const conditionExpression = sequenceFlow.conditionExpression;
        let condition;
        if (conditionExpression !== undefined && conditionExpression !== null && conditionExpression !== '') {
          condition = findShapeBpmnElement(conditionExpression);
        }*/

          const bpmnName = sequenceFlow.name;
          let name;
          if (bpmnName !== undefined && bpmnName !== null && bpmnName !== '') {
            name = bpmnName;
          }
          convertedEdgeBpmnElements.push(new EdgeBpmnElement(sequenceFlow.id, name, source, target));
        }

        const sequenceFlows = process.sequenceFlow;
        if (sequenceFlows !== undefined && sequenceFlows !== null) {
          if (Array.isArray(sequenceFlows)) {
            sequenceFlows.map(sequenceFlow => {
              buildEdgeBpmnElement(sequenceFlow);
            });
          } else {
            buildEdgeBpmnElement(sequenceFlows);
          }
        }
      }

      if (Array.isArray(data)) {
        data.map(process => parseProcess(process));
      } else {
        parseProcess(data);
      }
      return convertedEdgeBpmnElements;
    } catch (e) {
      console.log(<Error>e);
    }
  }

  serialize(data: EdgeBpmnElement[]): any {
    console.log('Not implemented !!');
  }
}

@JsonConverter
export class ShapeBpmnElementConverter implements JsonCustomConvert<ShapeBpmnElement[]> {
  // process: (6) […]
  // 0:
  // boundaryEvent: {…}
  // dataObject: Array(3) [ {…}, {…}, {…} ]
  // endEvent: Array(3) [ {…}, {…}, {…} ]
  // exclusiveGateway: Array(5) [ {…}, {…}, {…}, … ]
  // id: "_RLk98XH_Eei9Z4IY4QeFuA"
  // intermediateCatchEvent: Object { id: "_RLk_hHH_Eei9Z4IY4QeFuA", name: "Credit History Received", eventDefinitionRef: "creditHistory" }
  // ioSpecification: Object { id: "_WrR3ghszEeqkhYLXtt1BFw", dataInput: (3) […], inputSet: (3) […], … }
  // laneSet: Object { id: "RequestLoan_laneSet", lane: (3) […] }
  // name: "RequestLoan"
  // sequenceFlow: Array(23) [ {…}, {…}, {…}, … ]
  // serviceTask: Array(5) [ {…}, {…}, {…}, … ]
  // startEvent: Object { id: "_RLk983H_Eei9Z4IY4QeFuA", name: "Request a Loan" }
  // userTask: Array(6) [ {…}, {…}, {…}, … ]
  // 1: Object { id: "_RLlAI3H_Eei9Z4IY4QeFuA", name: "Notify Credit History Available", ioSpecification: {…}, … }

  deserialize(data: any): ShapeBpmnElement[] {
    function parseProcess(process) {
      function buildShapeBpmnElement(bpmnElements: Array<any> | any, kind: ShapeBpmnElementKind) {
        if (bpmnElements !== undefined && bpmnElements !== null) {
          if (Array.isArray(bpmnElements)) {
            bpmnElements.map(bpmnElement => convertedShapeBpmnElements.push(new ShapeBpmnElement(bpmnElement.id, bpmnElement.name, kind)));
          } else {
            convertedShapeBpmnElements.push(new ShapeBpmnElement(bpmnElements.id, bpmnElements.name, kind));
          }
        }
      }

      buildShapeBpmnElement(process.boundaryEvent, ShapeBpmnElementKind.EVENT_BOUNDARY);
      buildShapeBpmnElement(process.endEvent, ShapeBpmnElementKind.EVENT_END);
      buildShapeBpmnElement(process.exclusiveGateway, ShapeBpmnElementKind.GATEWAY_EXCLUSIVE);
      buildShapeBpmnElement(process.intermediateCatchEvent, ShapeBpmnElementKind.EVENT_INTERMEDIATE_CATCH);
      buildShapeBpmnElement(process.serviceTask, ShapeBpmnElementKind.TASK_SERVICE);
      buildShapeBpmnElement(process.startEvent, ShapeBpmnElementKind.EVENT_START);
      buildShapeBpmnElement(process.userTask, ShapeBpmnElementKind.TASK_USER);
    }

    if (Array.isArray(data)) {
      data.map(process => parseProcess(process));
    } else {
      parseProcess(data);
    }
    return convertedShapeBpmnElements;
  }

  serialize(data: ShapeBpmnElement[]): any {
    console.log('Not implemented !!');
  }
}

@JsonObject('definitions')
export class Definitions {
  @JsonProperty('BPMNDiagram', FontConverter)
  private fonts?: Font[];

  @JsonProperty('process', ShapeBpmnElementConverter)
  private shapeBpmnElements: ShapeBpmnElement[];

  @JsonProperty('process', EdgeBpmnElementConverter)
  private edgeBpmnElements: EdgeBpmnElement[];

  @JsonProperty('BPMNDiagram', EdgeConverter)
  private edges: Edge[];

  @JsonProperty('BPMNDiagram', ShapeConverter)
  private shapes: Shape[];

  constructor(fonts?: Font[], shapeBpmnElements?: ShapeBpmnElement[], edgeBpmnElements?: EdgeBpmnElement[], shapes?: Shape[], edges?: Edge[]) {
    this.fonts = fonts;
    this.shapeBpmnElements = shapeBpmnElements;
    this.edgeBpmnElements = edgeBpmnElements;
    this.edges = edges;
    this.shapes = shapes;
  }

  public getEdges(): Edge[] {
    return this.edges;
  }

  public getShapes(): Shape[] {
    return this.shapes;
  }
}
