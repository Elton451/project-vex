import type { Point } from "../types/Endpoint";

export const getCenter = (width: number, height: number, topLeft: Point) => {
  return {
    x: topLeft.x + width / 2,
    y: topLeft.y + height / 2,
  };
};
