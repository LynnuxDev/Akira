import { Command } from '@/types';

const commands: Command[] = [
  {
    name: 'kiss',
    aliases: ['rp-kiss'],
    description: 'kiss someone',
    type: 'messageCreate',
    module: 'roleplay',
    version: '1.0.0',
    sourcecode: 'src/commands/Roleplay/Wholesome/kiss.ts',
    documentation: 'roleplay',
    usage: 'kiss <user> {message}',
    example: 'kiss @dark-lynn I love you',
    code: `
      $c[------------------------------------LET-----------------------------------]
      $let[author;$getUserVar[uuid;$customEncrypt[encrypt;$authorID]]]
      $let[lang;$if[$getUserVar[language;$get[author]]!=;$getUserVar[language;$get[author]];$if[$guildID!=;$guildPreferredLocale;en-us]]]
      $let[userID;$findUser[$message[0]]]
      $let[user;$getUserVar[uuid;$get[userID];null]]

      $c[----------------------------------ONLY-IF---------------------------------]
      $onlyIf[$getUserVar[AgreedToTos;$get[author];false]==true;$callEmbed[agreeToTerms]]
      $onlyIf[$channelID==$getGuildVar[BotChannel;$guildID;$channelID];$getGlobalVar[BotChannelError]]
      $onlyIf[$message!=;$customError[717;kiss]]
      $onlyIf[$findUser[$message[0]]!=$authorID;$customError[721;kiss]]
      $onlyIf[$checkContains[$getUserVar[rp-commandblocked;$get[user]];*;kiss]==false;$customError[722;kiss]]
      $onlyIf[$checkContains[$getUserVar[rp-blocked;$get[user]];$get[author]]!=true;$customError[722;kiss]]

      $c[-----------------------------------MAIN-----------------------------------]
      $let[message;$replace[$replace[$message;$message[0] ;];$message[0];]]
      $let[msg;$i18n[$get[lang];message.roleplay.wholesome.kiss.description]]
      $let[type;got kissed]

      $if[$getUserVar[kiss-give;$get[author]]==;$setUserVar[kiss-give;$get[author];0]]
      $if[$getUserVar[kiss-give;$get[author]]==;$if[$get[user]==null;$let[userAgree;false];$let[userAgree;true]$setUserVar[kiss-give;$get[author];0]]]

      $setVar[kiss-give;$get[author];$sum[$getVar[kiss-give;$get[author]];1]]
      $if[$get[user]!=null;$setVar[kiss-got;$get[user];$sum[$getVar[kiss-got;$get[user]];1]]]

      $color[$getVar[color;default]]
      $image[$callFunction[roleplay;kiss]]
      $description[$replace[$replace[$get[msg];{{author}};**$nickname**;1];{{user}};**$username[$get[userID]]**;1]$if[$get[message]!=;\n"$get[message]"]]
      $footer[$replace[$replace[$i18n[$get[lang];message.roleplay.wholesome.kiss.$if[$getUserVar[kiss-got;$get[author]]==1;footer.oneSingle;footer.one]];{{author}};$nickname;1];{{amount}};$getVar[kiss-give;$get[author]];1] | $replace[$replace[$i18n[$get[lang];message.roleplay.wholesome.kiss.$if[$getUserVar[kiss-got;$get[user]]>=2;footer.two;footer.twoSingle]];{{amount}};$if[$get[userAgree]==true;$getVar[kiss-got;$get[user]];0];1];{{user}};$nickname[$guildID;$get[userID]];1]]
    `
  }
];

export default commands;
