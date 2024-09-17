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
    name: "listen",
    aliases: ["listen-channel"],
    type: "messageCreate",
    description: "Allows Akira to respond to commands in the mentioned channel, if the channel was restricted by the ignore command (defaults to current channel).",
    module: "Permissions",
    sourcecode: "src/commnads/Permissions/Listen.ts",
    documentation: "listen",
    usage: "listen {channel}",
    example: "listen #general",
    version: "1.0.0",
    code: `
      
    `
  }
]

export default commands;