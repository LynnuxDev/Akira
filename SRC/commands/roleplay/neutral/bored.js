module.exports = {
    name: "bored",
    aliases: ["rp-bored"],
	module: "Roleplay",
	version: "1.0",
    sourcecode: "https://github.com/LynnuxDev/Akira/blob/main/SRC/commands/Roleplay/neutral/bored.js",
    documentation: "https://documentation.lynnux.xyz/akira/roleplay",
    type: "messageCreate",
	description: "bored for someone.",
	usage: "bored <user> {message}",
	example: "bored @dark_lynn\n{prefix}bored @dark_lynn got bored",
    code: `
        $onlyIf[$message!=;Wtong usage of this command use \`bored <user> {message}\`]
        $onlyIf[$checkContains[$message[0];<@&]!=true;You can't use this on a role.]
        $let[user;$if[$message[0]==;$authorID;$findUser[$message[0];true]]]
        $let[message;$replace[$replace[$message;$message[0] ;];$message[0];]]
        $let[user1;**$username[$get[user]]**] $let[user2;**$username[$authorID]**]

        $onlyIf[$get[user]!=$authorID;You cant do this to yourself.]
        $onlyIf[$getVar[rp-blocked-$authorID;$get[user]]!=true;Your Blocked by this user]

        $setVar[bored-give;$authorID;$sum[$getVar[bored-give;$authorID];1]]
        $setVar[bored-got;$get[user];$sum[$getVar[bored-got;$get[user]];1]]

        $let[msg;$get[user2] got bored of $get[user1].]

        $description[$get[msg]$if[$get[message]!=;\n"$get[message]"]]
        $color[$getVar[color;default]]

        $let[type2;got bored]

        $!httpRequest[https://api.lynnux.xyz/roleplay/bored.json;get]
        $let[url;$httpResult[embed;image;url]]
        $image[$get[url]]

        $footer[$username used bored $if[$getVar[bored-give;$authorID]==1;1 time;$getVar[bored-give;$authorID] times]. | $replace[$get[user1];**;;-1] $get[type2] $if[$getVar[bored-got;$get[user]]==1;1 time;$getVar[bored-got;$get[user]] times]]
    `}