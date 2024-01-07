module.exports = {
    name: "laugh",
    aliases: ["rp-laugh"],
	module: "Roleplay",
	version: "1.0",
    sourcecode: "https://github.com/LynnuxDev/Akira/blob/main/SRC/commands/Roleplay/wholesome/laugh.js",
    documentation: "https://documentation.lynnux.xyz/akira/roleplay",
    type: "messageCreate",
	description: "laugh someone.",
	usage: "laugh <user> {message}",
	example: "laugh @dark_lynn\n{prefix}laugh @dark_lynn got laughed at.",
    code: `
        $onlyIf[$message!=;Wrong usage of this command use \`laugh <user> {message}\`]
        $onlyIf[$checkContains[$message[0];<@&]!=true;You can't use this on a role.]
        $let[user;$if[$message[0]==;$authorID;$findUser[$message[0];true]]]
        $let[message;$replace[$replace[$message;$message[0] ;];$message[0];]]
        $let[user1;**$username[$get[user]]**] $let[user2;**$username[$authorID]**]

        $onlyIf[$get[user]!=$authorID;You cant do this to yourself.]
        $onlyIf[$getVar[rp-blocked-$authorID;$get[user]]!=true;Your Blocked by this user]

        $setVar[laugh-give;$authorID;$sum[$getVar[laugh-give;$authorID];1]]
        $setVar[laugh-got;$get[user];$sum[$getVar[laugh-got;$get[user]];1]]

        $let[msg;$randomText[$get[user1] got laughed at $get[user2];$get[user1] made $get[user2] laugh].]

        $description[$get[msg]$if[$get[message]!=;\n"$get[message]"]]
        $color[$getVar[color;default]]

        $let[type2;made people laugh]

        $!httpRequest[https://api.lynnux.xyz/roleplay/laugh.json;get]
        $let[url;$httpResult[embed;image;url]]
        $image[$get[url]]

        $footer[$username used laugh $if[$getVar[laugh-give;$authorID]==1;1 time;$getVar[laugh-give;$authorID] times]. | $replace[$get[user1];**;;-1] $get[type2] $if[$getVar[laugh-got;$get[user]]==1;1 time;$getVar[laugh-got;$get[user]] times]]
    `}