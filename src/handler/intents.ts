// @ts-nocheck
// @ts-ignore
const intents = [
//"AutoModerationConfiguration",      // Intent for Automod Config
//"AutoModerationExecution",          // Intent for Automod Execution

  "DirectMessages",                   // Intent for DM
//"DirectMessageReactions",           // Intent for DM Reacts
//"DirectMessageTyping",              // Intent for Typing in DM
//"GuildEmojisAndStickers",           // Intent for Guild Emojis and Stickers

  "Guilds",                           // Intent for Guilds
  "GuildMembers",                     // Intent for GuildMembers
//"GuildModeration",                  // Intent for GuildModeration
//"GuildEmojisAndStickers",           // Intent for Guild Emojis and Stickers
  "GuildIntegrations",                // Intent for Guild Intergrations (bots etc)
//"GuildWebhooks",                    // Intent for Guild Webhook
//"GuildInvites",                     // Intent for Guild Invites
//"GuildVoiceStates",                 // Intent for Guild Voice States
  "GuildMessages",                    // Intent for Guild Messages
//"GuildMessageReactions",            // Intent for Guild Reactions
//"GuildMessageTyping",               // Intent for Guild typing
//"GuildScheduledEvents",             // Intent for Guild scheduled events
  "MessageContent"                    // Intent for Message Content
]
module.exports = intents;

// SEE https://discord.com/developers/docs/topics/gateway#list-of-intents