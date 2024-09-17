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

const commands: Command[] = [
  {
    name: "test",
    aliases: ["testme", "killmeplease"],
    type: "messageCreate",
    description: "test",
    usage: "test",
    module: "Developers-Only",
    version: "1.0.0",
    sourcecode: "https://github.com/LynnuxDev/Akira/blob/main/SRC/commands/dev/test.js",
    documentation: "https://documentation.lynnux.xyz/commands/utility/dev/Not-Available",
    example: "test",
    code: `
    `
  }
]

export default commands;