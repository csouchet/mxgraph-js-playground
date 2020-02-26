/***********
generated template classes for ./src/BPMNDI.xsd 2/26/2020, 11:42:11 AM
***********/

import * as dc from './DC';
import { Diagram, LabeledEdge, LabeledShape, Style } from './DI';

export class BPMNDI {
  public bpmnDiagram: BPMNDiagram;
  public bpmnPlane: BPMNPlane;
  public bpmnEdge: BPMNEdge;
  public bpmnShape: BPMNShape;
  public bpmnLabel: BPMNLabel;
  public bpmnLabelStyle: BPMNLabelStyle;
  public participantBandKind: ParticipantBandKind;
  public messageVisibleKind: MessageVisibleKind;

  public constructor(props?: BPMNDI) {
    this['@class'] = '.BPMNDI';

    (<any>Object).assign(this, <any>props);
  }
}

export class BPMNPlane {
  public constructor(props?: BPMNPlane) {
    this['@class'] = '.BPMNPlane';

    (<any>Object).assign(this, <any>props);
  }
}

export class BPMNLabel {
  public constructor(props?: BPMNLabel) {
    this['@class'] = '.BPMNLabel';

    (<any>Object).assign(this, <any>props);
  }
}

export class BPMNDiagram extends Diagram {
  public bpmnPlane: BPMNPlane;
  public bpmnLabelStyle?: BPMNLabelStyle[];

  public constructor(props?: BPMNDiagram) {
    super();

    this['@class'] = '.BPMNDiagram';

    (<any>Object).assign(this, <any>props);
  }
}

export class BPMNEdge extends LabeledEdge {
  public bpmnLabel: BPMNLabel;

  public constructor(props?: BPMNEdge) {
    super();

    this['@class'] = '.BPMNEdge';

    (<any>Object).assign(this, <any>props);
  }
}

export class BPMNShape extends LabeledShape {
  public bpmnLabel: BPMNLabel;

  public constructor(props?: BPMNShape) {
    super();

    this['@class'] = '.BPMNShape';

    (<any>Object).assign(this, <any>props);
  }
}

export class BPMNLabelStyle extends Style {
  public font: dc.Font;

  public constructor(props?: BPMNLabelStyle) {
    super();

    this['@class'] = '.BPMNLabelStyle';

    (<any>Object).assign(this, <any>props);
  }
}

enum ParticipantBandKind {
  top_initiating = 'top_initiating',
  middle_initiating = 'middle_initiating',
  bottom_initiating = 'bottom_initiating',
  top_non_initiating = 'top_non_initiating',
  middle_non_initiating = 'middle_non_initiating',
  bottom_non_initiating = 'bottom_non_initiating',
}

enum MessageVisibleKind {
  initiating = 'initiating',
  non_initiating = 'non_initiating',
}
