import { Command } from '@/types';

const commands: Command[] = [
  {
    name: 'nervous',
    aliases: ['rp-nervous'],
    description: 'nervous someone',
    type: 'messageCreate',
    module: 'roleplay',
    version: '1.0.0',
    sourcecode: 'src/commands/Roleplay/Wholesome/nervous.ts',
    documentation: 'roleplay',
    usage: 'nervous {user} {message}',
    example: 'nervous @dark-lynn are you sure?.',
    code: `
      $c[------------------------------------LET-----------------------------------]
      $let[author;$getUUID[$authorID]]
      $let[lang;$getLang[$authorID]]
      $let[userID;$findUser[$message[0];true]]
      $let[user;$getUUID[$get[userID]]]

      $c[----------------------------------ONLY-IF---------------------------------]
      $onlyIf[$getUserVar[AgreedToTos;$get[author];false]==true;$callEmbed[agreeToTerms]]
      $onlyIf[$channelID==$getGuildVar[BotChannel;$guildID;$channelID];$getGlobalVar[BotChannelError]]
      $onlyIf[$checkContains[$getUserVar[rp-commandblocked;$get[user]];*;nervous]==false;$customError[722;nervous]]
      $onlyIf[$checkContains[$getUserVar[rp-blocked;$get[user]];$get[author]]!=true;$customError[722;nervous]]

      $c[-----------------------------------MAIN-----------------------------------]
      $let[message;$replace[$replace[$message;$message[0] ;];$message[0];]]

      $setVar[nervous-give;$get[author];$sum[$getVar[nervous-give;$get[author];0];1]]

      $if[$get[user]!=null;
        $if[$get[user]!=$get[author];
          $setVar[nervous-gotten;$get[user];$sum[$getVar[nervous-gotten;$get[user];0];1]]
        ]
      ]

      $color[$getVar[color;default]]
      $image[$callFunction[roleplay;nervous]]
      $if[$get[userID]!=$authorID;
        $let[msg;$i18n[$get[lang];message.roleplay.neutral.nervous.description]]
        $description[$replace[$replace[$get[msg];{{author}};**$if[$guildID!=;$nickname;$username]**;1];{{user}};**$username[$get[userID]]**;1]$if[$get[message]!=;\n"$get[message]"]]
        $footer[$replace[$replace[$i18n[$get[lang];message.roleplay.neutral.nervous.$if[$getVar[nervous-gotten;$get[author]]==1;footer.oneSingle;footer.one]];{{author}};$if[$guildID!=;$nickname;$username];1];{{amount}};$getVar[nervous-give;$get[author]];1] | $replace[$replace[$i18n[$get[lang];message.roleplay.neutral.nervous.footer.$if[$getVar[nervous-gotten;$get[user];0]==1;two;twoSingle]];{{amount}};$getVar[nervous-gotten;$get[user];0];-1];{{user}};$try[$nickname[$guildID;$get[userID]];$username[$get[userID]]];-1]]
      ;
        $let[msg;$i18n[$get[lang];message.roleplay.neutral.nervous.descriptionSingle]]
        $description[$replace[$replace[$get[msg];{{author}};**$if[$guildID!=;$nickname;$username]**;1];{{user}};**$username[$get[userID]]**;1]$if[$get[message]!=;\n"$get[message]"]]
        $footer[$replace[$replace[$i18n[$get[lang];message.roleplay.neutral.nervous.$if[$getVar[nervous-gotten;$get[author]]==1;footer.oneSingle;footer.one]];{{author}};$if[$guildID!=;$nickname;$username];1];{{amount}};$getVar[nervous-give;$get[author]];1]]
      ]
    `
  }
];

export default commands;
