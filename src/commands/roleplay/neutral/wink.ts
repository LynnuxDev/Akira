import { Command } from '@/types';

const commands: Command[] = [
  {
    name: 'wink',
    aliases: ['rp-wink'],
    description: 'wink',
    type: 'messageCreate',
    module: 'roleplay',
    version: '1.0.0',
    sourcecode: 'src/commands/Roleplay/neutral/wink.ts',
    documentation: 'roleplay',
    usage: 'wink {user} {message}',
    example: 'wink @dark-lynn Hai.',
    code: `
      $c[------------------------------------LET-----------------------------------]
      $let[author;$getUserVar[uuid;$customEncrypt[encrypt;$authorID]]]
      $let[lang;$if[$getUserVar[language;$get[author]]!=;$getUserVar[language;$get[author]];$if[$guildID!=;$guildPreferredLocale;en-us]]]
      $let[userID;$findUser[$message[0];true]]
      $let[user;$getUserVar[uuid;$customEncrypt[encrypt;$get[userID]]]]

      $c[----------------------------------ONLY-IF---------------------------------]
      $onlyIf[$getUserVar[AgreedToTos;$get[author];false]==true;$callEmbed[agreeToTerms]]
      $onlyIf[$channelID==$getGuildVar[BotChannel;$guildID;$channelID];$getGlobalVar[BotChannelError]]
      $onlyIf[$checkContains[$getVar[rp-commandblocked;$get[user]];*;wink]==false;$customError[722;wink]]
      $onlyIf[$checkContains[$getVar[rp-blocked;$get[user]];$get[author]]!=true;$customError[722;wink]]

      $c[-----------------------------------MAIN-----------------------------------]
      $let[message;$replace[$replace[$message;$message[0] ;];$message[0];]]

      $setVar[wink-give;$get[author];$sum[$getVar[wink-give;$get[author];0];1]]

      $if[$get[user]!=null;
        $if[$get[user]!=$get[author];
          $setVar[wink-gotten;$get[user];$sum[$getVar[wink-gotten;$get[user];0];1]]
        ]
      ]

      $color[$getVar[color;default]]
      $image[$callFunction[roleplay;wink]]
      $if[$get[userID]!=$authorID;
        $let[msg;$i18n[$get[lang];message.roleplay.neutral.wink.description]]
        $description[$replace[$replace[$get[msg];{{author}};**$nickname**;1];{{user}};**$username[$get[userID]]**;1]$if[$get[message]!=;\n"$get[message]"]]
        $footer[$replace[$replace[$i18n[$get[lang];message.roleplay.neutral.wink.$if[$getVar[wink-gotten;$get[author]]==1;footer.oneSingle;footer.one]];{{author}};$nickname;1];{{amount}};$getVar[wink-give;$get[author]];1] | $replace[$replace[$i18n[$get[lang];message.roleplay.neutral.wink.footer.$if[$getVar[wink-gotten;$get[user];0]==1;two;twoSingle]];{{amount}};$getVar[wink-gotten;$get[user];0];-1];{{user}};$try[$nickname[$guildID;$get[userID]];$username];-1]]
      ;
        $let[msg;$i18n[$get[lang];message.roleplay.neutral.wink.descriptionSingle]]
        $description[$replace[$replace[$get[msg];{{author}};**$nickname**;1];{{user}};**$username[$get[userID]]**;1]$if[$get[message]!=;\n"$get[message]"]]
        $footer[$replace[$replace[$i18n[$get[lang];message.roleplay.neutral.wink.$if[$getVar[wink-gotten;$get[author]]==1;footer.oneSingle;footer.one]];{{author}};$nickname;1];{{amount}};$getVar[wink-give;$get[author]];1]]

      ]
    `
  }
];

export default commands;
