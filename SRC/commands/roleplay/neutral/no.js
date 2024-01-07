module.exports = {
    name: "no",
    aliases: ["rp-no"],
	module: "Roleplay",
	version: "1.0",
    sourcecode: "https://github.com/LynnuxDev/Akira/blob/main/SRC/commands/Roleplay/neutral/no.js",
    documentation: "https://documentation.lynnux.xyz/akira/roleplay",
    type: "messageCreate",
	description: "no for someone.",
	usage: "no <user> {message}",
	example: "no @dark_lynn\n{prefix}no @dark_lynn got noed",
    code: `
        $onlyIf[$message!=;Wtong usage of this command use \`no <user> {message}\`]
        $onlyIf[$checkContains[$message[0];<@&]!=true;You can't use this on a role.]
        $let[user;$if[$message[0]==;$authorID;$findUser[$message[0];true]]]
        $let[message;$replace[$replace[$message;$message[0] ;];$message[0];]]
        $let[user1;**$username[$get[user]]**] $let[user2;**$username[$authorID]**]

        $onlyIf[$get[user]!=$authorID;You cant do this to yourself.]
        $onlyIf[$getVar[rp-blocked-$authorID;$get[user]]!=true;Your Blocked by this user]

        $setVar[no-give;$authorID;$sum[$getVar[no-give;$authorID];1]]
        $setVar[no-got;$get[user];$sum[$getVar[no-got;$get[user]];1]]

        $let[msg;$get[user1] got a no from $get[user2].]

        $description[$get[msg]$if[$get[message]!=;\n"$get[message]"]]
        $color[$getVar[color;default]]

        $let[type2;got a no]

        $!httpRequest[https://api.lynnux.xyz/roleplay/no.json;get]
        $let[url;$httpResult[embed;image;url]]
        $image[$get[url]]

        $footer[$username used no $if[$getVar[no-give;$authorID]==1;1 time;$getVar[no-give;$authorID] times]. | $replace[$get[user1];**;;-1] $get[type2] $if[$getVar[no-got;$get[user]]==1;1 time;$getVar[no-got;$get[user]] times]]
    `}