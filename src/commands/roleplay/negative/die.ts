import { Command } from "@/types"

const commands: Command[] = [
  {
    name: "die",
    aliases: ["rp-die"],
    description: "Show how sad you are.",
    type: "messageCreate",
    module: "Roleplay",
    version: "1.0.0",
    sourcecode: "src/commands/Roleplay/negative/die.ts",
    documentation: "roleplay",
    usage: "die {user} {message}",
    example: "die @dark-lynn Die Die Die.",
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

      $onlyIf[$checkContains[$getUserVar[rp-commandblocked;$get[user]];*;die]==false;$customError[722;die]]
      $onlyIf[$checkContains[$getUserVar[rp-blocked;$get[user]];$get[author]]!=true;$customError[722;die]]

      $c[-----------------------------------MAIN-----------------------------------]
      $let[message;$replace[$replace[$message;$message[0] ;];$message[0];]]
      $let[msg;$i18n[$get[lang];message.roleplay.negative.die.description]]

      $if[$getUserVar[die-give;$get[author]]==;$setUserVar[die-give;$get[author];0]]
      $if[$getUserVar[die-give;$get[author]]==;$if[$get[user]==null;$let[userAgree;false];$let[userAgree;true]$setUserVar[die-give;$get[author];0]]]

      $setVar[die-give;$get[author];$sum[$getVar[die-give;$get[author]];1]]
      $if[$get[user]!=null;$setVar[die-got;$get[user];$sum[$getVar[die-got;$get[user]];1]]]

      $color[$getVar[color;default]]
      $image[$callFunction[roleplay;die]]
      $description[$replace[$replace[$get[msg];{{author}};**$nickname**;1];{{user}};**$username[$get[userID]]**;1]$if[$get[message]!=;\n"$get[message]"]]
      $footer[$replace[$replace[$i18n[$get[lang];message.roleplay.negative.die.$if[$getUserVar[die-got;$get[author]]==1;footer.oneSingle;footer.one]];{{author}};$nickname;1];{{amount}};$getVar[die-give;$get[author]];1] | $replace[$replace[$i18n[$get[lang];message.roleplay.negative.die.$if[$getUserVar[die-got;$get[user]]>=2;footer.two;footer.twoSingle]];{{amount}};$if[$get[userAgree]==true;$getVar[die-got;$get[user]];0];1];{{user}};$nickname[$guildID;$get[userID]];1]]
    `
  }
]

export default commands;