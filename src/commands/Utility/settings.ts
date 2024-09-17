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
    name: "settings",
    aliases: ["setting", "seting"],
    description: "Change your settings",
    type: "messageCreate",
    module: "Information",
    version: "1.0.0",
    sourcecode: "src/commands/utility/settings.ts",
    documentation: "settings",
    usage: "settings",
    example: "settings",
    code: `
      $c[----------------------------------ONLY-IF---------------------------------]
      This command will be added in v 1.3.0
    `
  }
]

export default commands;