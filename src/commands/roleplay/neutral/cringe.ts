import { Command } from '@/types';

const commands: Command[] = [
  {
    name: 'cringe',
    aliases: ['rp-cringe'],
    description: 'cringe someone',
    type: 'messageCreate',
    module: 'roleplay',
    version: '1.0.0',
    sourcecode: 'src/commands/Roleplay/Wholesome/cringe.ts',
    documentation: 'roleplay',
    usage: 'cringe {user} {message}',
    example: 'cringe @dark-lynn tf was that.',
    code: `
      $c[------------------------------------LET-----------------------------------]
      $let[author;$getUUID[$authorID]]
      $let[lang;$getLang[$authorID]]
      $let[userID;$findUser[$message[0];true]]
      $let[user;$getUUID[$get[userID]]]

      $c[----------------------------------ONLY-IF---------------------------------]
      $onlyIf[$getUserVar[AgreedToTos;$get[author];false]==true;$callEmbed[agreeToTerms]]
      $onlyIf[$channelID==$getGuildVar[BotChannel;$guildID;$channelID];$getGlobalVar[BotChannelError]]
      $onlyIf[$checkContains[$getUserVar[rp-commandblocked;$get[user]];*;cringe]==false;$customError[722;cringe]]
      $onlyIf[$checkContains[$getUserVar[rp-blocked;$get[user]];$get[author]]!=true;$customError[722;cringe]]

      $c[-----------------------------------MAIN-----------------------------------]
      $let[message;$replace[$replace[$message;$message[0] ;];$message[0];]]

      $setVar[cringe-give;$get[author];$sum[$getVar[cringe-give;$get[author];0];1]]

      $if[$get[user]!=null;
        $if[$get[user]!=$get[author];
          $setVar[cringe-gotten;$get[user];$sum[$getVar[cringe-gotten;$get[user];0];1]]
        ]
      ]

      $color[$getVar[color;default]]
      $image[$callFunction[roleplay;cringe]]
      $if[$get[userID]!=$authorID;
        $let[msg;$i18n[$get[lang];message.roleplay.neutral.cringe.description]]
        $description[$replace[$replace[$get[msg];{{author}};**$if[$guildID!=;$nickname;$username]**;1];{{user}};**$username[$get[userID]]**;1]$if[$get[message]!=;\n"$get[message]"]]
        $footer[$replace[$replace[$i18n[$get[lang];message.roleplay.neutral.cringe.$if[$getVar[cringe-gotten;$get[author]]==1;footer.oneSingle;footer.one]];{{author}};$if[$guildID!=;$nickname;$username];1];{{amount}};$getVar[cringe-give;$get[author]];1] | $replace[$replace[$i18n[$get[lang];message.roleplay.neutral.cringe.footer.$if[$getVar[cringe-gotten;$get[user];0]==1;two;twoSingle]];{{amount}};$getVar[cringe-gotten;$get[user];0];-1];{{user}};$try[$nickname[$guildID;$get[userID]];$username[$get[userID]]];-1]]
      ;
        $let[msg;$i18n[$get[lang];message.roleplay.neutral.cringe.descriptionSingle]]
        $description[$replace[$replace[$get[msg];{{author}};**$if[$guildID!=;$nickname;$username]**;1];{{user}};**$username[$get[userID]]**;1]$if[$get[message]!=;\n"$get[message]"]]
        $footer[$replace[$replace[$i18n[$get[lang];message.roleplay.neutral.cringe.$if[$getVar[cringe-gotten;$get[author]]==1;footer.oneSingle;footer.one]];{{author}};$if[$guildID!=;$nickname;$username];1];{{amount}};$getVar[cringe-give;$get[author]];1]]
      ]
    `
  }
];

export default commands;
