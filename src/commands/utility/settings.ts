import { Command } from '@/types'

const commands: Command[] = [
  {
    name: "settings",
    aliases: ["setting", "setting"],
    description: "Change your settings",
    type: "messageCreate",
    module: "Utility",
    version: "1.0.0",
    sourcecode: "src/commands/utility/settings.ts",
    documentation: "settings",
    usage: "settings",
    example: "settings",
    code: `
      $let[author;$getUserVar[uuid;$customEncrypt[encrypt;$authorID]]]
      $onlyIf[$getUserVar[AgreedToTos;$get[author]]==true;$getGlobalVar[AgreedToTosEmbedReply]]
      $let[authorID;$authorID]
      $if[$botOwnerID==$authorID;$if[$message[0]!=;$let[authorID;$findUser[$message[0]]]$let[author;$getUserVar[uuid;$customEncrypt[encrypt;$findUser[$message[0]]]]]]
      $onlyIf[$getUserVar[AgreedToTos;$get[author]]==true;$customError[600;settings]]

      $if[$guildID==;$let[type;dm];$let[type;guild]$let[perms;false]]
      $if[$get[type]==guild;$if[$hasPerms[$guildID;$authorID;Administrator]==true;$let[perms;true];$if[$checkContains[$getGuildVar[perms~$get[author];$guildID];+ $toLowercase[guild.settings]]==true;$let[perms;true];$let[perms;false]]]]]

      $author[User Settings: "@$userGlobalName[$get[authorID]]";$userAvatar[$get[authorID];64;webp]]
      $color[$if[$getUserVar[color;$get[author];false]!=false;$getUserVar[color;$get[author];#ff47ff];$getUserVar[color;$guildID;#ff47ff]]]
      $addField[Preferences:;Language: \`en-US\`\nResponse: \`DM\`;true]
      $addField[Customization:;Prefix: \`$getUserVar[prefix;$get[author]]\`\nColor: \`$getUserVar[color;$get[author];#ff47ff]\`;true]
      $footer[Your UUID: "$get[author]"]

      $addActionRow
      $addButton[guildSettings;Guild Settings;Secondary;;$if[$get[perms]==false;true;false]]
      $addButton[close~$authorID~message~$messageID;Close;Danger]
    `
  }
]

export default commands;