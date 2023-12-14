// @ts-nocheck

// @ts-ignore
const token = require("./handler/token.ts");
// @ts-ignore
const events = require("./handler/events.ts");
// @ts-ignore
const intents = require("./handler/intents.ts");
const { ForgeDB } = require("forgedb");
const { ForgeClient } = require("forgescript");
// const { ForgeMusic } = require("forge-music")

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
   
// Load The bot
   client.login(`${token}`);
