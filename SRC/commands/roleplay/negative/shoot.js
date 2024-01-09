module.exports = {
    name: "shoot",
    aliases: ["rp-shoot"],
	module: "Roleplay",
	version: "1.0",
    sourcecode: "https://github.com/LynnuxDev/Akira/blob/main/SRC/commands/Roleplay/wholesome/shoot.js",
    documentation: "https://documentation.lynnux.xyz/akira/roleplay",
    type: "messageCreate",
	description: "shoot someone.",
	usage: "shoot <user> {message}",
	example: "shoot @dark_lynn\n{prefix}shoot @dark_lynn shooted by me.",
    code: `
        $onlyIf[$message!=;Wrong usage of this command use \`shoot <user> {message}\`]
        $onlyIf[$checkContains[$message[0];<@&]!=true;You can't use this on a role.]
        $let[user;$if[$message[0]==;$authorID;$findUser[$message[0];true]]]
        $let[message;$replace[$replace[$message;$message[0] ;];$message[0];]]
        $let[user1;**$username[$get[user]]**] $let[user2;**$username[$authorID]**]

        $onlyIf[$checkContains[$getVar[rp-commandblocked;$get[user]];*]==false;:x: All roleplay commands are blocked by $get[user1].]
        $onlyIf[$checkContains[$getVar[rp-commandblocked;$get[user]];shoot]==false;:x: This roleplay command is blocked by $get[user1].]

        $onlyIf[$get[user]!=$authorID;You cant do this to yourself.]
        $onlyIf[$checkContains[$getVar[rp-commandblocked;$get[user]];*]==false;:x: All roleplay commands are blocked by $get[user1].]
        $onlyIf[$checkContains[$getVar[rp-commandblocked;$get[user]];$get[type]]==false;:x: This roleplay command is blocked by $get[user1].]
    
        $setVar[shoot-give;$authorID;$sum[$getVar[shoot-give;$authorID];1]]
        $setVar[shoot-got;$get[user];$sum[$getVar[shoot-got;$get[user]];1]]

        $let[msg;$get[user1] got shot by $get[user2].]

        $description[$get[msg]$if[$get[message]!=;\n"$get[message]"]]
        $color[$getVar[color;default]]

        $let[type2;got shot]

        $!httpRequest[https://api.lynnux.xyz/roleplay/shoot.json;get]
        $let[url;$httpResult[embed;image;url]]
        $image[$get[url]]

        $footer[$username used shoot $if[$getVar[shoot-give;$authorID]==1;1 time;$getVar[shoot-give;$authorID] times]. | $replace[$get[user1];**;;-1] $get[type2] $if[$getVar[shoot-got;$get[user]]==1;1 time;$getVar[shoot-got;$get[user]] times]]
    `}