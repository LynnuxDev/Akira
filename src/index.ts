import { ForgeDB } from "@tryforge/forge.db";
import { ForgeClient } from "@tryforge/forgescript";
import { ForgeTopGG } from "@tryforge/forge.topgg";
import { ForgeAPI } from "@tryforge/forge.api";
import { join } from "path";

import token from "./handler/token"; // Secure bot token
import events from "./handler/events"; // Event handlers
import intents from "./handler/intents"; // Discord API intents

///////////////////////////////
//  [ Environment Config ]  //
///////////////////////////////

const isDevelopment: boolean = process.env.NODE_ENV === 'development';

// Paths for dynamic module loading
const commandsPath: string = isDevelopment ? "src/commands" : "dist/commands";
const slashCommandsPath: string = isDevelopment ? "src/slash" : "dist/slash";
const apiPath: string = isDevelopment ? "src/Api" : "dist/Api";

///////////////////////////////
//  [    API Setup      ]    //
///////////////////////////////

const api = new ForgeAPI({
  port: 1069,
  logLevel: 1,
  auth: {
    bearer: true,
    type: 1,
    code: "ImAAuthCode",
    ip: "127.0.0.1"
  }
});

///////////////////////////////
// [  Database Setup   ]     //
///////////////////////////////

const database = new ForgeDB({
  type: "mysql",
  host: "IP",
  port: 1069,
  username: "AkiraDB",
  password: "PASSWORD",
  database: "Akira"
});

///////////////////////////////
// [   Top.gg Setup    ]     //
///////////////////////////////

const top = new ForgeTopGG({
  token: "TOP.GG TOKEN",
  auth: "TOP.GG AUTH",
  events: ["error", "posted", "voted"],
  post: {
    interval: 3_600_000 // Post bot stats every hour
  }
});

///////////////////////////////
// [   Client Setup    ]     //
///////////////////////////////

const client = new ForgeClient({
  events,
  intents,
  useInviteSystem: false,
  prefixes: [
    "$if[$checkContains[$authorID;1004291040150298715;521676495316582400;705306248538488947]==true;!]", // Dev prefix
    "<@!$clientID>", // Mention prefix
    "<@$clientID>" // Alternative mention prefix
  ],
  extensions: [
    new ForgeDB(),
    api
  ]
});

// Load functions and commands
client.functions.load(join(__dirname, "functions"));
client.commands.load(commandsPath);
client.applicationCommands.load(slashCommandsPath);

///////////////////////////////
//   [    Variables     ]    //
///////////////////////////////

// Global variables for the database

ForgeDB.variables({
  prefix: "!",
  uuid: "null",
  color: "#ff47ff",
  colorError: "#d50056",
  AgreedToTos: false,
  userBanned: false,
  botErrorChannel: "1083095711094149180",
  ServerFeatured: false,
  language: "en-us",
  BotChannel: "$channelID",
  BotChannelStatus: "default",
  voteReminder: false,

  //   [   Permission ]
  permsReply: "reply",

  //   [   Fun        ]
  GolHasSeenRules: false,
  GolCorrectEasy: 0,
  GolCorrectNormal: 0,
  GolCorrectHard: 0,

  //   [   Economy    ]
  currentFulltimeJob: "none",

  //   [   Embeds     ]
  AgreedToTosEmbedReply: "$interactionReply $color[#ff47ff] $title[Before we continue:] $footer[You have to agree with these terms before using akira.] $description[Before you proceed, please make sure to read and agree to our [Terms of Service\\](https://akira.lynnux.xyz/terms) and [Privacy Policy\\](https://akira.lynnux.xyz/policy).\n\nBy using the button below, you confirm that you have read and agree to abide by our terms and policies.\n\nIf you have any questions or concerns, feel free to contact our support team.] $addActionRow $addButton[AcceptTerms-$authorID;I have read and agree to abide by these terms and policies.;Success;;false]",
  AgreedToTosError: "$ephemeral $color[#ff47ff] $title[Before we continue:] $footer[You have to agree with these terms before using akira.] $description[Before you proceed, please make sure to read and agree to our [Terms of Service\\](https://akira.lynnux.xyz/terms) and [Privacy Policy\\](https://akira.lynnux.xyz/policy).\n\nBy using the button below, you confirm that you have read and agree to abide by our terms and policies.\n\nIf you have any questions or concerns, feel free to contact our support team.] $addActionRow $addButton[AcceptTerms-$authorID;I have read and agree to abide by these terms and policies.;Success;;false]",
  BotChannelError: "$try[$!addMessageReactions[$channelID;$messageID;<:Wrong:1176924307834814564>];$ephemeral $interactionReply[<:Wrong:1176924307834814564> This channel is ignored, please use this command in the bot specific channel (<#$getVar[BotChannel;$guildID]>)]]",
  BotChannelAlreadyFreedError: "$color[#d50056] $title[Something went wrong:] $description[<:Wrong:1176924307834814564> There doesn't seem to be a bot Channel.]",
  NotEnoughUsersFoundOrMentionedError: "$title[Something went wrong:] $description[<:Wrong:1176924307834814564> You need to mention someone to kick.]$color[#d50056]",
  BotChannelAlreadySetError: "$color[#d50056] $title[Something went wrong:] $description[<:Wrong:1176924307834814564> The channel <#$channelID> is already set as the bot channel already.]",
  userIsBannedSlashError: "$ephemeral $color[#d50056 $title[You're banned!] $description[<:Error:1269706678039744574> One of my developers has banned you from using any of my commands,\nif you think this is a error, or want to apply for an unban please contact us by using `soon`.]]", //   [   ADDED
})

///////////////////////////////
//  [   Client Login    ]    //
///////////////////////////////

// api.router.load(apiPath) // will be used later
client.login(`${token}`);
