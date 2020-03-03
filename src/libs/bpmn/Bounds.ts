export default class Bounds {
  private _x: number;

  private _y: number;

  private _width: number;

  private _height: number;

  public constructor(x: number, y: number, width: number, height: number) {
    this._x = x;
    this._y = y;
    this._width = width;
    this._height = height;
  }

  get height(): number {
    return this._height;
  }
  get width(): number {
    return this._width;
  }
  get y(): number {
    return this._y;
  }
  get x(): number {
    return this._x;
  }
}
