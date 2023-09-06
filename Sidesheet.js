import { $ } from "./misc.js";

export class Sidesheet {
  isOpen = false;
  constructor() {
    this.render();
    this.setActions();
  }

  render() {
    const iElt = $("div.sidesheet div.button button i");
    iElt.className =
      "fa-solid " + (this.isOpen ? "fa-times" : "fa-angle-right");
    const panelElt = $("div.sidesheet div.panel");
    console.log("panelElt: ", panelElt);
    panelElt.className = "panel " + (this.isOpen ? "open" : "");
  }

  setActions() {
    const btnElt = $("div.sidesheet div.button button");
    console.log("btnElt: ", btnElt);
    btnElt.addEventListener("click", () => {
      console.log("je clique");
      this.isOpen = !this.isOpen;
      console.log("this.isOpen: ", this.isOpen);
      this.render();
    });
  }
}
