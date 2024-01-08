module.exports = {
    name: "chase",
    aliases: ["rp-chase"],
	module: "Roleplay",
	version: "1.0",
    sourcecode: "https://github.com/LynnuxDev/Akira/blob/main/SRC/commands/Roleplay/neutral/chase.js",
    documentation: "https://documentation.lynnux.xyz/akira/roleplay",
    type: "messageCreate",
	description: "chase for someone.",
	usage: "chase <user> {message}",
	example: "chase @dark_lynn\n{prefix}chase @dark_lynn got chased",
    code: `
        $onlyIf[$message!=;Wtong usage of this command use \`chase <user> {message}\`]
        $onlyIf[$checkContains[$message[0];<@&]!=true;You can't use this on a role.]
        $let[user;$if[$message[0]==;$authorID;$findUser[$message[0];true]]]
        $let[message;$replace[$replace[$message;$message[0] ;];$message[0];]]
        $let[user1;**$username[$get[user]]**] $let[user2;**$username[$authorID]**]

        $onlyIf[$get[user]!=$authorID;You cant do this to yourself.]
        $onlyIf[$getVar[rp-blocked-$authorID;$get[user]]!=true;Your Blocked by this user]

        $setVar[chase-give;$authorID;$sum[$getVar[chase-give;$authorID];1]]
        $setVar[chase-got;$get[user];$sum[$getVar[chase-got;$get[user]];1]]

        $let[msg;$get[user1] was chased by $get[user2].]

        $description[$get[msg]$if[$get[message]!=;\n"$get[message]"]]
        $color[$getVar[color;default]]

        $let[type2;got chased]

        $!httpRequest[https://api.lynnux.xyz/roleplay/chase.json;get]
        $let[url;$httpResult[embed;image;url]]
        $image[$get[url]]

        $footer[$username used chase $if[$getVar[chase-give;$authorID]==1;1 time;$getVar[chase-give;$authorID] times]. | $replace[$get[user1];**;;-1] $get[type2] $if[$getVar[chase-got;$get[user]]==1;1 time;$getVar[chase-got;$get[user]] times]]
    `}