interface Command {
  name?: string;
  aliases?: string[];
  type: string;
  description: string;
  module: string;
  sourcecode: string;
  documentation?: string;
  usage?: string;
  example?: string;
  version: string;
  code: string;
}

const commands: Command[] = [
  {
    name: "hug",
    aliases: ["rp-hug"],
    description: "Show a hug",
    type: "messageCreate",
    module: "Roleplay",
    version: "1.0.0",
    sourcecode: "src/commands/Roleplay/Wholesome/hug.ts",
    documentation: "roleplay",
    usage: "hug {user} {message}",
    example: "hug @dark-lynn Aww don't say that.",
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

      $onlyIf[$checkContains[$getUserVar[rp-commandblocked;$get[user]];*;hug]==false;$customError[722;hug]]
      $onlyIf[$checkContains[$getUserVar[rp-blocked;$get[user]];$get[author]]!=true;$customError[722;hug]]

      $c[-----------------------------------MAIN-----------------------------------]
      $let[message;$replace[$replace[$message;$message[0] ;];$message[0];]]
      $let[msg;$i18n[$get[lang];message.roleplay.wholesome.hug.description]]

      $if[$getUserVar[hug-give;$get[author]]==;$setUserVar[hug-give;$get[author];0]]
      $if[$getUserVar[hug-give;$get[author]]==;$if[$get[user]==null;$let[userAgree;false];$let[userAgree;true]$setUserVar[hug-give;$get[author];0]]]

      $setVar[hug-give;$get[author];$sum[$getVar[hug-give;$get[author]];1]]
      $if[$get[user]!=null;$setVar[hug-got;$get[user];$sum[$getVar[hug-got;$get[user]];1]]]

      $color[$getVar[color;default]]
      $image[$callFunction[roleplay;hug]]
      $description[$replace[$replace[$get[msg];{{author}};**$nickname**;1];{{user}};**$username[$get[userID]]**;1]$if[$get[message]!=;\n"$get[message]"]]
      $footer[$replace[$replace[$i18n[$get[lang];message.roleplay.wholesome.hug.$if[$getUserVar[hug-got;$get[author]]==1;footer.oneSingle;footer.one]];{{author}};$nickname;1];{{amount}};$getVar[hug-give;$get[author]];1] | $replace[$replace[$i18n[$get[lang];message.roleplay.wholesome.hug.$if[$getUserVar[hug-got;$get[user]]>=2;footer.two;footer.twoSingle]];{{amount}};$if[$get[userAgree]==true;$getVar[hug-got;$get[user]];0];1];{{user}};$nickname[$guildID;$get[userID]];1]]
    `
  }
]

export default commands;