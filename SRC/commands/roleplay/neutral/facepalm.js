module.exports = {
    name: "facepalm",
    aliases: ["rp-facepalm"],
	module: "Roleplay",
	version: "1.0",
    sourcecode: "https://github.com/LynnuxDev/Akira/blob/main/SRC/commands/Roleplay/neutral/facepalm.js",
    documentation: "https://documentation.lynnux.xyz/akira/roleplay",
    type: "messageCreate",
	description: "facepalm for someone.",
	usage: "facepalm <user> {message}",
	example: "facepalm @dark_lynn\n{prefix}facepalm @dark_lynn got facepalm",
    code: `
        $onlyIf[$message!=;Wtong usage of this command use \`facepalm <user> {message}\`]
        $onlyIf[$checkContains[$message[0];<@&]!=true;You can't use this on a role.]
        $let[user;$if[$message[0]==;$authorID;$findUser[$message[0];true]]]
        $let[message;$replace[$replace[$message;$message[0] ;];$message[0];]]
        $let[user1;**$username[$get[user]]**] $let[user2;**$username[$authorID]**]

        $onlyIf[$get[user]!=$authorID;You cant do this to yourself.]
        $onlyIf[$getVar[rp-blocked-$authorID;$get[user]]!=true;Your Blocked by this user]

        $setVar[facepalm-give;$authorID;$sum[$getVar[facepalm-give;$authorID];1]]
        $setVar[facepalm-got;$get[user];$sum[$getVar[facepalm-got;$get[user]];1]]

        $let[msg;$get[user1] made $get[user2] facepalmed.]

        $description[$get[msg]$if[$get[message]!=;\n"$get[message]"]]
        $color[$getVar[color;default]]

        $let[type2;got facepalmed on]

        $!httpRequest[https://api.lynnux.xyz/roleplay/facepalm.json;get]
        $let[url;$httpResult[embed;image;url]]
        $image[$get[url]]

        $footer[$username used facepalm $if[$getVar[facepalm-give;$authorID]==1;1 time;$getVar[facepalm-give;$authorID] times]. | $replace[$get[user1];**;;-1] $get[type2] $if[$getVar[facepalm-got;$get[user]]==1;1 time;$getVar[facepalm-got;$get[user]] times]]
    `}