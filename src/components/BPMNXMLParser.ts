import * as BPMNFile from './BPMN.camunda.ts';
//import * as BPMNFile from './BPMN.Bonita.ts';
import { JsonConvert, OperationMode, ValueCheckingMode } from 'json2typescript';
import Edge from '../libs/bpmn/edge/Edge';
import { Definitions } from '../libs/bpmn/Definitions';
import Shape from '../libs/bpmn/shape/Shape';

const parser = require('fast-xml-parser');
const he = require('he');

export default class BPMNXMLParser {
  /*
  private static validate(xmlPath: string): void {
    validateXML({ file: xmlPath }, '../../../BPMN2.0/src/BPMN20.xsd', (err, result) => {
      if (err) {
        throw err;
      } else if (!result.valid) {
        throw new Error('Bad parsing of BPMN XML');
      }
    });
  }
*/

  //public static parse(xmlPath: string): DiagramElement[] {
  public static parse(): { shapes: Shape[]; edges: Edge[] } {
    // this.validate(xmlPath);
    // const xmlData = readFileSync(path.join(__dirname, xmlPath));

    const xmlData = BPMNFile.xmlContent;

    const options = {
      attributeNamePrefix: '',
      //attrNodeName: 'attr', //default is 'false'
      textNodeName: '#text',
      ignoreAttributes: false,
      ignoreNameSpace: true,
      allowBooleanAttributes: true,
      parseNodeValue: true,
      parseAttributeValue: true,
      trimValues: true,
      //cdataTagName: '__cdata', //default is 'false'
      //cdataPositionChar: '\\c',
      parseTrueNumberOnly: false,
      arrayMode: false, //"strict"
      attrValueProcessor: (val, attrName) => he.decode(val, { isAttributeValue: true }), //default is a=>a
      tagValueProcessor: (val, tagName) => he.decode(val), //default is a=>a
      stopNodes: ['parse-me-as-string'],
    };

    if (parser.validate(xmlData) === true) {
      //optional (it'll return an object in case it's not valid)
      const jsonObj = parser.parse(xmlData, options);
      delete jsonObj.definitions.targetNamespace;
      delete jsonObj.definitions.exporter;
      delete jsonObj.definitions.exporterVersion;
      delete jsonObj.definitions.id;
      delete jsonObj.definitions.import;
      delete jsonObj.definitions.schemaLocation;
      delete jsonObj.definitions.expressionLanguage;

      // Choose your settings
      // Check the detailed reference in the chapter "JsonConvert class properties and methods"
      const jsonConvert: JsonConvert = new JsonConvert();
      jsonConvert.operationMode = OperationMode.ENABLE;
      jsonConvert.ignorePrimitiveChecks = false; // don't allow assigning number to string etc.
      jsonConvert.valueCheckingMode = ValueCheckingMode.DISALLOW_NULL; // never allow null

      try {
        const definitions = jsonConvert.deserializeObject(jsonObj.definitions, Definitions);
        return { shapes: definitions.shapes, edges: definitions.edges };
      } catch (e) {
        console.log(<Error>e);
      }
    }

    /*    // Intermediate obj
    const tObj = parser.getTraversalObj(xmlData, options);
    var jsonObj = parser.convertToJson(tObj, options);*/
  }
}
