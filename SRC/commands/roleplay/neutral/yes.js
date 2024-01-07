module.exports = {
    name: "yes",
    aliases: ["rp-yes"],
	module: "Roleplay",
	version: "1.0",
    sourcecode: "https://github.com/LynnuxDev/Akira/blob/main/SRC/commands/Roleplay/neutral/yes.js",
    documentation: "https://documentation.lynnux.xyz/akira/roleplay",
    type: "messageCreate",
	description: "yes for someone.",
	usage: "yes <user> {message}",
	example: "yes @dark_lynn\n{prefix}yes @dark_lynn got a yes",
    code: `
        $onlyIf[$message!=;Wrong usage of this command use \`yes <user> {message}\`]
        $onlyIf[$checkContains[$message[0];<@&]!=true;You can't use this on a role.]
        $let[user;$if[$message[0]==;$authorID;$findUser[$message[0];true]]]
        $let[message;$replace[$replace[$message;$message[0] ;];$message[0];]]
        $let[user1;**$username[$get[user]]**] $let[user2;**$username[$authorID]**]

        $onlyIf[$get[user]!=$authorID;You cant do this to yourself.]
        $onlyIf[$getVar[rp-blocked-$authorID;$get[user]]!=true;Your Blocked by this user]

        $setVar[yes-give;$authorID;$sum[$getVar[yes-give;$authorID];1]]
        $setVar[yes-got;$get[user];$sum[$getVar[yes-got;$get[user]];1]]

        $let[msg;$get[user1] got a yes from $get[user2].]

        $description[$get[msg]$if[$get[message]!=;\n"$get[message]"]]
        $color[$getVar[color;default]]

        $let[type2;got a yes]

        $!httpRequest[https://api.lynnux.xyz/roleplay/yes.json;get]
        $let[url;$httpResult[embed;image;url]]
        $image[$get[url]]

        $footer[$username used yes $if[$getVar[yes-give;$authorID]==1;1 time;$getVar[yes-give;$authorID] times]. | $replace[$get[user1];**;;-1] $get[type2] $if[$getVar[yes-got;$get[user]]==1;1 time;$getVar[yes-got;$get[user]] times]]
    `}