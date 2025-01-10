import { Command } from '@/types';

const commands: Command[] = [
  {
    name: 'settings',
    aliases: ['setting'],
    description: 'Change your settings',
    type: 'messageCreate',
    module: 'utility',
    version: '1.0.0',
    sourcecode: 'src/commands/utility/settings.ts',
    documentation: 'settings',
    usage: 'settings',
    example: 'settings',
    code: `
      $let[author;$getUUID[$authorID]]
      $let[authorID;$authorID]

      $onlyIf[$getUserVar[AgreedToTos;$get[author]]==true;$getGlobalVar[AgreedToTosEmbedReply]]

      $if[$botOwnerID==$authorID;$if[$message[0]!=;$let[authorID;$findUser[$message[0]]]$let[author;$getUUID[$findUser[$message[0]]]]]
      $onlyIf[$getUserVar[AgreedToTos;$get[author]]==true;$customError[600;settings]]

      $if[$guildID==;$let[type;dm];$let[type;guild]$let[perms;false]]
      $if[$get[type]==guild;$if[$hasPerms[$guildID;$authorID;Administrator]==true;$let[perms;true];$if[$checkContains[$getGuildVar[perms~$get[author];$guildID];+ $toLowercase[guild.settings]]==true;$let[perms;true];$let[perms;false]]]]]

      $author[User Settings: "@$userGlobalName[$get[authorID]]";$userAvatar[$get[authorID];64;webp]]
      $getColor
      $addField[Preferences:;Language: \`$getLang[$get[authorID]]\`\nResponse: \`$getUserVar[responsePreference;$getUUID[$authorID]]\`;true]
      $addField[Customization:;Prefix: \`$getUserVar[prefix;$get[author]]\`\nColor: \`$getUserVar[color;$get[author];#ff47ff]\`;true]
      $footer[Your UUID: "$get[author]"]

      $if[$guildID==;$let[perms;false]]
      $addActionRow
      $addButton[guildSettings~$authorID~$guildID~$messageID;Guild Settings;Secondary;;$if[$get[perms]==false;true;false]]
      $addButton[close~$authorID~message~$messageID;Close;Danger;✖️]
    `
  }
];

export default commands;
