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
    name: "ev",
    aliases: ["fs","ForgeScript"],
    description: "Evals an ForgeScript code",
    type: "messageCreate",
    usage: "ev <code>",
    module: "Dev",
    version: "1.0.0",
    sourcecode: "/src/commands/dev/eval.ts",
    documentation: "eval",
    example: "ev you are $authorID",
    code: `
      $onlyForUsers[;705306248538488947;392609934744748032]
      $if[$authorID==705306248538488947;Ping: \`$pingMS\` | Uptime: <t:$round[$math[$math[$getTimestamp-$uptime]/1000];0]:R>;]
      $eval[$message;true]
    `
  }
]
export default commands;