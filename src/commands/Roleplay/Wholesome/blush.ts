import { Command } from "@/types"

const commands: Command[] = [
  {
    name: "blush",
    aliases: ["rp-blush"],
    description: "Show a blush",
    type: "messageCreate",
    module: "Roleplay",
    version: "1.0.0",
    sourcecode: "src/commands/Roleplay/Wholesome/blush.ts",
    documentation: "roleplay",
    usage: "blush {user} {message}",
    example: "blush @dark-lynn Aww don't say that.",
    code: `
      $c[------------------------------------LET-----------------------------------]
      $let[author;$getUserVar[uuid;$customEncrypt[encrypt;$authorID]]]
      $let[lang;$if[$getUserVar[language;$get[author]]!=;$getUserVar[language;$get[author]];$if[$guildID!=;$guildPreferredLocale;en-us]]]
      $let[userID;$findUser[$message[0];true]]
      $let[user;$getUserVar[uuid;$get[userID];null]]

      $get[lang]
      $c[----------------------------------ONLY-IF---------------------------------]
      $onlyIf[$getUserVar[AgreedToTos;$get[author];false]==true;$callEmbed[agreeToTerms]]
      $onlyIf[$channelID==$getGuildVar[BotChannel;$guildID;$channelID];$getGlobalVar[BotChannelError]]

      $onlyIf[$checkContains[$getUserVar[rp-commandblocked;$get[user]];*;blush]==false;$customError[722;blush]]
      $onlyIf[$checkContains[$getUserVar[rp-blocked;$get[user]];$get[author]]!=true;$customError[722;blush]]

      $c[-----------------------------------MAIN-----------------------------------]
      $let[message;$replace[$replace[$message;$message[0] ;];$message[0];]]
      $let[msg;$i18n[$get[lang];message.roleplay.wholesome.blush.description]]

      $if[$getUserVar[blush-give;$get[author]]==;$setUserVar[blush-give;$get[author];0]]
      $if[$getUserVar[blush-give;$get[author]]==;$if[$get[user]==null;$let[userAgree;false];$let[userAgree;true]$setUserVar[blush-give;$get[author];0]]]

      $setVar[blush-give;$get[author];$sum[$getVar[blush-give;$get[author]];1]]
      $if[$get[user]!=null;$setVar[blush-got;$get[user];$sum[$getVar[blush-got;$get[user]];1]]]

      $color[$getVar[color;default]]
      $image[$callFunction[roleplay;blush]]
      $description[$replace[$replace[$get[msg];{{author}};**$nickname**;1];{{user}};**$username[$get[userID]]**;1]$if[$get[message]!=;\n"$get[message]"]]
      $footer[$replace[$replace[$i18n[$get[lang];message.roleplay.wholesome.blush.$if[$getUserVar[blush-got;$get[author]]==1;footer.oneSingle;footer.one]];{{author}};$nickname;1];{{amount}};$getVar[blush-give;$get[author]];1] | $replace[$replace[$i18n[$get[lang];message.roleplay.wholesome.blush.$if[$getUserVar[blush-got;$get[user]]>=2;footer.two;footer.twoSingle]];{{amount}};$if[$get[userAgree]==true;$getVar[blush-got;$get[user]];0];1];{{user}};$nickname[$guildID;$get[userID]];1]]
    `
  }
]

export default commands;