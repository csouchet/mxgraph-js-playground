export default class TDocumentation {
  constructor(data) {
    if (!data) return;

    this.id = data.id;
    this.textFormat = data.textFormat; // string
  }

  toString() {
    return JSON.stringify(this, null, 4);
  }
}
