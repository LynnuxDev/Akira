module.exports = {
    name: "dab",
    aliases: ["rp-dab"],
	module: "Roleplay",
	version: "1.0",
    sourcecode: "https://github.com/LynnuxDev/Akira/blob/main/SRC/commands/Roleplay/neutral/dab.js",
    documentation: "https://documentation.lynnux.xyz/akira/roleplay",
    type: "messageCreate",
	description: "dab for someone.",
	usage: "dab <user> {message}",
	example: "dab @dark_lynn\n{prefix}dab @dark_lynn got dab",
    code: `
        $onlyIf[$message!=;Wtong usage of this command use \`dab <user> {message}\`]
        $onlyIf[$checkContains[$message[0];<@&]!=true;You can't use this on a role.]
        $let[user;$if[$message[0]==;$authorID;$findUser[$message[0];true]]]
        $let[message;$replace[$replace[$message;$message[0] ;];$message[0];]]
        $let[user1;**$username[$get[user]]**] $let[user2;**$username[$authorID]**]

        $onlyIf[$get[user]!=$authorID;You cant do this to yourself.]
        $onlyIf[$getVar[rp-blocked-$authorID;$get[user]]!=true;Your Blocked by this user]

        $setVar[dab-give;$authorID;$sum[$getVar[dab-give;$authorID];1]]
        $setVar[dab-got;$get[user];$sum[$getVar[dab-got;$get[user]];1]]

        $let[msg;$get[user1] got dabbed on by $get[user2].]

        $description[$get[msg]$if[$get[message]!=;\n"$get[message]"]]
        $color[$getVar[color;default]]

        $let[type2;got dabbed on]

        $!httpRequest[https://api.lynnux.xyz/roleplay/dab.json;get]
        $let[url;$httpResult[embed;image;url]]
        $image[$get[url]]

        $footer[$username used dab $if[$getVar[dab-give;$authorID]==1;1 time;$getVar[dab-give;$authorID] times]. | $replace[$get[user1];**;;-1] $get[type2] $if[$getVar[dab-got;$get[user]]==1;1 time;$getVar[dab-got;$get[user]] times]]
    `}