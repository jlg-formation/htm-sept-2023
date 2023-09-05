export class Command {
  constructor() {
    this.config = {
      samples: 100,
      multiplicationFactor: 2,
    };
    this.callback = () => {};
    this.render();
    this.setActions();
  }

  setConfig(config) {
    this.config = config;
    this.render();
    this.callback(this.config);
  }

  onUpdate(callback) {
    this.callback = callback;
  }

  render() {
    document.querySelector("div.command label.samples span span").innerHTML =
      this.config.samples;
    document.querySelector(
      "div.command label.multiplicationFactor span span"
    ).innerHTML = this.config.multiplicationFactor;

    document.querySelector("div.command label.samples input").value =
      this.config.samples;
    document.querySelector(
      "div.command label.multiplicationFactor input"
    ).value = this.config.multiplicationFactor;
  }

  setActions() {
    document
      .querySelector("div.command label.samples input")
      .addEventListener("input", () => {
        this.config.samples = document.querySelector(
          "div.command label.samples input"
        ).value;
        this.render();
        this.callback(this.config);
      });
    document
      .querySelector("div.command label.multiplicationFactor input")
      .addEventListener("input", () => {
        this.config.multiplicationFactor = document.querySelector(
          "div.command label.multiplicationFactor input"
        ).value;
        this.render();
        this.callback(this.config);
      });
  }
}
