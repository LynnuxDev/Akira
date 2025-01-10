import { Command } from "@/types";

const DisableWelcome: Command[] = [{
  name: 'disable-welcome',
  aliases: ['disablewelcome','togglewelcome'],
  type: "messageCreate",
  description: "Disable your welcome Messages.",
  module: "dev",
  sourcecode: "src/commands/automation/disableWelcome.ts",
  version: "v1.0.0",
  guildOnly: true,
  documentation: 'disableWelcome',
  example: 'disablewelcome',
  usage: 'disablewelcome',
  code: `
    $onlyIf[$guildID!=;$customError[714;welcomesetup]]
    $onlyIF[$hasPerms[$guildID;$authorID;Administrator];$customError[720;welcomesetup]]
    $onlyIf[$getGuildVar[welcomeEnabled;$customEncrypt[encrypt;$guildID]]==true;not enabled]

    $getColor
    $author[Welcome Message Disabled:]
    $thumbnail[$getGuildIcon[$guildID]]
    $description[Welcome Messages have been disabled?]
  `
}];

export default DisableWelcome;