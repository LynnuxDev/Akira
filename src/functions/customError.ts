import { CustomFunction } from '@/types';

const functions: CustomFunction[] = [
  {
    name: 'customError',
    params: ['errorid', 'origin'],
    code: `
      $jsonLoad[result;$readFile[./files/errors.json]]
      $let[origin;$env[origin]]
      $let[error;$env[errorid]]

      $interactionReply
      $color[$getGlobalVar[colorError]]
      $footer[Error code: "$get[error]" | Meaning: "$env[result;$get[error];meaning]"]
      $arrayLoad[title;,;$env[result;$get[error];title]]
      $title[$replace[$replace[$replace[$arrayRandomValue[title];";;2];\\];;1];[;;1]]
      $description[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$env[result;$get[error];description];{example};$commandInfo[messageCreate;$get[origin];usage];-1];{messageOne};$message[1];-1];{{client}};$clientID;-1];{{command}};$commandInfo[messageCreate;$get[origin];name];-1];{{messageZero}};$message[0];-1];{{botChannel}};$getGuildVar[BotChannel;$guildID;$channelID];-1];{{prefix}};$if[$get[origin]==server-set-prefix;$getGuildVar[prefix;$customEncrypt[encrypt;$guildID]];$getUserVar[prefix;$getUUID[$authorID]]];-1]]
    `
  }
];

export default functions;
