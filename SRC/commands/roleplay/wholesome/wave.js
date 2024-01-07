module.exports = {
    name: "wave",
    aliases: ["rp-wave"],
	module: "Roleplay",
	version: "1.0",
    sourcecode: "https://github.com/LynnuxDev/Akira/blob/main/SRC/commands/Roleplay/wholesome/wave.js",
    documentation: "https://documentation.lynnux.xyz/akira/roleplay",
    type: "messageCreate",
	description: "wave someone.",
	usage: "wave <user> {message}",
	example: "wave @dark_lynn\n{prefix}wave @dark_lynn hi.",
    code: `
        $onlyIf[$message!=;Wrong usage of this command use \`wave <user> {message}\`]
        $onlyIf[$checkContains[$message[0];<@&]!=true;You can't use this on a role.]
        $let[user;$if[$message[0]==;$authorID;$findUser[$message[0];true]]]
        $let[message;$replace[$replace[$message;$message[0] ;];$message[0];]]
        $let[user1;**$username[$get[user]]**] $let[user2;**$username[$authorID]**]

        $onlyIf[$get[user]!=$authorID;You cant do this to yourself.]
        $onlyIf[$getVar[rp-blocked-$authorID;$get[user]]!=true;Your Blocked by this user]

        $setVar[wave-give;$authorID;$sum[$getVar[wave-give;$authorID];1]]
        $setVar[wave-got;$get[user];$sum[$getVar[wave-got;$get[user]];1]]

        $let[msg;$get[user1] got waved at by $get[user2].]

        $description[$get[msg]$if[$get[message]!=;\n"$get[message]"]]
        $color[$getVar[color;default]]

        $let[type2;got waved at]

        $!httpRequest[https://api.lynnux.xyz/roleplay/wave.json;get]
        $let[url;$httpResult[embed;image;url]]
        $image[$get[url]]

        $footer[$username used wave $if[$getVar[wave-give;$authorID]==1;1 time;$getVar[wave-give;$authorID] times]. | $replace[$get[user1];**;;-1] $get[type2] $if[$getVar[wave-got;$get[user]]==1;1 time;$getVar[wave-got;$get[user]] times]]
    `}