interface Command {
  name?: string;
  aliases?: string[];
  type: string;
  description: string;
  module: string;
  sourcecode: string;
  documentation?: string;
  usage?: string;
  example?: string;
  version: string;
  code: string;
}

const commands: Command[] = [{
  name: "onReady",
  type: "ready",
  description: "This command runs every time the bot becomes online.",
  module: "ClientSpecific",
  sourcecode: "https://github.com/LynnuxDev/Akira/blob/v1.0.0/src/commands/Global-Interactions/triggers/onReady.ts",
  documentation: "https://documentation.lynnux.xyz/commands/Client/Not-Available",
  usage: "n/a",
  example: "n/a",
  version: "1.0",
  code: `
    $logger[Info;$username[$clientID] | Running with "$commandCount" commands]
  `
}];

export default commands;
