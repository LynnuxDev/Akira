import { Command } from "@/types"

const commands: Command[] = [
  {
    name: "counter",
    aliases: ["rp-counter"],
    description: "Get the roleplay counter of a user.",
    type: "messageCreate",
    module: "Roleplay",
    version: "1.0.0",
    sourcecode: "src/commands/roleplay/counter.ts",
    documentation: "counter",
    usage: "counter {user}",
    example: "counter",
    code: `
      $let[author;$getUserVar[uuid;$customEncrypt[encrypt;$authorID]]]
      $let[lang;$if[$getUserVar[language;$get[author]]!=;$getUserVar[language;$get[author]];$if[$guildID!=;$guildPreferredLocale;en-us]]]
      $let[userID;$findUser[$message[0];true]]
      $let[user;$getUserVar[uuid;$customEncrypt[encrypt;$get[userID]]]]

      $checkAgreedToTos
      $checkBotChannel

      test
    `
  }
]

export default commands;