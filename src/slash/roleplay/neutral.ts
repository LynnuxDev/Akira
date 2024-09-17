module.exports = {
  code: `
    $onlyIf[$getVar[AgreedToTos;$authorID]==true;$ephemeral $color[$getGlobalVar[color]] $title[Before we continue:] $footer[You have to agree with these terms before using akira.] $description[Before you proceed, please make sure to read and agree to our [Terms of Service\\](https://akira.lynnux.xyz/terms) and [Privacy Policy\\](https://akira.lynnux.xyz/policy).\n\nBy using the button below, you confirm that you have read and agree to abide by our terms and policies.\n\nIf you have any questions or concerns, feel free to contact our support team.] $addActionRow $addButton[AcceptTerms-$authorID;I have read and agree to abide by these terms and policies.;Success;;false]]
    $onlyIf[$channelID==$getVar[BotChannel;$guildID];$interactionUpdate[$getVar[BotChannelError;default]]]

    $let[type;$option[type]] $let[user;$if[$option[user]==;$authorID;$option[user]]] $let[message;$option[message]]
    $let[user1;**$username[$get[user]]**] $let[user2;**$username[$authorID]**]

    $onlyIf[$get[user]!=$authorID;You cant do this to yourself.]
    $onlyIf[$checkContains[$getVar[rp-commandblocked;$get[user]];*]==false;:x: All roleplay commands are blocked by $get[user1].]
    $onlyIf[$checkContains[$getVar[rp-commandblocked;$get[user]];$get[type]]==false;:x: This roleplay command is blocked by $get[user1].]
    $onlyIf[$getVar[rp-blocked-$authorID;$get[user]]!=true;:x: Sorry but $get[user1] blocked you from using roleplay commands on you.$ephemeral]
    $setVar[$get[type]-give;$authorID;$sum[$getVar[$get[type]-give;$authorID];1]]
    $setVar[$get[type]-got;$get[user];$sum[$getVar[$get[type]-got;$get[user]];1]]
    $let[msg;
      $if[$get[type]==bonk;$get[user1] got bonked by $get[user2].;
      $if[$get[type]==bored;$get[user2] got bored of $get[user1];
      $if[$get[type]==chase;$get[user1] got chased by $get[user2].;
      $if[$get[type]==cringe;$get[user1] made $get[user2] cringe.;
      $if[$get[type]==dab;$get[user2] dabbed on $get[user1].;
      $if[$get[type]==facepalm;$get[user1] made $get[user1]facepalm.;
      $if[$get[type]==nervous;$get[user1] made $get[user2] nervous.;
      $if[$get[type]==no;$get[user2] said no to $get[user1].;
      $if[$get[type]==panic;$get[user1] made $get[user2] panic.;
      $if[$get[type]==run;$get[user1] made $get[user1] run away.;
      $if[$get[type]==sip;$get[user1] got sipped on by $get[user2].;
      $if[$get[type]==smug;$get[user1] smugged at by $get[user2].;
      $if[$get[type]==stare;$get[user1] got stared at by $get[user2].;
      $if[$get[type]==tease;$get[user1] got teased by $get[user2].;
      $if[$get[type]==think;$get[user1] got thought about by $get[user2].;
      $if[$get[type]==rage;$get[user1] made $get[user2] rage.;
      $if[$get[type]==wink;$get[user1] got winked at by $get[user2].;
      $if[$get[type]==yes;$get[user2] said yes to $get[user1].;]]]]]]]]]]]]]]]]]]]
    $description[$get[msg]$if[$get[message]!=;\n"$get[message]"]]
    $color[$getVar[color;default]]

    $let[type2;$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$get[type];bonk;got bonked];bored;made someone bored];chase;got chased];cringe;made someone cringe];dab;got dabbed on];facepalm;got facepalmed];nervous;was made nervous];kiss;kissed];no;got said no to];panic;made someone panic];run;made people run away];sip;got sipped on];smug;made people smug];stare;made people stare];tease;got teased];think;made someone think];rage;made people rage];wink;got winked at];yes;got a yes];tickle;tickled];wag;wagged at];wave;waved at]]

    $!httpRequest[https://api.lynnux.xyz/roleplay/$get[type].json;get]
    $let[url;$httpResult[embed;image;url]]
    $image[$get[url]]

    $footer[$username used $get[type] $if[$getVar[$get[type]-give;$authorID]==1;1 time;$getVar[$get[type]-give;$authorID] times]. | $replace[$get[user1];**;;-1] $get[type2] $if[$getVar[$get[type]-got;$get[user]]==1;1 time;$getVar[$get[type]-got;$get[user]] times]]
  `,
  data: {
    "name": "neutral",
    "description": "Use neutral roleplay interactions.",
    "options": [
      {
        "type": 3,
        "name": "type",
        "description": "what type of roleplay command you want to use?",
        "required": true,
        "choices": [
          {
            "name": "Bonk",
            "value": "bonk"
          },
          {
            "name": "Bored",
            "value": "bored"
          },
          {
            "name": "Chase",
            "value": "chase"
          },
          {
            "name": "Cringe",
            "value": "cringe"
          },
          {
            "name": "Dab",
            "value": "dab"
          },
          {
            "name": "Facepalm",
            "value": "facepalm"
          },
          {
            "name": "Nervous",
            "value": "nervous"
          },
          {
            "name": "No",
            "value": "no"
          },
          {
            "name": "Panic",
            "value": "panic"
          },
          {
            "name": "Run",
            "value": "run"
          },
          {
            "name": "Sip",
            "value": "sip"
          },
          {
            "name": "Smug",
            "value": "smug"
          },
          {
            "name": "Stare",
            "value": "stare"
          },
          {
            "name": "Tease",
            "value": "tease"
          },
          {
            "name": "Think",
            "value": "think"
          },
          {
            "name": "Rage",
            "value": "rage"
          },
          {
            "name": "Wink",
            "value": "wink"
          },
          {
            "name": "Yes",
            "value": "yes"
          }
        ]
      },
      {
        "type": 6,
        "name": "user",
        "required": true,
        "description": "Who do you want to give this reaction to?"
      },
      {
        "type": 3,
        "name": "message",
        "description": "What massage do you want to add to the reaction?"
      }
    ]
  }
}