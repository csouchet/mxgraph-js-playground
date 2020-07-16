export default class Font {
  constructor(data) {
    if (!data) return;

    this.isBold = data.isBold; // boolean
    this.isItalic = data.isItalic; // boolean
    this.isStrikeThrough = data.isStrikeThrough; // boolean
    this.isUnderline = data.isUnderline; // boolean
    this.name = data.name; // string
    this.size = data.size;
  }

  toString() {
    return JSON.stringify(this, null, 4);
  }
}
