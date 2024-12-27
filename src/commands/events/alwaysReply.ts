import { Event } from "@/types";

const AlwaysReply: Event[] = [{
  type: 'messageCreate',
  module: 'Client',
  version: 'v1.0.0',
  code: `
    $let[message;$replace[$replace[$messageContent;$prefix ;;1];$prefix;;1]]
    $textSplit[$get[message]; ]

    $ifx[
      $if[$startsWith[$messageContent;$callFunction[prefix]]==true;
        $if[$containsCommand[$splitText[0]]!=true;
          $if[$guildID!=;
            $if[$getGuildVar[invalidNotify;$customEncrypt[encrypt;$guildID]]==true;
              $customError[404;alwaysReply]
            ]
          ]
        ]
      ]
    ]

  `
}];

export default AlwaysReply;