module.exports = {
    name: "hug",
    aliases: ["rp-hug"],
	module: "Roleplay",
	version: "1.0",
    sourcecode: "https://github.com/LynnuxDev/Akira/blob/main/SRC/commands/Roleplay/wholesome/hug.js",
    documentation: "https://documentation.lynnux.xyz/akira/roleplay",
    type: "messageCreate",
	description: "hug someone.",
	usage: "hug <user> {message}",
	example: "hug @dark_lynn\n{prefix}hug @dark_lynn got hugged.",
    code: `
        $onlyIf[$getVar[AgreedToTos;$authorID]==true;$ephemeral $color[$getVar[color;default]] $title[Before we continue:] $footer[You have to agree with these terms before using akira.] $description[Before you proceed, please make sure to read and agree to our [Terms of Service\\](https://akira.lynnux.xyz/terms) and [Privacy Policy\\](https://akira.lynnux.xyz/policy).\n\nBy using the button below, you confirm that you have read and agree to abide by our terms and policies.\n\nIf you have any questions or concerns, feel free to contact our support team.] $addActionRow $addButton[AcceptTerms-$authorID;I have read and agree to abide by these terms and policies.;Success;;false]]
        $onlyIf[$channelID==$getVar[BotChannel;$guildID];$getVar[BotChannelError;default]]

        $onlyIf[$message!=;Wrong usage of this command use \`hug <user> {message}\`]
        $onlyIf[$checkContains[$message[0];<@&]!=true;You can't use this on a role.]
        $let[user;$if[$message[0]==;$authorID;$findUser[$message[0];true]]]
        $let[message;$replace[$replace[$message;$message[0] ;];$message[0];]]
        $let[user1;**$username[$get[user]]**] $let[user2;**$username[$authorID]**]

        $onlyIf[$checkContains[$getVar[rp-commandblocked;$get[user]];*]==false;:x: All roleplay commands are blocked by $get[user1].]
        $onlyIf[$checkContains[$getVar[rp-commandblocked;$get[user]];hug]==false;:x: This roleplay command is blocked by $get[user1].]

        $onlyIf[$get[user]!=$authorID;You cant do this to yourself.]
        $onlyIf[$getVar[rp-blocked-$authorID;$get[user]]!=true;Your Blocked by this user]

        $setVar[hug-give;$authorID;$sum[$getVar[hug-give;$authorID];1]]
        $setVar[hug-got;$get[user];$sum[$getVar[hug-got;$get[user]];1]]

        $let[msg;$get[user1] got hugged by $get[user2].]

        $description[$get[msg]$if[$get[message]!=;\n"$get[message]"]]
        $color[$getVar[color;default]]

        $let[type2;got hugged]

        $image[$callFunction[nekobest;hug]]

        $footer[$username used hug $if[$getVar[hug-give;$authorID]==1;1 time;$getVar[hug-give;$authorID] times]. | $replace[$get[user1];**;;-1] $get[type2] $if[$getVar[hug-got;$get[user]]==1;1 time;$getVar[hug-got;$get[user]] times]]
    `}