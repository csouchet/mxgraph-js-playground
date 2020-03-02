import { EdgeBpmnElementKind } from './EdgeBpmnElementKind';
import ShapeBpmnElement from '../shape/ShapeBpmnElement';

export default class EdgeBpmnElement {
  private _id: string;
  private name?: string;
  private source?: ShapeBpmnElement;
  private target?: ShapeBpmnElement;
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
    this.name = name;
    this.source = source;
    this.target = target;
    this.kind = kind;
  }

  getId(): string {
    return this._id;
  }
}
