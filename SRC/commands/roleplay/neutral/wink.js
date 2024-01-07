module.exports = {
    name: "wink",
    aliases: ["rp-wink"],
	module: "Roleplay",
	version: "1.0",
    sourcecode: "https://github.com/LynnuxDev/Akira/blob/main/SRC/commands/Roleplay/neutral/wink.js",
    documentation: "https://documentation.lynnux.xyz/akira/roleplay",
    type: "messageCreate",
	description: "wink for someone.",
	usage: "wink <user> {message}",
	example: "wink @dark_lynn\n{prefix}wink @dark_lynn got a wink",
    code: `
        $onlyIf[$message!=;Wrong usage of this command use \`wink <user> {message}\`]
        $onlyIf[$checkContains[$message[0];<@&]!=true;You can't use this on a role.]
        $let[user;$if[$message[0]==;$authorID;$findUser[$message[0];true]]]
        $let[message;$replace[$replace[$message;$message[0] ;];$message[0];]]
        $let[user1;**$username[$get[user]]**] $let[user2;**$username[$authorID]**]

        $onlyIf[$get[user]!=$authorID;You cant do this to yourself.]
        $onlyIf[$getVar[rp-blocked-$authorID;$get[user]]!=true;Your Blocked by this user]

        $setVar[wink-give;$authorID;$sum[$getVar[wink-give;$authorID];1]]
        $setVar[wink-got;$get[user];$sum[$getVar[wink-got;$get[user]];1]]

        $let[msg;$get[user1] got a wink from $get[user2].]

        $description[$get[msg]$if[$get[message]!=;\n"$get[message]"]]
        $color[$getVar[color;default]]

        $let[type2;got winked at]

        $!httpRequest[https://api.lynnux.xyz/roleplay/wink.json;get]
        $let[url;$httpResult[embed;image;url]]
        $image[$get[url]]

        $footer[$username used wink $if[$getVar[wink-give;$authorID]==1;1 time;$getVar[wink-give;$authorID] times]. | $replace[$get[user1];**;;-1] $get[type2] $if[$getVar[wink-got;$get[user]]==1;1 time;$getVar[wink-got;$get[user]] times]]
    `}