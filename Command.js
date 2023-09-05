export class Command {
  constructor() {
    this.config = {
      samples: 100,
      multiplicationFactor: 2,
    };
    this.render();
  }
  setConfig(config) {
    this.config = config;
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
}
