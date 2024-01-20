module.exports = {
    name: "stab",
    aliases: ["rp-stab"],
	module: "Roleplay",
	version: "1.0",
    sourcecode: "https://github.com/LynnuxDev/Akira/blob/main/SRC/commands/Roleplay/wholesome/stab.js",
    documentation: "https://documentation.lynnux.xyz/akira/roleplay",
    type: "messageCreate",
	description: "stab someone.",
	usage: "stab <user> {message}",
	example: "stab @dark_lynn\n{prefix}stab @dark_lynn get stabbed.",
    code: `
        $onlyIf[$getVar[AgreedToTos;$authorID]==true;$ephemeral $color[$getVar[color;default]] $title[Before we continue:] $footer[You have to agree with these terms before using akira.] $description[Before you proceed, please make sure to read and agree to our [Terms of Service\\](https://akira.lynnux.xyz/terms) and [Privacy Policy\\](https://akira.lynnux.xyz/policy).\n\nBy using the button below, you confirm that you have read and agree to abide by our terms and policies.\n\nIf you have any questions or concerns, feel free to contact our support team.] $addActionRow $addButton[AcceptTerms-$authorID;I have read and agree to abide by these terms and policies.;Success;;false]]
        $onlyIf[$channelID==$getVar[BotChannel;$guildID];$getVar[BotChannelError;default]]

        $onlyIf[$message!=;Wrong usage of this command use \`stab <user> {message}\`]
        $onlyIf[$checkContains[$message[0];<@&]!=true;You can't use this on a role.]
        $let[user;$if[$message[0]==;$authorID;$findUser[$message[0];true]]]
        $let[message;$replace[$replace[$message;$message[0] ;];$message[0];]]
        $let[user1;**$username[$get[user]]**] $let[user2;**$username[$authorID]**]

        $onlyIf[$checkContains[$getVar[rp-commandblocked;$get[user]];*]==false;:x: All roleplay commands are blocked by $get[user1].]
        $onlyIf[$checkContains[$getVar[rp-commandblocked;$get[user]];stab]==false;:x: This roleplay command is blocked by $get[user1].]
    
        $onlyIf[$get[user]!=$authorID;You cant do this to yourself.]
    
        $setVar[stab-give;$authorID;$sum[$getVar[stab-give;$authorID];1]]
        $setVar[stab-got;$get[user];$sum[$getVar[stab-got;$get[user]];1]]

        $let[msg;$get[user1] got stabbed by $get[user2].]

        $description[$get[msg]$if[$get[message]!=;\n"$get[message]"]]
        $color[$getVar[color;default]]

        $let[type2;got stabbed]

        $!httpRequest[https://api.lynnux.xyz/roleplay/stab.json;get]
        $let[url;$httpResult[embed;image;url]]
        $image[$get[url]]

        $footer[$username used stab $if[$getVar[stab-give;$authorID]==1;1 time;$getVar[stab-give;$authorID] times]. | $replace[$get[user1];**;;-1] $get[type2] $if[$getVar[stab-got;$get[user]]==1;1 time;$getVar[stab-got;$get[user]] times]]
    `}