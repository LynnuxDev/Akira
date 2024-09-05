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
    name: "Freechannel",
    aliases: ["free-channel","free"],
    type: "messageCreate",
    description: "Removes the bot channel restriction from the server, if there is one in place.",
    module: "Permissions",
    sourcecode: "src/commnads/Permissions/freeChannel.ts",
    documentation: "freechannel",
    usage: "freechannel",
    example: "freechannel",
    version: "1.0.0",
    code: `
      
    `
  }
]

export default commands;