import { Command } from '@/types';

const commands: Command[] = [
  {
    name: 'stare',
    aliases: ['rp-stare', 'drink', 'rp-drink'],
    description: 'stare',
    type: 'messageCreate',
    module: 'roleplay',
    version: '1.0.0',
    sourcecode: 'src/commands/Roleplay/neutral/stare.ts',
    documentation: 'roleplay',
    usage: 'stare {user} {message}',
    example: 'stare @dark-lynn what are you doing?',
    code: `
      $c[------------------------------------LET-----------------------------------]
      $let[author;$getUserVar[uuid;$customEncrypt[encrypt;$authorID]]]
      $let[lang;$if[$getUserVar[language;$get[author]]!=;$getUserVar[language;$get[author]];$if[$guildID!=;$guildPreferredLocale;en-us]]]
      $let[userID;$findUser[$message[0];true]]
      $let[user;$getUserVar[uuid;$customEncrypt[encrypt;$get[userID]]]]

      $c[----------------------------------ONLY-IF---------------------------------]
      $onlyIf[$getUserVar[AgreedToTos;$get[author];false]==true;$callEmbed[agreeToTerms]]
      $onlyIf[$channelID==$getGuildVar[BotChannel;$guildID;$channelID];$getGlobalVar[BotChannelError]]

      $onlyIf[$checkContains[$getVar[rp-commandblocked;$get[user]];*;stare]==false;$customError[722;stare]]
      $onlyIf[$checkContains[$getVar[rp-blocked;$get[user]];$get[author]]!=true;$customError[722;stare]]

      $c[-----------------------------------MAIN-----------------------------------]
      $let[message;$replace[$replace[$message;$message[0] ;];$message[0];]]

      $setVar[stare-give;$get[author];$sum[$getVar[stare-give;$get[author];0];1]]

      $if[$get[user]!=null;
        $if[$get[user]!=$get[author];
          $setVar[stare-gotten;$get[user];$sum[$getVar[stare-gotten;$get[user];0];1]]
        ]
      ]

      $color[$getVar[color;default]]
      $image[$callFunction[roleplay;stare]]
      $if[$get[userID]!=$authorID;
        $let[msg;$i18n[$get[lang];message.roleplay.neutral.stare.description]]
        $description[$replace[$replace[$get[msg];{{author}};**$nickname**;1];{{user}};**$username[$get[userID]]**;1]$if[$get[message]!=;\n"$get[message]"]]
        $footer[$replace[$replace[$i18n[$get[lang];message.roleplay.neutral.stare.$if[$getVar[stare-gotten;$get[author]]==1;footer.oneSingle;footer.one]];{{author}};$nickname;1];{{amount}};$getVar[stare-give;$get[author]];1] | $replace[$replace[$i18n[$get[lang];message.roleplay.neutral.stare.footer.$if[$getVar[stare-gotten;$get[user];0]==1;two;twoSingle]];{{amount}};$getVar[stare-gotten;$get[user];0];-1];{{user}};$try[$nickname[$guildID;$get[userID]];$username];-1]]
      ;
        $let[msg;$i18n[$get[lang];message.roleplay.neutral.stare.descriptionSingle]]
        $description[$replace[$replace[$get[msg];{{author}};**$nickname**;1];{{user}};**$username[$get[userID]]**;1]$if[$get[message]!=;\n"$get[message]"]]
        $footer[$replace[$replace[$i18n[$get[lang];message.roleplay.neutral.stare.$if[$getVar[stare-gotten;$get[author]]==1;footer.oneSingle;footer.one]];{{author}};$nickname;1];{{amount}};$getVar[stare-give;$get[author]];1]]

      ]
    `
  }
];

export default commands;
