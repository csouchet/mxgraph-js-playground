export interface Font {
  name: string;
  size: number;
  isBold: boolean;
  isItalic: boolean;
  isUnderline: boolean;
  isStrikeThrough: boolean;
}

export interface Point {
  x: number;
  y: number;
}

export interface Bounds {
  x: number;
  y: number;
  width: number;
  height: number;
}
