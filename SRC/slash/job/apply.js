module.exports = {
  name: "apply",
  code: `
    $let[job;$option[job]]
    $let[contract;$if[$option[contract]!=;$option[contract];fulltime]]

    $let[success;$randomNumber[0;100;false]]
    $let[author;$authorID]

    $onlyIf[$getUserVar[AgreedToTos;$authorID]==true;$ephemeral $color[$getVar[color;default]] $title[Before we continue:] $footer[You have to agree with these terms before using akira.] $description[Before you proceed, please make sure to read and agree to our [Terms of Service\\](https://akira.lynnux.xyz/terms) and [Privacy Policy\\](https://akira.lynnux.xyz/policy).\n\nBy using the button below, you confirm that you have read and agree to abide by our terms and policies.\n\nIf you have any questions or concerns, feel free to contact our support team.] $addActionRow $addButton[AcceptTerms-$authorID;I have read and agree to abide by these terms and policies.;Success;;false]]
    $onlyIf[$getUserVar[userBanned;$authorID]!=true;$getGlobalVar[userIsBannedSlashError]]

    $switch[$get[job];
      $case[supermarket;
        $switch[$get[contract];
          $case[fulltime;
            $if[$getUserVar[currentFulltimeJob;$authorID]==none;
              $if[$get[success]>=10;
                $color[$getGlobalVar[color]]
                $title[$randomText[You've been approved!;Welcome to the team!;Congratulations, we choose you!;Your the one!]]
                $description[We have reviewed your request and are pleased to welcome you to our team. \nYou will begin as a 'Bagger,' but we see great potential in you. \nWe believe you have what it takes to excel in the supermarket industry.]
              ;
                $color[$getGlobalVar[colorError]]
                $title[You've been rejected!]
                $description[We are sorry to say this, but we aren't currently looking for any employee's try to apply again later.]
              ]
            ;
              $color[$getGlobalVar[colorError]]
              $title[You've been rejected!]
              $description[Sorry but we noticed that you already have a fulltime job $replace[$getUserVar[currentFulltimeJob;$authorID];supermarket; with \`us\`.]]
            ]
          ]
          $case[parttime;
          ]
          $case[default;
            $sendMessage[$getGlobalVar[botErrorChannel];
              $color[$getGlobalVar[colorError]]
              $title[Error in "Slash Command"]
              \n<@&1269723532162760816>
              $description[Error in </job apply:1269701094825787544>]
              $addField[Issue:;**author**: <@$get[author]> ~ ||$get[author]||\n**Command**: \`/job apply job:$get[job]$if[$get[contract]!=; contract:$get[contract]]\`;true]
                $try[
                  $if[$guildID!=;
                    $attachment[$memberPerms[$guildID;$clientID;,\n];result.actionscript;true]
                    $addField[GuildInfo:;**Guild**: $guildName[$guildID] ~ ||$guildID||\n**Permissions**: \`in file attached\`;true]
                  ]
                ]
              ]
              $ephemeral
              $color[$getGlobalVar[colorError]]
              $title[This is not supposed to happen!]
              $description[Something went wrong in my code, try again in a bit!]
              $footer[a log of this error has been send to my developers.]
            ]
          ]
        ]
      $case[programmer;
      ]
      $case[default;
      ]
    ]
  `,
  data: {
    "name": "apply",
    "description": "Apply for a job.",
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
      },
      {
        "type": 3,
        "name": "contract",
        "description": "what type of contract are you looking for?",
        "choices": [
          {
            "name": "Full-Time",
            "value": "fulltime"
          },
          {
            "name": "Part-Time",
            "value": "parttime"
          },
          {
            "name": "On The Go",
            "value": "onthego"
          }
        ]
      }
    ]
  }
}
