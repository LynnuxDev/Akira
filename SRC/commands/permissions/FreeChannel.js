module.exports = [{
    name: "freechannel",
	aliases: ["free-channel"],
	module: "Permissions",
	version: "1.0",
    sourcecode: "https://github.com/LynnuxDev/Akira/blob/main/SRC/commands/permissions/FreeChannel.js",
    documentation: "https://documentation.lynnux.xyz/commands/permissions/FreeChannel",
    type: "messageCreate",
	description: "Will remove the bot channel status of the channel.",
	usage: "freechannel",
	example: "freechannel",
    code: `
    $c[------------------------------------Let-----------------------------------]
        $let[channel;$channelID]

    $c[----------------------------------ONLY-IF---------------------------------]
        $onlyIf[$guildID!=;:x: this can not be used in dms.]
        $onlyIf[$getVar[AgreedToTos;$authorID]==true;$ephemeral $color[$getVar[color;default]] $title[Before we continue:] $footer[You have to agree with these terms before using akira.] $description[Before you proceed, please make sure to read and agree to our [Terms of Service\\](https://akira.lynnux.xyz/terms) and [Privacy Policy\\](https://akira.lynnux.xyz/policy).\n\nBy using the button below, you confirm that you have read and agree to abide by our terms and policies.\n\nIf you have any questions or concerns, feel free to contact our support team.] $addActionRow $addButton[AcceptTerms-$authorID;I have read and agree to abide by these terms and policies.;Success;;false]]
        $onlyIf[set==$getVar[BotChannelStatus;$guildID];$getVar[BotChannelAlreadyFreedError;default]]

    $c[-----------------------------------MAIN-----------------------------------]
        $color[$getVar[color;default]]
        $title[Bot Channel set-free.]
        $description[The botchannel has been freed, My commands can now be used in every channel.]
        $setVar[BotChannel;$guildID;NaN]
        $setVar[BotChannelStatus;$guildID;notset]

    `}]