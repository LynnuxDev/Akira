import { Command } from "@/types"

const commands: Command[] = [
  {
    name: "hate",
    aliases: ["rp-hate"],
    description: "Show how sad you are.",
    type: "messageCreate",
    module: "Roleplay",
    version: "1.0.0",
    sourcecode: "src/commands/Roleplay/negative/hate.ts",
    documentation: "roleplay",
    usage: "hate <user> {message}",
    example: "hate @dark-lynn I hate you for doing this.",
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
      $onlyIf[$findUser[$message[1];true]!=$authorID];wrong usage of bite, bite a user.]

      $onlyIf[$checkContains[$getUserVar[rp-commandblocked;$get[user]];*;hate]==false;$customError[722;hate]]
      $onlyIf[$checkContains[$getUserVar[rp-blocked;$get[user]];$get[author]]!=true;$customError[722;hate]]

      $c[-----------------------------------MAIN-----------------------------------]
      $let[message;$replace[$replace[$message;$message[0] ;];$message[0];]]
      $let[msg;$i18n[$get[lang];message.roleplay.negative.hate.description]]

      $if[$getUserVar[hate-give;$get[author]]==;$setUserVar[hate-give;$get[author];0]]
      $if[$getUserVar[hate-give;$get[author]]==;$if[$get[user]==null;$let[userAgree;false];$let[userAgree;true]$setUserVar[hate-give;$get[author];0]]]

      $setVar[hate-give;$get[author];$sum[$getVar[hate-give;$get[author]];1]]
      $if[$get[user]!=null;$setVar[hate-got;$get[user];$sum[$getVar[hate-got;$get[user]];1]]]

      $color[$getVar[color;default]]
      $image[$callFunction[roleplay;hate]]
      $description[$replace[$replace[$get[msg];{{author}};**$nickname**;1];{{user}};**$username[$get[userID]]**;1]$if[$get[message]!=;\n"$get[message]"]]
      $footer[$replace[$replace[$i18n[$get[lang];message.roleplay.negative.hate.$if[$getUserVar[hate-got;$get[author]]==1;footer.oneSingle;footer.one]];{{author}};$nickname;1];{{amount}};$getVar[hate-give;$get[author]];1] | $replace[$replace[$i18n[$get[lang];message.roleplay.negative.hate.$if[$getUserVar[hate-got;$get[user]]>=2;footer.two;footer.twoSingle]];{{amount}};$if[$get[userAgree]==true;$getVar[hate-got;$get[user]];0];1];{{user}};$nickname[$guildID;$get[userID]];1]]
    `
  }
]

export default commands;