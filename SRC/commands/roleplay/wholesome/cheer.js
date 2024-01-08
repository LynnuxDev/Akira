module.exports = {
    name: "cheer",
    aliases: ["rp-cheer"],
	module: "Roleplay",
	version: "1.0",
    sourcecode: "https://github.com/LynnuxDev/Akira/blob/main/SRC/commands/Roleplay/wholesome/cheer.js",
    documentation: "https://documentation.lynnux.xyz/akira/roleplay",
    type: "messageCreate",
	description: "cheer someone.",
	usage: "cheer <user> {message}",
	example: "cheer @dark_lynn\n{prefix}cheer @dark_lynn got cheered.",
    code: `
        $onlyIf[$message!=;Wtong usage of this command use \`cheer <user> {message}\`]
        $onlyIf[$checkContains[$message[0];<@&]!=true;You can't use this on a role.]
        $let[user;$if[$message[0]==;$authorID;$findUser[$message[0];true]]]
        $let[message;$replace[$replace[$message;$message[0] ;];$message[0];]]
        $let[user1;**$username[$get[user]]**] $let[user2;**$username[$authorID]**]

        $onlyIf[$checkContains[$getVar[rp-commandblocked;$get[user]];*]==false;:x: All roleplay commands are blocked by $get[user1].]
        $onlyIf[$checkContains[$getVar[rp-commandblocked;$get[user]];cheer]==false;:x: This roleplay command is blocked by $get[user1].]

        $onlyIf[$get[user]!=$authorID;You cant do this to yourself.]
        $onlyIf[$getVar[rp-blocked-$authorID;$get[user]]!=true;Your Blocked by this user]

        $setVar[cheer-give;$authorID;$sum[$getVar[cheer-give;$authorID];1]]
        $setVar[cheer-got;$get[user];$sum[$getVar[cheer-got;$get[user]];1]]

        $let[msg;$get[user1] got cheered on by $get[user2].]

        $description[$get[msg]$if[$get[message]!=;\n"$get[message]"]]
        $color[$getVar[color;default]]

        $let[type2;got cheered]

        $!httpRequest[https://api.lynnux.xyz/roleplay/cheer.json;get]
        $let[url;$httpResult[embed;image;url]]
        $image[$get[url]]

        $footer[$username used cheer $if[$getVar[cheer-give;$authorID]==1;1 time;$getVar[cheer-give;$authorID] times]. | $replace[$get[user1];**;;-1] $get[type2] $if[$getVar[cheer-got;$get[user]]==1;1 time;$getVar[cheer-got;$get[user]] times]]
    `}