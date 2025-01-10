import { Command } from "@/types";

const WelcomeFirst: Command[] = [{
  type: "interactionCreate",
  module: 'automation',
  guildOnly: true,
  version: "v1.0.0",
  code: `
    $textSplit[$customID;~]

    $onlyIf[$splitText[0]==welcomeFirst;]
    $onlyIf[$splitText[1]==$authorID;$ephemeral $customError[716;welcomeFirst]]

    $interactionUpdate[
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

export default WelcomeFirst;