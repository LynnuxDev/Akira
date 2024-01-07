module.exports = {
    name: "rage",
    aliases: ["rp-rage"],
	module: "Roleplay",
	version: "1.0",
    sourcecode: "https://github.com/LynnuxDev/Akira/blob/main/SRC/commands/Roleplay/neutral/rage.js",
    documentation: "https://documentation.lynnux.xyz/akira/roleplay",
    type: "messageCreate",
	description: "rage for someone.",
	usage: "rage <user> {message}",
	example: "rage @dark_lynn\n{prefix}rage @dark_lynn got raged on",
    code: `
        $onlyIf[$message!=;Wtong usage of this command use \`rage <user> {message}\`]
        $onlyIf[$checkContains[$message[0];<@&]!=true;You can't use this on a role.]
        $let[user;$if[$message[0]==;$authorID;$findUser[$message[0];true]]]
        $let[message;$replace[$replace[$message;$message[0] ;];$message[0];]]
        $let[user1;**$username[$get[user]]**] $let[user2;**$username[$authorID]**]

        $onlyIf[$get[user]!=$authorID;You cant do this to yourself.]
        $onlyIf[$getVar[rp-blocked-$authorID;$get[user]]!=true;Your Blocked by this user]

        $setVar[rage-give;$authorID;$sum[$getVar[rage-give;$authorID];1]]
        $setVar[rage-got;$get[user];$sum[$getVar[rage-got;$get[user]];1]]

        $let[msg;$get[user1] made $get[user2] rage.]

        $description[$get[msg]$if[$get[message]!=;\n"$get[message]"]]
        $color[$getVar[color;default]]

        $let[type2;made people rage]

        $!httpRequest[https://api.lynnux.xyz/roleplay/rage.json;get]
        $let[url;$httpResult[embed;image;url]]
        $image[$get[url]]

        $footer[$username used rage $if[$getVar[rage-give;$authorID]==1;1 time;$getVar[rage-give;$authorID] times]. | $replace[$get[user1];**;;-1] $get[type2] $if[$getVar[rage-got;$get[user]]==1;1 time;$getVar[rage-got;$get[user]] times]]
    `}