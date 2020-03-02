import { ShapeBpmnElementKind } from './ShapeBpmnElementKind';

export default class ShapeBpmnElement {
  private _id: string;
  private name: string;
  private kind: ShapeBpmnElementKind;

  constructor(id: string, name: string, kind: ShapeBpmnElementKind) {
    this._id = id;
    this.name = name;
    this.kind = kind;
  }

  getId(): string {
    return this._id;
  }
}
