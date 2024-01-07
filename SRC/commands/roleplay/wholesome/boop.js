module.exports = {
    name: "boop",
    aliases: ["rp-boop"],
	module: "Roleplay",
	version: "1.0",
    sourcecode: "https://github.com/LynnuxDev/Akira/blob/main/SRC/commands/Roleplay/wholesome/boop.js",
    documentation: "https://documentation.lynnux.xyz/akira/roleplay",
    type: "messageCreate",
	description: "boop someone.",
	usage: "boop <user> {message}",
	example: "boop @dark_lynn\n{prefix}boop @dark_lynn got booped.",
    code: `
        $onlyIf[$message!=;Wtong usage of this command use \`boop <user> {message}\`]
        $onlyIf[$checkContains[$message[0];<@&]!=true;You can't use this on a role.]

        $let[user;$if[$message[0]==;$authorID;$findUser[$message[0];true]]]
        $let[message;$replace[$replace[$message;$message[0] ;];$message[0];]]
        $let[user1;**$username[$get[user]]**] $let[user2;**$username[$authorID]**]

        $onlyIf[$get[user]!=$authorID;You cant do this to yourself.]
        $onlyIf[$getVar[rp-blocked-$authorID;$get[user]]!=true;Your Blocked by this user]

        $setVar[boop-give;$authorID;$sum[$getVar[boop-give;$authorID];1]]
        $setVar[boop-got;$get[user];$sum[$getVar[boop-got;$get[user]];1]]

        $let[msg;$get[user1] got booped by $get[user2].]

        $description[$get[msg]$if[$get[message]!=;\n"$get[message]"]]
        $color[$getVar[color;default]]

        $let[type2;got booped]

        $!httpRequest[https://api.lynnux.xyz/roleplay/boop.json;get]
        $let[url;$httpResult[embed;image;url]]
        $image[$get[url]]

        $footer[$username used boop $if[$getVar[boop-give;$authorID]==1;1 time;$getVar[boop-give;$authorID] times]. | $replace[$get[user1];**;;-1] $get[type2] $if[$getVar[boop-got;$get[user]]==1;1 time;$getVar[boop-got;$get[user]] times]]
    `}