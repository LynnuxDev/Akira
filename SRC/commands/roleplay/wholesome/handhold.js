module.exports = {
    name: "handhold",
    aliases: ["rp-handhold","holdhands"],
	module: "Roleplay",
	version: "1.0",
    sourcecode: "https://github.com/LynnuxDev/Akira/blob/main/SRC/commands/Roleplay/wholesome/handhold.js",
    documentation: "https://documentation.lynnux.xyz/akira/roleplay",
    type: "messageCreate",
	description: "Hold hands with someone.",
	usage: "handhold <user> {message}",
	example: "handhold @dark_lynn\n{prefix}handhold @dark_lynn got handholded.",
    code: `
        $onlyIf[$message!=;Wrong usage of this command use \`handhold <user> {message}\`]
        $onlyIf[$checkContains[$message[0];<@&]!=true;You can't use this on a role.]
        $let[user;$if[$message[0]==;$authorID;$findUser[$message[0];true]]]
        $let[message;$replace[$replace[$message;$message[0] ;];$message[0];]]
        $let[user1;**$username[$get[user]]**] $let[user2;**$username[$authorID]**]

        $onlyIf[$checkContains[$getVar[rp-commandblocked;$get[user]];*]==false;:x: All roleplay commands are blocked by $get[user1].]
        $onlyIf[$checkContains[$getVar[rp-commandblocked;$get[user]];handhold]==false;:x: This roleplay command is blocked by $get[user1].]

        $onlyIf[$get[user]!=$authorID;You cant do this to yourself.]
        $onlyIf[$getVar[rp-blocked-$authorID;$get[user]]!=true;Your Blocked by this user]

        $setVar[handhold-give;$authorID;$sum[$getVar[handhold-give;$authorID];1]]
        $setVar[handhold-got;$get[user];$sum[$getVar[handhold-got;$get[user]];1]]

        $let[msg;$randomText[$get[user2] held $get[user1]'s hand.;$get[user2] held onto $get[user1]'s hand].]

        $description[$get[msg]$if[$get[message]!=;\n"$get[message]"]]
        $color[$getVar[color;default]]

        $let[type2;got a handhold]

        $!httpRequest[https://api.lynnux.xyz/roleplay/handhold.json;get]
        $let[url;$httpResult[embed;image;url]]
        $image[$get[url]]

        $footer[$username used handhold $if[$getVar[handhold-give;$authorID]==1;1 time;$getVar[handhold-give;$authorID] times]. | $replace[$get[user1];**;;-1] $get[type2] $if[$getVar[handhold-got;$get[user]]==1;1 time;$getVar[handhold-got;$get[user]] times]]
    `}