import { ForgeDB } from "@tryforge/forge.db";              // https://github.com/tryforge/ForgeDB/tree/dev
import { ForgeClient } from "@tryforge/forgescript";       // https://github.com/tryforge/ForgeScript/tree/dev
import { ForgeTopGG } from "@tryforge/forge.topgg";        // https://github.com/tryforge/ForgeTopGG/tree/dev
import { ForgeAPI } from "@tryforge/forge.api";            // https://github.com/tryforge/ForgeAPI/tree/dev
import { join } from "path";

import token from "./handler/token";
import events from "./handler/events";
import intents from "./handler/intents";

const isDevelopment: boolean = process.env.NODE_ENV === 'development';
const commandsPath: string = isDevelopment ? "src/commands" : "dist/commands";
const slashCommandsPath: string = isDevelopment ? "src/slash" : "dist/slash";
const apiPath: string = isDevelopment ? "src/Api" : "dist/Api";

const api = new ForgeAPI({
  port: 1025,
  logLevel: 1,
  auth: {
    bearer: true,
    type: 1,
    code: "ImAAuthCode",  // Not actually using this auth
    ip: "127.0.0.1"       // This is a localhost
  }
})
const database = new ForgeDB({
  type: "mysql",
<<<<<<< HEAD
  host: "IP",
  port: 1069,
  username: "akiradb",
  password: "PASSWORD",
=======
  host: "host-domain",
  port: 1069,
  username: "akiraDB",
  password: "Password",
>>>>>>> 06754298a891a4357155ebce27a408141e7b8af8
  database: "akira"
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

const client = new ForgeClient({
  "events": events,
  "intents": intents,
  "useInviteSystem": false,
  "prefixes": [
    "$if[$authorID==705306248538488947;!]",
/*  "$toLowerCase[$getUserVar[prefix;$authorID]]",
    "$toUpperCase[$getUserVar[prefix;$authorID]]",
    "$if[$djsEval[!!ctx.message?.guild]==true;$toUpperCase[$getGuildVar[prefix]];$getGlobalVar[prefix]]",
    "$if[$djsEval[!!ctx.message?.guild]==true;$toLowerCase[$getGuildVar[prefix]];$getGlobalVar[prefix]]",
    "$if[$startsWith[$tolowercase[$messageContent];akira]==true;$messageContent;$log[$messageContent]no]", */
    "<@!$clientID>",
    "<@$clientID>"
  ],
  "extensions": [
    new ForgeDB(),
    api
  ]
})



client.functions.load(join(__dirname, "functions"))
client.commands.load(commandsPath);
client.applicationCommands.load(slashCommandsPath);

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
  //   [   Permission ]
  permsReply: "reply",
  //   [   Fun        ]
  GolHasSeenRules: false,
  GolCorrectEasy: 0,
  GolCorrectNormal: 0,
  GolCorrectHard: 0,
  //   [   Economy    ]
  currentFulltimeJob: "none",
  //   [   Errors     ]
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
api.router.load(apiPath)

client.login(`${token}`);
