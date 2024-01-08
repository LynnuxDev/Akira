module.exports = {
    name: "tickle",
    aliases: ["rp-tickle"],
	module: "Roleplay",
	version: "1.0",
    sourcecode: "https://github.com/LynnuxDev/Akira/blob/main/SRC/commands/Roleplay/wholesome/tickle.js",
    documentation: "https://documentation.lynnux.xyz/akira/roleplay",
    type: "messageCreate",
	description: "tickle someone.",
	usage: "tickle <user> {message}",
	example: "tickle @dark_lynn\n{prefix}tickle @dark_lynn got tickleed.",
    code: `
        $onlyIf[$message!=;Wrong usage of this command use \`tickle <user> {message}\`]
        $onlyIf[$checkContains[$message[0];<@&]!=true;You can't use this on a role.]
        $let[user;$if[$message[0]==;$authorID;$findUser[$message[0];true]]]
        $let[message;$replace[$replace[$message;$message[0] ;];$message[0];]]
        $let[user1;**$username[$get[user]]**] $let[user2;**$username[$authorID]**]

        $onlyIf[$checkContains[$getVar[rp-commandblocked;$get[user]];*]==false;:x: All roleplay commands are blocked by $get[user1].]
        $onlyIf[$checkContains[$getVar[rp-commandblocked;$get[user]];tickle]==false;:x: This roleplay command is blocked by $get[user1].]

        $onlyIf[$get[user]!=$authorID;You cant do this to yourself.]
        $onlyIf[$getVar[rp-blocked-$authorID;$get[user]]!=true;Your Blocked by this user]

        $setVar[tickle-give;$authorID;$sum[$getVar[tickle-give;$authorID];1]]
        $setVar[tickle-got;$get[user];$sum[$getVar[tickle-got;$get[user]];1]]

        $let[msg;$get[user1] got tickled by $get[user2].]

        $description[$get[msg]$if[$get[message]!=;\n"$get[message]"]]
        $color[$getVar[color;default]]

        $let[type2;got tickled]

        $!httpRequest[https://api.lynnux.xyz/roleplay/tickle.json;get]
        $let[url;$httpResult[embed;image;url]]
        $image[$get[url]]

        $footer[$username used tickle $if[$getVar[tickle-give;$authorID]==1;1 time;$getVar[tickle-give;$authorID] times]. | $replace[$get[user1];**;;-1] $get[type2] $if[$getVar[tickle-got;$get[user]]==1;1 time;$getVar[tickle-got;$get[user]] times]]
    `}