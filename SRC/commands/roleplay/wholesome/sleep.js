module.exports = {
    name: "sleep",
    aliases: ["rp-sleep"],
	module: "Roleplay",
	version: "1.0",
    sourcecode: "https://github.com/LynnuxDev/Akira/blob/main/SRC/commands/Roleplay/wholesome/sleep.js",
    documentation: "https://documentation.lynnux.xyz/akira/roleplay",
    type: "messageCreate",
	description: "sleep someone.",
	usage: "sleep <user> {message}",
	example: "sleep @dark_lynn\n{prefix}sleep @dark_lynn got slept on.",
    code: `
        $onlyIf[$message!=;Wrong usage of this command use \`sleep <user> {message}\`]
        $onlyIf[$checkContains[$message[0];<@&]!=true;You can't use this on a role.]
        $let[user;$if[$message[0]==;$authorID;$findUser[$message[0];true]]]
        $let[message;$replace[$replace[$message;$message[0] ;];$message[0];]]
        $let[user1;**$username[$get[user]]**] $let[user2;**$username[$authorID]**]

        $onlyIf[$get[user]!=$authorID;You cant do this to yourself.]
        $onlyIf[$getVar[rp-blocked-$authorID;$get[user]]!=true;Your Blocked by this user]

        $setVar[sleep-give;$authorID;$sum[$getVar[sleep-give;$authorID];1]]
        $setVar[sleep-got;$get[user];$sum[$getVar[sleep-got;$get[user]];1]]

        $let[msg;$get[user1] got slept on by $get[user2].]

        $description[$get[msg]$if[$get[message]!=;\n"$get[message]"]]
        $color[$getVar[color;default]]

        $let[type2;got slept on]

        $!httpRequest[https://api.lynnux.xyz/roleplay/sleep.json;get]
        $let[url;$httpResult[embed;image;url]]
        $image[$get[url]]

        $footer[$username used sleep $if[$getVar[sleep-give;$authorID]==1;1 time;$getVar[sleep-give;$authorID] times]. | $replace[$get[user1];**;;-1] $get[type2] $if[$getVar[sleep-got;$get[user]]==1;1 time;$getVar[sleep-got;$get[user]] times]]
    `}