import { Command } from '@/types';

const commands: Command[] = [
  {
    name: 'rage',
    aliases: ['rp-rage', 'drink', 'rp-drink'],
    description: 'rage',
    type: 'messageCreate',
    module: 'roleplay',
    version: '1.0.0',
    sourcecode: 'src/commands/Roleplay/neutral/rage.ts',
    documentation: 'roleplay',
    usage: 'rage {user} {message}',
    example: 'rage @dark-lynn WHAT ARE YOU DOING!',
    code: `
      $c[------------------------------------LET-----------------------------------]
      $let[author;$getUserVar[uuid;$customEncrypt[encrypt;$authorID]]]
      $let[lang;$if[$getUserVar[language;$get[author]]!=;$getUserVar[language;$get[author]];$if[$guildID!=;$guildPreferredLocale;en-us]]]
      $let[userID;$findUser[$message[0];true]]
      $let[user;$getUserVar[uuid;$customEncrypt[encrypt;$get[userID]]]]

      $c[----------------------------------ONLY-IF---------------------------------]
      $onlyIf[$getUserVar[AgreedToTos;$get[author];false]==true;$callEmbed[agreeToTerms]]
      $onlyIf[$channelID==$getGuildVar[BotChannel;$guildID;$channelID];$getGlobalVar[BotChannelError]]
      $onlyIf[$checkContains[$getVar[rp-commandblocked;$get[user]];*;rage]==false;$customError[722;rage]]
      $onlyIf[$checkContains[$getVar[rp-blocked;$get[user]];$get[author]]!=true;$customError[722;rage]]

      $c[-----------------------------------MAIN-----------------------------------]
      $let[message;$replace[$replace[$message;$message[0] ;];$message[0];]]

      $setVar[rage-give;$get[author];$sum[$getVar[rage-give;$get[author];0];1]]

      $if[$get[user]!=null;
        $if[$get[user]!=$get[author];
          $setVar[rage-gotten;$get[user];$sum[$getVar[rage-gotten;$get[user];0];1]]
        ]
      ]

      $color[$getVar[color;default]]
      $image[$callFunction[roleplay;rage]]
      $if[$get[userID]!=$authorID;
        $let[msg;$i18n[$get[lang];message.roleplay.neutral.rage.description]]
        $description[$replace[$replace[$get[msg];{{author}};**$nickname**;1];{{user}};**$username[$get[userID]]**;1]$if[$get[message]!=;\n"$get[message]"]]
        $footer[$replace[$replace[$i18n[$get[lang];message.roleplay.neutral.rage.$if[$getVar[rage-gotten;$get[author]]==1;footer.oneSingle;footer.one]];{{author}};$nickname;1];{{amount}};$getVar[rage-give;$get[author]];1] | $replace[$replace[$i18n[$get[lang];message.roleplay.neutral.rage.footer.$if[$getVar[rage-gotten;$get[user];0]==1;two;twoSingle]];{{amount}};$getVar[rage-gotten;$get[user];0];-1];{{user}};$try[$nickname[$guildID;$get[userID]];$username];-1]]
      ;
        $let[msg;$i18n[$get[lang];message.roleplay.neutral.rage.descriptionSingle]]
        $description[$replace[$replace[$get[msg];{{author}};**$nickname**;1];{{user}};**$username[$get[userID]]**;1]$if[$get[message]!=;\n"$get[message]"]]
        $footer[$replace[$replace[$i18n[$get[lang];message.roleplay.neutral.rage.$if[$getVar[rage-gotten;$get[author]]==1;footer.oneSingle;footer.one]];{{author}};$nickname;1];{{amount}};$getVar[rage-give;$get[author]];1]]

      ]
    `
  }
];

export default commands;
