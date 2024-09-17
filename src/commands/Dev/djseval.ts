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

const commands: Command[] = [{
  name: "eval",
  aliases: ['djs'],
  type: "messageCreate",
  description: "Evals an JavaScript code.",
  module: "Dev",
  sourcecode: "SRC/commands/dev/djseval.ts",
  documentation: "djseval",
  usage: "eval <code>",
  example: "eval ctx.message.author",
  version: "1.0.0",
  code: `
    $onlyForUsers[;705306248538488947;392609934744748032]
    $if[$authorID==705306248538488947;Ping: \`$pingMS\` | Uptime: <t:$round[$math[$math[$getTimestamp-$uptime]/1000];0]:R>;]
    $let[text;$replace[$djsEval[const channel = ctx.message.channel \nconst message = ctx.message \nconst author = ctx.message.author \nconst client = ctx.message.client \nconst guild = ctx.message.guild \n$message];<ref *1> ;;1]]
    $if[$charCount[$get[text]]>1950;$attachment[$get[text];result.json;true];\`\`\`json\n$get[text]\n\`\`\`]
  `
}]

export default commands;