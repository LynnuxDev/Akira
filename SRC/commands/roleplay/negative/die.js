module.exports = {
    name: "die",
    aliases: ["rp-die"],
	module: "Roleplay",
	version: "1.0",
    sourcecode: "https://github.com/LynnuxDev/Akira/blob/main/SRC/commands/Roleplay/wholesome/die.js",
    documentation: "https://documentation.lynnux.xyz/akira/roleplay",
    type: "messageCreate",
	description: "die someone.",
	usage: "die <user> {message}",
	example: "die @dark_lynn\n{prefix}die @dark_lynn you died.",
    code: `
        $onlyIf[$message!=;Wrong usage of this command use \`die <user> {message}\`]
        $onlyIf[$checkContains[$message[0];<@&]!=true;You can't use this on a role.]
        $let[user;$if[$message[0]==;$authorID;$findUser[$message[0];true]]]
        $let[message;$replace[$replace[$message;$message[0] ;];$message[0];]]
        $let[user1;**$username[$get[user]]**] $let[user2;**$username[$authorID]**]

        $onlyIf[$checkContains[$getVar[rp-commandblocked;$get[user]];*]==false;:x: All roleplay commands are blocked by $get[user1].]
        $onlyIf[$checkContains[$getVar[rp-commandblocked;$get[user]];die]==false;:x: This roleplay command is blocked by $get[user1].]

        $onlyIf[$get[user]!=$authorID;You cant do this to yourself.]
        $onlyIf[$getVar[rp-blocked-$authorID;$get[user]]!=true;Your Blocked by this user]

        $setVar[die-give;$authorID;$sum[$getVar[die-give;$authorID];1]]
        $setVar[die-got;$get[user];$sum[$getVar[die-got;$get[user]];1]]

        $let[msg;$get[user1] made $get[user2] die.]

        $description[$get[msg]$if[$get[message]!=;\n"$get[message]"]]
        $color[$getVar[color;default]]

        $let[type2;made people die]

        $!httpRequest[https://api.lynnux.xyz/roleplay/die.json;get]
        $let[url;$httpResult[embed;image;url]]
        $image[$get[url]]

        $footer[$username used die $if[$getVar[die-give;$authorID]==1;1 time;$getVar[die-give;$authorID] times]. | $replace[$get[user1];**;;-1] $get[type2] $if[$getVar[die-got;$get[user]]==1;1 time;$getVar[die-got;$get[user]] times]]
    `}