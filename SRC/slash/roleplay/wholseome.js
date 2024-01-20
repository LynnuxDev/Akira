module.exports = {
    code: `
        $onlyIf[$getVar[AgreedToTos;$authorID]==true;$ephemeral $color[$getVar[color;default]] $title[Before we continue:] $footer[You have to agree with these terms before using akira.] $description[Before you proceed, please make sure to read and agree to our [Terms of Service\\](https://akira.lynnux.xyz/terms) and [Privacy Policy\\](https://akira.lynnux.xyz/policy).\n\nBy using the button below, you confirm that you have read and agree to abide by our terms and policies.\n\nIf you have any questions or concerns, feel free to contact our support team.] $addActionRow $addButton[AcceptTerms-$authorID;I have read and agree to abide by these terms and policies.;Success;;false]]
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
            $if[$get[type]==blush;**$get[user1]** made **$get[user2]** blush.;
            $if[$get[type]==boop;**$get[user1]** got booped by **$get[user2]**;
            $if[$get[type]==cheer;$get[user2] cheered loudly, making $get[user1] smile.;
            $if[$get[type]==cuddle;$get[user2] wrapped their arms around $get[user1] for a warm cuddle.;
            $if[$get[type]==feed;$get[user2] decided to feed $get[user1]'s favorite meal.;
            $if[$get[type]==handhold;$get[user2] gently grabbed $get[user1]'s hand.;
            $if[$get[type]==happy;$get[user2] made $get[user1] smile.;
            $if[$get[type]==highfive;$get[user2] and $get[user1] gave each other a high-five.;
            $if[$get[type]==hug;$get[user2] gave $get[user1] a tight hug, expressing warmth and comfort.;
            $if[$get[type]==kiss;$get[user2] leaned in and planted a sweet kiss on $get[user1]'s cheek.;
            $if[$get[type]==laugh;$get[user2] told a funny joke, and $get[user1] couldn't stop laughing.;
            $if[$get[type]==love;$get[user2] expressed their deep affection, letting $get[user1] know how much they are loved.;
            $if[$get[type]==lurk;$get[user2] decided to lurk in the shadows, playfully surprising $get[user1].;
            $if[$get[type]==nom;$get[user2] handed a delicious snack to $get[user1], who happily began to nom on it.;
            $if[$get[type]==nuzzle;$get[user2] affectionately nuzzled against $get[user1], conveying tenderness.;
            $if[$get[type]==pat;$get[user2] patted $get[user2], offering reassurance and support.;
            $if[$get[type]==peck;$get[user2] gave $get[user2] a quick peck, leaving them both smiling.;
            $if[$get[type]==poke;$get[user2] playfully poked $get[user1], eliciting a surprised reaction.;
            $if[$get[type]==pout;$get[user2] pretended to pout, prompting $get[user1] to burst into laughter.;
            $if[$get[type]==sleep;$get[user2] and $get[user1] decided to snuggle up and peacefully sleep together.;
            $if[$get[type]==thumbsup;$get[user2] gave $get[user1] a thumbs-up, signaling approval and encouragement.;
            $if[$get[type]==tickle;$get[user2] couldn't resist the temptation to tickle $get[user1], resulting in joyful laughter.;
            $if[$get[type]==wag;$get[user2] wagged their tail happily as $get[user1] approached them.;
            $if[$get[type]==wave;$get[user2] waved goodbye to $get[user1].;no hug]]]]]]]]]]]]]]]]]]]]]]]]]
        $description[$get[msg]$if[$get[message]!=;\n"$get[message]"]]
        $color[$getVar[color;default]]

        $let[type2;$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$get[type];blush;blushed at];boop;booped];cheer;cheered on];cuddle;cuddled];feed;fed];handhold;held hands];happy;made happy];kiss;kissed];laugh;laugh at];love;loved];lurk;lurked at];nom;nommed on];nuzzle;nuzzled];pat;patted];peck;pecked];poke;poked];pout;pouted];sleep;slept on];thumbsup;a thumbs-up];tickle;tickled];wag;wagged at];wave;waved at]]

        $!httpRequest[https://api.lynnux.xyz/roleplay/$get[type].json;get]
        $let[url;$httpResult[embed;image;url]]
        $image[$get[url]]

        $footer[$username used $get[type] $if[$getVar[$get[type]-give;$authorID]==1;1 time;$getVar[$get[type]-give;$authorID] times]. | $replace[$get[user1];**;;-1] got $get[type2] $if[$getVar[$get[type]-got;$get[user]]==1;1 time;$getVar[$get[type]-got;$get[user]] times]]
    `,
    data: {
        "name": "wholesome",
        "description": "Use wholesome roleplay interactions.",
        "options": [
          {
            "type": 3,
            "name": "type",
            "description": "what type of roleplay command you want to use?",
            "required": true,
            "choices": [
              {
                "name": "Blush",
                "value": "blush"
              },
              {
                "name": "Boop",
                "value": "boop"
              },
              {
                "name": "Cheer",
                "value": "cheer"
              },
              {
                "name": "Cuddle",
                "value": "cuddle"
              },
              {
                "name": "Feed",
                "value": "feed"
              },
              {
                "name": "Handhold",
                "value": "handhold"
              },
              {
                "name": "Happy",
                "value": "happy"
              },
              {
                "name": "Highfive",
                "value": "highfive"
              },
              {
                "name": "Hug",
                "value": "hug"
              },
              {
                "name": "Kiss",
                "value": "kiss"
              },
              {
                "name": "Laugh",
                "value": "laugh"
              },
              {
                "name": "Love",
                "value": "love"
              },
              {
                "name": "Lurk",
                "value": "lurk"
              },
              {
                "name": "Nom",
                "value": "nom"
              },
              {
                "name": "Nuzzle",
                "value": "nuzzle"
              },
              {
                "name": "Pat",
                "value": "pat"
              },
              {
                "name": "Peck",
                "value": "peck"
              },
              {
                "name": "Poke",
                "value": "poke"
              },
              {
                "name": "Pout",
                "value": "pout"
              },
              {
                "name": "Sleep",
                "value": "sleep"
              },
              {
                "name": "Thumbsup",
                "value": "thumbsup"
              },
              {
                "name": "Tickle",
                "value": "tickle"
              },
              {
                "name": "Wag",
                "value": "wag"
              },
              {
                "name": "wave",
                "value": "wave"
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