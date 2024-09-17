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
    name: "disable",
    aliases: ["disable-command"],
    type: "messageCreate",
    description: "Disables the mentioned command or command group.",
    module: "Permissions",
    sourcecode: "src/commnads/Permissions/Disable.ts",
    documentation: "disable",
    usage: "disable <Command/Modules>",
    example: "disable Roleplay",
    version: "1.0.0",
    code: `
      
    `
  }
]

export default commands;