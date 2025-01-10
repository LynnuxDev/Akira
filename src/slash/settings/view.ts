import { ISlash } from '@/types';
import { RegistrationType } from '@tryforge/forgescript';

const Settings: ISlash = {
  type: RegistrationType.Global,
  code: `
    $let[author;$getUUID[$authorID]]
    $let[authorID;$authorID]

    $defer

    $checkAgreedToTos

    $if[$guildID==;$let[type;dm];$let[type;guild]$let[perms;false]]
    $if[$get[type]==guild;$if[$hasPerms[$guildID;$authorID;Administrator]==true;$let[perms;true];$if[$checkContains[$getGuildVar[perms~$get[author];$guildID];+ $toLowercase[guild.settings]]==true;$let[perms;true];$let[perms;false]]]]

    $interactionReply[
      $author[User Settings: "@$userGlobalName[$get[authorID]]";$userAvatar[$get[authorID];64;webp]]
      $getColor
      $addField[Preferences:;Language: \`$getLang[$get[authorID]]\`\nResponse: \`$getUserVar[responsePreference;$getUUID[$authorID]]\`;true]
      $addField[Customization:;Prefix: \`$getUserVar[prefix;$get[author]]\`\nColor: \`$getUserVar[color;$get[author];#ff47ff]\`;true]
      $footer[Your UUID: "$get[author]"]
      $if[$guildID==;$let[perms;false]]
      $addActionRow
      $addButton[guildSettings~$authorID~$guildID~$messageID;Guild Settings;Secondary;;$if[$get[perms]==false;true;false]]
      $addButton[close~$authorID~message~$messageID;Close;Danger;✖️]
    ]

  `,
  data: {
    "name": "view",
    "description": "Check/Change user or guild settings"
  }
};

export default Settings;