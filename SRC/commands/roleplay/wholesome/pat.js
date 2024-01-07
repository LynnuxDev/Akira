module.exports = {
    name: "pat",
    aliases: ["rp-pat"],
	module: "Roleplay",
	version: "1.0",
    sourcecode: "https://github.com/LynnuxDev/Akira/blob/main/SRC/commands/Roleplay/wholesome/pat.js",
    documentation: "https://documentation.lynnux.xyz/akira/roleplay",
    type: "messageCreate",
	description: "pat someone.",
	usage: "pat <user> {message}",
	example: "pat @dark_lynn\n{prefix}pat @dark_lynn got pated.",
    code: `
        $onlyIf[$message!=;Wrong usage of this command use \`pat <user> {message}\`]
        $onlyIf[$checkContains[$message[0];<@&]!=true;You can't use this on a role.]
        $let[user;$if[$message[0]==;$authorID;$findUser[$message[0];true]]]
        $let[message;$replace[$replace[$message;$message[0] ;];$message[0];]]
        $let[user1;**$username[$get[user]]**] $let[user2;**$username[$authorID]**]

        $onlyIf[$get[user]!=$authorID;You cant do this to yourself.]
        $onlyIf[$getVar[rp-blocked-$authorID;$get[user]]!=true;Your Blocked by this user]

        $setVar[pat-give;$authorID;$sum[$getVar[pat-give;$authorID];1]]
        $setVar[pat-got;$get[user];$sum[$getVar[pat-got;$get[user]];1]]

        $let[msg;$get[user1] got patted by $get[user2].]

        $description[$get[msg]$if[$get[message]!=;\n"$get[message]"]]
        $color[$getVar[color;default]]

        $let[type2;got patted]

        $!httpRequest[https://api.lynnux.xyz/roleplay/pat.json;get]
        $let[url;$httpResult[embed;image;url]]
        $image[$get[url]]

        $footer[$username used pat $if[$getVar[pat-give;$authorID]==1;1 time;$getVar[pat-give;$authorID] times]. | $replace[$get[user1];**;;-1] $get[type2] $if[$getVar[pat-got;$get[user]]==1;1 time;$getVar[pat-got;$get[user]] times]]
    `}