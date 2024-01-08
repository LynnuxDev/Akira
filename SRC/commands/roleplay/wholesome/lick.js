module.exports = {
    name: "lick",
    aliases: ["rp-lick"],
	module: "Roleplay",
	version: "1.0",
    sourcecode: "https://github.com/LynnuxDev/Akira/blob/main/SRC/commands/Roleplay/wholesome/lick.js",
    documentation: "https://documentation.lynnux.xyz/akira/roleplay",
    type: "messageCreate",
	description: "lick someone.",
	usage: "lick <user> {message}",
	example: "lick @dark_lynn\n{prefix}lick @dark_lynn got licked.",
    code: `
        $onlyIf[$message!=;Wrong usage of this command use \`lick <user> {message}\`]
        $onlyIf[$checkContains[$message[0];<@&]!=true;You can't use this on a role.]
        $let[user;$if[$message[0]==;$authorID;$findUser[$message[0];true]]]
        $let[message;$replace[$replace[$message;$message[0] ;];$message[0];]]
        $let[user1;**$username[$get[user]]**] $let[user2;**$username[$authorID]**]

        $onlyIf[$checkContains[$getVar[rp-commandblocked;$get[user]];*]==false;:x: All roleplay commands are blocked by $get[user1].]
        $onlyIf[$checkContains[$getVar[rp-commandblocked;$get[user]];lick]==false;:x: This roleplay command is blocked by $get[user1].]

        $onlyIf[$get[user]!=$authorID;You cant do this to yourself.]
        $onlyIf[$getVar[rp-blocked-$authorID;$get[user]]!=true;Your Blocked by this user]

        $setVar[lick-give;$authorID;$sum[$getVar[lick-give;$authorID];1]]
        $setVar[lick-got;$get[user];$sum[$getVar[lick-got;$get[user]];1]]

        $let[msg;$get[user1] got licked by $get[user2].]

        $description[$get[msg]$if[$get[message]!=;\n"$get[message]"]]
        $color[$getVar[color;default]]

        $let[type2;got licked]

        $!httpRequest[https://api.lynnux.xyz/roleplay/lick.json;get]
        $let[url;$httpResult[embed;image;url]]
        $image[$get[url]]

        $footer[$username used lick $if[$getVar[lick-give;$authorID]==1;1 time;$getVar[lick-give;$authorID] times]. | $replace[$get[user1];**;;-1] $get[type2] $if[$getVar[lick-got;$get[user]]==1;1 time;$getVar[lick-got;$get[user]] times]]
    `}