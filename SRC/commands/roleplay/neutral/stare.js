module.exports = {
    name: "stare",
    aliases: ["rp-stare"],
	module: "Roleplay",
	version: "1.0",
    sourcecode: "https://github.com/LynnuxDev/Akira/blob/main/SRC/commands/Roleplay/neutral/stare.js",
    documentation: "https://documentation.lynnux.xyz/akira/roleplay",
    type: "messageCreate",
	description: "stare for someone.",
	usage: "stare <user> {message}",
	example: "stare @dark_lynn\n{prefix}stare @dark_lynn lemme stare at you",
    code: `
        $onlyIf[$message!=;Wrong usage of this command use \`stare <user> {message}\`]
        $onlyIf[$checkContains[$message[0];<@&]!=true;You can't use this on a role.]
        $let[user;$if[$message[0]==;$authorID;$findUser[$message[0];true]]]
        $let[message;$replace[$replace[$message;$message[0] ;];$message[0];]]
        $let[user1;**$username[$get[user]]**] $let[user2;**$username[$authorID]**]

        $onlyIf[$checkContains[$getVar[rp-commandblocked;$get[user]];*]==false;:x: All roleplay commands are blocked by $get[user1].]
        $onlyIf[$checkContains[$getVar[rp-commandblocked;$get[user]];stare]==false;:x: This roleplay command is blocked by $get[user1].]

        $onlyIf[$get[user]!=$authorID;You cant do this to yourself.]
        $onlyIf[$getVar[rp-blocked-$authorID;$get[user]]!=true;Your Blocked by this user]

        $setVar[stare-give;$authorID;$sum[$getVar[stare-give;$authorID];1]]
        $setVar[stare-got;$get[user];$sum[$getVar[stare-got;$get[user]];1]]

        $let[msg;$get[user1] got stared at by $get[user2].]

        $description[$get[msg]$if[$get[message]!=;\n"$get[message]"]]
        $color[$getVar[color;default]]

        $let[type2;got stared at]

        $!httpRequest[https://api.lynnux.xyz/roleplay/stare.json;get]
        $let[url;$httpResult[embed;image;url]]
        $image[$get[url]]

        $footer[$username used stare $if[$getVar[stare-give;$authorID]==1;1 time;$getVar[stare-give;$authorID] times]. | $replace[$get[user1];**;;-1] $get[type2] $if[$getVar[stare-got;$get[user]]==1;1 time;$getVar[stare-got;$get[user]] times]]
    `}