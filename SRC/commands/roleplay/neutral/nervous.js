module.exports = {
    name: "nervous",
    aliases: ["rp-nervous"],
	module: "Roleplay",
	version: "1.0",
    sourcecode: "https://github.com/LynnuxDev/Akira/blob/main/SRC/commands/Roleplay/neutral/nervous.js",
    documentation: "https://documentation.lynnux.xyz/akira/roleplay",
    type: "messageCreate",
	description: "nervous for someone.",
	usage: "nervous <user> {message}",
	example: "nervous @dark_lynn\n{prefix}nervous @dark_lynn i am nervous",
    code: `
        $onlyIf[$message!=;Wtong usage of this command use \`nervous <user> {message}\`]
        $onlyIf[$checkContains[$message[0];<@&]!=true;You can't use this on a role.]
        $let[user;$if[$message[0]==;$authorID;$findUser[$message[0];true]]]
        $let[message;$replace[$replace[$message;$message[0] ;];$message[0];]]
        $let[user1;**$username[$get[user]]**] $let[user2;**$username[$authorID]**]

        $onlyIf[$checkContains[$getVar[rp-commandblocked;$get[user]];*]==false;:x: All roleplay commands are blocked by $get[user1].]
        $onlyIf[$checkContains[$getVar[rp-commandblocked;$get[user]];nervous]==false;:x: This roleplay command is blocked by $get[user1].]

        $onlyIf[$get[user]!=$authorID;You cant do this to yourself.]
        $onlyIf[$getVar[rp-blocked-$authorID;$get[user]]!=true;Your Blocked by this user]

        $setVar[nervous-give;$authorID;$sum[$getVar[nervous-give;$authorID];1]]
        $setVar[nervous-got;$get[user];$sum[$getVar[nervous-got;$get[user]];1]]

        $let[msg;$get[user1] made $get[user2] nervous.]

        $description[$get[msg]$if[$get[message]!=;\n"$get[message]"]]
        $color[$getVar[color;default]]

        $let[type2;made people nervous]

        $!httpRequest[https://api.lynnux.xyz/roleplay/nervous.json;get]
        $let[url;$httpResult[embed;image;url]]
        $image[$get[url]]

        $footer[$username used nervous $if[$getVar[nervous-give;$authorID]==1;1 time;$getVar[nervous-give;$authorID] times]. | $replace[$get[user1];**;;-1] $get[type2] $if[$getVar[nervous-got;$get[user]]==1;1 time;$getVar[nervous-got;$get[user]] times]]
    `}