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
    type: "interactionCreate",
    description: "Closes the embed/message.",
    module: "Global-Interaction",
    sourcecode: "/src/commands/Global-Interactions/settings/agreedToTos.ts",
    version: "1.0.0",
    code: `
      $textSplit[$customID;-]
      $let[lang;nl]

      $onlyIf[$toLowerCase[$splitText[0]]==acceptterms;]
      $onlyIf[$toLowerCase[$splitText[1]]==$authorID;]

      $try[
        $interactionUpdate[
          $color[$getGlobalVar[color]]
          $title[$i18n[$get[lang];interactions.settings.agreedtoterms.success-title]]
          $description[$i18n[$get[lang];interactions.settings.agreedtoterms.success-description]]
        ]
      ;
        $editMessage[$channelID;$messageID;
          $color[$getGlobalVar[color]]
          $title[$i18n[$get[lang];interactions.settings.agreedtoterms.success-title]]
          $description[$i18n[$get[lang];interactions.settings.agreedtoterms.success-description]]
        ]
      ]

      $let[author;$customEncrypt[encrypt;$authorID]]

      $setUserVar[AgreedToTos;true;$get[author]]
      $setUserVar[uuid;$randomUUID;$get[author]]

      $wait[7s]
      $try[$interactionDelete;$deleteMessage[$channelID;$messageID]]
    `
  }
]
export default commands;