const token = require("./handler/token.js");
const events = require("./handler/events.js");
const intents = require("./handler/intents.js");
const { ForgeDB } = require("@tryforge/forge.db")              // https://github.com/tryforge/ForgeDB/tree/dev
const { ForgeClient } = require("@tryforge/forgescript");      // https://github.com/tryforge/ForgeScript/tree/dev
const { ForgeTopGG } = require("@tryforge/forge.topgg");       // https://github.com/tryforge/ForgeTopGG/tree/dev

const client = new ForgeClient({
  "events": events,
  "intents": intents,
  "useInviteSystem": false,
  "prefixes": [
    "$toLowerCase[$getUserVar[prefix;$authorID]]",
    "$toUpperCase[$getUserVar[prefix;$authorID]]",
    "$if[$djsEval[!!ctx.message?.guild]==true;$toUpperCase[$getGuildVar[prefix]];$getGlobalVar[prefix]]",
    "$if[$djsEval[!!ctx.message?.guild]==true;$toLowerCase[$getGuildVar[prefix]];$getGlobalVar[prefix]]",
    //  "$if[$startsWith[$tolowercase[$messageContent];akira]==true;$messageContent;$log[$messageContent]no]",
    "<@!$clientID>",
    "<@$clientID>"
  ],
  "extensions": [
    new ForgeDB()
  ]
})

const top = new ForgeTopGG({
  token: "TOP.GG TOKEN",
  auth: "TOP.GG AUTH",
  events: [
    "error",
    "posted",
    "voted"
  ],
  post: {
    interval: 3_600_000
  }
})

// Load the commands
client.commands.load("commands")
client.applicationCommands.load("slash")

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
    $let[name;$replace[$replace[$replace[$httpResult[embed;title]; ;_;-1];!;;-1];?;;-1]]
    $logger[Info;name: $get[name] | status: $get[request] | url: $get[url]]
\
    $!attachment[$get[url];$get[name]]
    $logger[Info;attachment://$get[name]]
    $return[attachment://$get[name]]
  `
});

client.functions.add({
  name: "error",
  params: ["errorid"],
  code: `
  `
})

client.functions.add({
  name: "emoji",
  params: ["endpoint"],
  code: `
    $let[emoji;$env[endpoint]]
    $switch[$get[emoji];
      $case[verified-bot;
        $let[emote;<:VerifiedBot_1:1271552378876727356><:VerifiedBot_2:1271552361692663911>]
      ]
      $case[hypesquad-balance;
        $let[emote;<a:Discord_hypesquad_balance:1271554630349754402>]
      ]
      $case[hypesquad-bravery;
        $let[emote;<a:Discord_hypesquad_bravery:1271553774229524522>]
      ]
      $case[hypesquad-brilliance;
        $let[emote;<a:Discord_hypesquad_brilliance:1271558909089419385>]
      ]
      $case[active-developer;
        $let[emote;<:Discord_Developer:1271552502776467658>]
      ]
      $case[discord-staff;
        $let[emote;<:Discord_Staff:1271552443951349891>]
      ]
      $case[hypesquad-event;
        $let[emote;<:Hypesquad_Events:1271552414419259472>]
      ]
      $case[verified-developer;
        $let[emote;<:Discord_Early_Developer:1271561425227354192>]
      ]
      $case[discord-early-support;
        $let[emote;<:Early_Supporter:1271552426574610522>]
      ]
      $case[discord-moderator;
        $let[emote;<:Discord_Moderator:1271552489317203969>]
      ]
      $case[discord-bughunter-two;
        $let[emote;<:Discord_bughunter_2:1271563213271466076>]
      ]
      $case[discord-bughunter-one;
        $let[emote;<:Discord_bughunter_1:1271563200025985174>]
      ]

      $case[akira-id;
        $let[emote;<:ID:1271543923600265278>]
      ]
      $case[akira-date;
        $let[emote;<:Date:1271543843157971014>]
      ]
      $case[akira-discord;
        $let[emote;<:Discord:1271543869233823774>]
      ]
      $case[akira-plus;
        $let[emote;<:Plus:1271544047579693148>]
      ]
      $case[akira-booster;
        $let[emote;<:Boosters:1271543754376876052>]
      ]
      $case[akira-clock;
        $let[emote;<:Clock:1271543787637833759>]
      ]
    ]
    $return[$get[emote]]
  `
});

///////////////////////////////
//   [    Variables     ]    //
///////////////////////////////

ForgeDB.variables({
  prefix: "!",
  color: "#ff47ff",
  colorError: "#d50056",
  AgreedToTos: false,
  userBanned: false,
  botErrorChannel: "1083095711094149180",
  ServerFeatured: false,
  BotChannel: "$channelID",
  BotChannelStatus: "default",
  
  //   [   Fun       ]
  GolHasSeenRules: false,
  GolCorrectEasy: 0,
  GolCorrectNormal: 0,
  GolCorrectHard: 0,
  
  //   [   Economy   ]
  currentFulltimeJob: "none",
  
  //   [   Errors    ]
  AgreedToTosError: "$ephemeral $color[#ff47ff] $title[Before we continue:] $footer[You have to agree with these terms before using akira.] $description[Before you proceed, please make sure to read and agree to our [Terms of Service\\](https://akira.lynnux.xyz/terms) and [Privacy Policy\\](https://akira.lynnux.xyz/policy).\n\nBy using the button below, you confirm that you have read and agree to abide by our terms and policies.\n\nIf you have any questions or concerns, feel free to contact our support team.] $addActionRow $addButton[AcceptTerms-$authorID;I have read and agree to abide by these terms and policies.;Success;;false]",
  BotChannelError: "$try[$!addMessageReactions[$channelID;$messageID;<:Wrong:1176924307834814564>];$ephemeral $interactionReply[<:Wrong:1176924307834814564> This channel is ignored, please use this command in the bot specific chanenl (<#$getVar[BotChannel;$guildID]>)]]",
  BotChannelAlreadyFreedError: "$color[#d50056] $title[Something went wrong:] $description[<:Wrong:1176924307834814564> There doesnt seem to be a bot Channel.]",
  NotEnoughUsersFoundOrMentionedError: "$title[Something went wrong:] $description[<:Wrong:1176924307834814564> You need to mention someone to kick.]$color[#d50056]",
  BotChannelAlreadySetError: "$color[#d50056] $title[Something went wrong:] $description[<:Wrong:1176924307834814564> The channel <#$channelID> is already set as the bot channel already.]",
  
  // NEW
  AgreedToTosEmbedReply: "$interactionReply $color[#ff47ff] $title[Before we continue:] $footer[You have to agree with these terms before using akira.] $description[Before you proceed, please make sure to read and agree to our [Terms of Service\\](https://akira.lynnux.xyz/terms) and [Privacy Policy\\](https://akira.lynnux.xyz/policy).\n\nBy using the button below, you confirm that you have read and agree to abide by our terms and policies.\n\nIf you have any questions or concerns, feel free to contact our support team.] $addActionRow $addButton[AcceptTerms-$authorID;I have read and agree to abide by these terms and policies.;Success;;false]",
  userIsBannedSlashError: "$ephemeral $color[#d50056 $title[You're banned!] $description[<:Error:1269706678039744574> One of my developers has banned you from using any of my commands,\nif you think this is a error, or want to apply for an unban please contact us by using `soon`.]]", //   [   ADDED
})

///////////////////////////////
//  [   Client Login    ]    //
///////////////////////////////

client.login(`${token}`);
