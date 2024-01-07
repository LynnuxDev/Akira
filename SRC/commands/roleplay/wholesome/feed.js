module.exports = {
    name: "feed",
    aliases: ["rp-feed"],
	module: "Roleplay",
	version: "1.0",
    sourcecode: "https://github.com/LynnuxDev/Akira/blob/main/SRC/commands/Roleplay/wholesome/feed.js",
    documentation: "https://documentation.lynnux.xyz/akira/roleplay",
    type: "messageCreate",
	description: "feed someone.",
	usage: "feed <user> {message}",
	example: "feed @dark_lynn\n{prefix}feed @dark_lynn got feeded.",
    code: `
        $onlyIf[$message!=;Wrong usage of this command use \`feed <user> {message}\`]
        $onlyIf[$checkContains[$message[0];<@&]!=true;You can't use this on a role.]
        $let[user;$if[$message[0]==;$authorID;$findUser[$message[0];true]]]
        $let[message;$replace[$replace[$message;$message[0] ;];$message[0];]]
        $let[user1;**$username[$get[user]]**] $let[user2;**$username[$authorID]**]

        $onlyIf[$get[user]!=$authorID;You cant do this to yourself.]
        $onlyIf[$getVar[rp-blocked-$authorID;$get[user]]!=true;Your Blocked by this user]

        $setVar[feed-give;$authorID;$sum[$getVar[feed-give;$authorID];1]]
        $setVar[feed-got;$get[user];$sum[$getVar[feed-got;$get[user]];1]]

        $let[msg;$get[user2] fed $get[user1].]

        $description[$get[msg]$if[$get[message]!=;\n"$get[message]"]]
        $color[$getVar[color;default]]

        $let[type2;got fed]

        $!httpRequest[https://api.lynnux.xyz/roleplay/feed.json;get]
        $let[url;$httpResult[embed;image;url]]
        $image[$get[url]]

        $footer[$username used feed $if[$getVar[feed-give;$authorID]==1;1 time;$getVar[feed-give;$authorID] times]. | $replace[$get[user1];**;;-1] $get[type2] $if[$getVar[feed-got;$get[user]]==1;1 time;$getVar[feed-got;$get[user]] times]]
    `}