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
    name: "set-lang",
    aliases: ["language", "lang", "set-language"],
    type: "messageCreate",
    description: "See someones akira profile",
    usage: "profile <user>",
    module: "profile",
    version: "1.0.0",
    sourcecode: "src/commands/profile/profile.ts",
    documentation: "profile/",
    example: "profile @dark-lynn",
    code: `
      $let[author;$getUserVar[uuid;$customEncrypt[encrypt;$authorID]]]
      $setUserVar[language;$message[0];$get[author]]
      uwu
    `
  }
]
export default commands;
