import TDocumentation from './TDocumentation';

export default class TBaseElementWithMixedContent {
  constructor(data) {
    if (!data) return;

    this.documentation = data.documentation.map(function(value) {
      return new TDocumentation(data.value);
    }); // array // documentation
    this.extensionElements = data.extensionElements; // tExtensionElements extensionElements
    this.id = data.id;
  }

  toString() {
    return JSON.stringify(this, null, 4);
  }
}
