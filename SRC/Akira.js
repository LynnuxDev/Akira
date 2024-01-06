const token = require("./handler/token.js");
const events = require("./handler/events.js");
const intents = require("./handler/intents.js");
const { ForgeDB } = require("forgedb") 
const { ForgeClient } = require("forgescript")
const { ForgeTopGG } = require("forgetop.gg");

// const { ForgeMusic } = require("forge-music")

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
                $log[A test vote was made by $username[$voteUserID] ($voteUserID)]
                $let[user;$voteUserID]
                $sendMessage[1193223146501836860;
                    $title[Voted;https://top.gg/bot/$botID]
                    $description[<@$get[user]> Voted For <@$clientID>!]
                    $color[ff47ff]    
                ;false]

            ]
            $case[upvote;
                if message is uwu
            ]
            $default[
                if $case values werent matched
            ]
        ]    
    `
})

///////////////////////////////
//  [   Client Login    ]    //
///////////////////////////////

client.login(`${token}`);
