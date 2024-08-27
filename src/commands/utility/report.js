module.exports = [{
  name: "report",
  aliases: ['ifoundabug','ibrokesomething'],
  type: "messageCreate",
  description: "Report issues related to akira.",
  module: "Utility",
  sourcecode: "https://github.com/LynnuxDev/Akira/blob/main/SRC/commands/utility/report.js",
  documentation: "https://documentation.lynnux.xyz/commands/information/report",
  usage: "report",
  example: "report",
  version: "1.0",
  code: `
    $if[$authorID==705306248538488947;Ping: \`$pingMS\` | Uptime: <t:$round[$math[$math[$getTimestamp-$uptime]/1000];0]:R>;]
  `
}]