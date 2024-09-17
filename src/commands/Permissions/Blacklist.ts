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
    name: "blacklist",
    aliases: ["black-list"],
    type: "messageCreate",
    description: "Prevents the mentioned member from using Akira in the server.",
    module: "Permissions",
    sourcecode: "src/commnads/permissions/blacklist.ts",
    documentation: "blacklist",
    usage: "blacklist <member>",
    example: "blacklist @dark_lynn",
    version: "1.0.0",
    code: `
      
    `
  }
]

export default commands;