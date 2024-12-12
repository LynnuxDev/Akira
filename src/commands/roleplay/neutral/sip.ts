import { Command } from "@/types"

const commands: Command[] = [
  {
    name: "sip",
    aliases: ["rp-sip", "drink", "rp-drink"],
    description: "sip",
    type: "messageCreate",
    module: "Roleplay",
    version: "1.0.0",
    sourcecode: "src/commands/Roleplay/neutral/sip.ts",
    documentation: "roleplay",
    usage: "sip {user} {message}",
    example: "sip @dark-lynn Yikes.",
    code: `
      $c[------------------------------------LET-----------------------------------]
      $let[author;$getUserVar[uuid;$customEncrypt[encrypt;$authorID]]]
      $let[lang;$if[$getUserVar[language;$get[author]]!=;$getUserVar[language;$get[author]];$if[$guildID!=;$guildPreferredLocale;en-us]]]
      $let[userID;$findUser[$message[0];true]]
      $let[user;$getUserVar[uuid;$customEncrypt[encrypt;$get[userID]]]]

      $c[----------------------------------ONLY-IF---------------------------------]
      $onlyIf[$getUserVar[AgreedToTos;$get[author];false]==true;$callEmbed[agreeToTerms]]
      $onlyIf[$channelID==$getGuildVar[BotChannel;$guildID;$channelID];$getGlobalVar[BotChannelError]]

      $onlyIf[$checkContains[$getVar[rp-commandblocked;$get[user]];*;sip]==false;$customError[722;sip]]
      $onlyIf[$checkContains[$getVar[rp-blocked;$get[user]];$get[author]]!=true;$customError[722;sip]]

      $c[-----------------------------------MAIN-----------------------------------]
      $let[message;$replace[$replace[$message;$message[0] ;];$message[0];]]

      $setVar[sip-give;$get[author];$sum[$getVar[sip-give;$get[author];0];1]]

      $if[$get[user]!=null;
        $setVar[sip-gotten;$get[user];$sum[$getVar[sip-gotten;$get[user];0];1]]
      ]

      $color[$getVar[color;default]]
      $image[$callFunction[roleplay;sip]]
      $if[$get[userID]!=$authorID;
        $let[msg;$i18n[$get[lang];message.roleplay.neutral.sip.description]]
        $description[$replace[$replace[$get[msg];{{author}};**$nickname**;1];{{user}};**$username[$get[userID]]**;1]$if[$get[message]!=;\n"$get[message]"]]
        $footer[$replace[$replace[$i18n[$get[lang];message.roleplay.neutral.sip.$if[$getVar[sip-gotten;$get[author]]==1;footer.oneSingle;footer.one]];{{author}};$nickname;1];{{amount}};$getVar[sip-give;$get[author]];1] | $replace[$replace[$i18n[$get[lang];message.roleplay.neutral.sip.footer.$if[$getVar[sip-gotten;$get[user];0]==1;two;twoSingle]];{{amount}};$getVar[sip-gotten;$get[user];0];-1];{{user}};$nickname[$guildID;$get[userID]];-1]]
      ;
        $let[msg;$i18n[$get[lang];message.roleplay.neutral.sip.descriptionSingle]]
        $description[$replace[$replace[$get[msg];{{author}};**$nickname**;1];{{user}};**$username[$get[userID]]**;1]$if[$get[message]!=;\n"$get[message]"]]
        $footer[$replace[$replace[$i18n[$get[lang];message.roleplay.neutral.sip.$if[$getVar[sip-gotten;$get[author]]==1;footer.oneSingle;footer.one]];{{author}};$nickname;1];{{amount}};$getVar[sip-give;$get[author]];1]]

      ]
    `
  }
]

export default commands;