export default class Font {
  private readonly _id: string;
  private readonly _name: string;
  private readonly _size: number;
  private readonly _isBold: boolean;
  private readonly _isItalic: boolean;
  private readonly _isUnderline: boolean;
  private readonly _isStrikeThrough: boolean;

  constructor(id: string, name: string, size: number, isBold: boolean, isItalic: boolean, isUnderline: boolean, isStrikeThrough: boolean) {
    this._id = id;
    this._name = name;
    this._size = size;
    this._isBold = isBold;
    this._isItalic = isItalic;
    this._isUnderline = isUnderline;
    this._isStrikeThrough = isStrikeThrough;
  }

  getId(): string {
    return this._id;
  }
}
