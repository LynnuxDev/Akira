module.exports = {
    name: "triggered",
    aliases: ["rp-triggered"],
	module: "Roleplay",
	version: "1.0",
    sourcecode: "https://github.com/LynnuxDev/Akira/blob/main/SRC/commands/Roleplay/wholesome/triggered.js",
    documentation: "https://documentation.lynnux.xyz/akira/roleplay",
    type: "messageCreate",
	description: "triggered someone.",
	usage: "triggered <user> {message}",
	example: "triggered @dark_lynn\n{prefix}triggered @dark_lynn you trigger me.",
    code: `
        $onlyIf[$message!=;Wrong usage of this command use \`triggered <user> {message}\`]
        $onlyIf[$checkContains[$message[0];<@&]!=true;You can't use this on a role.]
        $let[user;$if[$message[0]==;$authorID;$findUser[$message[0];true]]]
        $let[message;$replace[$replace[$message;$message[0] ;];$message[0];]]
        $let[user1;**$username[$get[user]]**] $let[user2;**$username[$authorID]**]

        $onlyIf[$get[user]!=$authorID;You cant do this to yourself.]
        $onlyIf[$getVar[rp-blocked-$authorID;$get[user]]!=true;Your Blocked by this user]

        $setVar[triggered-give;$authorID;$sum[$getVar[triggered-give;$authorID];1]]
        $setVar[triggered-got;$get[user];$sum[$getVar[triggered-got;$get[user]];1]]

        $let[msg;$get[user2] got triggered by $get[user1].]

        $description[$get[msg]$if[$get[message]!=;\n"$get[message]"]]
        $color[$getVar[color;default]]

        $let[type2;got triggered]

        $!httpRequest[https://api.lynnux.xyz/roleplay/triggered.json;get]
        $let[url;$httpResult[embed;image;url]]
        $image[$get[url]]

        $footer[$username used triggered $if[$getVar[triggered-give;$authorID]==1;1 time;$getVar[triggered-give;$authorID] times]. | $replace[$get[user1];**;;-1] $get[type2] $if[$getVar[triggered-got;$get[user]]==1;1 time;$getVar[triggered-got;$get[user]] times]]
    `}