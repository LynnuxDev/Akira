import { InteractionCommand } from '../../../types';

const guildSettings: InteractionCommand[] = [
  {
    type: 'interactionCreate',
    version: 'v1.0.0',
    code: `
      $textSplit[$customID;~]

      $let[author;$getUUID[$authorID]]
      $let[authorID;$authorID]

      $onlyIf[$splitText[0]==userSettings;]
      $onlyIf[$splitText[1]==$authorID;$ephemeral $customError[716;userSettings]]

      $if[$guildID==;$let[type;dm];$let[type;guild]$let[perms;false]]
      $if[$get[type]==guild;$if[$hasPerms[$guildID;$authorID;Administrator]==true;$let[perms;true];$if[$checkContains[$getGuildVar[perms~$get[author];$guildID];+ $toLowercase[guild.settings]]==true;$let[perms;true];$let[perms;false]]]]
      $let[messageID;$splitText[3]]

      $interactionUpdate[
        $author[User Settings: "@$userGlobalName[$get[authorID]]";$userAvatar[$get[authorID];64;webp]]
        $getColor
        $addField[Preferences:;Language: \`$getLang[$authorID]\`\nResponse: \`$getUserVar[responsePreference;$getUUID[$authorID]]\`;true]
        $addField[Customization:;Prefix: \`$getUserVar[prefix;$get[author]]\`\nColor: \`$getUserVar[color;$get[author];#ff47ff]\`;true]
        $footer[Your UUID: "$get[author]"]
        $addActionRow
        $addButton[guildSettings~$authorID~$guildID~$get[messageID];Guild Settings;Secondary;;$if[$get[perms]==false;true;false]]
        $addButton[close~$authorID~message~$get[messageID];Close;Danger]
      ]
    `
  }
];
export default guildSettings;