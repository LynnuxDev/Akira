module.exports = {
    name: "cry",
    aliases: ["rp-cry"],
	module: "Roleplay",
	version: "1.0",
    sourcecode: "https://github.com/LynnuxDev/Akira/blob/main/SRC/commands/Roleplay/wholesome/cry.js",
    documentation: "https://documentation.lynnux.xyz/akira/roleplay",
    type: "messageCreate",
	description: "cry someone.",
	usage: "cry <user> {message}",
	example: "cry @dark_lynn\n{prefix}cry @dark_lynn got bitten.",
    code: `
        $onlyIf[$message!=;Wrong usage of this command use \`cry <user> {message}\`]
        $onlyIf[$checkContains[$message[0];<@&]!=true;You can't use this on a role.]
        $let[user;$if[$message[0]==;$authorID;$findUser[$message[0];true]]]
        $let[message;$replace[$replace[$message;$message[0] ;];$message[0];]]
        $let[user1;**$username[$get[user]]**] $let[user2;**$username[$authorID]**]

        $onlyIf[$checkContains[$getVar[rp-commandblocked;$get[user]];*]==false;:x: All roleplay commands are blocked by $get[user1].]
        $onlyIf[$checkContains[$getVar[rp-commandblocked;$get[user]];cry]==false;:x: This roleplay command is blocked by $get[user1].]

        $onlyIf[$get[user]!=$authorID;You cant do this to yourself.]
        $onlyIf[$getVar[rp-blocked-$authorID;$get[user]]!=true;Your Blocked by this user]

        $setVar[cry-give;$authorID;$sum[$getVar[cry-give;$authorID];1]]
        $setVar[cry-got;$get[user];$sum[$getVar[cry-got;$get[user]];1]]

        $let[msg;$get[user1] made $get[user2] cry.]

        $description[$get[msg]$if[$get[message]!=;\n"$get[message]"]]
        $color[$getVar[color;default]]

        $let[type2;made people cry]

        $!httpRequest[https://api.lynnux.xyz/roleplay/cry.json;get]
        $let[url;$httpResult[embed;image;url]]
        $image[$get[url]]

        $footer[$username used cry $if[$getVar[cry-give;$authorID]==1;1 time;$getVar[cry-give;$authorID] times]. | $replace[$get[user1];**;;-1] $get[type2] $if[$getVar[cry-got;$get[user]]==1;1 time;$getVar[cry-got;$get[user]] times]]
    `}