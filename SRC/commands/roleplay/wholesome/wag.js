module.exports = {
    name: "wag",
    aliases: ["rp-wag"],
	module: "Roleplay",
	version: "1.0",
    sourcecode: "https://github.com/LynnuxDev/Akira/blob/main/SRC/commands/Roleplay/wholesome/wag.js",
    documentation: "https://documentation.lynnux.xyz/akira/roleplay",
    type: "messageCreate",
	description: "wag someone.",
	usage: "wag <user> {message}",
	example: "wag @dark_lynn\n{prefix}wag @dark_lynn got waged.",
    code: `
        $onlyIf[$message!=;Wrong usage of this command use \`wag <user> {message}\`]
        $onlyIf[$checkContains[$message[0];<@&]!=true;You can't use this on a role.]
        $let[user;$if[$message[0]==;$authorID;$findUser[$message[0];true]]]
        $let[message;$replace[$replace[$message;$message[0] ;];$message[0];]]
        $let[user1;**$username[$get[user]]**] $let[user2;**$username[$authorID]**]

        $onlyIf[$get[user]!=$authorID;You cant do this to yourself.]
        $onlyIf[$getVar[rp-blocked-$authorID;$get[user]]!=true;Your Blocked by this user]

        $setVar[wag-give;$authorID;$sum[$getVar[wag-give;$authorID];1]]
        $setVar[wag-got;$get[user];$sum[$getVar[wag-got;$get[user]];1]]

        $let[msg;$get[user1] got wagged at by $get[user2].]

        $description[$get[msg]$if[$get[message]!=;\n"$get[message]"]]
        $color[$getVar[color;default]]

        $let[type2;got wagged at]

        $!httpRequest[https://api.lynnux.xyz/roleplay/wag.json;get]
        $let[url;$httpResult[embed;image;url]]
        $image[$get[url]]

        $footer[$username used wag $if[$getVar[wag-give;$authorID]==1;1 time;$getVar[wag-give;$authorID] times]. | $replace[$get[user1];**;;-1] $get[type2] $if[$getVar[wag-got;$get[user]]==1;1 time;$getVar[wag-got;$get[user]] times]]
    `}