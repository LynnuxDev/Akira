module.exports = {
    name: "thumbsup",
    aliases: ["rp-thumbsup"],
	module: "Roleplay",
	version: "1.0",
    sourcecode: "https://github.com/LynnuxDev/Akira/blob/main/SRC/commands/Roleplay/wholesome/thumbsup.js",
    documentation: "https://documentation.lynnux.xyz/akira/roleplay",
    type: "messageCreate",
	description: "thumbsup someone.",
	usage: "thumbsup <user> {message}",
	example: "thumbsup @dark_lynn\n{prefix}thumbsup @dark_lynn got slept on.",
    code: `
        $onlyIf[$getVar[AgreedToTos;$authorID]==true;$ephemeral $color[$getVar[color;default]] $title[Before we continue:] $footer[You have to agree with these terms before using akira.] $description[Before you proceed, please make sure to read and agree to our [Terms of Service\\](https://akira.lynnux.xyz/terms) and [Privacy Policy\\](https://akira.lynnux.xyz/policy).\n\nBy using the button below, you confirm that you have read and agree to abide by our terms and policies.\n\nIf you have any questions or concerns, feel free to contact our support team.] $addActionRow $addButton[AcceptTerms-$authorID;I have read and agree to abide by these terms and policies.;Success;;false]]
        $onlyIf[$channelID==$getVar[BotChannel;$guildID];$getVar[BotChannelError;default]]

        $onlyIf[$message!=;Wrong usage of this command use \`thumbsup <user> {message}\`]
        $onlyIf[$checkContains[$message[0];<@&]!=true;You can't use this on a role.]
        $let[user;$if[$message[0]==;$authorID;$findUser[$message[0];true]]]
        $let[message;$replace[$replace[$message;$message[0] ;];$message[0];]]
        $let[user1;**$username[$get[user]]**] $let[user2;**$username[$authorID]**]

        $onlyIf[$checkContains[$getVar[rp-commandblocked;$get[user]];*]==false;:x: All roleplay commands are blocked by $get[user1].]
        $onlyIf[$checkContains[$getVar[rp-commandblocked;$get[user]];thumbsup]==false;:x: This roleplay command is blocked by $get[user1].]

        $onlyIf[$get[user]!=$authorID;You cant do this to yourself.]
        $onlyIf[$getVar[rp-blocked-$authorID;$get[user]]!=true;Your Blocked by this user]

        $setVar[thumbsup-give;$authorID;$sum[$getVar[thumbsup-give;$authorID];1]]
        $setVar[thumbsup-got;$get[user];$sum[$getVar[thumbsup-got;$get[user]];1]]

        $let[msg;$get[user1] got a thumbsup from $get[user2].]

        $description[$get[msg]$if[$get[message]!=;\n"$get[message]"]]
        $color[$getVar[color;default]]

        $let[type2;got a thumbsup]

        $image[$callFunction[nekobest;thumbsup]]

        $footer[$username used thumbsup $if[$getVar[thumbsup-give;$authorID]==1;1 time;$getVar[thumbsup-give;$authorID] times]. | $replace[$get[user1];**;;-1] $get[type2] $if[$getVar[thumbsup-got;$get[user]]==1;1 time;$getVar[thumbsup-got;$get[user]] times]]
    `}