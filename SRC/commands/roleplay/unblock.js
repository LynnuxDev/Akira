module.exports = [{
    name: "unblock",
	aliases: ["unblock-user","unblockuser","rp-unblock"],
	module: "Roleplay",
	version: "1.0",
    sourcecode: "https://github.com/LynnuxDev/Akira/blob/main/SRC/commands/Roleplay/unblock.js",
    documentation: "https://documentation.lynnux.xyz/commands/roleplay/unblock",
    type: "messageCreate",
	description: "UnBlock users so they can use roleplay commands on you again.",
	usage: "unblock <user>",
	example: "unblock @Dark-LYNN",
    code: `
    $c[-----------------------------------ONLYIF-----------------------------------]
        $onlyIf[$getVar[AgreedToTos;$authorID]==true;$ephemeral $color[$getVar[color;default]] $title[Before we continue:] $footer[You have to agree with these terms before using akira.] $description[Before you proceed, please make sure to read and agree to our [Terms of Service\\](https://akira.lynnux.xyz/terms) and [Privacy Policy\\](https://akira.lynnux.xyz/policy).\n\nBy using the button below, you confirm that you have read and agree to abide by our terms and policies.\n\nIf you have any questions or concerns, feel free to contact our support team.] $addActionRow $addButton[AcceptTerms-$authorID;I have read and agree to abide by these terms and policies.;Success;;false]]
        $onlyIf[$channelID==$getVar[BotChannel;$guildID];$getVar[BotChannelError;default]]

    $c[-----------------------------------LET-----------------------------------]
        $let[user;$findUser[$message]]
        
    $c[-----------------------------------MAIN-----------------------------------]
        $onlyIf[$message!=;:x: Wrong usage of \`$getVar[prefix;default]unblock <user>\`.]
        $onlyIf[$get[user]!=$authorID;:x: You can't unblock yourself!]
        $onlyIf[$getVar[rp-blocked-$get[user];$authorID]==true;:x: You don't have this user blocked.$ephemeral]
        $setVar[rp-blocked-$get[user];$authorID;false]
        $color[$getVar[color;default]]
        $title[User unblocked!]
        $thumbnail[$userAvatar[$get[user]]]
        $description[You have unblocked **$username[$get[user]]**\nThey can use roleplay commands on you again.]
    `}]