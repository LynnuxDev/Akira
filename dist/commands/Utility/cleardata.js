"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commands = [
    {
        name: "cleardata",
        aliases: ['removedata'],
        type: "messageCreate",
        description: "Clear all your Akira data. ~ !THIS CANNOT BE UNDONE!",
        module: "Utility",
        sourcecode: "/SRC/commands/utility/cleardata.js",
        documentation: "cleardata",
        usage: "cleardata",
        example: "cleardata",
        version: "1.0.0",
        code: `
      $title[Are you sure you?]
      $description[Are you sure you want me to forget who you are?\nThis will mean i will forget every interaction we had.]
      $addField[I will forget:;- If you agreed to the [terms\\](https://akira.lynnux.xyz/terms) and [policy\\](https://akira.lynnux.xyz/policy).\n- Every roleplay interaction you had.\n- Your money, info and stats for my economy.]
      $footer[I will also leave any servers you own.]
      $color[$getGlobalVar[color]]
      $addActionRow
      $addButton[cleardata_0~$authorID;Nevermind;Secondary]
      $addButton[cleardata_1~$authorID;Delete my data;Danger]
    `
    },
    {
        type: "interactionCreate",
        code: `
      $textSplit[$customID;~]
      $onlyIf[$startsWith[$splitText[0];cleardata]==true;]
      $onlyIf[$authorID==$splitText[1];
        $jsonLoad[result;$readFile[./files/errors.json]]
        $ephemeral
        $interactionReply[
          $color[$getGlobalVar[colorError]]
          $footer[Error code: "716" | Meaning: "$env[result;716;meaning]"]
          $arrayLoad[title;,;$env[result;716;title]]
          $title[$replace[$replace[$replace[$arrayRandomValue[title];";;2];\\];;1];[;;1]]
          $description[$env[result;716;description]]
        ]
      ]
      $switch[$splitText[0];
        $case[cleardata_0;
          $interactionUpdate[
            $color[$getGlobalVar[color]]
            $title[You.. You changed your mind?]
            $description[I’m happy you decided to keep your data as it is.\nI’m committed to protecting your information and ensuring your privacy.\nYou can see how my developers handle your data [here\\](https://akira.lynnux.xyz/policy).\nAnd don’t worry—I’m fully [GDPR\\](https://gdpr-info.eu/) compliant!]
          ]
          $wait[1m]
          $interactionDelete
        ]
        $case[cleardata_1;
          $interactionUpdate[
            $title[Oh no, all done.]
            $color[#633A63]
            $description[I’ve gone ahead and cleared your data as requested.\nYour privacy means a lot to me, and I’m fully [GDPR\\](https://gdpr-info.eu/) compliant.\nIf you ever have questions or need assistance in the future, you can can contact my developers [here\\](https://lynnux.xyz/#contact).\nI’ll be here if you need me!]
          ]
          $wait[1m]
          $interactionDelete
          $deleteUserVar[name;user ID?]
        ]
      ]
    `
    }
];
exports.default = commands;
//# sourceMappingURL=cleardata.js.map