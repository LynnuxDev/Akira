import { Command } from '@/types';

const commands: Command[] = [
  {
    name: 'die',
    aliases: ['rp-die'],
    description: 'Show how sad you are.',
    type: 'messageCreate',
    module: 'Roleplay',
    version: '1.0.0',
    sourcecode: 'src/commands/Roleplay/negative/die.ts',
    documentation: 'roleplay',
    usage: 'die {user} {message}',
    example: 'die @dark-lynn Die Die Die.',
    code: `
      $c[------------------------------------LET-----------------------------------]
      $let[author;$getUserVar[uuid;$customEncrypt[encrypt;$authorID]]]
      $let[lang;$if[$getUserVar[language;$get[author]]!=;$getUserVar[language;$get[author]];$if[$guildID!=;$guildPreferredLocale;en-us]]]
      $let[userID;$findUser[$message[0];true]]
      $let[user;$getUserVar[uuid;$customEncrypt[encrypt;$get[userID]]]]

      $c[----------------------------------ONLY-IF---------------------------------]
      $onlyIf[$getUserVar[AgreedToTos;$get[author];false]==true;$callEmbed[agreeToTerms]]
      $onlyIf[$channelID==$getGuildVar[BotChannel;$guildID;$channelID];$getGlobalVar[BotChannelError]]

      $onlyIf[$checkContains[$getVar[rp-commandblocked;$get[user]];*;die]==false;$customError[722;die]]
      $onlyIf[$checkContains[$getVar[rp-blocked;$get[user]];$get[author]]!=true;$customError[722;die]]

      $c[-----------------------------------MAIN-----------------------------------]
      $let[message;$replace[$replace[$message;$message[0] ;];$message[0];]]

      $setVar[die-give;$get[author];$sum[$getVar[die-give;$get[author];0];1]]

      $if[$get[user]!=null;
        $setVar[die-gotten;$get[user];$sum[$getVar[die-gotten;$get[user];0];1]]
      ]

      $color[$getVar[color;default]]
      $image[$callFunction[roleplay;die]]
      $if[$get[userID]!=$authorID;
        $let[msg;$i18n[$get[lang];message.roleplay.negative.die.description]]
        $description[$replace[$replace[$get[msg];{{author}};**$if[$guildID!=;$nickname;$username]**;1];{{user}};**$username[$get[userID]]**;1]$if[$get[message]!=;\n"$get[message]"]]
        $footer[$replace[$replace[$i18n[$get[lang];message.roleplay.negative.die.$if[$getVar[die-gotten;$get[author]]==1;footer.oneSingle;footer.one]];{{author}};$if[$guildID!=;$nickname;$username];1];{{amount}};$getVar[die-give;$get[author]];1] | $replace[$replace[$i18n[$get[lang];message.roleplay.negative.die.footer.$if[$getVar[die-gotten;$get[user];0]==1;two;twoSingle]];{{amount}};$getVar[die-gotten;$get[user];0];-1];{{user}};$try[$nickname[$guildID;$get[userID]];$username[$get[userID]]];-1]]
      ;
        $let[msg;$i18n[$get[lang];message.roleplay.negative.die.descriptionSingle]]
        $description[$replace[$replace[$get[msg];{{author}};**$if[$guildID!=;$nickname;$username]**;1];{{user}};**$username[$get[userID]]**;1]$if[$get[message]!=;\n"$get[message]"]]
        $footer[$replace[$replace[$i18n[$get[lang];message.roleplay.negative.die.$if[$getVar[die-gotten;$get[author]]==1;footer.oneSingle;footer.one]];{{author}};$if[$guildID!=;$nickname;$username];1];{{amount}};$getVar[die-give;$get[author]];1]]

      ]
    `
  }
];

export default commands;
