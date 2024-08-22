module.exports = {
  code: `
    $onlyIf[$getUserVar[AgreedToTos;$authorID]==true;$getGlobalVar[AgreedToTosEmbedReply]]
    $let[type;$option[type]

    $switch[$get[type];
      $case[anime;
      ]
      $case[character;
      ]
      $case[manga;
      ]
      $case[default;
        $callFunction[error;]
      ]
    ]
`,
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
      }
    ]
  }
}
