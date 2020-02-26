/***********
generated template classes for ./src/DI.xsd 2/26/2020, 11:42:11 AM
***********/

import * as dc from './DC';

export class DI {
  public diagramElement: DiagramElement;
  public diagram: Diagram;
  public node: Node;
  public edge: Edge;
  public labeledEdge: LabeledEdge;
  public shape: Shape;
  public labeledShape: LabeledShape;
  public label: Label;
  public plane: Plane;
  public style: Style;

  public constructor(props?: DI) {
    this['@class'] = '.DI';

    (<any>Object).assign(this, <any>props);
  }
}

export abstract class DiagramElement {
  public extension?: Extension;

  public constructor(props?: DiagramElement) {
    this['@class'] = '.DiagramElement';

    (<any>Object).assign(this, <any>props);
  }
}

export abstract class Extension {
  public constructor(props?: Extension) {
    this['@class'] = '.Extension';

    (<any>Object).assign(this, <any>props);
  }
}

export abstract class Diagram {
  public name: string;
  public documentation: string;
  public resolution: number;
  public id: string;

  public constructor(props?: Diagram) {
    this['@class'] = '.Diagram';

    (<any>Object).assign(this, <any>props);
  }
}

export abstract class Node {
  public constructor(props?: Node) {
    this['@class'] = '.Node';

    (<any>Object).assign(this, <any>props);
  }
}

export abstract class LabeledEdge {
  public constructor(props?: LabeledEdge) {
    this['@class'] = '.LabeledEdge';

    (<any>Object).assign(this, <any>props);
  }
}

export abstract class LabeledShape {
  public constructor(props?: LabeledShape) {
    this['@class'] = '.LabeledShape';

    (<any>Object).assign(this, <any>props);
  }
}

export abstract class Style {
  public id: string;

  public constructor(props?: Style) {
    this['@class'] = '.Style';

    (<any>Object).assign(this, <any>props);
  }
}

export abstract class Edge extends DiagramElement {
  public waypoint: dc.Point[];

  public constructor(props?: Edge) {
    super();

    this['@class'] = '.Edge';

    (<any>Object).assign(this, <any>props);
  }
}

export abstract class Shape extends Node {
  public bounds: dc.Bounds;

  public constructor(props?: Shape) {
    super();

    this['@class'] = '.Shape';

    (<any>Object).assign(this, <any>props);
  }
}

export abstract class Label extends Node {
  public bounds: dc.Bounds;

  public constructor(props?: Label) {
    super();

    this['@class'] = '.Label';

    (<any>Object).assign(this, <any>props);
  }
}

export abstract class Plane extends Node {
  public diagramElement?: DiagramElement[];

  public constructor(props?: Plane) {
    super();

    this['@class'] = '.Plane';

    (<any>Object).assign(this, <any>props);
  }
}
