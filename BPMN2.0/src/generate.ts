import { generateTemplateClassesFromXSD, verbose } from 'xsd2ts';

//verbose();

//generateTemplateClassesFromXSD('./src/XMLSchema.xsd');

let map = new Map();
//map.set('xsd', './XMLSchema');
generateTemplateClassesFromXSD('./src/Semantic.xsd', map, 'xsd');
generateTemplateClassesFromXSD('./src/DC.xsd', map, 'xsd');

map = new Map();
//map.set('xsd', './XMLSchema');
map.set('dc', './DC');
generateTemplateClassesFromXSD('./src/DI.xsd', map, 'xsd');

map = new Map();
//map.set('xsd', './XMLSchema');
map.set('dc', './DC');
map.set('di', './DI');
map.set('bpmndi', './DI');
generateTemplateClassesFromXSD('./src/BPMNDI.xsd', map, 'xsd');

map = new Map();
//map.set('xsd', './XMLSchema');
map.set('bpmndi', './BPMNDI');
map.set('', './Semantic');
generateTemplateClassesFromXSD('./src/BPMN20.xsd', map, 'xsd');
