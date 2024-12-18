import { Command } from '@/types';
import { getPackages } from '../../native/getAkiraVersion';
const commands: Command[] = [
  {
    name: 'about',
    aliases: ['info', 'information'],
    description: 'get info about akira',
    type: 'messageCreate',
    module: 'Utility',
    version: '1.0.0',
    sourcecode: 'src/commands/utility/about.ts',
    documentation: 'about',
    usage: 'update',
    example: 'about',
    code: `
      $c[----------------------------------ONLY-IF---------------------------------]
      $onlyIf[$channelID==$getGuildVar[BotChannel;$guildID;$channelID];$getGlobalVar[BotChannelError]]

      $let[author;$getUserVar[uuid;$customEncrypt[encrypt;$authorID]]]
      $let[lang;$getUserVar[language;$get[author];en-us]]

      $c[-----------------------------------MAIN-----------------------------------]
      $reply[$channelID;$messageID]
      $if[$guildID!=;$let[DefaultMessage;$messageID];$let[DefaultMessage;NaN]]
      $thumbnail[$userAvatar[$botID;2048;webp]]
      $color[$getGlobalVar[color]]
      $title[❯ $i18n[$get[lang];message.utility.about.title]:]
      $addField[❯ $i18n[$get[lang];message.utility.about.field.one.title];'$i18n[$get[lang];message.utility.about.field.one.description]';true]
      $addField[❯ $i18n[$get[lang];message.utility.about.field.two.title];V$replace[${getPackages()};akira: ;;1];true]
      $addField[\u200B;\u200B;true]
      $description[$i18n[$get[lang];message.utility.about.description]]
      $addField[❯ $i18n[$get[lang];global.buttons.website];[$i18n[$get[lang];global.buttons.button2]\\](https://akira.lynnux.xyz)\\];true]
      $addField[❯ $i18n[$get[lang];global.buttons.server];[[$i18n[$get[lang];global.buttons.button2]\\](https://discord.com/invite/TUqZTutDUz)\\];true]
      $addField[❯ $i18n[$get[lang];global.buttons.Invite];[[$i18n[$get[lang];global.buttons.button2]\\](https://discord.com/oauth2/authorize?client_id=$clientID&scope=bot+applications.commands&permissions=4294307799)\\];true]
      $addActionRow
      $addButton[close-$authorID-$get[DefaultMessage]-false;Close;Danger;✖️]
      $addButton[https://github.com/LynnuxDev/Akira;Source-Code;Link;📖]
    `
  }
];

export default commands;
