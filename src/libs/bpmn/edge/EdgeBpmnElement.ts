import { EdgeBpmnElementKind } from './EdgeBpmnElementKind';
import ShapeBpmnElement from '../shape/ShapeBpmnElement';

export default class EdgeBpmnElement {

  private _id: string;
  private _name?: string;
  private _source?: ShapeBpmnElement;
  private _target?: ShapeBpmnElement;
  private kind?: EdgeBpmnElementKind;
  // private conditionExpression?: ShapeBpmnElement;

  constructor(
    id: string,
    name?: string,
    source?: ShapeBpmnElement,
    target?: ShapeBpmnElement,
    kind?: EdgeBpmnElementKind, //  conditionExpression?: ShapeBpmnElement,
  ) {
    this._id = id;
    this._name = name;
    this._source = source;
    this._target = target;
    this.kind = kind;
  }

  get id(): string {
    return this._id;
  }

  get target(): ShapeBpmnElement {
    return this._target;
  }
  get source(): ShapeBpmnElement {
    return this._source;
  }
  get name(): string {
    return this._name;
  }
}
