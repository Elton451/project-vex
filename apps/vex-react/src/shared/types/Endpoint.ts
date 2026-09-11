export interface Point {
  x: number;
  y: number;
}

export interface Segment {
  p1: EndPoint;
  p2: EndPoint;
  d: number;
}

export interface EndPoint extends Point {
  beginsSegment: boolean;
  segment: Segment;
  angle: number;
}
