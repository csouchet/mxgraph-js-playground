export default class Diagram {
  constructor(data) {
    if (!data) return;

    this.documentation = data.documentation; // string
    this.id = data.id;
    this.name = data.name; // string
    this.resolution = data.resolution;
  }

  toString() {
    return JSON.stringify(this, null, 4);
  }
}
