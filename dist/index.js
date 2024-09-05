"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const forge_db_1 = require("@tryforge/forge.db");
const forgescript_1 = require("@tryforge/forgescript");
const forge_topgg_1 = require("@tryforge/forge.topgg");
const forge_api_1 = require("@tryforge/forge.api");
const path_1 = require("path");
const token_1 = __importDefault(require("./handler/token"));
const events_1 = __importDefault(require("./handler/events"));
const intents_1 = __importDefault(require("./handler/intents"));
const isDevelopment = process.env.NODE_ENV === 'development';
const commandsPath = isDevelopment ? "src/commands" : "dist/commands";
const slashCommandsPath = isDevelopment ? "src/slash" : "dist/slash";
const apiPath = isDevelopment ? "src/Api" : "dist/Api";
const api = new forge_api_1.ForgeAPI({
    port: 1069,
    logLevel: 1,
    auth: {
        bearer: true,
        type: 1,
        code: "ImAAuthCode",
        ip: "127.0.0.1"
    }
});
const database = new forge_db_1.ForgeDB({
    type: "mysql",
    host: "host-domain",
    port: 4069,
    username: "akiraDB",
    password: "password",
    database: "akira"
});
const top = new forge_topgg_1.ForgeTopGG({
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
});
const client = new forgescript_1.ForgeClient({
    "events": events_1.default,
    "intents": intents_1.default,
    "useInviteSystem": false,
    "prefixes": [
        "$toLowerCase[$getUserVar[prefix;$authorID]]",
        "$toUpperCase[$getUserVar[prefix;$authorID]]",
        "$if[$djsEval[!!ctx.message?.guild]==true;$toUpperCase[$getGuildVar[prefix]];$getGlobalVar[prefix]]",
        "$if[$djsEval[!!ctx.message?.guild]==true;$toLowerCase[$getGuildVar[prefix]];$getGlobalVar[prefix]]",
        "<@!$clientID>",
        "<@$clientID>"
    ],
    "extensions": [
        database,
        api
    ]
});
client.functions.load((0, path_1.join)(__dirname, "functions"));
client.commands.load(commandsPath);
client.applicationCommands.load(slashCommandsPath);
forge_db_1.ForgeDB.variables({
    prefix: "!",
    color: "#ff47ff",
    colorError: "#d50056",
    AgreedToTos: false,
    userBanned: false,
    botErrorChannel: "1083095711094149180",
    ServerFeatured: false,
    BotChannel: "$channelID",
    BotChannelStatus: "default",
    permsReply: "reply",
    GolHasSeenRules: false,
    GolCorrectEasy: 0,
    GolCorrectNormal: 0,
    GolCorrectHard: 0,
    currentFulltimeJob: "none",
    AgreedToTosError: "$ephemeral $color[#ff47ff] $title[Before we continue:] $footer[You have to agree with these terms before using akira.] $description[Before you proceed, please make sure to read and agree to our [Terms of Service\\](https://akira.lynnux.xyz/terms) and [Privacy Policy\\](https://akira.lynnux.xyz/policy).\n\nBy using the button below, you confirm that you have read and agree to abide by our terms and policies.\n\nIf you have any questions or concerns, feel free to contact our support team.] $addActionRow $addButton[AcceptTerms-$authorID;I have read and agree to abide by these terms and policies.;Success;;false]",
    BotChannelError: "$try[$!addMessageReactions[$channelID;$messageID;<:Wrong:1176924307834814564>];$ephemeral $interactionReply[<:Wrong:1176924307834814564> This channel is ignored, please use this command in the bot specific chanenl (<#$getVar[BotChannel;$guildID]>)]]",
    BotChannelAlreadyFreedError: "$color[#d50056] $title[Something went wrong:] $description[<:Wrong:1176924307834814564> There doesnt seem to be a bot Channel.]",
    NotEnoughUsersFoundOrMentionedError: "$title[Something went wrong:] $description[<:Wrong:1176924307834814564> You need to mention someone to kick.]$color[#d50056]",
    BotChannelAlreadySetError: "$color[#d50056] $title[Something went wrong:] $description[<:Wrong:1176924307834814564> The channel <#$channelID> is already set as the bot channel already.]",
    AgreedToTosEmbedReply: "$interactionReply $color[#ff47ff] $title[Before we continue:] $footer[You have to agree with these terms before using akira.] $description[Before you proceed, please make sure to read and agree to our [Terms of Service\\](https://akira.lynnux.xyz/terms) and [Privacy Policy\\](https://akira.lynnux.xyz/policy).\n\nBy using the button below, you confirm that you have read and agree to abide by our terms and policies.\n\nIf you have any questions or concerns, feel free to contact our support team.] $addActionRow $addButton[AcceptTerms-$authorID;I have read and agree to abide by these terms and policies.;Success;;false]",
    userIsBannedSlashError: "$ephemeral $color[#d50056 $title[You're banned!] $description[<:Error:1269706678039744574> One of my developers has banned you from using any of my commands,\nif you think this is a error, or want to apply for an unban please contact us by using `soon`.]]",
});
api.router.load(apiPath);
client.login(`${token_1.default}`);
//# sourceMappingURL=index.js.map
