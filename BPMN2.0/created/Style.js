export default class Style {
  constructor(data) {
    if (!data) return;

    this.id = data.id;
  }

  toString() {
    return JSON.stringify(this, null, 4);
  }
}
