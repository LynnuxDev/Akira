import { Command } from '@/types';

const Panel: Command[] = [
  {
    type: 'interactionCreate',
    module: 'dev',
    version: 'V1.0.0',
    code: `
      $textSplit[$customID;~]
      $onlyIf[$splitText[0]==test;]
      $onlyIf[$splitText[1]==$authorID;$ephemeral $customError[716;panel]]

      $switch[$splitText[2];
        $case[0;
          $interactionUpdate[$title[Embed 0]]
        ]
        $case[1;
          $interactionUpdate[$title[Embed 1]]
        ]
        $case[2;
          $interactionUpdate[$title[Embed 2]]
        ]
        $case[3;
          $interactionUpdate[$title[Embed 2]]
        ]
      ]
    `
  },
];

export default Panel;