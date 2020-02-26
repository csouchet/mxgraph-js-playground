/***********
generated template classes for ./src/DC.xsd 2/26/2020, 11:42:11 AM
***********/

export class DC {
  public font: Font;
  public point: Point;
  public bounds: Bounds;

  public constructor(props?: DC) {
    this['@class'] = '.DC';

    (<any>Object).assign(this, <any>props);
  }
}

export class Font {
  public name: string;
  public size: number;
  public isBold: boolean;
  public isItalic: boolean;
  public isUnderline: boolean;
  public isStrikeThrough: boolean;

  public constructor(props?: Font) {
    this['@class'] = '.Font';

    (<any>Object).assign(this, <any>props);
  }
}

export class Point {
  public x: number;
  public y: number;

  public constructor(props?: Point) {
    this['@class'] = '.Point';

    (<any>Object).assign(this, <any>props);
  }
}

export class Bounds {
  public x: number;
  public y: number;
  public width: number;
  public height: number;

  public constructor(props?: Bounds) {
    this['@class'] = '.Bounds';

    (<any>Object).assign(this, <any>props);
  }
}
