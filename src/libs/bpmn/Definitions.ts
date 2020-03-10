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
const convertedLaneBpmnElements: ShapeBpmnElement[] = [];

export function findFont(id: string): Font {
  return convertedFonts.find(i => i.getId() === id);
}

export function findShapeBpmnElement(id: string): ShapeBpmnElement {
  return convertedShapeBpmnElements.find(i => i.id === id);
}

export function findLaneBpmnElement(id: string): ShapeBpmnElement {
  return convertedLaneBpmnElements.find(i => i.id === id);
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
    try {
      const edges = data.BPMNPlane.BPMNEdge;
      if (edges === undefined || edges === null || edges === '') {
        return undefined;
      }
      return jsonConvert.deserializeArray(edges, Edge);
    } catch (e) {
      console.log(<Error>e);
    }
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
    try {
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
    } catch (e) {
      console.log(<Error>e);
    }
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

  convertShape(bpmnElements: any, kind: ShapeBpmnElementKind, process: any) {
    let processName = process.name;
    if (!processName) {
      processName = process.id;
    }

    convertedShapeBpmnElements.push(new ShapeBpmnElement(bpmnElements.id, bpmnElements.name, kind, processName));
  }

  buildShapeBpmnElement(bpmnElements: Array<any> | any, kind: ShapeBpmnElementKind, process: any) {
    if (bpmnElements !== undefined && bpmnElements !== null) {
      if (Array.isArray(bpmnElements)) {
        bpmnElements.map(bpmnElement => this.convertShape(bpmnElement, kind, process));
      } else {
        this.convertShape(bpmnElements, kind, process);
      }
    }
  }

  parseProcess(process) {
    this.buildShapeBpmnElement(process.boundaryEvent, ShapeBpmnElementKind.EVENT_BOUNDARY, process);
    this.buildShapeBpmnElement(process.endEvent, ShapeBpmnElementKind.EVENT_END, process);
    this.buildShapeBpmnElement(process.exclusiveGateway, ShapeBpmnElementKind.GATEWAY_EXCLUSIVE, process);
    this.buildShapeBpmnElement(process.intermediateCatchEvent, ShapeBpmnElementKind.EVENT_INTERMEDIATE_CATCH, process);
    this.buildShapeBpmnElement(process.serviceTask, ShapeBpmnElementKind.TASK_SERVICE, process);
    this.buildShapeBpmnElement(process.startEvent, ShapeBpmnElementKind.EVENT_START, process);
    this.buildShapeBpmnElement(process.userTask, ShapeBpmnElementKind.TASK_USER, process);
    this.buildShapeBpmnElement(process.task, ShapeBpmnElementKind.TASK, process);
  }

  deserialize(data: any): ShapeBpmnElement[] {
    try {
      if (data !== undefined && data !== null) {
        if (Array.isArray(data)) {
          data.map(process => this.parseProcess(process));
        } else {
          this.parseProcess(data);
        }
        console.log(convertedShapeBpmnElements);
        return convertedLaneBpmnElements.concat(convertedShapeBpmnElements);
      }
    } catch (e) {
      console.log(<Error>e);
    }
  }

  serialize(data: ShapeBpmnElement[]): any {
    console.log('Not implemented !!');
  }
}

@JsonConverter
export class LaneBpmnElementConverter implements JsonCustomConvert<ShapeBpmnElement[]> {
  convertLane(lane: any, kind: ShapeBpmnElementKind, process: any) {
    let name = lane.name;
    if (!name) {
      name = 'Lane';
    }

    let processName = process.name;
    if (!processName) {
      processName = process.id;
    }

    const laneShapeBpmnElement = new ShapeBpmnElement(lane.id, name, kind, processName);
    convertedLaneBpmnElements.push(laneShapeBpmnElement);

    const flowNodeRefs = lane.flowNodeRef;
    if (flowNodeRefs !== undefined && flowNodeRefs !== null) {
      if (Array.isArray(flowNodeRefs)) {
        flowNodeRefs.map(flowNodeRef => {
          const shapeBpmnElement = findShapeBpmnElement(flowNodeRef);
          if (shapeBpmnElement) {
            shapeBpmnElement.parent = laneShapeBpmnElement;
          }
        });
      } else {
        const shapeBpmnElement = findShapeBpmnElement(flowNodeRefs);
        if (shapeBpmnElement) {
          shapeBpmnElement.parent = laneShapeBpmnElement;
        }
      }
    }
  }

  parseProcess(process) {
    const laneSet = process.laneSet;
    if (laneSet !== undefined && laneSet !== null) {
      const lanes = laneSet.lane;
      if (Array.isArray(lanes)) {
        lanes.map(lane => this.convertLane(lane, ShapeBpmnElementKind.LANE, process));
      } else {
        this.convertLane(lanes, ShapeBpmnElementKind.LANE, process);
      }
    }
  }

  deserialize(data: any): ShapeBpmnElement[] {
    try {
      if (data !== undefined && data !== null) {
        if (Array.isArray(data)) {
          data.map(process => this.parseProcess(process));
        } else {
          this.parseProcess(data);
        }
        console.log(convertedShapeBpmnElements);
        return convertedLaneBpmnElements.concat(convertedShapeBpmnElements);
      }
    } catch (e) {
      console.log(<Error>e);
    }
  }

  serialize(data: ShapeBpmnElement[]): any {
    console.log('Not implemented !!');
  }
}

@JsonObject('definitions')
export class Definitions {
  get shapes(): Shape[] {
    return this._shapes;
  }
  get edges(): Edge[] {
    return this._edges;
  }

  @JsonProperty('BPMNDiagram', FontConverter)
  private fonts?: Font[];

  @JsonProperty('process', ShapeBpmnElementConverter)
  private shapeBpmnElements: ShapeBpmnElement[];

  @JsonProperty('process', LaneBpmnElementConverter)
  private laneBpmnElements: ShapeBpmnElement[];

  @JsonProperty('process', EdgeBpmnElementConverter)
  private edgeBpmnElements: EdgeBpmnElement[];

  @JsonProperty('BPMNDiagram', EdgeConverter)
  private _edges: Edge[];

  @JsonProperty('BPMNDiagram', ShapeConverter)
  private _shapes: Shape[];

  /*  @JsonProperty('BPMNDiagram', LaneConverter)
  private _lanes: Shape[];*/

  constructor(
    fonts?: Font[],
    shapeBpmnElements?: ShapeBpmnElement[],
    laneBpmnElements?: ShapeBpmnElement[],
    edgeBpmnElements?: EdgeBpmnElement[],
    shapes?: Shape[],
    lanes?: Shape[],
    edges?: Edge[],
  ) {
    this.fonts = fonts;
    this.shapeBpmnElements = shapeBpmnElements;
    this.laneBpmnElements = laneBpmnElements;
    this.edgeBpmnElements = edgeBpmnElements;
    this._edges = edges;
    this._shapes = shapes;
    // this._lanes = lanes;
  }
}
