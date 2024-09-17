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
    name: "profile",
    aliases: ["myprofile", "my-profile", "me"],
    type: "messageCreate",
    description: "See someones akira profile",
    usage: "profile <user>",
    module: "profile",
    version: "1.0.0",
    sourcecode: "src/commands/profile/profile.ts",
    documentation: "profile/",
    example: "profile @dark-lynn",
    code: `
    
    `
  }
]
export default commands;
