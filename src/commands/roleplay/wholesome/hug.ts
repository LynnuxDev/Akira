import { Command } from "@/types";

const commands: Command[] = [
  {
    name: 'hug',
    aliases: ['rp-hug'],
    description: 'hug someone to stay warm.',
    version: "1.0.0",
    type: 'messageCreate',
    module: 'roleplay',
    sourcecode: 'src/commands/roleplay/wholesome/hug.ts',
    example: 'hug @dark-lynn Gimme a hug!',
    usage: 'hug <user> {message}',
    documentation: 'roleplay',
    code: `
      $c[------------------------------------LET-----------------------------------]
      $let[author;$getUUID[$authorID]]
      $let[lang;$getLang[$authorID]]
      $let[userID;$findUser[$message[0];true]]
      $let[user;$getUUID[$get[userID]]]

      $c[----------------------------------ONLY-IF---------------------------------]
      $onlyIf[$getUserVar[AgreedToTos;$get[author];false]==true;$callEmbed[agreeToTerms]]
      $onlyIf[$channelID==$getGuildVar[BotChannel;$guildID;$channelID];$getGlobalVar[BotChannelError]]
      $onlyIf[$get[user]!=$get[author];$customError[723;bite]]
      $onlyIf[$checkContains[$getUserVar[rp-commandblocked;$get[user]];*;hug]==false;$customError[722;hug]]
      $onlyIf[$checkContains[$getUserVar[rp-blocked;$get[user]];$get[author]]!=true;$customError[722;hug]]

      $c[-----------------------------------MAIN-----------------------------------]
      $let[message;$replace[$replace[$message;$message[0] ;];$message[0];]]

      $setVar[hug-give;$get[author];$sum[$getVar[hug-give;$get[author];0];1]]

      $if[$get[user]!=null;
        $if[$get[user]!=$get[author];
          $setVar[hug-gotten;$get[user];$sum[$getVar[hug-gotten;$get[user];0];1]]
        ]
      ]

      $color[$getVar[color;default]]
      $image[$callFunction[roleplay;hug]]
      $if[$get[userID]!=$authorID;
        $let[msg;$i18n[$get[lang];message.roleplay.wholesome.hug.description]]
        $description[$replace[$replace[$get[msg];{{author}};**$if[$guildID!=;$nickname;$username]**;1];{{user}};**$username[$get[userID]]**;1]$if[$get[message]!=;\n"$get[message]"]]
        $footer[$replace[$replace[$i18n[$get[lang];message.roleplay.wholesome.hug.$if[$getVar[hug-gotten;$get[author]]==1;footer.oneSingle;footer.one]];{{author}};$if[$guildID!=;$nickname;$username];1];{{amount}};$getVar[hug-give;$get[author]];1] | $replace[$replace[$i18n[$get[lang];message.roleplay.wholesome.hug.footer.$if[$getVar[hug-gotten;$get[user];0]==1;two;twoSingle]];{{amount}};$getVar[hug-gotten;$get[user];0];-1];{{user}};$try[$nickname[$guildID;$get[userID]];$username[$get[userID]]];-1]]
      ;
        $let[msg;$i18n[$get[lang];message.roleplay.wholesome.hug.descriptionSingle]]
        $description[$replace[$replace[$get[msg];{{author}};**$if[$guildID!=;$nickname;$username]**;1];{{user}};**$username[$get[userID]]**;1]$if[$get[message]!=;\n"$get[message]"]]
        $footer[$replace[$replace[$i18n[$get[lang];message.roleplay.wholesome.hug.$if[$getVar[hug-gotten;$get[author]]==1;footer.oneSingle;footer.one]];{{author}};$if[$guildID!=;$nickname;$username];1];{{amount}};$getVar[hug-give;$get[author]];1]]
      ]
    `
  }
];

export default commands;