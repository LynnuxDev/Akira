import { Command } from "@/types"

const commands: Command[] = [
  {
    name: "cry",
    aliases: ["rp-cry"],
    description: "Show how sad you are.",
    type: "messageCreate",
    module: "Roleplay",
    version: "1.0.0",
    sourcecode: "src/commands/Roleplay/negative/cry.ts",
    documentation: "roleplay",
    usage: "cry {user} {message}",
    example: "cry @dark-lynn why did you do that.",
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

      $onlyIf[$checkContains[$getUserVar[rp-commandblocked;$get[user]];*;cry]==false;$customError[722;cry]]
      $onlyIf[$checkContains[$getUserVar[rp-blocked;$get[user]];$get[author]]!=true;$customError[722;cry]]

      $c[-----------------------------------MAIN-----------------------------------]
      $let[message;$replace[$replace[$message;$message[0] ;];$message[0];]]
      $let[msg;$i18n[$get[lang];message.roleplay.negative.cry.description]]

      $if[$getUserVar[cry-give;$get[author]]==;$setUserVar[cry-give;$get[author];0]]
      $if[$getUserVar[cry-give;$get[author]]==;$if[$get[user]==null;$let[userAgree;false];$let[userAgree;true]$setUserVar[cry-give;$get[author];0]]]

      $setVar[cry-give;$get[author];$sum[$getVar[cry-give;$get[author]];1]]
      $if[$get[user]!=null;$setVar[cry-got;$get[user];$sum[$getVar[cry-got;$get[user]];1]]]

      $color[$getVar[color;default]]
      $image[$callFunction[roleplay;cry]]
      $description[$replace[$replace[$get[msg];{{author}};**$nickname**;1];{{user}};**$username[$get[userID]]**;1]$if[$get[message]!=;\n"$get[message]"]]
      $footer[$replace[$replace[$i18n[$get[lang];message.roleplay.negative.cry.$if[$getUserVar[cry-got;$get[author]]==1;footer.oneSingle;footer.one]];{{author}};$nickname;1];{{amount}};$getVar[cry-give;$get[author]];1] | $replace[$replace[$i18n[$get[lang];message.roleplay.negative.cry.$if[$getUserVar[cry-got;$get[user]]>=2;footer.two;footer.twoSingle]];{{amount}};$if[$get[userAgree]==true;$getVar[cry-got;$get[user]];0];1];{{user}};$nickname[$guildID;$get[userID]];1]]
    `
  }
]

export default commands;