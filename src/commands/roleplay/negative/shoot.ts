import { Command } from "@/types"

const commands: Command[] = [
  {
    name: "shoot",
    aliases: ["rp-shoot"],
    description: "Show how sad you are.",
    type: "messageCreate",
    module: "Roleplay",
    version: "1.0.0",
    sourcecode: "src/commands/Roleplay/negative/shoot.ts",
    documentation: "roleplay",
    usage: "shoot <user> {message}",
    example: "shoot @dark-lynn HeadShot.",
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

      $onlyIf[$checkContains[$getVar[rp-commandblocked;$get[user]];*;shoot]==false;$customError[722;shoot]]
      $onlyIf[$checkContains[$getVar[rp-blocked;$get[user]];$get[author]]!=true;$customError[722;shoot]]

      $c[-----------------------------------MAIN-----------------------------------]
      $let[message;$replace[$replace[$message;$message[0] ;];$message[0];]]

      $setVar[shoot-give;$get[author];$sum[$getVar[shoot-give;$get[author];0];1]]

      $if[$get[user]!=null;
        $setVar[shoot-gotten;$get[user];$sum[$getVar[shoot-gotten;$get[user];0];1]]
      ]

      $color[$getVar[color;default]]
      $image[$callFunction[roleplay;shoot]]
      $if[$get[userID]!=$authorID;
        $let[msg;$i18n[$get[lang];message.roleplay.negative.shoot.description]]
        $description[$replace[$replace[$get[msg];{{author}};**$if[$guildID!=;$nickname;$username]**;1];{{user}};**$username[$get[userID]]**;1]$if[$get[message]!=;\n"$get[message]"]]
        $footer[$replace[$replace[$i18n[$get[lang];message.roleplay.negative.shoot.$if[$getVar[shoot-gotten;$get[author]]==1;footer.oneSingle;footer.one]];{{author}};$if[$guildID!=;$nickname;$username];1];{{amount}};$getVar[shoot-give;$get[author]];1] | $replace[$replace[$i18n[$get[lang];message.roleplay.negative.shoot.footer.$if[$getVar[shoot-gotten;$get[user];0]==1;two;twoSingle]];{{amount}};$getVar[shoot-gotten;$get[user];0];-1];{{user}};$try[$nickname[$guildID;$get[userID]];$username[$get[userID]]];-1]]
      ;
        $let[msg;$i18n[$get[lang];message.roleplay.negative.shoot.descriptionSingle]]
        $description[$replace[$replace[$get[msg];{{author}};**$if[$guildID!=;$nickname;$username]**;1];{{user}};**$username[$get[userID]]**;1]$if[$get[message]!=;\n"$get[message]"]]
        $footer[$replace[$replace[$i18n[$get[lang];message.roleplay.negative.shoot.$if[$getVar[shoot-gotten;$get[author]]==1;footer.oneSingle;footer.one]];{{author}};$if[$guildID!=;$nickname;$username];1];{{amount}};$getVar[shoot-give;$get[author]];1]]

      ]
    `
  }
]

export default commands;