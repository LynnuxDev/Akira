import { Command } from '@/types';

const commands: Command[] = [
  {
    name: 'bite',
    aliases: ['rp-bite'],
    description: 'Give them a bite',
    type: 'messageCreate',
    module: 'roleplay',
    version: '1.0.0',
    sourcecode: 'src/commands/Roleplay/negative/bite.ts',
    documentation: 'roleplay',
    usage: 'bite <user> {message}',
    example: 'bite @dark-lynn NEVER do that again.',
    code: `
      $c[------------------------------------LET-----------------------------------]
      $let[lang;$getLang[$authorID]]
      $let[userID;$getUUID[$findUser[$message[0];true]]]
      $c[----------------------------------ONLY-IF---------------------------------]
      $onlyIf[$getUserVar[AgreedToTos;$get[author];false]==true;$callEmbed[agreeToTerms]]
      $onlyIf[$channelID==$getGuildVar[BotChannel;$guildID;$channelID];$getGlobalVar[BotChannelError]]
      $onlyIf[$get[user]!=$get[author];$customError[723;bite]]

      $onlyIf[$checkContains[$getVar[rp-commandblocked;$get[user]];*;bite]==false;$customError[722;bite]]
      $onlyIf[$checkContains[$getVar[rp-blocked;$get[user]];$get[author]]!=true;$customError[722;bite]]

      $c[-----------------------------------MAIN-----------------------------------]
      $let[message;$replace[$replace[$message;$message[0] ;];$message[0];]]

      $setVar[bite-give;$get[author];$sum[$getVar[bite-give;$get[author];0];1]]

      $if[$get[user]!=null;
        $if[$get[user]!=$get[author];
          $setVar[bite-gotten;$get[user];$sum[$getVar[bite-gotten;$get[user];0];1]]
        ]
      ]

      $color[$getVar[color;default]]
      $image[$callFunction[roleplay;bite]]
      $if[$get[userID]!=$authorID;
        $let[msg;$i18n[$get[lang];message.roleplay.negative.bite.description]]
        $description[$replace[$replace[$get[msg];{{author}};**$if[$guildID!=;$nickname;$username]**;1];{{user}};**$username[$get[userID]]**;1]$if[$get[message]!=;\n"$get[message]"]]
        $footer[$replace[$replace[$i18n[$get[lang];message.roleplay.negative.bite.$if[$getVar[bite-gotten;$get[author]]==1;footer.oneSingle;footer.one]];{{author}};$if[$guildID!=;$nickname;$username];1];{{amount}};$getVar[bite-give;$get[author]];1] | $replace[$replace[$i18n[$get[lang];message.roleplay.negative.bite.footer.$if[$getVar[bite-gotten;$get[user];0]==1;two;twoSingle]];{{amount}};$getVar[bite-gotten;$get[user];0];-1];{{user}};$try[$nickname[$guildID;$get[userID]];$username[$get[userID]]];-1]]
      ;
        $let[msg;$i18n[$get[lang];message.roleplay.negative.bite.descriptionSingle]]
        $description[$replace[$replace[$get[msg];{{author}};**$if[$guildID!=;$nickname;$username]**;1];{{user}};**$username[$get[userID]]**;1]$if[$get[message]!=;\n"$get[message]"]]
        $footer[$replace[$replace[$i18n[$get[lang];message.roleplay.negative.bite.$if[$getVar[bite-gotten;$get[author]]==1;footer.oneSingle;footer.one]];{{author}};$if[$guildID!=;$nickname;$username];1];{{amount}};$getVar[bite-give;$get[author]];1]]

      ]
    `
  }
];

export default commands;
