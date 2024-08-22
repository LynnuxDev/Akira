module.exports = [{
  name: "onReady",
  type: "ready",
  description: "This command runs every time the bot becomes online.",
  module: "ClientSpecific",
  sourcecode: "https://github.com/LynnuxDev/Akira/blob/main/SRC/commands/Global-Interactions/triggers/onReady.js",
  documentation: "https://documentation.lynnux.xyz/commands/utility/dev/Not-Available",
  usage: "n/a",
  example: "n/a",
  version: "1.0",
  code: `
    $logger[Client;$username[$clientID] | Running with "$commandCount" commands]
  `
}]