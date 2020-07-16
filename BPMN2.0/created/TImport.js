export default class TImport {
  constructor(data) {
    if (!data) return;

    this.importType = data.importType;
    this.location = data.location; // string
    this.namespace = data.namespace;
  }

  toString() {
    return JSON.stringify(this, null, 4);
  }
}
