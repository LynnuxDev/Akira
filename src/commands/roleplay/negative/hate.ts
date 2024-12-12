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
      $let[user;$getUserVar[uuid;$customEncrypt[encrypt;$get[userID]]]]

      $c[----------------------------------ONLY-IF---------------------------------]
      $onlyIf[$getUserVar[AgreedToTos;$get[author];false]==true;$callEmbed[agreeToTerms]]
      $onlyIf[$channelID==$getGuildVar[BotChannel;$guildID;$channelID];$getGlobalVar[BotChannelError]]
      $onlyIf[$findUser[$message[1];true]!=$authorID];wrong usage of bite, bite a user.]

      $onlyIf[$checkContains[$getVar[rp-commandblocked;$get[user]];*;hate]==false;$customError[722;hate]]
      $onlyIf[$checkContains[$getVar[rp-blocked;$get[user]];$get[author]]!=true;$customError[722;hate]]

      $c[-----------------------------------MAIN-----------------------------------]
      $let[message;$replace[$replace[$message;$message[0] ;];$message[0];]]

      $setVar[hate-give;$get[author];$sum[$getVar[hate-give;$get[author];0];1]]

      $if[$get[user]!=null;
        $setVar[hate-gotten;$get[user];$sum[$getVar[hate-gotten;$get[user];0];1]]
      ]

      $color[$getVar[color;default]]
      $image[$callFunction[roleplay;hate]]
      $if[$get[userID]!=$authorID;
        $let[msg;$i18n[$get[lang];message.roleplay.negative.hate.description]]
        $description[$replace[$replace[$get[msg];{{author}};**$if[$guildID!=;$nickname;$username]**;1];{{user}};**$username[$get[userID]]**;1]$if[$get[message]!=;\n"$get[message]"]]
        $footer[$replace[$replace[$i18n[$get[lang];message.roleplay.negative.hate.$if[$getVar[hate-gotten;$get[author]]==1;footer.oneSingle;footer.one]];{{author}};$if[$guildID!=;$nickname;$username];1];{{amount}};$getVar[hate-give;$get[author]];1] | $replace[$replace[$i18n[$get[lang];message.roleplay.negative.hate.footer.$if[$getVar[hate-gotten;$get[user];0]==1;two;twoSingle]];{{amount}};$getVar[hate-gotten;$get[user];0];-1];{{user}};$try[$nickname[$guildID;$get[userID]];$username[$get[userID]]];-1]]
      ;
        $let[msg;$i18n[$get[lang];message.roleplay.negative.hate.descriptionSingle]]
        $description[$replace[$replace[$get[msg];{{author}};**$if[$guildID!=;$nickname;$username]**;1];{{user}};**$username[$get[userID]]**;1]$if[$get[message]!=;\n"$get[message]"]]
        $footer[$replace[$replace[$i18n[$get[lang];message.roleplay.negative.hate.$if[$getVar[hate-gotten;$get[author]]==1;footer.oneSingle;footer.one]];{{author}};$if[$guildID!=;$nickname;$username];1];{{amount}};$getVar[hate-give;$get[author]];1]]

      ]
    `
  }
]

export default commands;