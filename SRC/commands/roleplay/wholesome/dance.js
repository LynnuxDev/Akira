module.exports = {
    name: "dance",
    aliases: ["rp-dance"],
	module: "Roleplay",
	version: "1.0",
    sourcecode: "https://github.com/LynnuxDev/Akira/blob/main/SRC/commands/Roleplay/wholesome/dance.js",
    documentation: "https://documentation.lynnux.xyz/akira/roleplay",
    type: "messageCreate",
	description: "dance with someone.",
	usage: "dance <user> {message}",
	example: "dance @dark_lynn\n{prefix}dance @dark_lynn dance with me.",
    code: `
        $onlyIf[$message!=;Wrong usage of this command use \`dance <user> {message}\`]
        $onlyIf[$checkContains[$message[0];<@&]!=true;You can't use this on a role.]
        $let[user;$if[$message[0]==;$authorID;$findUser[$message[0];true]]]
        $let[message;$replace[$replace[$message;$message[0] ;];$message[0];]]
        $let[user1;**$username[$get[user]]**] $let[user2;**$username[$authorID]**]

        $onlyIf[$checkContains[$getVar[rp-commandblocked;$get[user]];*]==false;:x: All roleplay commands are blocked by $get[user1].]
        $onlyIf[$checkContains[$getVar[rp-commandblocked;$get[user]];dance]==false;:x: This roleplay command is blocked by $get[user1].]

        $onlyIf[$get[user]!=$authorID;You cant do this to yourself.]
        $onlyIf[$getVar[rp-blocked-$authorID;$get[user]]!=true;Your Blocked by this user]

        $setVar[dance-give;$authorID;$sum[$getVar[dance-give;$authorID];1]]
        $setVar[dance-got;$get[user];$sum[$getVar[dance-got;$get[user]];1]]

        $let[msg;$get[user1] danced with $get[user2].]

        $description[$get[msg]$if[$get[message]!=;\n"$get[message]"]]
        $color[$getVar[color;default]]

        $let[type2;danced]

        $!httpRequest[https://api.lynnux.xyz/roleplay/dance.json;get]
        $let[url;$httpResult[embed;image;url]]
        $image[$get[url]]

        $footer[$username used dance $if[$getVar[dance-give;$authorID]==1;1 time;$getVar[dance-give;$authorID] times]. | $replace[$get[user1];**;;-1] $get[type2] $if[$getVar[dance-got;$get[user]]==1;1 time;$getVar[dance-got;$get[user]] times]]
    `}