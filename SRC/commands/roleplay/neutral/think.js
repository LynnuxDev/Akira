module.exports = {
    name: "think",
    aliases: ["rp-think"],
	module: "Roleplay",
	version: "1.0",
    sourcecode: "https://github.com/LynnuxDev/Akira/blob/main/SRC/commands/Roleplay/neutral/think.js",
    documentation: "https://documentation.lynnux.xyz/akira/roleplay",
    type: "messageCreate",
	description: "think for someone.",
	usage: "think <user> {message}",
	example: "think @dark_lynn\n{prefix}think @dark_lynn that made me think",
    code: `
        $onlyIf[$message!=;Wrong usage of this command use \`think <user> {message}\`]
        $onlyIf[$checkContains[$message[0];<@&]!=true;You can't use this on a role.]
        $let[user;$if[$message[0]==;$authorID;$findUser[$message[0];true]]]
        $let[message;$replace[$replace[$message;$message[0] ;];$message[0];]]
        $let[user1;**$username[$get[user]]**] $let[user2;**$username[$authorID]**]

        $onlyIf[$checkContains[$getVar[rp-commandblocked;$get[user]];*]==false;:x: All roleplay commands are blocked by $get[user1].]
        $onlyIf[$checkContains[$getVar[rp-commandblocked;$get[user]];think]==false;:x: This roleplay command is blocked by $get[user1].]

        $onlyIf[$get[user]!=$authorID;You cant do this to yourself.]
        $onlyIf[$getVar[rp-blocked-$authorID;$get[user]]!=true;Your Blocked by this user]

        $setVar[think-give;$authorID;$sum[$getVar[think-give;$authorID];1]]
        $setVar[think-got;$get[user];$sum[$getVar[think-got;$get[user]];1]]

        $let[msg;$get[user1] made $get[user2] think.]

        $description[$get[msg]$if[$get[message]!=;\n"$get[message]"]]
        $color[$getVar[color;default]]

        $let[type2;made people think]

        $!httpRequest[https://api.lynnux.xyz/roleplay/think.json;get]
        $let[url;$httpResult[embed;image;url]]
        $image[$get[url]]

        $footer[$username used think $if[$getVar[think-give;$authorID]==1;1 time;$getVar[think-give;$authorID] times]. | $replace[$get[user1];**;;-1] $get[type2] $if[$getVar[think-got;$get[user]]==1;1 time;$getVar[think-got;$get[user]] times]]
    `}