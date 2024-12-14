import { Command } from '@/types';

const commands: Command[] = [
  {
    name: 'sad',
    aliases: ['rp-sad'],
    description: 'Show how sad you are.',
    type: 'messageCreate',
    module: 'Roleplay',
    version: '1.0.0',
    sourcecode: 'src/commands/Roleplay/negative/sad.ts',
    documentation: 'roleplay',
    usage: 'sad {user} {message}',
    example: 'sad @dark-lynn don\'t talk to me right now.',
    code: `
      $c[------------------------------------LET-----------------------------------]
      $let[author;$getUserVar[uuid;$customEncrypt[encrypt;$authorID]]]
      $let[lang;$if[$getUserVar[language;$get[author]]!=;$getUserVar[language;$get[author]];$if[$guildID!=;$guildPreferredLocale;en-us]]]
      $let[userID;$findUser[$message[0];true]]
      $let[user;$getUserVar[uuid;$customEncrypt[encrypt;$get[userID]]]]

      $c[----------------------------------ONLY-IF---------------------------------]
      $onlyIf[$getUserVar[AgreedToTos;$get[author];false]==true;$callEmbed[agreeToTerms]]
      $onlyIf[$channelID==$getGuildVar[BotChannel;$guildID;$channelID];$getGlobalVar[BotChannelError]]

      $onlyIf[$checkContains[$getVar[rp-commandblocked;$get[user]];*;sad]==false;$customError[722;sad]]
      $onlyIf[$checkContains[$getVar[rp-blocked;$get[user]];$get[author]]!=true;$customError[722;sad]]

      $c[-----------------------------------MAIN-----------------------------------]
      $let[message;$replace[$replace[$message;$message[0] ;];$message[0];]]

      $setVar[sad-give;$get[author];$sum[$getVar[sad-give;$get[author];0];1]]

      $if[$get[user]!=null;
        $setVar[sad-gotten;$get[user];$sum[$getVar[sad-gotten;$get[user];0];1]]
      ]

      $color[$getVar[color;default]]
      $image[$callFunction[roleplay;sad]]
      $if[$get[userID]!=$authorID;
        $let[msg;$i18n[$get[lang];message.roleplay.negative.sad.description]]
        $description[$replace[$replace[$get[msg];{{author}};**$if[$guildID!=;$nickname;$username]**;1];{{user}};**$username[$get[userID]]**;1]$if[$get[message]!=;\n"$get[message]"]]
        $footer[$replace[$replace[$i18n[$get[lang];message.roleplay.negative.sad.$if[$getVar[sad-gotten;$get[author]]==1;footer.oneSingle;footer.one]];{{author}};$if[$guildID!=;$nickname;$username];1];{{amount}};$getVar[sad-give;$get[author]];1] | $replace[$replace[$i18n[$get[lang];message.roleplay.negative.sad.footer.$if[$getVar[sad-gotten;$get[user];0]==1;two;twoSingle]];{{amount}};$getVar[sad-gotten;$get[user];0];-1];{{user}};$try[$nickname[$guildID;$get[userID]];$username[$get[userID]]];-1]]
      ;
        $let[msg;$i18n[$get[lang];message.roleplay.negative.sad.descriptionSingle]]
        $description[$replace[$replace[$get[msg];{{author}};**$if[$guildID!=;$nickname;$username]**;1];{{user}};**$username[$get[userID]]**;1]$if[$get[message]!=;\n"$get[message]"]]
        $footer[$replace[$replace[$i18n[$get[lang];message.roleplay.negative.sad.$if[$getVar[sad-gotten;$get[author]]==1;footer.oneSingle;footer.one]];{{author}};$if[$guildID!=;$nickname;$username];1];{{amount}};$getVar[sad-give;$get[author]];1]]

      ]
    `
  }
];

export default commands;
