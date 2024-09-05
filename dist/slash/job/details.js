"use strict";
module.exports = {
    name: "details",
    code: `
    $let[job;$option[job]]
    $let[author;$authorID]

    $switch[$get[job];
      $case[supermarket;
        $title[Job: Supermarket Employee]
        $description[Become a employee at one of our amazing Supermarkets, and help the store run smoothly. You start as a Bagger and make your way up the job to become the Store Manager.]
        $addField[Jobs:;\`\`\`swift\n| Level | Name               | Income /Hour  |\n|-------|--------------------|---------------|\n| 1     | Bagger             | 15.33 🪙      |\n| 5     | Stock Clerk        | 18.5  🪙      |\n| 10    | Janitor            | 21.0  🪙      |\n| 30    | Cashier            | 25.8  🪙      |\n| 75    | Department Manager | 42.5  🪙      |\n| 175   | Assistant Manager  | 68.9  🪙      |\n| 500   | Store Manager      | 94.5  🪙      |\n\`\`\`]
        $color[$getGuildVar[color]]
      ]
      $case[programmer;
        $title[Job: Programmer / IT]
        $description[Become a vital part of our tech team as a Programmer/IT Specialist. Start as a Junior Developer and climb the ranks to become the CTO, ensuring our systems run flawlessly and innovating new solutions.]
        $addField[Jobs:;\`\`\`swift\n| Level | Name               | Income /Hour  |\n|-------|--------------------|---------------|\n| 1     | Junior Developer   | 22.7  🪙      |\n| 5     | Developer          | 34.2  🪙      |\n| 10    | Senior Developer   | 48.5  🪙      |\n| 30    | Lead Developer     | 69.9  🪙      |\n| 75    | Technical Manager  | 82.5  🪙      |\n| 175   | IT Director        | 103.5 🪙      |\n| 500   | CTO                | 132.6 🪙      |\n\`\`\`]
        $color[$getGuildVar[color]]
      ]
    ]
  `,
    data: {
        "name": "details",
        "description": "See details about a job.",
        "options": [
            {
                "type": 3,
                "name": "job",
                "description": "Which job do you want to apply for?",
                "required": true,
                "choices": [
                    {
                        "name": "Supermarket Employee",
                        "value": "supermarket"
                    },
                    {
                        "name": "Programmer",
                        "value": "programmer"
                    }
                ]
            }
        ]
    }
};
//# sourceMappingURL=details.js.map