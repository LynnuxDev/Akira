module.exports = {
    name: "run",
    aliases: ["rp-run"],
	module: "Roleplay",
	version: "1.0",
    sourcecode: "https://github.com/LynnuxDev/Akira/blob/main/SRC/commands/Roleplay/neutral/run.js",
    documentation: "https://documentation.lynnux.xyz/akira/roleplay",
    type: "messageCreate",
	description: "run for someone.",
	usage: "run <user> {message}",
	example: "run @dark_lynn\n{prefix}run @dark_lynn got run on",
    code: `
        $onlyIf[$getVar[AgreedToTos;$authorID]==true;$ephemeral $color[$getVar[color;default]] $title[Before we continue:] $footer[You have to agree with these terms before using akira.] $description[Before you proceed, please make sure to read and agree to our [Terms of Service\\](https://akira.lynnux.xyz/terms) and [Privacy Policy\\](https://akira.lynnux.xyz/policy).\n\nBy using the button below, you confirm that you have read and agree to abide by our terms and policies.\n\nIf you have any questions or concerns, feel free to contact our support team.] $addActionRow $addButton[AcceptTerms-$authorID;I have read and agree to abide by these terms and policies.;Success;;false]]
        $onlyIf[$channelID==$getVar[BotChannel;$guildID];$getVar[BotChannelError;default]]

        $onlyIf[$message!=;Wtong usage of this command use \`run <user> {message}\`]
        $onlyIf[$checkContains[$message[0];<@&]!=true;You can't use this on a role.]
        $let[user;$if[$message[0]==;$authorID;$findUser[$message[0];true]]]
        $let[message;$replace[$replace[$message;$message[0] ;];$message[0];]]
        $let[user1;**$username[$get[user]]**] $let[user2;**$username[$authorID]**]

        $onlyIf[$checkContains[$getVar[rp-commandblocked;$get[user]];*]==false;:x: All roleplay commands are blocked by $get[user1].]
        $onlyIf[$checkContains[$getVar[rp-commandblocked;$get[user]];run]==false;:x: This roleplay command is blocked by $get[user1].]

        $onlyIf[$get[user]!=$authorID;You cant do this to yourself.]
        $onlyIf[$getVar[rp-blocked-$authorID;$get[user]]!=true;Your Blocked by this user]

        $setVar[run-give;$authorID;$sum[$getVar[run-give;$authorID];1]]
        $setVar[run-got;$get[user];$sum[$getVar[run-got;$get[user]];1]]

        $let[msg;$get[user1] made $get[user2] run.]

        $description[$get[msg]$if[$get[message]!=;\n"$get[message]"]]
        $color[$getVar[color;default]]

        $let[type2;made people run]

        $image[$callFunction[roleplay;run]]

        $footer[$username used run $if[$getVar[run-give;$authorID]==1;1 time;$getVar[run-give;$authorID] times]. | $replace[$get[user1];**;;-1] $get[type2] $if[$getVar[run-got;$get[user]]==1;1 time;$getVar[run-got;$get[user]] times]]
    `}