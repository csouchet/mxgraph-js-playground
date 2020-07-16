export default class Bounds {
  constructor(data) {
    if (!data) return;

    this.height = data.height;
    this.width = data.width;
    this.x = data.x;
    this.y = data.y;
  }

  toString() {
    return JSON.stringify(this, null, 4);
  }
}
