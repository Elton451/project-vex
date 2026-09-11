import type { EndPoint } from "../types/Endpoint";

export const endpointCompare = (pointA: EndPoint, pointB: EndPoint): number => {
  if (pointA.angle > pointB.angle) return 1;
  if (pointA.angle < pointB.angle) return -1;
  if (!pointA.beginsSegment && pointB.beginsSegment) return 1;
  if (pointA.beginsSegment && !pointB.beginsSegment) return -1;
};
