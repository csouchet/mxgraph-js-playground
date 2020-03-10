import { ShapeBpmnElementKind } from './ShapeBpmnElementKind';

export default class ShapeBpmnElement {


  private _id: string;
  private _name: string;
  private _kind: ShapeBpmnElementKind;
  private _parent: ShapeBpmnElement;

  constructor(id: string, name: string, kind: ShapeBpmnElementKind, parent?: ShapeBpmnElement) {
    this._id = id;
    this._name = name;
    this._parent = parent;
    this._kind = kind;
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get parent(): ShapeBpmnElement {
    return this._parent;
  }

  set parent(value: ShapeBpmnElement) {
    this._parent = value;
  }

  get kind(): ShapeBpmnElementKind {
    return this._kind;
  }
}
