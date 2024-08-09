const token = require("./handler/token.js");
const events = require("./handler/events.js");
const intents = require("./handler/intents.js");
const { ForgeDB } = require("@tryforge/forge.db")             // https://github.com/tryforge/ForgeDB/tree/dev
const { ForgeClient } = require("@tryforge/forgescript")      // https://github.com/tryforge/ForgeScript/tree/dev
const { ForgeTopGG } = require("@tryforge/forge.topgg");      // https://github.com/tryforge/ForgeTopGG/tree/dev

// const { ForgeMusic } = require("forge-music")

const top = new ForgeTopGG({
    token: "TOP.GG TOKEN",
    auth: "TOP.GG AUTH",
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
        "$if[$getVar[prefix;$authorID]!=;$getVar[prefix;$authorID];a.]",
        "$if[$getVar[prefix;$try[$guildID;738381353921544282]]!=;$getVar[prefix;$try[$guildID;738381353921544282]];a.]",
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
top.commands.load("./topGG");    // ForgeTop.gg

///////////////////////////////
//  [  Custom Functions  ]   //
///////////////////////////////

client.functions.add({
    name: "nekobest",
    params: ["endpoint"],
    code: `
        $let[endpoint;$env[endpoint]]
        $let[request;$httpRequest[https://nekos.best/api/v2/$get[endpoint]?amount=1;GET]]
        $let[url;$httpResult[results;0;url]]
        $let[name;$replace[$replace[$replace[$httpResult[results;0;anime_name]; ;_;-1];!;;-1];?;;-1].gif]

        $!attachment[$get[url];$get[name]]
        $return[$if[$get[request]==200;attachment://$get[name];404]]
    `
});

client.functions.add({
    name: "roleplay",
    params: ["endpoint"],
    code: `
        $let[endpoint;$env[endpoint]]

        $let[request;$httpRequest[https://api.lynnux.xyz/roleplay/$get[endpoint].json;get]]
        $let[url;$httpResult[embed;image;url]]
        $let[name;$replace[$replace[$replace[$httpResult[embed;title]; ;_;-1];!;;-1];?;;-1].gif]
        $log[name: $get[name] | status: $get[request] | url: $get[url]]


        $!attachment[$get[url];$get[name]]
        $log[attachment://$get[name]]
        $return[attachment://$get[name]]
    `
});

///////////////////////////////
//   [    Variables     ]    //
///////////////////////////////

ForgeDB.variables({
    prefix: "a.",
    color: "#ff47ff",
    AgreedToTos: false,
    ServerFeatured: false,
    BotChannel: "$channelID",
    BotChannelStatus: "default",
    //   [   Fun       ]
    GolHasSeenRules: false,
    GolCorrectEasy: 0,
    GolCorrectNormal: 0,
    GolCorrectHard: 0,
    //   [   Errors    ]
    AgreedToTosError: "$ephemeral $color[#ff47ff] $title[Before we continue:] $footer[You have to agree with these terms before using akira.] $description[Before you proceed, please make sure to read and agree to our [Terms of Service\\](https://akira.lynnux.xyz/terms) and [Privacy Policy\\](https://akira.lynnux.xyz/policy).\n\nBy using the button below, you confirm that you have read and agree to abide by our terms and policies.\n\nIf you have any questions or concerns, feel free to contact our support team.] $addActionRow $addButton[AcceptTerms-$authorID;I have read and agree to abide by these terms and policies.;Success;;false]",
    BotChannelError: "$try[$!addMessageReactions[$channelID;$messageID;<:Wrong:1176924307834814564>];$ephemeral $interactionReply[<:Wrong:1176924307834814564> This channel is ignored, please use this command in the bot specific chanenl (<#$getVar[BotChannel;$guildID]>)]]",
    BotChannelAlreadyFreedError: "$color[#d50056] $title[Something went wrong:] $description[<:Wrong:1176924307834814564> There doesnt seem to be a bot Channel.]",
    NotEnoughUsersFoundOrMentionedError: "$title[Something went wrong:] $description[<:Wrong:1176924307834814564> You need to mention someone to kick.]$color[#d50056]",
    BotChannelAlreadySetError: "$color[#d50056] $title[Something went wrong:] $description[<:Wrong:1176924307834814564> The channel <#$channelID> is already set as the bot channel already.]",
})

///////////////////////////////
//  [   Client Login    ]    //
///////////////////////////////

client.login(`${token}`);