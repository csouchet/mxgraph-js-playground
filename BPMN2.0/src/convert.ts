import { Xsd2JsonSchema } from 'xsd2jsonschema';
import { readFileSync, writeFileSync, readdir } from 'fs';
import { join } from 'path';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const URI = require('urijs');
const xs2js = new Xsd2JsonSchema();

function loadFile(path): string {
  const buf = readFileSync(path);
  return buf.toString();
}

function writeJsonSchemas(jsonSchemas, outputDir, spacing) {
  if (jsonSchemas == undefined) {
    throw new Error('The parameter jsonSchema is required');
  }
  if (spacing == undefined) {
    spacing = '\t';
  }
  Object.keys(jsonSchemas).forEach(uri => {
    const jsonSchema = jsonSchemas[uri];
    const fullFilename = new URI(outputDir).segment(jsonSchema.filename);
    const fileContent = JSON.stringify(jsonSchema.getJsonSchema(), null, spacing);
    console.log(`Saving ${fullFilename}`);
    writeFileSync(fullFilename.toString(), fileContent);
  });
}

// const baseTypesSchemaFilename = 'DC.xsd';
// const xsdSchemas = {};
// xsdSchemas[baseTypesSchemaFilename] = loadFile(baseTypesSchemaFilename);
//
// const convertedSchemas = xs2js.processAllSchemas({
//   schemas: xsdSchemas,
// });
// const jsonSchema = convertedSchemas['DC.xsd'].getJsonSchema();
// console.log(JSON.stringify(jsonSchema, null, 2));
//
// writeJsonSchemas(convertedSchemas, './generated', '  ');

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
