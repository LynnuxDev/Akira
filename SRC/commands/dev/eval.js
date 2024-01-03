module.exports = {
  name: "ev",
  aliases: ["fs","ForgeScript"],
  description: "Evals an ForgeScript code",
  type: "messageCreate",
  usage: "eval <code>",
  module: "Developers-Only",
version: "1.0",
  sourcecode: "https://github.com/LynnuxDev/Akira/blob/main/SRC/commands/dev/eval.js",
  documentation: "https://documentation.lynnux.xyz/commands/utility/dev/Not-Available",
  type: "messageCreate",
example: "ev you are $authorID",
  code: `
  $onlyForUsers[;705306248538488947;392609934744748032]
  $if[$authorID==705306248538488947;Ping: \`$pingMS\` | Uptime: <t:$round[$math[$math[$getTimestamp-$uptime]/1000];0]:R>;]                
  $eval[$message;true]
  `}
