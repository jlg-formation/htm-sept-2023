import { cx0, cy0, r0 } from "./constants.js";

export const getAngleFromIndex = (i, samples) => {
  return (i * (2 * Math.PI)) / samples;
};

export const getPointFromAngle = (angle) => {
  const x = cx0 + r0 * Math.cos(angle);
  const y = cy0 + r0 * Math.sin(angle);
  return { x, y };
};
