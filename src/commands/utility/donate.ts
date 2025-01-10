import { Command } from '@/types';

const commands: Command[] = [
  {
    name: 'donate',
    aliases: ['givemoney', 'financial-support'],
    type: 'messageCreate',
    module: 'utility',
    sourcecode: 'SRC/commands/Utility/donate.ts',
    documentation: 'donate',
    version: '1.0.0',
    usage: 'donate',
    description: 'See information about donating to akira.',
    example: 'donate',
    code: `
      $c[No TOS/POLICY agreement required do to being a static command.]
      $onlyIf[$channelID==$getGuildVar[BotChannel;$guildID;$channelID];$getGlobalVar[BotChannelError]]

      $let[author;$getUserVar[uuid;$customEncrypt[encrypt;$authorID]]]
      $let[lang;$getUserVar[language;$get[author];en-us]]

      $reply
      $color[$if[$getUserVar[color;$get[author];false]!=false;$getUserVar[color;$get[author];#ff47ff];$getGuildVar[color;$guildID;#ff47ff]]]
      $title[$i18n[$get[lang];message.utility.donate.title]]
      $addField[Q: $replace[$i18n[$get[lang];message.utility.donate.field.one.title];\n;;1];**A:** $i18n[$get[lang];message.utility.donate.field.one.description]]
      $addField[Q: $i18n[$get[lang];message.utility.donate.field.two.title];**A:** $i18n[$get[lang];message.utility.donate.field.two.description]]
      $footer[$i18n[$get[lang];message.utility.donate.footer]]

      $addActionRow
      $addButton[https://www.patreon.com/Dark_Lynn;Patreon;Link]
      $addButton[https://ko-fi.com/lynnuxdev;Ko-Fi;Link]
      $addButton[https://buymeacoffee.com/darklynn;BuyMeACoffee;Link]
      $addButton[close~$authorID~$get[DefaultMessage];;Danger;✖️;false]
    `
  }
];

export default commands;
