const token = require("./handler/token.js");
const events = require("./handler/events.js");
const intents = require("./handler/intents.js");
const { ForgeDB } = require("forgedb") 
const { ForgeClient } = require("forgescript")
const { ForgeTopGG } = require("forgetop.gg");

// const { ForgeMusic } = require("forge-music")

//////////////////////////////
//  [   ForgeScript    ]    //
//////////////////////////////

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
        // new ForgeMusic({ soundsFolder: `${process.cwd()}/sounds` })  
    ]
})
   
// Load the commands
   client.commands.load("commands")
   client.applicationCommands.load("slash")
   

//////////////////////////////
//  [   ForgeTop.gg    ]    //
//////////////////////////////

const top = new ForgeTopGG({
    token: "Secret-Top.GG-Token",
    auth: "Secret-Top.GG-Auth",
    events: [
        "error",
        "posted",
        "voted"
    ],
    post: {
        interval: 3_600_000 // Update bot stats every hour
    }
})

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
    code: `$log[voted by $voteUserID]`
})

///////////////////////////////
//  [   Client Login    ]    //
///////////////////////////////

client.login(`${token}`);
