"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commands = [
    {
        type: "interactionCreate",
        description: "Closes the embed/message.",
        module: "Global-Interaction",
        sourcecode: "/src/commands/Global-Interactions/settings/agreedToTos.ts",
        version: "1.0.0",
        code: `
      $textSplit[$customID;-]

      $onlyIf[$toLowerCase[$splitText[0]]==acceptterms;]
      $onlyIf[$toLowerCase[$splitText[1]]==$authorID;]

      $try[
        $interactionUpdate[
          $color[$getGlobalVar[color]]
          $title[I'm looking forward to interacting with you.]
          $description[Thanks for confirming that you've read and accepted our terms and policies. You're all set!]
        ]
      ;
        $editMessage[$channelID;$messageID;
          $color[$getGlobalVar[color]]
          $title[I'm looking forward to interacting with you.]
          $description[Thanks for confirming that you've read and accepted our terms and policies. You're all set!]
        ]
      ]

      $let[author;$callFunction[customencrypt;encrypt;$authorID]]

      $setUserVar[AgreedToTos;true;$get[author]]
      $setUserVar[uuid;$randomUUID;$get[author]]

      $wait[7s]
      $try[$interactionDelete;$deleteMessage[$channelID;$messageID]]
    `
    }
];
exports.default = commands;
//# sourceMappingURL=agreedToTos.js.map