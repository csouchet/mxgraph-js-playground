import EdgeBpmnElement from './EdgeBpmnElement';
import LabelStyle, { LabelStyleConverter } from '../LabelStyle';
import { JsonConverter, JsonCustomConvert, JsonObject, JsonProperty } from 'json2typescript';
import { findEdgeBpmnElement } from '../Definitions';

export class Waypoint {
  constructor(private x: number, private y: number) {}
}

@JsonConverter
class WaypointConverter implements JsonCustomConvert<Waypoint[]> {
  deserialize(data: any): Waypoint[] {
    return data.map(value => new Waypoint(value.x, value.y));
  }

  serialize(data: Waypoint[]): any {
    console.log('Not implemented !!');
  }
}

@JsonConverter
export class EdgeBpmnElementConverter implements JsonCustomConvert<EdgeBpmnElement> {
  deserialize(data: any): EdgeBpmnElement {
    if (data !== undefined && data !== null && data !== '') {
      return findEdgeBpmnElement(data);
    }
  }

  serialize(data: EdgeBpmnElement): any {
    console.log('Not implemented !!');
  }
}

@JsonObject('BPMNEdge')
export default class Edge {
  @JsonProperty('id', String)
  private _id: string;

  @JsonProperty('bpmnElement', EdgeBpmnElementConverter)
  private bpmnElement: EdgeBpmnElement;

  @JsonProperty('waypoint', WaypointConverter)
  private waypoints: Waypoint[];

  @JsonProperty('BPMNLabel', LabelStyleConverter)
  private labelStyle?: LabelStyle;

  constructor(id?: string, bpmnElement?: EdgeBpmnElement, waypoints?: Waypoint[], labelStyle?: LabelStyle) {
    this._id = id;
    this.bpmnElement = bpmnElement;
    this.waypoints = waypoints;
    this.labelStyle = labelStyle;
  }

  getId(): string {
    return this._id;
  }
}
