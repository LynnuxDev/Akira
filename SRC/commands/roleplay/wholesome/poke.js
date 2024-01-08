module.exports = {
    name: "poke",
    aliases: ["rp-poke"],
	module: "Roleplay",
	version: "1.0",
    sourcecode: "https://github.com/LynnuxDev/Akira/blob/main/SRC/commands/Roleplay/wholesome/poke.js",
    documentation: "https://documentation.lynnux.xyz/akira/roleplay",
    type: "messageCreate",
	description: "poke someone.",
	usage: "poke <user> {message}",
	example: "poke @dark_lynn\n{prefix}poke @dark_lynn got poked.",
    code: `
        $onlyIf[$message!=;Wrong usage of this command use \`poke <user> {message}\`]
        $onlyIf[$checkContains[$message[0];<@&]!=true;You can't use this on a role.]
        $let[user;$if[$message[0]==;$authorID;$findUser[$message[0];true]]]
        $let[message;$replace[$replace[$message;$message[0] ;];$message[0];]]
        $let[user1;**$username[$get[user]]**] $let[user2;**$username[$authorID]**]

        $onlyIf[$checkContains[$getVar[rp-commandblocked;$get[user]];*]==false;:x: All roleplay commands are blocked by $get[user1].]
        $onlyIf[$checkContains[$getVar[rp-commandblocked;$get[user]];poke]==false;:x: This roleplay command is blocked by $get[user1].]

        $onlyIf[$get[user]!=$authorID;You cant do this to yourself.]
        $onlyIf[$getVar[rp-blocked-$authorID;$get[user]]!=true;Your Blocked by this user]

        $setVar[poke-give;$authorID;$sum[$getVar[poke-give;$authorID];1]]
        $setVar[poke-got;$get[user];$sum[$getVar[poke-got;$get[user]];1]]

        $let[msg;$get[user1] got poked by $get[user2].]

        $description[$get[msg]$if[$get[message]!=;\n"$get[message]"]]
        $color[$getVar[color;default]]

        $let[type2;got poked]

        $!httpRequest[https://api.lynnux.xyz/roleplay/poke.json;get]
        $let[url;$httpResult[embed;image;url]]
        $image[$get[url]]

        $footer[$username used poke $if[$getVar[poke-give;$authorID]==1;1 time;$getVar[poke-give;$authorID] times]. | $replace[$get[user1];**;;-1] $get[type2] $if[$getVar[poke-got;$get[user]]==1;1 time;$getVar[poke-got;$get[user]] times]]
    `}