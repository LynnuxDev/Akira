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
   top.commands.load("./topGG");

///////////////////////////////
//  [   Client Login    ]    //
///////////////////////////////

client.login(`${token}`);
