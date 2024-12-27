import { InteractionCommand } from '../../../types';

const guildSettings: InteractionCommand[] = [
  {
    type: 'interactionCreate',
    version: 'v1.0.0',
    code: `
      $textSplit[$customID;~]
      $let[messageID;$splitText[3]]
      $onlyIf[$splitText[0]==guildSettings;]
      $onlyIf[$splitText[1]==$authorID;$ephemeral $customError[716;guildSettings]]
      $let[guild;$customEncrypt[encrypt;$guildID]]
      $interactionUpdate[
        $author[Guild Settings: "$guildName[$guildID]";$if[$guildIcon[$guildID;64;webp]!=;$guildIcon[$guildID;64;webp];https://cdn.lynnux.xyz/images/No-Server_Icon-found.png]]
        $getColor
        $addField[Preferences:;Language: \`$getLang[$guildID]\`\n;true]
        $addField[Customization:;Prefix: \`$getGuildVar[prefix;$get[guild]]\`\nColor: \`$getGuildVar[color;$get[guild]]\`;true]
        $addField[Respond Settings:;invalidNotify: \`$getGuildVar[invalidNotify;$get[guild]]\`]

        $addActionRow
        $addButton[userSettings~$authorID~$guildID~$get[messageID];User Settings;Secondary;;false]
        $addButton[close~$authorID~message~$get[messageID];Close;Danger]
      ]
    `
  }
];
export default guildSettings;