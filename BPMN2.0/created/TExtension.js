import TDocumentation from './TDocumentation';

export default class TExtension {
  constructor(data) {
    if (!data) return;

    this.definition = data.definition;
    this.documentation = data.documentation.map(function(value) {
      return new TDocumentation(data.value);
    }); // array // documentation
    this.mustUnderstand = data.mustUnderstand; // boolean
  }

  toString() {
    return JSON.stringify(this, null, 4);
  }
}
