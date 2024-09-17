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
    name: "default",
    aliases: ["default-channels"],
    type: "messageCreate",
    description: "Sets the mentioned command or command group to default permissions.",
    module: "Permissions",
    sourcecode: "src/commnads/Permissions/Default.ts",
    documentation: "default",
    usage: "default <Command/Modules>",
    example: "default Economy",
    version: "1.0.0",
    code: `
      
    `
  }
]

export default commands;