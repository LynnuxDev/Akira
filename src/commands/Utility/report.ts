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
    name: "report",
    aliases: ['ifoundabug','ibrokesomething'],
    type: "messageCreate",
    description: "Report issues related to akira.",
    module: "Utility",
    sourcecode: "src/commands/utility/report.ts",
    documentation: "report",
    usage: "report",
    example: "report",
    version: "1.0.0",
    code: `
      $if[$authorID==705306248538488947;Ping: \`$pingMS\` | Uptime: <t:$round[$math[$math[$getTimestamp-$uptime]/1000];0]:R>;]
    `
  }
]

export default commands;