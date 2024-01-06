const token = require("./handler/token.js");
const events = require("./handler/events.js");
const intents = require("./handler/intents.js");
const { ForgeDB } = require("forgedb")              // https://github.com/tryforge/ForgeDB/tree/dev
const { ForgeClient } = require("forgescript")      // https://github.com/tryforge/ForgeScript/tree/dev
const { ForgeTopGG } = require("forgetop.gg");      // https://github.com/tryforge/ForgeTopGG/tree/dev

// const { ForgeMusic } = require("forge-music")    // https://github.com/tryforge/ForgeMusic

const top = new ForgeTopGG({
    token: "SECRET-TOKEN",  
    auth: "SECRET-AUTH",
    events: [
        "error",
        "posted",
        "voted"
    ],
    post: {
        interval: 3_600_000 // Update bot stats every hour
    }
})

const client = new ForgeClient({
    "events": events,
    "intents": intents,
    "useInviteSystem": false,
    "prefixes": [
        "!",
        "dev.",
        "<@!$clientID>",
        "<@$clientID>"
    ],
    "extensions": [
        new ForgeDB(), 
        top
        // new ForgeMusic({ soundsFolder: `${process.cwd()}/sounds` })  
    ]
})
   
// Load the commands
   client.commands.load("commands")
   client.applicationCommands.load("slash")
   
//////////////////////////////
//  [   ForgeTop.gg    ]    //
//////////////////////////////

top.commands.add({
    type: "error",
    code: `$log[Error $postStatsError]`
})

top.commands.add({
    type: "posted",
    code: `$log[posted!]`
})

top.commands.add({
    type: "voted",
    code: `
        $switch[$voteType;
            $case[test;
                $let[user;$voteUserID]
                $sendMessage[1193223146501836860;<@$get[user]> Voted For <@$clientID>!
                    $title[(test) Vote;https://top.gg/bot/$botID]
                    $description[<@$get[user]> Voted For <@$clientID>!]
                    $color[ff47ff]
                    $addField[User:;<@$get[user]>;true]
                    $addField[Bot:;<@$botID>;true]
                    $addField[Voted at:;<t:$round[$math[$getTimestamp/1000]]:f>;true]
                    $addField[Can vote again in:;<t:$math[$round[$math[$getTimestamp/1000]]+43200]:R>;true]
                    $addField[Total Votes:;$totalVotes;true]
                    $addField[Monthly Votes:;$monthlyVotes;true]
                    $footer[This vote was a test.]
                    $thumbnail[$userAvatar[$get[user]]]
                    $timestamp
                ;false]
            ]
            $case[upvote;
                $let[user;$voteUserID]
                $sendMessage[1193223146501836860;<@$get[user]> Voted For <@$clientID>!
                    $title[Vote;https://top.gg/bot/$botID]
                    $description[<@$get[user]> Voted For <@$clientID>!]
                    $color[ff47ff]
                    $addField[User:;<@$get[user]>;true]
                    $addField[Bot:;<@$botID>;true]
                    $addField[Voted at:;<t:$round[$math[$getTimestamp/1000]]:f>;true]
                    $addField[Can vote again in:;<t:$math[$round[$math[$getTimestamp/1000]]+43200]:R>;true]
                    $addField[Total Votes:;$totalVotes;true]
                    $addField[Monthly Votes:;$monthlyVotes;true]
                    $thumbnail[$userAvatar[$get[user]]]
                    $timestamp
                ;false]
            ]
            $default[
                $log[\\[Error\\] | got a other vote type than upvote or test (got $voteType)]
            ]
        ]    
    `
})


///////////////////////////////
//  [   Client Login    ]    //
///////////////////////////////

client.login(`${token}`);
