import { Command } from "@/types";

const WelcomeModalSubmit: Command[] = [{
  type: "interactionCreate",
  allowedInteractionTypes: ['modal'],
  module: 'automation',
  guildOnly: true,
  version: "v1.0.0",
  code: `
    $textSplit[$customID;~]
    $onlyIf[$splitText[0]==welcomeModalSubmit;]
    $onlyIf[$splitText[1]==$authorID;$ephemeral $customError[716;welcomeModalSubmit]]

    $logger[Debug;Modal submitted]

    $onlyIf[$guildChannelExists[$guildID;$findChannel[$input[channel]]]==true;$ephemeral $customError[809;welcomeModalSubmit]]
    $onlyIf[$checkContains[$toLowercase[$input[mention]];true;false]==true;$ephemeral $customError[810;welcomeModalSubmit]]
    $onlyIf[$checkContains[$toLowercase[$input[type]];message;embed]==true;$ephemeral $customError[811;welcomeModalSubmit]]

    $if[$input[image]!=;
      $onlyIf[$isValidLink[$input[image]]==true;$ephemeral $customError[808;welcomeModalSubmit]]
      $let[request;$httpRequest[$input[image];GET]]
      $let[imgType;$httpGetHeader[Content-Type]]
      $onlyIf[$startsWith[$get[request];2]==true;$ephemeral $customError[808;welcomeModalSubmit]]
      $onlyIf[$startsWith[$get[imgType];image]==true;$ephemeral $customError[808;welcomeModalSubmit]]
      $textSplit[$get[imgType];/]
      $setGuildVar[welcomeImageType;$splitText[1];$customEncrypt[encrypt;$guildID]]
      $setGuildVar[welcomeImage;$input[image];$customEncrypt[encrypt;$guildID]]
      $addField[welcome Image:;;false]
      $if[$input[image]!=https://cdn.lynnux.xyz/images/DiscordDefaultBanner.webp;$image[$input[image]]]
    ;
      $setGuildVar[welcomeImageType;$getGlobalVar[welcomeImageType];$customEncrypt[encrypt;$guildID]]
      $setGuildVar[welcomeImage;$getGlobalVar[welcomeImage];$customEncrypt[encrypt;$guildID]]
    ]

    $getColor
    $author[Welcome Message Setup:]
    $thumbnail[$getGuildIcon[$guildID]]
    $description[This server welcome channel has been setup as following:]
    $addField[Message Example:;$applyPlaceholders[$input[message]];false]
    $addField[Welcome Channel:;<#$findChannel[$input[channel]]>;true]
    $addField[Welcome Type:;\`$toUppercase[$input[type]]\`;true]
    $addField[welcome Mention:;\`$replace[$replace[$toLowercase[$input[mention]];true;enabled;1];false;disabled;1]\`;true]
    $footer[use "$prefix test-welcome" to send a test join.]

    $setGuildVar[welcomeMention;$toLowercase[$input[mention]];$customEncrypt[encrypt;$guildID]]
    $setGuildVar[welcomeType;$input[type];$customEncrypt[encrypt;$guildID]]
    $setGuildVar[welcomeMessage;$toLowercase[$input[message]];$customEncrypt[encrypt;$guildID]]
    $setGuildVar[welcomeChannel;$toLowercase[$findChannel[$input[channel]]];$customEncrypt[encrypt;$guildID]]
    $setGuildVar[welcomeEnabled;true;$customEncrypt[encrypt;$guildID]]

  `
}];

export default WelcomeModalSubmit;