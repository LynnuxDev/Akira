import { Command } from '@/types';

const commands: Command[] = [
  {
    name: 'kill',
    aliases: ['rp-kill'],
    description: 'Show how sad you are.',
    type: 'messageCreate',
    module: 'roleplay',
    version: '1.0.0',
    sourcecode: 'src/commands/Roleplay/negative/kill.ts',
    documentation: 'roleplay',
    usage: 'kill <user> {message}',
    example: 'kill @dark-lynn Come here so i can kill you.',
    code: `
      $c[------------------------------------LET-----------------------------------]
      $let[author;$getUserVar[uuid;$customEncrypt[encrypt;$authorID]]]
      $let[lang;$if[$getUserVar[language;$get[author]]!=;$getUserVar[language;$get[author]];$if[$guildID!=;$guildPreferredLocale;en-us]]]
      $let[userID;$findUser[$message[0];true]]
      $let[user;$getUserVar[uuid;$customEncrypt[encrypt;$get[userID]]]]

      $c[----------------------------------ONLY-IF---------------------------------]
      $onlyIf[$getUserVar[AgreedToTos;$get[author];false]==true;$callEmbed[agreeToTerms]]
      $onlyIf[$channelID==$getGuildVar[BotChannel;$guildID;$channelID];$getGlobalVar[BotChannelError]]
      $onlyIf[$get[user]!=$get[author];$customError[723;bite]]

      $onlyIf[$checkContains[$getVar[rp-commandblocked;$get[user]];*;kill]==false;$customError[722;kill]]
      $onlyIf[$checkContains[$getVar[rp-blocked;$get[user]];$get[author]]!=true;$customError[722;kill]]

      $c[-----------------------------------MAIN-----------------------------------]
      $let[message;$replace[$replace[$message;$message[0] ;];$message[0];]]

      $setVar[kill-give;$get[author];$sum[$getVar[kill-give;$get[author];0];1]]

      $if[$get[user]!=null;
        $setVar[kill-gotten;$get[user];$sum[$getVar[kill-gotten;$get[user];0];1]]
      ]

      $color[$getVar[color;default]]
      $image[$callFunction[roleplay;kill]]
      $if[$get[userID]!=$authorID;
        $let[msg;$i18n[$get[lang];message.roleplay.negative.kill.description]]
        $description[$replace[$replace[$get[msg];{{author}};**$if[$guildID!=;$nickname;$username]**;1];{{user}};**$username[$get[userID]]**;1]$if[$get[message]!=;\n"$get[message]"]]
        $footer[$replace[$replace[$i18n[$get[lang];message.roleplay.negative.kill.$if[$getVar[kill-gotten;$get[author]]==1;footer.oneSingle;footer.one]];{{author}};$if[$guildID!=;$nickname;$username];1];{{amount}};$getVar[kill-give;$get[author]];1] | $replace[$replace[$i18n[$get[lang];message.roleplay.negative.kill.footer.$if[$getVar[kill-gotten;$get[user];0]==1;two;twoSingle]];{{amount}};$getVar[kill-gotten;$get[user];0];-1];{{user}};$try[$nickname[$guildID;$get[userID]];$username[$get[userID]]];-1]]
      ;
        $let[msg;$i18n[$get[lang];message.roleplay.negative.kill.descriptionSingle]]
        $description[$replace[$replace[$get[msg];{{author}};**$if[$guildID!=;$nickname;$username]**;1];{{user}};**$username[$get[userID]]**;1]$if[$get[message]!=;\n"$get[message]"]]
        $footer[$replace[$replace[$i18n[$get[lang];message.roleplay.negative.kill.$if[$getVar[kill-gotten;$get[author]]==1;footer.oneSingle;footer.one]];{{author}};$if[$guildID!=;$nickname;$username];1];{{amount}};$getVar[kill-give;$get[author]];1]]

      ]
    `
  }
];

export default commands;
