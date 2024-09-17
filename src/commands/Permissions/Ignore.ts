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
    name: "ignore",
    aliases: ["ignore-channel"],
    type: "messageCreate",
    description: "Prevents Akira from responding to commands in the mentioned channel. (defaults to current channel).",
    module: "Permissions",
    sourcecode: "src/commnads/Permissions/ignore.ts",
    documentation: "ignore",
    usage: "ignore {channel}",
    example: "ignore #general",
    version: "1.0.0",
    code: `
      
    `
  }
]

export default commands;