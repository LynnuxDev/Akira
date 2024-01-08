module.exports = {
    name: "blush",
    aliases: ["rp-blush"],
	module: "Roleplay",
	version: "1.0",
    sourcecode: "https://github.com/LynnuxDev/Akira/blob/main/SRC/commands/Roleplay/wholesome/blush.js",
    documentation: "https://documentation.lynnux.xyz/akira/roleplay",
    type: "messageCreate",
	description: "blush for someone.",
	usage: "blush <user> {message}",
	example: "blush @dark_lynn\n{prefix}blush @dark_lynn made me blush omg",
    code: `
        $onlyIf[$message!=;Wtong usage of this command use \`blush <user> {message}\`]
        $onlyIf[$checkContains[$message[0];<@&]!=true;You can't use this on a role.]
        $let[user;$if[$message[0]==;$authorID;$findUser[$message[0];true]]]
        $let[message;$replace[$replace[$message;$message[0] ;];$message[0];]]
        $let[user1;**$username[$get[user]]**] $let[user2;**$username[$authorID]**]

        $onlyIf[$checkContains[$getVar[rp-commandblocked;$get[user]];*]==false;:x: All roleplay commands are blocked by $get[user1].]
        $onlyIf[$checkContains[$getVar[rp-commandblocked;$get[user]];blush]==false;:x: This roleplay command is blocked by $get[user1].]

        $onlyIf[$get[user]!=$authorID;You cant do this to yourself.]
        $onlyIf[$getVar[rp-blocked-$authorID;$get[user]]!=true;Your Blocked by this user]

        $setVar[blush-give;$authorID;$sum[$getVar[blush-give;$authorID];1]]
        $setVar[blush-got;$get[user];$sum[$getVar[blush-got;$get[user]];1]]

        $let[msg;$get[user1] made $get[user2] blush.]

        $description[$get[msg]$if[$get[message]!=;\n"$get[message]"]]
        $color[$getVar[color;default]]

        $let[type2;got blushed at]

        $!httpRequest[https://api.lynnux.xyz/roleplay/blush.json;get]
        $let[url;$httpResult[embed;image;url]]
        $image[$get[url]]

        $footer[$username used blush $if[$getVar[blush-give;$authorID]==1;1 time;$getVar[blush-give;$authorID] times]. | $replace[$get[user1];**;;-1] $get[type2] $if[$getVar[blush-got;$get[user]]==1;1 time;$getVar[blush-got;$get[user]] times]]
    `}