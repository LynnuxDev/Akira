import { InteractionCommand } from '@/types';

const commands: InteractionCommand[] = [
  {
    type: 'interactionCreate',
    description: 'Close an interaction',
    module: 'client',
    sourcecode: 'src/commands/Global-Interactions/close.ts',
    documentation: 'close',
    usage: 'N/A',
    example: 'N/A',
    version: '1.0.0',
    code: `
      $textSplit[$customID;~]
      $c[
        $splitText[0] == Custom ID Name
        $splitText[1] == authorID
        $splitText[2] == origin if given
      ]

      $onlyIf[$splitText[0]==close;]
      $onlyIf[$splitText[1]==$authorID;]


      $switch[$splitText[2];
        $case[anime;
          $if[$fileExists[./files/$getUserVar[uuid;$authorID;not-found].json]==true;
            $deleteFile[./files/$getUserVar[uuid;$authorID;not-found].json]
          ]
        ]
        $case[message;
          $if[$splitText[3]!=;
            $if[$guildID!=;
              $if[$channelHasPerms[$channelID;$clientID;ManageMessages]==true;
                $!deleteMessage[$channelID;$splitText[3]]
              ]
            ]
          ]
        ]
      ]

      $!deleteCommand

    `
  }
];

export default commands;
