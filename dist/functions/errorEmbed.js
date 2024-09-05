"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = [
    {
        name: "customError",
        params: ["errorid", "origin"],
        code: `
      $jsonLoad[result;$readFile[./files/errors.json]]
      $let[origin;$env[origin]]
      $let[error;$env[errorid]]

      $interactionReply
      $color[$getGlobalVar[colorError]]
      $footer[Error code: "$get[error]" | Meaning: "$env[result;$get[error];meaning]"]
      $arrayLoad[title;,;$env[result;$get[error];title]]
      $title[$replace[$replace[$replace[$arrayRandomValue[title];";;2];\\];;1];[;;1]]
      $description[$replace[$replace[$replace[$env[result;$get[error];description];{prefix};$if[$getUserVar[prefix;$get[author];false]!=false;$getUserVar[prefix;$get[author];a.];$getUserVar[prefix;$guildID;a.]];-1];{example};$commandInfo[messageCreate;$get[origin];usage];-1];{messageOne};$message[1];-1]]
    `
    }
];
exports.default = functions;
//# sourceMappingURL=errorEmbed.js.map