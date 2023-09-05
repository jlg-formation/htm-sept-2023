import { getAngleFromIndex, getPointFromAngle } from "./math.js";
import { SVG_NS, r } from "./constants.js";

export class Panel {
  constructor() {}

  setConfig(config) {
    this.config = config;
  }

  draw() {
    const gSamplesElt = document.querySelector("svg g.samples");
    console.log("gSamplesElt: ", gSamplesElt);

    for (let i = 0; i < this.config.samples; i++) {
      const circleElt = document.createElementNS(SVG_NS, "circle");
      console.log("circleElt: %O", circleElt);

      const angle = getAngleFromIndex(i, this.config.samples);
      const p = getPointFromAngle(angle);

      circleElt.setAttribute("cx", p.x);
      circleElt.setAttribute("cy", p.y);
      circleElt.setAttribute("r", r);

      gSamplesElt.appendChild(circleElt);
    }

    const gLinesElt = document.querySelector("svg g.lines");
    console.log("gLinesElt: ", gLinesElt);

    for (let i = 0; i < this.config.samples; i++) {
      const lineElt = document.createElementNS(SVG_NS, "line");

      const angle1 = getAngleFromIndex(i, this.config.samples);
      const p1 = getPointFromAngle(angle1);

      const angle2 = getAngleFromIndex(
        i * this.config.multiplicationFactor,
        this.config.samples
      );
      const p2 = getPointFromAngle(angle2);

      lineElt.setAttribute("x1", p1.x);
      lineElt.setAttribute("y1", p1.y);
      lineElt.setAttribute("x2", p2.x);
      lineElt.setAttribute("y2", p2.y);

      gLinesElt.appendChild(lineElt);
    }
  }
}
