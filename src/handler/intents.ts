import { GatewayIntentBits } from 'discord.js';
const intents: GatewayIntentBits[] = [
//"AutoModerationConfiguration",      // Intent for Automod Config
//"AutoModerationExecution",          // Intent for Automod Execution

GatewayIntentBits.DirectMessages,             // Intent for DM
//"DirectMessageReactions",           // Intent for DM Reacts
//"DirectMessageTyping",              // Intent for Typing in DM
//"GuildEmojisAndStickers",           // Intent for Guild Emojis and Stickers

GatewayIntentBits.Guilds,                    // Intent for Guilds
GatewayIntentBits.GuildMembers,              // Intent for Guild Members
//"GuildModeration",                  // Intent for GuildModeration
//"GuildEmojisAndStickers",           // Intent for Guild Emojis and Stickers
GatewayIntentBits.GuildIntegrations,         // Intent for Guild Integrations (bots, etc.)
//"GuildWebhooks",                    // Intent for Guild Webhook
//"GuildInvites",                     // Intent for Guild Invites
//"GuildVoiceStates",                 // Intent for Guild Voice States
GatewayIntentBits.GuildMessages,             // Intent for Guild Messages
//"GuildMessageReactions",            // Intent for Guild Reactions
//"GuildMessageTyping",               // Intent for Guild typing
//"GuildScheduledEvents",             // Intent for Guild scheduled events
GatewayIntentBits.MessageContent,            // Intent for Message Content
];

export default intents;

// SEE https://discord.com/developers/docs/topics/gateway#list-of-intents