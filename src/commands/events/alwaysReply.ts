import { Event } from "@/types";

const AlwaysReply: Event[] = [{
  type: 'messageCreate',
  module: 'Client',
  version: 'v1.0.0',
  code: `
    $let[message;$replace[$replace[$messageContent;$prefix ;;1];$prefix;;1]]
    $textSplit[$get[message]; ]

    $ifx[
      $if[$startsWith[$toLowercase[$messageContent];$callFunction[prefix];akira;<@$clientID>;<@!$clientID>]==true;
        $if[$containsCommand[$splitText[0]]!=true;
          $if[$guildID!=;
            $if[$getGuildVar[invalidNotify;$customEncrypt[encrypt;$guildID]]==true;
              $customError[404;alwaysReply]
            ]
          ]
        ;
          $setGlobalVar[startCommands;$math[$getGlobalVar[startCommands]+1]]
        ]
      ]
    ]

  `
}];

export default AlwaysReply;