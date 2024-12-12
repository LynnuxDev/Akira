import { Command } from "@/types"

const commands: Command[] = [
  {
    name: "kill",
    aliases: ["rp-kill"],
    description: "Show how sad you are.",
    type: "messageCreate",
    module: "Roleplay",
    version: "1.0.0",
    sourcecode: "src/commands/Roleplay/negative/kill.ts",
    documentation: "roleplay",
    usage: "kill <user> {message}",
    example: "kill @dark-lynn Come here so i can kill you.",
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

      $onlyIf[$checkContains[$getUserVar[rp-commandblocked;$get[user]];*;kill]==false;$customError[722;kill]]
      $onlyIf[$checkContains[$getUserVar[rp-blocked;$get[user]];$get[author]]!=true;$customError[722;kill]]

      $c[-----------------------------------MAIN-----------------------------------]
      $let[message;$replace[$replace[$message;$message[0] ;];$message[0];]]
      $let[msg;$i18n[$get[lang];message.roleplay.negative.kill.description]]

      $if[$getUserVar[kill-give;$get[author]]==;$setUserVar[kill-give;$get[author];0]]
      $if[$getUserVar[kill-give;$get[author]]==;$if[$get[user]==null;$let[userAgree;false];$let[userAgree;true]$setUserVar[kill-give;$get[author];0]]]

      $setVar[kill-give;$get[author];$sum[$getVar[kill-give;$get[author]];1]]
      $if[$get[user]!=null;$setVar[kill-got;$get[user];$sum[$getVar[kill-got;$get[user]];1]]]

      $color[$getVar[color;default]]
      $image[$callFunction[roleplay;kill]]
      $description[$replace[$replace[$get[msg];{{author}};**$nickname**;1];{{user}};**$username[$get[userID]]**;1]$if[$get[message]!=;\n"$get[message]"]]
      $footer[$replace[$replace[$i18n[$get[lang];message.roleplay.negative.kill.$if[$getUserVar[kill-got;$get[author]]==1;footer.oneSingle;footer.one]];{{author}};$nickname;1];{{amount}};$getVar[kill-give;$get[author]];1] | $replace[$replace[$i18n[$get[lang];message.roleplay.negative.kill.$if[$getUserVar[kill-got;$get[user]]>=2;footer.two;footer.twoSingle]];{{amount}};$if[$get[userAgree]==true;$getVar[kill-got;$get[user]];0];1];{{user}};$nickname[$guildID;$get[userID]];1]]
    `
  }
]

export default commands;