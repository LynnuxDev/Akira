import { Command } from '@/types';

const commands: Command[] = [
  {
    name: 'tease',
    aliases: ['rp-tease', 'drink', 'rp-drink'],
    description: 'tease',
    type: 'messageCreate',
    module: 'roleplay',
    version: '1.0.0',
    sourcecode: 'src/commands/Roleplay/neutral/tease.ts',
    documentation: 'roleplay',
    usage: 'tease <user> {message}',
    example: 'tease @dark-lynn Hey.',
    code: `
      $c[------------------------------------LET-----------------------------------]
      $let[author;$getUserVar[uuid;$customEncrypt[encrypt;$authorID]]]
      $let[lang;$if[$getUserVar[language;$get[author]]!=;$getUserVar[language;$get[author]];$if[$guildID!=;$guildPreferredLocale;en-us]]]
      $let[userID;$findUser[$message[0];true]]
      $let[user;$getUserVar[uuid;$customEncrypt[encrypt;$get[userID]]]]

      $c[----------------------------------ONLY-IF---------------------------------]
      $onlyIf[$getUserVar[AgreedToTos;$get[author];false]==true;$callEmbed[agreeToTerms]]
      $onlyIf[$channelID==$getGuildVar[BotChannel;$guildID;$channelID];$getGlobalVar[BotChannelError]]
      $onlyIf[$get[user]!=$get[author];$customError[723;tease]]
      $onlyIf[$checkContains[$getVar[rp-commandblocked;$get[user]];*;tease]==false;$customError[722;tease]]
      $onlyIf[$checkContains[$getVar[rp-blocked;$get[user]];$get[author]]!=true;$customError[722;tease]]

      $c[-----------------------------------MAIN-----------------------------------]
      $let[message;$replace[$replace[$message;$message[0] ;];$message[0];]]

      $setVar[tease-give;$get[author];$sum[$getVar[tease-give;$get[author];0];1]]

      $if[$get[user]!=null;
        $if[$get[user]!=$get[author];
          $setVar[tease-gotten;$get[user];$sum[$getVar[tease-gotten;$get[user];0];1]]
        ]
      ]

      $color[$getVar[color;default]]
      $image[$callFunction[roleplay;tease]]
      $if[$get[userID]!=$authorID;
        $let[msg;$i18n[$get[lang];message.roleplay.neutral.tease.description]]
        $description[$replace[$replace[$get[msg];{{author}};**$nickname**;1];{{user}};**$username[$get[userID]]**;1]$if[$get[message]!=;\n"$get[message]"]]
        $footer[$replace[$replace[$i18n[$get[lang];message.roleplay.neutral.tease.$if[$getVar[tease-gotten;$get[author]]==1;footer.oneSingle;footer.one]];{{author}};$nickname;1];{{amount}};$getVar[tease-give;$get[author]];1] | $replace[$replace[$i18n[$get[lang];message.roleplay.neutral.tease.footer.$if[$getVar[tease-gotten;$get[user];0]==1;two;twoSingle]];{{amount}};$getVar[tease-gotten;$get[user];0];-1];{{user}};$try[$nickname[$guildID;$get[userID]];$username];-1]]
      ;
        $let[msg;$i18n[$get[lang];message.roleplay.neutral.tease.descriptionSingle]]
        $description[$replace[$replace[$get[msg];{{author}};**$nickname**;1];{{user}};**$username[$get[userID]]**;1]$if[$get[message]!=;\n"$get[message]"]]
        $footer[$replace[$replace[$i18n[$get[lang];message.roleplay.neutral.tease.$if[$getVar[tease-gotten;$get[author]]==1;footer.oneSingle;footer.one]];{{author}};$nickname;1];{{amount}};$getVar[tease-give;$get[author]];1]]

      ]
    `
  }
];

export default commands;
