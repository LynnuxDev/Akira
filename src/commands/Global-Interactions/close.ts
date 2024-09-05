interface Command {
  name?: string;
  aliases?: string[];
  type: string;
  description: string;
  module: string;
  sourcecode: string;
  documentation?: string;
  usage?: string;
  example?: string;
  version: string;
  code: string;
}

const commands: Command[] = [
  {
    type: "interactionCreate",
    description: "Close an interaction",
    module: "Client",
    sourcecode: "src/commands/Global-Interactions/close.ts",
    documentation: "close",
    usage: "N/A",
    example: "N/A",
    version: "1.0.0",
    code: `
      $textSplit[$customID;~]
      $c[
        $splitText[0] == Custom ID Name
        $splitText[1] == authorID
        $splitText[2] == origin if given
      ]

      $disableConsoleErrors
      $onlyIf[$splitText[0]==close;]
      $onlyIf[$splitText[1]==$authorID;]

      $switch[$splitText[2];
        $case[anime;
          $if[$fileExists[./files/$getUserVar[uuid;$authorID;not-found].json]==true;
            $deleteFile[./files/$getUserVar[uuid;$authorID;not-found].json]
          ]
        ]
      ]

      $deleteCommand

    `
  }
]

export default commands;