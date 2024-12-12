import { GatewayIntentBits } from 'discord.js';
const intents: GatewayIntentBits[] = [
//GatewayIntentBits.AutoModerationConfiguration,      // Intent for Automod Config
//GatewayIntentBits.AutoModerationExecution,          // Intent for Automod Execution

GatewayIntentBits.DirectMessages,             // Intent for DM
//GatewayIntentBits.DirectMessageReactions,           // Intent for DM Reacts
//GatewayIntentBits.DirectMessageTyping,              // Intent for Typing in DM
//GatewayIntentBits.GuildEmojisAndStickers,           // Intent for Guild Emojis and Stickers

GatewayIntentBits.Guilds,                    // Intent for Guilds
GatewayIntentBits.GuildMembers,              // Intent for Guild Members
//GatewayIntentBits.GuildModeration,                  // Intent for GuildModeration
//GatewayIntentBits.GuildEmojisAndStickers,           // Intent for Guild Emojis and Stickers
GatewayIntentBits.GuildIntegrations,         // Intent for Guild Integrations (bots, etc.)
//GatewayIntentBits.GuildWebhooks,                    // Intent for Guild Webhook
//GatewayIntentBits.GuildInvites,                     // Intent for Guild Invites
//GatewayIntentBits.GuildVoiceStates,                 // Intent for Guild Voice States
GatewayIntentBits.GuildMessages,             // Intent for Guild Messages
//GatewayIntentBits.GuildMessageReactions,            // Intent for Guild Reactions
//GatewayIntentBits.GuildMessageTyping,               // Intent for Guild typing
//GatewayIntentBits.GuildScheduledEvents,             // Intent for Guild scheduled events
GatewayIntentBits.MessageContent,            // Intent for Message Content
];

export default intents;

// SEE https://discord.com/developers/docs/topics/gateway#list-of-intents