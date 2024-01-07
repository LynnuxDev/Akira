module.exports = {
    name: "kiss",
    aliases: ["rp-kiss"],
	module: "Roleplay",
	version: "1.0",
    sourcecode: "https://github.com/LynnuxDev/Akira/blob/main/SRC/commands/Roleplay/wholesome/kiss.js",
    documentation: "https://documentation.lynnux.xyz/akira/roleplay",
    type: "messageCreate",
	description: "kiss someone.",
	usage: "kiss <user> {message}",
	example: "kiss @dark_lynn\n{prefix}kiss @dark_lynn got kissed.",
    code: `
        $onlyIf[$message!=;Wrong usage of this command use \`kiss <user> {message}\`]
        $onlyIf[$checkContains[$message[0];<@&]!=true;You can't use this on a role.]
        $let[user;$if[$message[0]==;$authorID;$findUser[$message[0];true]]]
        $let[message;$replace[$replace[$message;$message[0] ;];$message[0];]]
        $let[user1;**$username[$get[user]]**] $let[user2;**$username[$authorID]**]

        $onlyIf[$get[user]!=$authorID;You cant do this to yourself.]
        $onlyIf[$getVar[rp-blocked-$authorID;$get[user]]!=true;Your Blocked by this user]

        $setVar[kiss-give;$authorID;$sum[$getVar[kiss-give;$authorID];1]]
        $setVar[kiss-got;$get[user];$sum[$getVar[kiss-got;$get[user]];1]]

        $let[msg;$get[user1] got kissed by $get[user2].]

        $description[$get[msg]$if[$get[message]!=;\n"$get[message]"]]
        $color[$getVar[color;default]]

        $let[type2;got kissed]

        $!httpRequest[https://api.lynnux.xyz/roleplay/kiss.json;get]
        $let[url;$httpResult[embed;image;url]]
        $image[$get[url]]

        $footer[$username used kiss $if[$getVar[kiss-give;$authorID]==1;1 time;$getVar[kiss-give;$authorID] times]. | $replace[$get[user1];**;;-1] $get[type2] $if[$getVar[kiss-got;$get[user]]==1;1 time;$getVar[kiss-got;$get[user]] times]]
    `}