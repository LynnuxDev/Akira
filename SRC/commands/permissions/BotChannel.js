module.exports = [{
    name: "botchannel",
	aliases: ["bot-channel"],
	module: "Permissions",
	version: "1.0",
    sourcecode: "https://github.com/LynnuxDev/Akira/blob/main/SRC/commands/permissions/BotChannel.js",
    documentation: "https://documentation.lynnux.xyz/commands/permissions/BotChannel",
    type: "messageCreate",
	description: "Set a channel to be the only channel that allows commands.",
	usage: "botchannel {channel}",
	example: "botchannel\n{prefix}botchannel #general",
    code: `
    $c[------------------------------------Let-----------------------------------]
    $let[channel;$findChannel[$message;true]]

    $c[----------------------------------ONLY-IF---------------------------------]
    $onlyIf[$guildID!=;:x: this can not be used in dms.]
    $onlyIf[$getVar[AgreedToTos;$authorID]==true;$getVar[AgreedToTosError;default]]
    $onlyIf[$get[channel]!=$getVar[BotChannel;$guildID];$getVar[BotChannelAlreadySetError;default]]

    $c[-----------------------------------MAIN-----------------------------------]
    $if[$get[channel]==$channelId;
        $color[$getVar[color;default]]
        $title[Bot Channel Set.]
        $description[The botchannel has been set to <#$channelID>, My commands can now only be used in this channel.]
        $footer[use $getVar[prefix;$guildID]freechannel to remove the bot channel.]
        $setVar[BotChannel;$guildID;$channelID]
    ;
        $color[$getVar[color;default]]
        $title[Bot Channel Set.]
        $description[The botchannel has been set to <#$get[channel]>, My commands can now only be used in the mentioned channel.]
        $footer[use $getVar[prefix;$guildID]freechannel to remove the bot channel.]
        $setVar[BotChannel;$guildID;$get[channel]]
    ]
    $setVar[BotChannelStatus;$guildID;set]
    `}]