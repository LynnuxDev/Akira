module.exports = {
  code: `
    $onlyIf[$getUserVar[AgreedToTos;$authorID]==true;$getGlobalVar[AgreedToTosEmbedReply]]
    $let[type;$option[type]]

    $switch[$get[type];
      $case[anime;
      ]
      $case[character;
      ]

      $case[default;
        $jsonLoad[result;$readFile[./files/errors.json]]
        $ephemeral
        $interactionReply[
          $color[$getGlobalVar[colorError]]
          $footer[Error code: "400"]
          $description[$env[result;400;description]]
          $arrayLoad[title;,;$env[result;400;title]]
          $title[$replace[$replace[$arrayRandomValue[title];";;2];\\];;1]]
        ]
      ]
    ]
`,
//         $callFunction[customerror;400;slash;1275053211643940955]
  data: {
    "name": "anime",
    "description": "Search for a anime and its related information.",
    "options": [
      {
        "type": 3,
        "name": "type",
        "description": "What are you looking for?",
        "required": true,
        "choices": [
          {
            "name": "Anime",
            "value": "anime"
          },
          {
            "name": "Character",
            "value": "character"
          },
          {
            "name": "Manga",
            "value": "manga"
          }
        ]
      },
      {
        "type": 3,
        "name": "query",
        "description": "What is the name of what you are looking for?",
        "required": true
      }
    ]
  }
}
