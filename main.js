const r = 1;

const gSamplesElt = document.querySelector("svg g.samples");
console.log("gSamplesElt: ", gSamplesElt);

const circleElt = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "circle"
);
console.log("circleElt: %O", circleElt);

circleElt.setAttribute("cx", "34");
circleElt.setAttribute("cy", "23");
circleElt.setAttribute("r", r);

gSamplesElt.appendChild(circleElt);
