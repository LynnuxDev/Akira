import { Command } from "@/types";

const TestWelcome: Command[] = [{
  name: 'test-welcome',
  aliases: ['testwelcome'],
  type: "messageCreate",
  description: "Test your welcome Messages.",
  module: "dev",
  sourcecode: "src/commands/automation/testWelcome.ts",
  version: "v1.0.0",
  guildOnly: true,
  code: `
    $onlyIf[$guildID!=;$customError[714;welcomesetup]]
    $onlyIF[$hasPerms[$guildID;$authorID;Administrator];$customError[720;welcomesetup]]
    $onlyIf[$getGuildVar[welcomeEnabled;$customEncrypt[encrypt;$guildID]]==true;not enabled]

    $let[message;$sendMessage[$getGuildVar[welcomeChannel;$customEncrypt[encrypt;$guildID]];
      $if[$getGuildVar[welcomeType;$customEncrypt[encrypt;$guildID]]==embed;
        $getColor
        $thumbnail[$userAvatar[$authorID]]
        $description[$applyPlaceholders[$getGuildVar[welcomeMessage;$customEncrypt[encrypt;$guildID]]]]
        $if[$getGuildVar[welcomeMention;$customEncrypt[encrypt;$guildID]]==true;<@$authorID>]
        $if[$getGuildVar[welcomeImage;$customEncrypt[encrypt;$guildID]]!=https://cdn.lynnux.xyz/images/DiscordDefaultBanner.webp;$image[$getGuildVar[welcomeImage;$customEncrypt[encrypt;$guildID]]]]
      ;$if[$getGuildVar[welcomeMention;$customEncrypt[encrypt;$guildID]]==true;<@$authorID>\n\n]$applyPlaceholders[$getGuildVar[welcomeMessage;$customEncrypt[encrypt;$guildID]]]$if[$getGuildVar[welcomeImage;$customEncrypt[encrypt;$guildID]]!=https://cdn.lynnux.xyz/images/DiscordDefaultBanner.webp;$!attachment[$getGuildVar[welcomeImage;$customEncrypt[encrypt;$guildID]];$guildName Welcome Image.$getGuildVar[welcomeImageType;$customEncrypt[encrypt;$guildID]]]]]]
    ]

    $if[$getGuildVar[welcomeChannel;$customEncrypt[encrypt;$guildID]]!=$channelID;
      $getColor
      $title[Message send!]
      $description[A test message was send in <#$getGuildVar[welcomeChannel;$customEncrypt[encrypt;$guildID]]>.]
    ]
  `
}];

export default TestWelcome;