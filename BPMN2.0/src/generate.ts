import { generateTemplateClassesFromXSD, verbose } from 'xsd2ts';

//verbose();

//generateTemplateClassesFromXSD('./xsd/XMLSchema.xsd');

let map = new Map();
//map.set('xsd', './XMLSchema');
generateTemplateClassesFromXSD('./xsd/Semantic.xsd', map, 'xsd');
generateTemplateClassesFromXSD('./xsd/DC.xsd', map, 'xsd');

map = new Map();
//map.set('xsd', './XMLSchema');
map.set('dc', './DC');
generateTemplateClassesFromXSD('./xsd/DI.xsd', map, 'xsd');

map = new Map();
//map.set('xsd', './XMLSchema');
map.set('dc', './DC');
map.set('di', './DI');
map.set('bpmndi', './DI');
generateTemplateClassesFromXSD('./xsd/BPMNDI.xsd', map, 'xsd');

map = new Map();
//map.set('xsd', './XMLSchema');
map.set('bpmndi', './BPMNDI');
map.set('', './Semantic');
generateTemplateClassesFromXSD('./xsd/BPMN20.xsd', map, 'xsd');
