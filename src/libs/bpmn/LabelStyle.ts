import Bounds from './Bounds';
import Font from './Font';
import { JsonConvert, JsonConverter, JsonCustomConvert, OperationMode, ValueCheckingMode } from 'json2typescript';
import { findFont } from './Definitions';

const jsonConvert: JsonConvert = new JsonConvert();
jsonConvert.operationMode = OperationMode.DISABLE;
jsonConvert.ignorePrimitiveChecks = false; // don't allow assigning number to string etc.
jsonConvert.valueCheckingMode = ValueCheckingMode.DISALLOW_NULL; // never allow null

export default class LabelStyle {
  private readonly id: string;
  private readonly font?: Font;
  private readonly bounds?: Bounds;

  constructor(id: string, font?: Font, bounds?: Bounds) {
    this.id = id;
    this.font = font;
    this.bounds = bounds;
  }
}

@JsonConverter
export class LabelStyleConverter implements JsonCustomConvert<LabelStyle> {
  /*<di:BPMNLabel id=\"_WsvQEBszEeqkhYLXtt1BFw\" labelStyle=\"_WrSenhszEeqkhYLXtt1BFw\">\n" +
  "          <dc:Bounds height=\"17.0\" width=\"59.0\" x=\"418.0\" y=\"1468.0\"/>\n" +
  "        </di:BPMNLabel>\n" */

  deserialize(data: any): LabelStyle {
    const label = data;
    if (label === undefined || label === null || label === '') {
      return undefined;
    }

    const style = data.labelStyle;
    let font;
    if (style !== undefined && style !== null && style !== '') {
      font = findFont(style);
    }

    const bpmnBounds = data.Bounds;
    let bounds;
    if (bpmnBounds !== undefined && bpmnBounds !== null) {
      bounds = new Bounds(bpmnBounds.x, bpmnBounds.y, bpmnBounds.width, bpmnBounds.height);
    }

    return new LabelStyle(data.id, font, bounds);
  }

  serialize(data: LabelStyle): any {
    console.log('Not implemented !!');
  }
}
