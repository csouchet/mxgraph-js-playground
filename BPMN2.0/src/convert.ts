import { Xsd2JsonSchema } from 'xsd2jsonschema';
import { readdir } from 'fs';
import { join } from 'path';
import { loadFile, writeJsonSchemas } from './utils';

const xs2js = new Xsd2JsonSchema();

const directoryPath = '/Users/csouchet/Source/Process Analytics/Marcin-poc/BPMN2.0/xsd/';
readdir(directoryPath, function(err, files) {
  //handling error
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  }

  files.forEach((fileName: string) => {
    const filePath = join(directoryPath, fileName);
    console.log('Loading: ' + filePath);
    const xsdSchemas = {};
    xsdSchemas[fileName] = loadFile(filePath);

    console.log('Converting');
    const convertedSchemas = xs2js.processAllSchemas({
      schemas: xsdSchemas,
    });
    // const jsonSchema = convertedSchemas['DC.xsd'].getJsonSchema();
    // console.log(JSON.stringify(jsonSchema, null, 2));

    writeJsonSchemas(convertedSchemas, './generated', '  ');
  });
});
