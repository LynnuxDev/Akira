module.exports = [{
    name: "block",
	aliases: ["block-user","blockuser","rp-block"],
	module: "Roleplay",
	version: "1.0",
    sourcecode: "https://github.com/LynnuxDev/Akira/blob/main/SRC/commands/Roleplay/block.js",
    documentation: "https://documentation.lynnux.xyz/commands/roleplay/block",
    type: "messageCreate",
	description: "Block users so they can't spam you with roleplay commands and harass you. Useful if they keep trying to kiss you.",
	usage: "block <user>",
	example: "block @Dark-LYNN",
    code: `
        $let[user;$findUser[$message]]
        $onlyIf[$message!=;:x: Wrong usage of \`$getVar[prefix;default]block <user>\`.]
        $onlyIf[$get[user]!=$authorID;:x: You can't block yourself!]
        $onlyIf[$getVar[rp-blocked-$get[user];$authorID]!=true;:x: You have this user is blocked already.]
        
        $setVar[rp-blocked-$get[user];$authorID;true]
        $color[$getVar[color;default]]
        $title[User blocked!]
        $thumbnail[$userAvatar[$get[user]]]
        $description[You have blocked **$username[$get[user]]**\nThey can no longer use roleplay commands on you.]
    `}]