import { readFileSync, writeFileSync } from 'fs';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const URI = require('urijs');

export function loadFile(path): string {
  const buf = readFileSync(path);
  return buf.toString();
}

export function writeJsonSchemas(jsonSchemas, outputDir, spacing) {
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
