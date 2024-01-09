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
        $let[user;$findUser[$message]]
        $onlyIf[$message!=;:x: Wrong usage of \`$getVar[prefix;default]unblock <user>\`.]
        $onlyIf[$get[user]!=$authorID;:x: You can't unblock yourself!]
        $onlyIf[$getVar[rp-blocked-$get[user];$authorID]==true;:x: You don't have this user blocked.$ephemeral]
        $setVar[rp-blocked-$get[user];$authorID;false]
        $color[$getVar[color;default]]
        $title[User unblocked!]
        $thumbnail[$userAvatar[$get[user]]]
        $description[You have unblocked **$username[$get[user]]**\nThey can use roleplay commands on you again.]
    `}]