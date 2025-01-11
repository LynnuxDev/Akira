import { ISlash } from '@/types';
import { RegistrationType } from '@tryforge/forgescript';

const ChangeInotify: ISlash = {
  type: RegistrationType.Global,
  code: `
    $ephemeral
    $defer

    $checkAgreedToTos
    $onlyIf[$guildId!=;$customError[714;ChangeInotify]]
    $onlyIf[$hasPerms[$guildID;$authorID;Administrator]==true;$customError[720;ChangeInotify]]

    $let[guild;$customEncrypt[encrypt;$guildID]]
    $onlyIf[$getGuildVar[invalidNotify;$get[guild]]!=$option[value];$customError[725;ChangeInotify]]

    $getColor
    $author[Guild setting changed!;$if[$guildIcon[$guildID;64;webp]!=;$guildIcon[$guildID;64;webp];https://cdn.lynnux.xyz/images/No-Server_Icon-found.png]]
    $switch[$option[value];
      $case[false;$description[InvalidNotify has been changed to \`Disabled\` from now on i will no longer send a error on incorrect messages starting with my prefixes.]]
      $case[true;$description[InvalidNotify has been changed to \`Enabled\` from now on i will send a error on incorrect messages starting with my prefixes.]]
      $case[react;$description[InvalidNotify has been changed to \`react\` from now on i will no longer send a error on incorrect messages starting with my prefixes instead i will just react to the message.]]
    ]

    $setGuildVar[invalidNotify;$option[value];$get[guild]]

  `,
  data: {
    "name": "invalidnotify",
    "description": "Change the way Akira replies to invalid commands.",
    "options": [
      {
        "type": 3,
        "name": "value",
        "description": "To what do you want to change it?",
        "required": true,
        "choices": [
          {
            "name": "disable",
            "value": "false"
          },
          {
            "name": "message",
            "value": "true"
          },
          {
            "name": "reaction",
            "value": "react"
          }
        ]
      }
    ]
  }
};
export default ChangeInotify;