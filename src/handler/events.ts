import { ClientEvents } from 'discord.js';
const events: (keyof ClientEvents)[] = [
  // ~ Client
  "debug",                                      // This event is called when discord.js sends out debug info
  "error",                                      // This event is called when an error happens on the client
  "ready",                                      // This event is called when the client is ready
  //"shardDisconnect",                          // This event is called when a shard gets disconnected
  //"shardError",                               // This event is called when a shard throws an error
  //"shardReady",                               // This event is called when a shard is ready
  //"shardReconnecting",                        // This event is called when a shard is reconnecting
  //"shardResume",                              // This event is called when a shard resumes

  // ~ Automod
  //"autoModerationActionExecution",            // This event is called when a automod is called under a message

  // ~ Guilds
  //"channelUpdate",                            // This event is called when a channel gets updated
  //"channelDelete",                            // This event is called when a channel gets deleted
  //"channelPinsUpdate",                        // This event is called when a channel's pins are updated
  //"channelCreate",                            // This event is called when a channel gets created
  //"emojiUpdate",                              // This event is called when a emote gets updated
  //"emojiDelete",                              // This event is called when a emote gets deleted
  //"emojiCreate",                              // This event is called when a emote gets created
  //"guildAuditLogEntryCreate",                 // This event is called when a guild audit log entry is created
  //"guildAvailable",                           // This event is called when a guild becomes available
  //"guildBanAdd",                              // This event is called when a ban is added
  //"guildBanRemove",                           // This evemt is called when a ban is removed
  //"guildCreate",                              // This event is called when the bot is added to a guild
  //"guildDelete",                              // This event is called when the bot is removed from a guild
  "guildMemberAdd",                             // This event is called when a member joins the guild
  //"guildMemberAvailable",                     // This event is called when a member of a guild becomes available
  //"guildMemberRemove",                        // This event is called when a member leaves, is kicked or banned from a guild
  //"guildMemberUpdate",                        // This event is called when a member is updated in a guild
  //"guildScheduledEventCreate",                // This event is called when a schedule event is created
  //"guildScheduledEventDelete",                // This event is called when a schedule event is Deleted
  //"guildScheduledEventUpdate",                // This event is called when a schedule event is updated
  //"guildScheduledEventUserAdd",               // This event is called when a user joins a scheduled event
  //"guildScheduledEventUserRemove",            // This event is called when a user gets removed or leaves a scheduled event
  //"guildUnavailable",                         // This event is called when a guild becomes unavailable
  //"guildUpdate",                              // This event is called when a guild updates their settings
  "interactionCreate",                          // This event is called when a user uses a slash command, context menu, button, etc
  //"inviteCreate",                             // This event is called when a invite is created
  //"inviteDelete",                             // This event is called when a invite is deleted
  "messageCreate",                              // This event is called when a message is send
  //"messageDelete",                            // This event is called when a message is deleted
  //"messageDeleteBulk",                        // This event is called when a row of messages is deleted
  //"messageReactionAdd",                       // This event is called when a reaction is added
  //"messageReactionRemove",                    // This event is called when a reaction is removed
  //"messageReactionRemoveAll",                 // This event is called when all reactions get removed from a message
  //"messageReactionRemoveEmoji",               // This event is called when a emoji is removed from a message's reactions
  //"messageUpdate",                            // This event is called when a message gets changed
  //"roleCreate",                               // This event is called when a role gets created
  //"roleDelete",                               // This event is called when a role gets deleted
  //"roleUpdate",                               // This event is called when a role gets updated
  //"stageInstanceCreate",                      // This event is called when a Stage gets create
  //"stageInstanceDelete",                      // This event is called when a Stage gets deleted
  //"stageInstanceUpdate",                      // This event is called when a Stage gets updated
  //"stickerCreate",                            // This event is called when a sticker gets created//
  //"stickerDelete",                            // This event is called when a sticker gets deleted
  //"stickerUpdate",                            // This event is called when a sticker gets updated
  //"threadCreate",                             // This event is called when a thread is created
  //"threadDelete",                             // This event is called when a thread is delete//d
  //"threadMemberUpdate",                       // This event is called when a thread members gets updated
  //"threadUpdate",                             // This event is called when a thread gets updated
  //"typingStart",                              // This event is called when a user starts typing
  //"userUpdate",                               // This event is called when a user updates their// profile
  //"voiceStateUpdate",                         // This event is fired when a user joins/leaves a voice channel

  // ~ Users
  //"presenceUpdate",                           // This event is called when a user's presence is updated
];

export default events;
