export default class Appinfo {
  constructor(data) {
    if (!data) return;

    this.source = data.source;
  }

  toString() {
    return JSON.stringify(this, null, 4);
  }
}
