import { Event } from "@/types";

const AlwaysReply: Event[] = [{
  type: 'messageCreate',
  module: 'clientSpecific',
  version: 'v1.0.0',
  code: `
    $let[message;$replace[$replace[$replace[$replace[$replace[$replace[$toLowercase[$messageContent];$prefix ;;1];$prefix;;1];akira ;;1];akira;;1];<@$clientID> ;;1];<@!$clientID> ;;1]]
    $textSplit[$get[message]; ]

    $ifx[
      $if[$startsWith[$toLowercase[$messageContent];akira;$toLowercase[$prefix];<@$clientID>;<@!$clientID>]==true;
        $if[$containsCommand[$splitText[0]]!=true;
          $if[$splitText[1]!=;
            $if[$guildID!=;
              $switch[$getGuildVar[invalidNotify;$customEncrypt[encrypt;$guildID]];
                $case[true;$customError[404;alwaysReply]]
                $case[react;$!addMessageReactions[$channelID;$messageID;$if[$environment==main;1269706678039744574;1327339457279688811]]]
              ]
            ;
              $customError[404;alwaysReply]
            ]
          ]
        ;
          $setGlobalVar[sessionMessageUses;$math[$getGlobalVar[sessionMessageUses]+1]]
          $setGlobalVar[monthMessageUses;$math[$getGlobalVar[monthMessageUses]+1]]
          $setGlobalVar[weekMessageUses;$math[$getGlobalVar[weekMessageUses]+1]]
          $setGlobalVar[dayMessageUses;$math[$getGlobalVar[dayMessageUses]+1]]
          $setGlobalVar[totalMessageUses;$math[$getGlobalVar[totalMessageUses]+1]]
          $if[$guildID!=;
            $setGuildVar[totalMessageUses;$math[$getGuildVar[totalMessageUses;$customEncrypt[encrypt;$guildID]]+1];$customEncrypt[encrypt;$guildID]]
          ]
        ]
      ]
    ]

  `
}];

export default AlwaysReply;