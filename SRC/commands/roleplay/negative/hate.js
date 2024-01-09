module.exports = {
    name: "hate",
    aliases: ["rp-hate"],
	module: "Roleplay",
	version: "1.0",
    sourcecode: "https://github.com/LynnuxDev/Akira/blob/main/SRC/commands/Roleplay/wholesome/hate.js",
    documentation: "https://documentation.lynnux.xyz/akira/roleplay",
    type: "messageCreate",
	description: "hate someone.",
	usage: "hate <user> {message}",
	example: "hate @dark_lynn\n{prefix}hate @dark_lynn got haten.",
    code: `
        $onlyIf[$message!=;Wrong usage of this command use \`hate <user> {message}\`]
        $onlyIf[$checkContains[$message[0];<@&]!=true;You can't use this on a role.]
        $let[user;$if[$message[0]==;$authorID;$findUser[$message[0];true]]]
        $let[message;$replace[$replace[$message;$message[0] ;];$message[0];]]
        $let[user1;**$username[$get[user]]**] $let[user2;**$username[$authorID]**]

        $onlyIf[$checkContains[$getVar[rp-commandblocked;$get[user]];*]==false;:x: All roleplay commands are blocked by $get[user1].]
        $onlyIf[$checkContains[$getVar[rp-commandblocked;$get[user]];hate]==false;:x: This roleplay command is blocked by $get[user1].]
    
        $onlyIf[$get[user]!=$authorID;You cant do this to yourself.]
        $onlyIf[$getVar[rp-blocked-$authorID;$get[user]]!=true;Your Blocked by this user]

        $setVar[hate-give;$authorID;$sum[$getVar[hate-give;$authorID];1]]
        $setVar[hate-got;$get[user];$sum[$getVar[hate-got;$get[user]];1]]

        $let[msg;$get[user2] hates $get[user1].]

        $description[$get[msg]$if[$get[message]!=;\n"$get[message]"]]
        $color[$getVar[color;default]]

        $let[type2;made people hate them]

        $!httpRequest[https://api.lynnux.xyz/roleplay/hate.json;get]
        $let[url;$httpResult[embed;image;url]]
        $image[$get[url]]

        $footer[$username used hate $if[$getVar[hate-give;$authorID]==1;1 time;$getVar[hate-give;$authorID] times]. | $replace[$get[user1];**;;-1] $get[type2] $if[$getVar[hate-got;$get[user]]==1;1 time;$getVar[hate-got;$get[user]] times]]
    `}