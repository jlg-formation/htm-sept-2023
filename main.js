const SVG_NS = "http://www.w3.org/2000/svg";
const r = 1;
const samples = 10;

const cx0 = 50;
const cy0 = 50;
const r0 = 45;

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
