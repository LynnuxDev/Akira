module.exports = {
    name: "sad",
    aliases: ["rp-sad"],
	module: "Roleplay",
	version: "1.0",
    sourcecode: "https://github.com/LynnuxDev/Akira/blob/main/SRC/commands/Roleplay/wholesome/sad.js",
    documentation: "https://documentation.lynnux.xyz/akira/roleplay",
    type: "messageCreate",
	description: "sad someone.",
	usage: "sad <user> {message}",
	example: "sad @dark_lynn\n{prefix}sad @dark_lynn sadboi sadboi.",
    code: `
        $onlyIf[$message!=;Wrong usage of this command use \`sad <user> {message}\`]
        $onlyIf[$checkContains[$message[0];<@&]!=true;You can't use this on a role.]
        $let[user;$if[$message[0]==;$authorID;$findUser[$message[0];true]]]
        $let[message;$replace[$replace[$message;$message[0] ;];$message[0];]]
        $let[user1;**$username[$get[user]]**] $let[user2;**$username[$authorID]**]

        $onlyIf[$checkContains[$getVar[rp-commandblocked;$get[user]];*]==false;:x: All roleplay commands are blocked by $get[user1].]
        $onlyIf[$checkContains[$getVar[rp-commandblocked;$get[user]];*]==false;:x: All roleplay commands are blocked by $get[user1].]
        $onlyIf[$checkContains[$getVar[rp-commandblocked;$get[user]];sad]==false;:x: This roleplay command is blocked by $get[user1].]
    
        $onlyIf[$get[user]!=$authorID;You cant do this to yourself.]
        $onlyIf[$getVar[rp-blocked-$authorID;$get[user]]!=true;Your Blocked by this user]

        $setVar[sad-give;$authorID;$sum[$getVar[sad-give;$authorID];1]]
        $setVar[sad-got;$get[user];$sum[$getVar[sad-got;$get[user]];1]]

        $let[msg;$get[user1] made $get[user2] sad.]

        $description[$get[msg]$if[$get[message]!=;\n"$get[message]"]]
        $color[$getVar[color;default]]

        $let[type2;made people sad]

        $!httpRequest[https://api.lynnux.xyz/roleplay/sad.json;get]
        $let[url;$httpResult[embed;image;url]]
        $image[$get[url]]

        $footer[$username used sad $if[$getVar[sad-give;$authorID]==1;1 time;$getVar[sad-give;$authorID] times]. | $replace[$get[user1];**;;-1] $get[type2] $if[$getVar[sad-got;$get[user]]==1;1 time;$getVar[sad-got;$get[user]] times]]
    `}