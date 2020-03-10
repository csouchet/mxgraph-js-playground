import ShapeBpmnElement from './ShapeBpmnElement';
import Bounds from '../Bounds';
import LabelStyle, { LabelStyleConverter } from '../LabelStyle';
import { JsonConverter, JsonCustomConvert, JsonObject, JsonProperty } from 'json2typescript';
import { findLaneBpmnElement, findShapeBpmnElement } from '../Definitions';

@JsonConverter
export class ShapeBpmnElementConverter implements JsonCustomConvert<ShapeBpmnElement> {
  deserialize(data: any): ShapeBpmnElement {
    if (data !== undefined && data !== null && data !== '') {
      return findShapeBpmnElement(data) || findLaneBpmnElement(data);
    }
  }

  serialize(data: ShapeBpmnElement): any {
    console.log('Not implemented !!');
  }
}

@JsonConverter
export class BoundsConverter implements JsonCustomConvert<Bounds> {
  deserialize(data: any): Bounds {
    if (data !== undefined && data !== null) {
      return new Bounds(data.x, data.y, data.width, data.height);
    }
  }

  serialize(data: Bounds): any {
    console.log('Not implemented !!');
  }
}

@JsonObject('BPMNShape')
export default class Shape {

  @JsonProperty('id', String)
  private _id: string;

  @JsonProperty('bpmnElement', ShapeBpmnElementConverter)
  private _bpmnElement: ShapeBpmnElement;

 /* @JsonProperty('isHorizontal', Boolean, true)
  private isHorizontal: boolean;

  @JsonProperty('isExpanded', Boolean, true)
  private isExpanded: boolean;

  @JsonProperty('isMarkerVisible', Boolean, true)
  private isMarkerVisible: boolean;

  @JsonProperty('isMessageVisible', Boolean, true)
  private isMessageVisible: boolean;*/

  @JsonProperty('Bounds', BoundsConverter)
  private _bounds: Bounds;

  @JsonProperty('BPMNLabel', LabelStyleConverter, true)
  private labelStyle?: LabelStyle;

  constructor(
    id?: string,
    bpmnElement?: ShapeBpmnElement,
    isHorizontal?: boolean,
    isExpanded?: boolean,
    isMarkerVisible?: boolean,
    isMessageVisible?: boolean,
    bounds?: Bounds,
    labelStyle?: LabelStyle,
  ) {
    this._id = id;
    this._bpmnElement = bpmnElement;
  /*  this.isHorizontal = isHorizontal;
    this.isExpanded = isExpanded;
    this.isMarkerVisible = isMarkerVisible;
    this.isMessageVisible = isMessageVisible;*/
    this._bounds = bounds;
    this.labelStyle = labelStyle;
  }

  get id(): string {
    return this._id;
  }

  get bpmnElement(): ShapeBpmnElement {
    return this._bpmnElement;
  }

  get bounds(): Bounds {
    return this._bounds;
  }
}
