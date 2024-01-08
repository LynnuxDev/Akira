module.exports = {
    name: "slap",
    aliases: ["rp-slap"],
	module: "Roleplay",
	version: "1.0",
    sourcecode: "https://github.com/LynnuxDev/Akira/blob/main/SRC/commands/Roleplay/wholesome/slap.js",
    documentation: "https://documentation.lynnux.xyz/akira/roleplay",
    type: "messageCreate",
	description: "slap someone.",
	usage: "slap <user> {message}",
	example: "slap @dark_lynn\n{prefix}slap @dark_lynn slaped by me.",
    code: `
        $onlyIf[$message!=;Wrong usage of this command use \`slap <user> {message}\`]
        $onlyIf[$checkContains[$message[0];<@&]!=true;You can't use this on a role.]
        $let[user;$if[$message[0]==;$authorID;$findUser[$message[0];true]]]
        $let[message;$replace[$replace[$message;$message[0] ;];$message[0];]]
        $let[user1;**$username[$get[user]]**] $let[user2;**$username[$authorID]**]

        $onlyIf[$checkContains[$getVar[rp-commandblocked;$get[user]];*]==false;:x: All roleplay commands are blocked by $get[user1].]
        $onlyIf[$checkContains[$getVar[rp-commandblocked;$get[user]];slap]==false;:x: This roleplay command is blocked by $get[user1].]
    
        $onlyIf[$get[user]!=$authorID;You cant do this to yourself.]
        $onlyIf[$getVar[rp-blocked-$authorID;$get[user]]!=true;Your Blocked by this user]

        $setVar[slap-give;$authorID;$sum[$getVar[slap-give;$authorID];1]]
        $setVar[slap-got;$get[user];$sum[$getVar[slap-got;$get[user]];1]]

        $let[msg;$get[user1] got slapped by $get[user2].]

        $description[$get[msg]$if[$get[message]!=;\n"$get[message]"]]
        $color[$getVar[color;default]]

        $let[type2;got slapped]

        $!httpRequest[https://api.lynnux.xyz/roleplay/slap.json;get]
        $let[url;$httpResult[embed;image;url]]
        $image[$get[url]]

        $footer[$username used slap $if[$getVar[slap-give;$authorID]==1;1 time;$getVar[slap-give;$authorID] times]. | $replace[$get[user1];**;;-1] $get[type2] $if[$getVar[slap-got;$get[user]]==1;1 time;$getVar[slap-got;$get[user]] times]]
    `}