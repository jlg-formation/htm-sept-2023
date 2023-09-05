import { Panel } from "./Panel.js";
import { Command } from "./Command.js";

const config = {
  samples: 87,
  multiplicationFactor: 56,
};

const panel = new Panel();
panel.setConfig(config);
panel.draw();

const command = new Command();
command.setConfig(config);
command.onUpdate((newConfig) => {
  panel.setConfig(newConfig);
  panel.draw();
});
