const SVG_NS = "http://www.w3.org/2000/svg";
const r = 1;

const cx0 = 50;
const cy0 = 50;
const r0 = 45;

const samples = 100;
const multiplicationFactor = 98;

const gSamplesElt = document.querySelector("svg g.samples");
console.log("gSamplesElt: ", gSamplesElt);

for (let i = 0; i < samples; i++) {
  const circleElt = document.createElementNS(SVG_NS, "circle");
  console.log("circleElt: %O", circleElt);

  const angle = (i * (2 * Math.PI)) / samples;
  const cx = cx0 + r0 * Math.cos(angle);
  const cy = cy0 + r0 * Math.sin(angle);

  circleElt.setAttribute("cx", cx);
  circleElt.setAttribute("cy", cy);
  circleElt.setAttribute("r", r);

  gSamplesElt.appendChild(circleElt);
}

const gLinesElt = document.querySelector("svg g.lines");
console.log("gLinesElt: ", gLinesElt);

for (let i = 0; i < samples; i++) {
  const lineElt = document.createElementNS(SVG_NS, "line");

  const angle1 = (i * (2 * Math.PI)) / samples;
  const x1 = cx0 + r0 * Math.cos(angle1);
  const y1 = cy0 + r0 * Math.sin(angle1);

  const angle2 = angle1 * multiplicationFactor;
  const x2 = cx0 + r0 * Math.cos(angle2);
  const y2 = cy0 + r0 * Math.sin(angle2);

  lineElt.setAttribute("x1", x1);
  lineElt.setAttribute("y1", y1);
  lineElt.setAttribute("x2", x2);
  lineElt.setAttribute("y2", y2);

  gLinesElt.appendChild(lineElt);
}
