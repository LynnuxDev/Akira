module.exports = [{
  type: "interactionCreate",
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
}]