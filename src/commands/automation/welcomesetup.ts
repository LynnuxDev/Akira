import { Command } from '@/types';

const WelcomeSetup: Command[] = [{
  name: 'welcomesetup',
  aliases: ['welcome-setup','setup-welcome','setupwelcome'],
  type: 'messageCreate',
  documentation: 'welcomesetup',
  example: 'welcomesetup',
  usage: 'welcomesetup',
  description: 'Setup Akira welcome message.',
  module: 'automation',
  sourcecode: 'src/commands/automation/welcomesetup.ts',
  version: 'v1.0.0',
  code: `
    $onlyIf[$guildID!=;$customError[714;welcomesetup]]
    $onlyIF[$hasPerms[$guildID;$authorID;Administrator];$customError[720;welcomesetup]]

    $if[$getGuildVar[welcomeEnabled;$customEncrypt[encrypt;$guildID]]==true;
      $let[respond;true]
      $getColor
      $author[Welcome Message Setup:]
      $thumbnail[$getGuildIcon[$guildID]]
      $description[This server seems to already have welcome messages setup, do you want to set it up again?\n\n$smallText[This will overwrite your current setup and cannot be undone!]]
      $addActionRow
      $addButton[welcomeFirst~$authorID~$guildID;Yes;Primary]
      $addButton[close~$authorID~$messageID;no;Secondary]
    ]

    $if[$get[respond]!=true;
      $getColor
      $author[Welcome Message Setup:]
      $thumbnail[$getGuildIcon[$guildID]]
      $description[Before we start, would you like to use messages or a modal to setup welcome messages?]
      $addActionRow
      $addButton[welcomeModal~$authorID~$guildID;Modal;Primary]
      $addButton[welcomeMessage~$authorID~$guildID;Messages;Secondary]
      $addButton[close~$authorID~$messageID;Close;Danger]
    ]
  `
}];

export default WelcomeSetup;

/**
      $let[respond;true]
      $getColor
      $author[Welcome Message Setup:]
      $thumbnail[$getGuildIcon[$guildID]]
      $description[First things first, what channel would you want me to welcome new members in?\n\n$smallText[Respond with either a channel mention or use the id.]]
      $footer[This request will expire in 1 minute.]
      $let[channelRequest;$awaitMessage[$channelID;channelQuestion;$if[$env[channelQuestion]==;$let[channelRespond;false];$if[$guildChannelExists[$guildID;$findChannel[$env[channelQuestion]]]==true;$let[channelRespond;$findChannel[$env[channelQuestion]]];$let[channelRespond;invalid]]];1m]]
 */