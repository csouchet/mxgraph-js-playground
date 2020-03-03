import { ShapeBpmnElementKind } from './ShapeBpmnElementKind';

export default class ShapeBpmnElement {
  private _id: string;
  private _name: string;
  private _kind: ShapeBpmnElementKind;

  constructor(id: string, name: string, kind: ShapeBpmnElementKind) {
    this._id = id;
    this._name = name;
    this._kind = kind;
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get kind(): ShapeBpmnElementKind {
    return this._kind;
  }
}
