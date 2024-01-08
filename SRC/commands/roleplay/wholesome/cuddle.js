module.exports = {
    name: "cuddle",
    aliases: ["rp-cuddle"],
	module: "Roleplay",
	version: "1.0",
    sourcecode: "https://github.com/LynnuxDev/Akira/blob/main/SRC/commands/Roleplay/wholesome/cuddle.js",
    documentation: "https://documentation.lynnux.xyz/akira/roleplay",
    type: "messageCreate",
	description: "cuddle someone.",
	usage: "cuddle <user> {message}",
	example: "cuddle @dark_lynn\n{prefix}cuddle @dark_lynn got cuddleed.",
    code: `
        $onlyIf[$message!=;Wrong usage of this command use \`cuddle <user> {message}\`]
        $onlyIf[$checkContains[$message[0];<@&]!=true;You can't use this on a role.]
        $let[user;$if[$message[0]==;$authorID;$findUser[$message[0];true]]]
        $let[message;$replace[$replace[$message;$message[0] ;];$message[0];]]
        $let[user1;**$username[$get[user]]**] $let[user2;**$username[$authorID]**]

        $onlyIf[$checkContains[$getVar[rp-commandblocked;$get[user]];*]==false;:x: All roleplay commands are blocked by $get[user1].]
        $onlyIf[$checkContains[$getVar[rp-commandblocked;$get[user]];cuiddle]==false;:x: This roleplay command is blocked by $get[user1].]

        $onlyIf[$get[user]!=$authorID;You cant do this to yourself.]
        $onlyIf[$getVar[rp-blocked-$authorID;$get[user]]!=true;Your Blocked by this user]

        $setVar[cuddle-give;$authorID;$sum[$getVar[cuddle-give;$authorID];1]]
        $setVar[cuddle-got;$get[user];$sum[$getVar[cuddle-got;$get[user]];1]]

        $let[msg;$get[user1] got cuddled on by $get[user2].]

        $description[$get[msg]$if[$get[message]!=;\n"$get[message]"]]
        $color[$getVar[color;default]]

        $let[type2;got cuddled]

        $!httpRequest[https://api.lynnux.xyz/roleplay/cuddle.json;get]
        $let[url;$httpResult[embed;image;url]]
        $image[$get[url]]

        $footer[$username used cuddle $if[$getVar[cuddle-give;$authorID]==1;1 time;$getVar[cuddle-give;$authorID] times]. | $replace[$get[user1];**;;-1] $get[type2] $if[$getVar[cuddle-got;$get[user]]==1;1 time;$getVar[cuddle-got;$get[user]] times]]
    `}