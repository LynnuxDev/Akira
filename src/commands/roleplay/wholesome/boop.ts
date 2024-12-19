import { Command } from "@/types";

const commands: Command[] = [
  {
    name: 'boop',
    aliases: ['rp-boop'],
    description: 'Boop someone on the nose.',
    version: "1.0.0",
    type: 'messageCreate',
    module: 'roleplay',
    sourcecode: 'src/commands/roleplay/wholesome/boop.ts',
    example: 'boop @dark-lynn BOOP!',
    usage: 'boop <user> {message}',
    documentation: 'roleplay',
    code: `
      $c[------------------------------------LET-----------------------------------]
      $let[author;$getUUID[$authorID]]
      $let[lang;$getLang[$authorID]]
      $let[userID;$findUser[$message[0];true]]
      $let[user;$getUUID[$get[userID]]]

      $c[----------------------------------ONLY-IF---------------------------------]
      $onlyIf[$getUserVar[AgreedToTos;$get[author];false]==true;$callEmbed[agreeToTerms]]
      $onlyIf[$channelID==$getGuildVar[BotChannel;$guildID;$channelID];$getGlobalVar[BotChannelError]]
      $onlyIf[$get[user]!=$get[author];$customError[723;bite]]
      $onlyIf[$checkContains[$getUserVar[rp-commandblocked;$get[user]];*;boop]==false;$customError[722;boop]]
      $onlyIf[$checkContains[$getUserVar[rp-blocked;$get[user]];$get[author]]!=true;$customError[722;boop]]

      $c[-----------------------------------MAIN-----------------------------------]
      $let[message;$replace[$replace[$message;$message[0] ;];$message[0];]]

      $setVar[boop-give;$get[author];$sum[$getVar[boop-give;$get[author];0];1]]

      $if[$get[user]!=null;
        $setVar[boop-gotten;$get[user];$sum[$getVar[boop-gotten;$get[user];0];1]]
      ]

      $color[$getVar[color;default]]
      $image[$callFunction[roleplay;boop]]
      $if[$get[userID]!=$authorID;
        $let[msg;$i18n[$get[lang];message.roleplay.negative.boop.description]]
        $description[$replace[$replace[$get[msg];{{author}};**$if[$guildID!=;$nickname;$username]**;1];{{user}};**$username[$get[userID]]**;1]$if[$get[message]!=;\n"$get[message]"]]
        $footer[$replace[$replace[$i18n[$get[lang];message.roleplay.negative.boop.$if[$getVar[boop-gotten;$get[author]]==1;footer.oneSingle;footer.one]];{{author}};$if[$guildID!=;$nickname;$username];1];{{amount}};$getVar[boop-give;$get[author]];1] | $replace[$replace[$i18n[$get[lang];message.roleplay.negative.boop.footer.$if[$getVar[boop-gotten;$get[user];0]==1;two;twoSingle]];{{amount}};$getVar[boop-gotten;$get[user];0];-1];{{user}};$try[$nickname[$guildID;$get[userID]];$username[$get[userID]]];-1]]
      ;
        $let[msg;$i18n[$get[lang];message.roleplay.negative.boop.descriptionSingle]]
        $description[$replace[$replace[$get[msg];{{author}};**$if[$guildID!=;$nickname;$username]**;1];{{user}};**$username[$get[userID]]**;1]$if[$get[message]!=;\n"$get[message]"]]
        $footer[$replace[$replace[$i18n[$get[lang];message.roleplay.negative.boop.$if[$getVar[boop-gotten;$get[author]]==1;footer.oneSingle;footer.one]];{{author}};$if[$guildID!=;$nickname;$username];1];{{amount}};$getVar[boop-give;$get[author]];1]]
      ]
    `
  }
];