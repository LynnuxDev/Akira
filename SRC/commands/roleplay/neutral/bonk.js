module.exports = {
    name: "bonk",
    aliases: ["rp-bonk"],
	module: "Roleplay",
	version: "1.0",
    sourcecode: "https://github.com/LynnuxDev/Akira/blob/main/SRC/commands/Roleplay/neutral/bonk.js",
    documentation: "https://documentation.lynnux.xyz/akira/roleplay",
    type: "messageCreate",
	description: "bonk for someone.",
	usage: "bonk <user> {message}",
	example: "bonk @dark_lynn\n{prefix}bonk @dark_lynn got bonked",
    code: `
        $onlyIf[$message!=;Wtong usage of this command use \`bonk <user> {message}\`]
        $onlyIf[$checkContains[$message[0];<@&]!=true;You can't use this on a role.]
        $let[user;$if[$message[0]==;$authorID;$findUser[$message[0];true]]]
        $let[message;$replace[$replace[$message;$message[0] ;];$message[0];]]
        $let[user1;**$username[$get[user]]**] $let[user2;**$username[$authorID]**]

        $onlyIf[$get[user]!=$authorID;You cant do this to yourself.]
        $onlyIf[$getVar[rp-blocked-$authorID;$get[user]]!=true;Your Blocked by this user]

        $setVar[bonk-give;$authorID;$sum[$getVar[bonk-give;$authorID];1]]
        $setVar[bonk-got;$get[user];$sum[$getVar[bonk-got;$get[user]];1]]

        $let[msg;$get[user1] got bonked by $get[user2].]

        $description[$get[msg]$if[$get[message]!=;\n"$get[message]"]]
        $color[$getVar[color;default]]

        $let[type2;got bonked]

        $!httpRequest[https://api.lynnux.xyz/roleplay/bonk.json;get]
        $let[url;$httpResult[embed;image;url]]
        $image[$get[url]]

        $footer[$username used bonk $if[$getVar[bonk-give;$authorID]==1;1 time;$getVar[bonk-give;$authorID] times]. | $replace[$get[user1];**;;-1] $get[type2] $if[$getVar[bonk-got;$get[user]]==1;1 time;$getVar[bonk-got;$get[user]] times]]
    `}