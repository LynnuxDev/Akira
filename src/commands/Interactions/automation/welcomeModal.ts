import { Command } from "@/types";

const WelcomeModal: Command[] = [{
  type: "interactionCreate",
  guildOnly: true,
  module: 'automation',
  version: "v1.0.0",
  code: `
    $textSplit[$customID;~]
    $onlyIf[$splitText[0]==welcomeModal;]
    $onlyIf[$splitText[1]==$authorID;$ephemeral $customError[716;welcomeModal]]

    $logger[Debug;Loading Modal]
    $modal[welcomeModalSubmit~$authorID;$guildName[$splitText[2]] Welcome Setup]
    $addTextInput[channel;Channel;Short;true;$guildSystemChannelID;$channelName[$channelID];1;101]
    $addTextInput[message;Welcome Message;Paragraph;true;Welcome to **%server.name%**, %author.mention%. %newline%You are the %member.count%th member.;$getGuildVar[welcomeMessage;$customEncrypt[encrypt;$guildID]];1;1999]
    $addTextInput[mention;Mention the user?;Short;true;$getGuildVar[welcomeMention;$customEncrypt[encrypt;$guildID]];;4;5]
    $addTextInput[type;Should it be a embed or message?;Short;true;message/embed;$getGuildVar[welcomeType;$customEncrypt[encrypt;$guildID]];5;7]
    $addTextInput[image;Image Url to attach to the welcome message.;Short;false;https://cdn.lynnux.xyz/images/DiscordDefaultBanner.webp;$getGuildVar[welcomeImage;$customEncrypt[encrypt;$guildID]];4;100]

    $showModal
    $logger[Debug;Showing Modal]
  `
}];

export default WelcomeModal;