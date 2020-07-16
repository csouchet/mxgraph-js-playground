export default class Point {
  constructor(data) {
    if (!data) return;

    this.x = data.x;
    this.y = data.y;
  }

  toString() {
    return JSON.stringify(this, null, 4);
  }
}
