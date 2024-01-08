module.exports = {
    code: `
        $let[type;$option[type]] $let[user;$if[$option[user]==;$authorID;$option[user]]] $let[message;$option[message]]
        $let[user1;**$username[$get[user]]**] $let[user2;**$username[$authorID]**]
        
        $onlyIf[$getVar[rp-blocked-$authorID;$get[user]]!=true;:x: Sorry but $get[user1] blocked you from using roleplay commands on you.$ephemeral]

        $onlyIf[$get[user]!=$authorID;You cant do this to yourself.]
        $onlyIf[$checkContains[$getVar[rp-commandblocked;$get[user]];*]==false;:x: All roleplay commands are blocked by $get[user1].]
        $onlyIf[$checkContains[$getVar[rp-commandblocked;$get[user]];$get[type]]==false;:x: This roleplay command is blocked by $get[user1].]    
        $setVar[$get[type]-give;$authorID;$sum[$getVar[$get[type]-give;$authorID];1]]
        $setVar[$get[type]-got;$get[user];$sum[$getVar[$get[type]-got;$get[user]];1]]
        $let[msg;
            $if[$get[type]==bite;$get[user1] got bitten by $get[user2].;
            $if[$get[type]==cry;$get[user1] made $get[user2] cry;
            $if[$get[type]==die;$get[user1] died because of $get[user2].;
            $if[$get[type]==hate;$get[user2] is hating on $get[user1].;
            $if[$get[type]==sad;$get[user1] made $get[user2] sad.;
            $if[$get[type]==kill;$get[user1] got killed by $get[user2].;
            $if[$get[type]==shoot;$get[user1] got shot by $get[user2].;
            $if[$get[type]==slap;$get[user1] got slapped by $get[user2].;
            $if[$get[type]==stab;$get[user1] got stabbed by $get[user2].;
            $if[$get[type]==triggered;$get[user2] triggered by $get[user1].;]]]]]]]]]]]
        $description[$get[msg]$if[$get[message]!=;\n"$get[message]"]]
        $color[$getVar[color;default]]

        $let[type2;$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$get[type];die;died];bite;got bitten];cry;mode someone cry];hate;got hated];sad;made someone sad];kill;got killed];shoot;got shot];slap;got slapped];stab;got stabbed];trigger;made someone trigger];lurk;lurked at];nom;nommed on];nuzzle;nuzzled];pat;patted];peck;pecked];poke;poked];pout;pouted];sleep;slept on];thumbsup;a thumbs-up];tickle;tickled];wag;wagged at];wave;waved at]]

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
                "name": "Bite",
                "value": "bite"
              },
              {
                "name": "Cry",
                "value": "cry"
              },
              {
                "name": "Die",
                "value": "die"
              },
              {
                "name": "Hate",
                "value": "hate"
              },
              {
                "name": "Sad",
                "value": "sad"
              },
              {
                "name": "Kill",
                "value": "kill"
              },
              {
                "name": "Shoot",
                "value": "shoot"
              },
              {
                "name": "Slap",
                "value": "slap"
              },
              {
                "name": "Stab",
                "value": "stab"
              },
              {
                "name": "Triggered",
                "value": "triggered"
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