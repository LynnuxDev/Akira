module.exports = [{
    name: "help",
	aliases: ["sos","help-me","what","howto","how-to"],
	module: "Help",
	version: "1.0",
    sourcecode: "https://github.com/LynnuxDev/Akira/blob/main/SRC/commands/help/help.js",
    documentation: "https://documentation.lynnux.xyz/commands/utility/help",
    type: "messageCreate",
	description: "Get help using Akira.",
	usage: "help {module/command}",
	example: "Help",
    code: `
    $if[$authorID==705306248538488947;Ping: \`$pingMS\` | Uptime: <t:$round[$math[$math[$getTimestamp-$uptime]/1000];0]:R>;]        
    $if[$guildID==;$c[not a guild];$replace[$replace[$checkContains[$message;-c;-chat];true;$c[is for chat];1];false;**Got it!** I sent you a DM with information on how to use me. Please check your DM <@$authorID>;1]]    

    $if[$toLowercase[$message[0]]!=roleplay;
    	$color[$getVar[color;default]]
		$author[Akira's Features;$userAvatar[$botID;2048;webp]]
		$description[**To check out a section or command use** \`akira help \[module / command\\]\`
**If you want this command to show up in chat instead of dms add -c at the end of the command.**
{Ex. \`Akira help -c\` or \`Akira help moderation -c\`}

For arguments in commands:
\`<>\` means it's required.
\`{}\` means it's optional.
\`[\\]\` means it's either required or not based on the usage.
**Do not actually include the <> , () & [\\] symbols in the command.**]
        $addField[:robot: Automation;Automatically do things, like welcomemessages and autoroles
**0 Commands** \`(soon)\`;true]
        $addField[:hammer: Automod;Automatically punish users for swearing or posting server invites
**0 Commands** \`(soon)\`;true]    
        $addField[:dollar: Economy;Get an economy rolling in your server work, shop, and way more
**0 Commands** \`(soon)\`;true]    
        $addField[:up: Leveling;Reward members for talking with xp and even give roles at milestones
**0 Commands** \`(soon)\`;true]    
        $addField[:shield: Moderation;Keep your server safe with advanced moderation commands
**0 Commands** \`(soon)\`;true]
        $addField[:black_joker: Fun;Play fun little games
**0 Commands** \`(soon)\`;true]    
        $addField[:star: Premium;Gives you all the premium commands
**0 Commands** \`(soon)\`;true]
        $addField[:frame_photo: Profile;See and manage your akira profile
**0 Commands** \`(soon)\`;true]    
        $addField[:point_up_2: Reaction-Roles;Let people pick their roles from a nice and easy menu
**0 Commands** \`(soon)\`;true]
        $addField[:hugging: Roleplay;Give people hugs, kisses, cuddles and way more
**8 Commands**;true]    
        $addField[:mag_right: Search;Find anything and everything on the internet
**0 Commands** \`(soon)\`;true]
        $addField[:wrench: Settings;Configure some of my settings for your server
**0 Commands**  \`(soon)\`;true]
        $addField[:flashlight: Utility;Useful left over commands that don't fit elsewhere
**0 Commands** \`(soon)\`;true]
        $addField[Extra links and information:;[[Invite akira\\](https://discord.com/api/oauth2/authorize?client_id=738057910923296839&permissions=8&scope=bot%20applications.commands)\\] | \[[Support Server\\](https://discord.com/invite/TUqZTutDUz)\\] | \[[Vote\\](https://akira.lynnux.xyz/vote)\\] | \[[Website\\](https://akira.lynnux.xyz)\\] | [Premium\\]]

        $addActionRow
        $addStringSelectMenu[helpMenu-$authorID;Which command category do you want to see?;false;1;1]
        $addOption[Automation;Automatically do things, like welcomemessages etc.;Automation;🤖;false]
        $addOption[Automod;Automatically punish users.;Automod;🔨;false]
        $addOption[Economy;Get an economy rolling in your server.;Economy;💵;false]
        $addOption[Leveling;Reward members for being active.;Leveling;🆙;false]
        $addOption[Moderation;Help your mods keep the server a save place.;Moderation;🛡️;false]
        $addOption[Fun;Play fun little games.;Fun;🃏;false]
        $addOption[Premium;Shows all the premium commands.;Premium;⭐;false]
        $addOption[Profile;See and manage your akira profile.;Profile;📝;false]
        $addOption[Reaction-Roles;Let people pick their roles.;Reaction-Roles;☝️;false]
        $addOption[Roleplay;Give people hugs, kisses and more.;Roleplay;🤗;false]
        $addOption[Search;Find anything and everything on the internet.;Search;🔎;false]
        $addOption[Settings;Configure some of my settings for your server/profile.;Settings;🔧;false]
        $addOption[Utility;Useful left over commands.;Utility;🔦;false]

        $addActionRow
        $addButton[close-$authorID;Close;Danger]   
    ;
        $author[Akira's RolePlay commands;$userAvatar[$botID;1024]]
        $color[$getVar[color;default]]
        $description[Express yourself with over \`50\` different gif commands that each track how often you've received and given them so you can see how many hugs you've given and gotten. Check \`akira counters\` to see your statistics.\n\n(Commands executed on yourself do not count towards the counters)]
        $addField[Wholesome:;\`akira [command\\] {users} (reason)\`\n\`\`\`Blush, Boop, Cheer, Cuddle, Dance, Feed, Glomp, Handhold, Happy, Highfive, Hug, Kiss, Laugh, Love, Nom, Nuzzle, Pat, Peck, Tease, Thumbsup, Tickle, Wag, Wave, Wink\`\`\`]
        $addField[Neutral:;\`akira [command\\] {users} (reason)\`\n\`\`\`Bonk, Bored, Chase, Dab, Facepalm, Lick, Lurk, Nervous, No, Panic, Poke, Pout, Run, Shrug, Sip, Sleep, Smug, Stare, Think, Yes\`\`\`]
        $addField[Negative:;\`akira [command\\] {users} (reason)\`\n\`\`\`Bite, Cringe, Cry, Die, Hate, Kill, Sad, Shoot, Slap, Stab, Triggered\`\`\`]
        $addField[Akira counters (user):;See how many times each roleplay action has happened to you and how often you've done them to others.]
        $addField[Akira blockcommand [roleplay command\\]:;Block a roleplay command so people can't use it on you, in case you want to reject everyone from slapping you.]
        $addField[Akira unblockcommand [roleplay command\\]:;Unblock a roleplay command so people can use it on you again, in case you once again accept slaps and bonks.]
        $addField[Akira block [@users\\]:;Block users so they can't spam you with roleplay commands and harass you. Useful if they keep trying to kiss you.]
        $addField[Akira unblock [@users\\]:;Unblock a user so they can use roleplay commands on you again. In case you forgive your stalkers.]
        $addField[Extra links and information:;[[Invite akira\\](https://discord.com/api/oauth2/authorize?client_id=738057910923296839&permissions=8&scope=bot%20applications.commands)\\] | \[[Support Server\\](https://discord.com/invite/TUqZTutDUz)\\] | \[[Vote\\](https://akira.lynnux.xyz/vote)\\] | \[[Website\\](https://akira.lynnux.xyz)\\] | [Premium\\]]
    ]
        $if[$checkContains[$message;-c;-chat]!=true;$sendDM[$authorID];]    

`}, {
	module: "Help-Interaction",
	version: "1.0",
    type: "interactionCreate",
	description: "Default help menu.",
	code: `
        $onlyIf[$checkContains[$customID;$authorID]]
        $onlyIf[$checkContains[$toLowerCase[$customID];back]]
        $interactionUpdate[
            $if[$authorID==705306248538488947;Ping: \`$pingMS\` | Uptime: <t:$round[$math[$math[$getTimestamp-$uptime]/1000];0]:R>;]
			$color[$getVar[color;default]]
			$author[Akira's Features;$userAvatar[$botID]]
			$description[**To check out a section or command use** \`akira help \[section / command\\]\` \n**If you want this command to show up in chat instead of dms add -c at the end of the command.** \n\{Ex. \`Akira help -c\` or \`Akira help moderation -c\`\} \n \nFor arguments in commands#COLON# \n\`<>\` means it's required. \n\`{\}\` means it's optional. \n\`[\\]\` means it's either required or not based on the usage. \n**Do not actually include the <>, {\} & [\\] symbols in the command.**]
            $addField[:robot: Automation;Automatically do things, like welcomemessages and autoroles
**0 Commands** \`(soon)\`;true]
            $addField[:hammer: Automod;Automatically punish users for swearing or posting server invites
**0 Commands** \`(soon)\`;true]    
            $addField[:dollar: Economy;Get an economy rolling in your server work, shop, and way more
**0 Commands** \`(soon)\`;true]    
            $addField[:up: Leveling;Reward members for talking with xp and even give roles at milestones
**0 Commands** \`(soon)\`;true]    
            $addField[:shield: Moderation;Keep your server safe with advanced moderation commands
**0 Commands** \`(soon)\`;true]
            $addField[:black_joker: Fun;Play fun little games
**0 Commands** \`(soon)\`;true]    
            $addField[:star: Premium;Gives you all the premium commands
**0 Commands** \`(soon)\`;true]
            $addField[:frame_photo: Profile;See and manage your akira profile
**0 Commands** \`(soon)\`;true]    
            $addField[:point_up_2: Reaction-Roles;Let people pick their roles from a nice and easy menu
**0 Commands** \`(soon)\`;true]
            $addField[:hugging: Roleplay;Give people hugs, kisses, cuddles and way more
**8 Commands**;true]    
            $addField[:mag_right: Search;Find anything and everything on the internet
**0 Commands** \`(soon)\`;true]
            $addField[:wrench: Settings;Configure some of my settings for your server
**0 Commands**  \`(soon)\`;true]
            $addField[:flashlight: Utility;Useful left over commands that don't fit elsewhere
**0 Commands** \`(soon)\`;true]
            $addField[Extra links and information:;[[Invite akira\\](https://discord.com/api/oauth2/authorize?client_id=738057910923296839&permissions=8&scope=bot%20applications.commands)\\] | \[[Support Server\\](https://discord.com/invite/TUqZTutDUz)\\] | \[[Vote\\](https://akira.lynnux.xyz/vote)\\] | \[[Website\\](https://akira.lynnux.xyz)\\] | [Premium\\]]
            $addActionRow
            $addStringSelectMenu[helpMenu-$authorID;Which command category do you want to see?;false;1;1]
            $addOption[Automation;Automatically do things, like welcomemessages etc.;Automation;🤖;false]
            $addOption[Automod;Automatically punish users.;Automod;🔨;false]
            $addOption[Economy;Get an economy rolling in your server.;Economy;💵;false]
            $addOption[Leveling;Reward members for being active.;Leveling;🆙;false]
            $addOption[Moderation;Help your mods keep the server a save place.;Moderation;🛡️;false]
            $addOption[Fun;Play fun little games.;Fun;🃏;false]
            $addOption[Premium;Shows all the premium commands.;Premium;⭐;false]
            $addOption[Profile;See and manage your akira profile.;Profile;📝;false]
            $addOption[Reaction-Roles;Let people pick their roles.;Reaction-Roles;☝️;false]
            $addOption[Roleplay;Give people hugs, kisses and more.;Roleplay;🤗;false]
            $addOption[Search;Find anything and everything on the internet.;Search;🔎;false]
            $addOption[Settings;Configure some of my settings for your server/profile.;Settings;🔧;false]
            $addOption[Utility;Useful left over commands.;Utility;🔦;false]
    
            $addActionRow
            $addButton[close-$authorID;Close;Danger]
        ]
`}, {
	module: "Help-Interaction",
	version: "1.0",
    type: "interactionCreate",
	description: "Automation help menu.",
	code: `
        $onlyIf[$toLowerCase[$selectMenuValues]==automation]
        $onlyIf[$checkContains[$customID;$authorID]]
        $interactionUpdate[
            $if[$authorID==705306248538488947;Ping: \`$pingMS\` | Uptime: <t:$round[$math[$math[$getTimestamp-$uptime]/1000];0]:R>;]
			$color[$getVar[color;default]]
			$author[Akira's Features;$userAvatar[$botID]]
			$description[**To check out a section or command use** \`akira help \[section / command\\]\` \n**If you want this command to show up in chat instead of dms add -c at the end of the command.** \n\{Ex. \`Akira help -c\` or \`Akira help moderation -c\`\} \n \nFor arguments in commands#COLON# \n\`<>\` means it's required. \n\`{\}\` means it's optional. \n\`[\\]\` means it's either required or not based on the usage. \n**Do not actually include the <>, {\} & [\\] symbols in the command.**]
            $footer[Use "akira command <command>" for more info]
            $addField[Extra links and information:;[[Invite akira\\](https://discord.com/api/oauth2/authorize?client_id=738057910923296839&permissions=8&scope=bot%20applications.commands)\\] | \[[Support Server\\](https://discord.com/invite/TUqZTutDUz)\\] | \[[Vote\\](https://akira.lynnux.xyz/vote)\\] | \[[Website\\](https://akira.lynnux.xyz)\\] | [Premium\\]]

            $addActionRow
            $addButton[close-$authorID;Close;Danger]
            $addButton[Back-$authorID;Back;Secondary]
        ]
`}, {
	module: "Help-Interaction",
	version: "1.0",
    type: "interactionCreate",
	description: "Automod help menu.",
	code: `
        $onlyIf[$toLowerCase[$selectMenuValues]==automod]
        $onlyIf[$checkContains[$customID;$authorID]]
        $interactionUpdate[
            $if[$authorID==705306248538488947;Ping: \`$pingMS\` | Uptime: <t:$round[$math[$math[$getTimestamp-$uptime]/1000];0]:R>;]
			$color[$getVar[color;default]]
			$author[Akira's Features;$userAvatar[$botID]]
			$description[**To check out a section or command use** \`akira help \[section / command\\]\` \n**If you want this command to show up in chat instead of dms add -c at the end of the command.** \n\{Ex. \`Akira help -c\` or \`Akira help moderation -c\`\} \n \nFor arguments in commands#COLON# \n\`<>\` means it's required. \n\`{\}\` means it's optional. \n\`[\\]\` means it's either required or not based on the usage. \n**Do not actually include the <>, {\} & [\\] symbols in the command.**]
            $footer[Use "akira command <command>" for more info]
            $addField[Extra links and information:;[[Invite akira\\](https://discord.com/api/oauth2/authorize?client_id=738057910923296839&permissions=8&scope=bot%20applications.commands)\\] | \[[Support Server\\](https://discord.com/invite/TUqZTutDUz)\\] | \[[Vote\\](https://akira.lynnux.xyz/vote)\\] | \[[Website\\](https://akira.lynnux.xyz)\\] | [Premium\\]]

            $addActionRow
            $addButton[close-$authorID;Close;Danger]
            $addButton[Back-$authorID;Back;Secondary]
        ]`}, {
	module: "Help-Interaction",
	version: "1.0",
    type: "interactionCreate",
	description: "Economy help menu.",
	code: `
        $onlyIf[$toLowerCase[$selectMenuValues]==economy]
        $onlyIf[$checkContains[$customID;$authorID]]
        $interactionUpdate[
            $if[$authorID==705306248538488947;Ping: \`$pingMS\` | Uptime: <t:$round[$math[$math[$getTimestamp-$uptime]/1000];0]:R>;]
			$color[$getVar[color;default]]
			$author[Akira's Features;$userAvatar[$botID]]
			$description[**To check out a section or command use** \`akira help \[section / command\\]\` \n**If you want this command to show up in chat instead of dms add -c at the end of the command.** \n\{Ex. \`Akira help -c\` or \`Akira help moderation -c\`\} \n \nFor arguments in commands#COLON# \n\`<>\` means it's required. \n\`{\}\` means it's optional. \n\`[\\]\` means it's either required or not based on the usage. \n**Do not actually include the <>, {\} & [\\] symbols in the command.**]
            $footer[Use "akira command <command>" for more info]
            $addField[Extra links and information:;[[Invite akira\\](https://discord.com/api/oauth2/authorize?client_id=738057910923296839&permissions=8&scope=bot%20applications.commands)\\] | \[[Support Server\\](https://discord.com/invite/TUqZTutDUz)\\] | \[[Vote\\](https://akira.lynnux.xyz/vote)\\] | \[[Website\\](https://akira.lynnux.xyz)\\] | [Premium\\]]
            $addActionRow
            $addButton[close-$authorID;Close;Danger]
            $addButton[Back-$authorID;Back;Secondary]
        ]
`}, {
	module: "Help-Interaction",
	version: "1.0",
    type: "interactionCreate",
	description: "Leveling help menu.",
	code: `
        $onlyIf[$toLowerCase[$selectMenuValues]==leveling]
        $onlyIf[$checkContains[$customID;$authorID]]
        $interactionUpdate[
            $if[$authorID==705306248538488947;Ping: \`$pingMS\` | Uptime: <t:$round[$math[$math[$getTimestamp-$uptime]/1000];0]:R>;]
			$color[$getVar[color;default]]
			$author[Akira's Features;$userAvatar[$botID]]
			$description[**To check out a section or command use** \`akira help \[section / command\\]\` \n**If you want this command to show up in chat instead of dms add -c at the end of the command.** \n\{Ex. \`Akira help -c\` or \`Akira help moderation -c\`\} \n \nFor arguments in commands#COLON# \n\`<>\` means it's required. \n\`{\}\` means it's optional. \n\`[\\]\` means it's either required or not based on the usage. \n**Do not actually include the <>, {\} & [\\] symbols in the command.**]
            $footer[Use "akira command <command>" for more info]
            $addField[Extra links and information:;[[Invite akira\\](https://discord.com/api/oauth2/authorize?client_id=738057910923296839&permissions=8&scope=bot%20applications.commands)\\] | \[[Support Server\\](https://discord.com/invite/TUqZTutDUz)\\] | \[[Vote\\](https://akira.lynnux.xyz/vote)\\] | \[[Website\\](https://akira.lynnux.xyz)\\] | [Premium\\]]
            $addActionRow
            $addButton[close-$authorID;Close;Danger]
            $addButton[Back-$authorID;Back;Secondary]
        ]
`}, {
	module: "Help-Interaction",
	version: "1.0",
    type: "interactionCreate",
	description: "Moderation help menu.",
	code: `
        $onlyIf[$toLowerCase[$selectMenuValues]==moderation]
        $onlyIf[$checkContains[$customID;$authorID]]
        $interactionUpdate[
            $if[$authorID==705306248538488947;Ping: \`$pingMS\` | Uptime: <t:$round[$math[$math[$getTimestamp-$uptime]/1000];0]:R>;]
            $color[$getVar[color;default]]
            $author[Akira's Features;$userAvatar[$botID]]
            $description[**To check out a section or command use** \`akira help \[section / command\\]\` \n**If you want this command to show up in chat instead of dms add -c at the end of the command.** \n\{Ex. \`Akira help -c\` or \`Akira help moderation -c\`\} \n \nFor arguments in commands#COLON# \n\`<>\` means it's required. \n\`{\}\` means it's optional. \n\`[\\]\` means it's either required or not based on the usage. \n**Do not actually include the <>, {\} & [\\] symbols in the command.**]
            $footer[Use "akira command <command>" for more info]
            $addField[Extra links and information:;[[Invite akira\\](https://discord.com/api/oauth2/authorize?client_id=738057910923296839&permissions=8&scope=bot%20applications.commands)\\] | \[[Support Server\\](https://discord.com/invite/TUqZTutDUz)\\] | \[[Vote\\](https://akira.lynnux.xyz/vote)\\] | \[[Website\\](https://akira.lynnux.xyz)\\] | [Premium\\]]
            $addActionRow
            $addButton[close-$authorID;Close;Danger]
            $addButton[Back-$authorID;Back;Secondary]
        ]
`}, {
	module: "Help-Interaction",
	version: "1.0",
    type: "interactionCreate",
	description: "Fun help menu.",
	code: `
        $onlyIf[$toLowerCase[$selectMenuValues]==fun]
        $onlyIf[$checkContains[$customID;$authorID]]
        $interactionUpdate[
            $if[$authorID==705306248538488947;Ping: \`$pingMS\` | Uptime: <t:$round[$math[$math[$getTimestamp-$uptime]/1000];0]:R>;]
            $color[$getVar[color;default]]
            $author[Akira's Features;$userAvatar[$botID]]
            $description[**To check out a section or command use** \`akira help \[section / command\\]\` \n**If you want this command to show up in chat instead of dms add -c at the end of the command.** \n\{Ex. \`Akira help -c\` or \`Akira help moderation -c\`\} \n \nFor arguments in commands#COLON# \n\`<>\` means it's required. \n\`{\}\` means it's optional. \n\`[\\]\` means it's either required or not based on the usage. \n**Do not actually include the <>, {\} & [\\] symbols in the command.**]
            $footer[Use "akira command <command>" for more info]
            $addField[Extra links and information:;[[Invite akira\\](https://discord.com/api/oauth2/authorize?client_id=738057910923296839&permissions=8&scope=bot%20applications.commands)\\] | \[[Support Server\\](https://discord.com/invite/TUqZTutDUz)\\] | \[[Vote\\](https://akira.lynnux.xyz/vote)\\] | \[[Website\\](https://akira.lynnux.xyz)\\] | [Premium\\]]
            $addActionRow
            $addButton[close-$authorID;Close;Danger]
            $addButton[Back-$authorID;Back;Secondary]
        ]
`}, {
	module: "Help-Interaction",
	version: "1.0",
    type: "interactionCreate",
	description: "Fun help menu.",
	code: `
        $onlyIf[$toLowerCase[$selectMenuValues]==premium]
        $onlyIf[$checkContains[$customID;$authorID]]
        $interactionUpdate[
            $if[$authorID==705306248538488947;Ping: \`$pingMS\` | Uptime: <t:$round[$math[$math[$getTimestamp-$uptime]/1000];0]:R>;]
            $color[$getVar[color;default]]
            $author[Akira's Features;$userAvatar[$botID]]
            $description[**To check out a section or command use** \`akira help \[section / command\\]\` \n**If you want this command to show up in chat instead of dms add -c at the end of the command.** \n\{Ex. \`Akira help -c\` or \`Akira help moderation -c\`\} \n \nFor arguments in commands#COLON# \n\`<>\` means it's required. \n\`{\}\` means it's optional. \n\`[\\]\` means it's either required or not based on the usage. \n**Do not actually include the <>, {\} & [\\] symbols in the command.**]
            $footer[Use "akira command <command>" for more info]
            $addField[Extra links and information:;[[Invite akira\\](https://discord.com/api/oauth2/authorize?client_id=738057910923296839&permissions=8&scope=bot%20applications.commands)\\] | \[[Support Server\\](https://discord.com/invite/TUqZTutDUz)\\] | \[[Vote\\](https://akira.lynnux.xyz/vote)\\] | \[[Website\\](https://akira.lynnux.xyz)\\] | [Premium\\]]
            $addActionRow
            $addButton[close-$authorID;Close;Danger]
            $addButton[Back-$authorID;Back;Secondary]
        ]
`}, {
	module: "Help-Interaction",
	version: "1.0",
    type: "interactionCreate",
	description: "Profile help menu.",
	code: `
        $onlyIf[$toLowerCase[$selectMenuValues]==profile]
        $onlyIf[$checkContains[$customID;$authorID]]
        $interactionUpdate[
            $if[$authorID==705306248538488947;Ping: \`$pingMS\` | Uptime: <t:$round[$math[$math[$getTimestamp-$uptime]/1000];0]:R>;]
            $color[$getVar[color;default]]
            $author[Akira's Features;$userAvatar[$botID]]
            $description[**To check out a section or command use** \`akira help \[section / command\\]\` \n**If you want this command to show up in chat instead of dms add -c at the end of the command.** \n\{Ex. \`Akira help -c\` or \`Akira help moderation -c\`\} \n \nFor arguments in commands#COLON# \n\`<>\` means it's required. \n\`{\}\` means it's optional. \n\`[\\]\` means it's either required or not based on the usage. \n**Do not actually include the <>, {\} & [\\] symbols in the command.**]
            $footer[Use "akira command <command>" for more info]
            $addField[Extra links and information:;[[Invite akira\\](https://discord.com/api/oauth2/authorize?client_id=738057910923296839&permissions=8&scope=bot%20applications.commands)\\] | \[[Support Server\\](https://discord.com/invite/TUqZTutDUz)\\] | \[[Vote\\](https://akira.lynnux.xyz/vote)\\] | \[[Website\\](https://akira.lynnux.xyz)\\] | [Premium\\]]
            $addActionRow
            $addButton[close-$authorID;Close;Danger]
            $addButton[Back-$authorID;Back;Secondary]
        ]
`}, {
	module: "Help-Interaction",
	version: "1.0",
    type: "interactionCreate",
	description: "Reaction-Roles help menu.",
	code: `
        $onlyIf[$toLowerCase[$selectMenuValues]==reaction-roles]
        $onlyIf[$checkContains[$customID;$authorID]]
        $interactionUpdate[
            $if[$authorID==705306248538488947;Ping: \`$pingMS\` | Uptime: <t:$round[$math[$math[$getTimestamp-$uptime]/1000];0]:R>;]
            $color[$getVar[color;default]]
            $author[Akira's Features;$userAvatar[$botID]]
            $description[**To check out a section or command use** \`akira help \[section / command\\]\` \n**If you want this command to show up in chat instead of dms add -c at the end of the command.** \n\{Ex. \`Akira help -c\` or \`Akira help moderation -c\`\} \n \nFor arguments in commands#COLON# \n\`<>\` means it's required. \n\`{\}\` means it's optional. \n\`[\\]\` means it's either required or not based on the usage. \n**Do not actually include the <>, {\} & [\\] symbols in the command.**]
            $footer[Use "akira command <command>" for more info]
            $addField[Extra links and information:;[[Invite akira\\](https://discord.com/api/oauth2/authorize?client_id=738057910923296839&permissions=8&scope=bot%20applications.commands)\\] | \[[Support Server\\](https://discord.com/invite/TUqZTutDUz)\\] | \[[Vote\\](https://akira.lynnux.xyz/vote)\\] | \[[Website\\](https://akira.lynnux.xyz)\\] | [Premium\\]]
            $addActionRow
            $addButton[close-$authorID;Close;Danger]
            $addButton[Back-$authorID;Back;Secondary]
        ]
`}, {
	module: "Help-Interaction",
	version: "1.0",
    type: "interactionCreate",
	description: "Roleplay help menu.",
	code: `
        $onlyIf[$toLowerCase[$selectMenuValues]==roleplay]
        $onlyIf[$checkContains[$customID;$authorID]]
        $interactionUpdate[
            $if[$authorID==705306248538488947;Ping: \`$pingMS\` | Uptime: <t:$round[$math[$math[$getTimestamp-$uptime]/1000];0]:R>;]
            $color[$getVar[color;default]]
            $author[Akira's Features;$userAvatar[$botID]]
            $description[**To check out a section or command use** \`akira help \[section / command\\]\` \n**If you want this command to show up in chat instead of dms add -c at the end of the command.** \n\{Ex. \`Akira help -c\` or \`Akira help moderation -c\`\} \n \nFor arguments in commands#COLON# \n\`<>\` means it's required. \n\`{\}\` means it's optional. \n\`[\\]\` means it's either required or not based on the usage. \n**Do not actually include the <>, {\} & [\\] symbols in the command.**]
            $footer[Use "akira command <command>" for more info]
            $addField[** **;Express yourself with over \`50\` different gif commands that each track how often you've received and given them so you can see how many hugs you've given and gotten. Check \`akira counters\` to see your statistics.\n\n(Commands executed on yourself do not count towards the counters);false]
            $addField[Wholesome:;\`akira [command\\] {users} (reason)\`\n\`\`\`Blush, Boop, Cheer, Cuddle, Dance, Feed, Glomp, Handhold, Happy, Highfive, Hug, Kiss, Laugh, Love, Nom, Nuzzle, Pat, Peck, Tease, Thumbsup, Tickle, Wag, Wave, Wink\`\`\`]
            $addField[Neutral:;\`akira [command\\] {users} (reason)\`\n\`\`\`Bonk, Bored, Chase, Dab, Facepalm, Lick, Lurk, Nervous, No, Panic, Poke, Pout, Run, Shrug, Sip, Sleep, Smug, Stare, Think, Yes\`\`\`]
            $addField[Negative:;\`akira [command\\] {users} (reason)\`\n\`\`\`Bite, Cringe, Cry, Die, Hate, Kill, Sad, Shoot, Slap, Stab, Triggered\`\`\`]
            $addField[Akira counters (user):;See how many times each roleplay action has happened to you and how often you've done them to others.]
            $addField[Akira blockcommand [roleplay command\\]:;Block a roleplay command so people can't use it on you, in case you want to reject everyone from slapping you.]
            $addField[Akira unblockcommand [roleplay command\\]:;Unblock a roleplay command so people can use it on you again, in case you once again accept slaps and bonks.]
            $addField[Akira block [@users\\]:;Block users so they can't spam you with roleplay commands and harass you. Useful if they keep trying to kiss you.]
            $addField[Akira unblock [@users\\]:;Unblock a user so they can use roleplay commands on you again. In case you forgive your stalkers.]
            $addField[Extra links and information:;[[Invite akira\\](https://discord.com/api/oauth2/authorize?client_id=738057910923296839&permissions=8&scope=bot%20applications.commands)\\] | \[[Support Server\\](https://discord.com/invite/TUqZTutDUz)\\] | \[[Vote\\](https://akira.lynnux.xyz/vote)\\] | \[[Website\\](https://akira.lynnux.xyz)\\] | [Premium\\]]
            $addActionRow
            $addButton[close-$authorID;Close;Danger]
            $addButton[Back-$authorID;Back;Secondary]
        ]
`}, {
	module: "Help-Interaction",
	version: "1.0",
    type: "interactionCreate",
	description: "Roleplay help menu.",
	code: `
        $onlyIf[$toLowerCase[$selectMenuValues]==search]
        $onlyIf[$checkContains[$customID;$authorID]]
        $interactionUpdate[
            $if[$authorID==705306248538488947;Ping: \`$pingMS\` | Uptime: <t:$round[$math[$math[$getTimestamp-$uptime]/1000];0]:R>;]
            $color[$getVar[color;default]]
            $author[Akira's Features;$userAvatar[$botID]]
            $description[**To check out a section or command use** \`akira help \[section / command\\]\` \n**If you want this command to show up in chat instead of dms add -c at the end of the command.** \n\{Ex. \`Akira help -c\` or \`Akira help moderation -c\`\} \n \nFor arguments in commands#COLON# \n\`<>\` means it's required. \n\`{\}\` means it's optional. \n\`[\\]\` means it's either required or not based on the usage. \n**Do not actually include the <>, {\} & [\\] symbols in the command.**]
            $footer[Use "akira command <command>" for more info]
            $addField[Extra links and information:;[[Invite akira\\](https://discord.com/api/oauth2/authorize?client_id=738057910923296839&permissions=8&scope=bot%20applications.commands)\\] | \[[Support Server\\](https://discord.com/invite/TUqZTutDUz)\\] | \[[Vote\\](https://akira.lynnux.xyz/vote)\\] | \[[Website\\](https://akira.lynnux.xyz)\\] | [Premium\\]]
            $addActionRow
            $addButton[close-$authorID;Close;Danger]
            $addButton[Back-$authorID;Back;Secondary]
        ]
`}, {
	module: "Help-Interaction",
	version: "1.0",
    type: "interactionCreate",
	description: "Settings help menu.",
	code: `
        $onlyIf[$toLowerCase[$selectMenuValues]==settings]
        $onlyIf[$checkContains[$customID;$authorID]]
        $interactionUpdate[
            $if[$authorID==705306248538488947;Ping: \`$pingMS\` | Uptime: <t:$round[$math[$math[$getTimestamp-$uptime]/1000];0]:R>;]
            $color[$getVar[color;default]]
            $author[Akira's Features;$userAvatar[$botID]]
            $description[**To check out a section or command use** \`akira help \[section / command\\]\` \n**If you want this command to show up in chat instead of dms add -c at the end of the command.** \n\{Ex. \`Akira help -c\` or \`Akira help moderation -c\`\} \n \nFor arguments in commands#COLON# \n\`<>\` means it's required. \n\`{\}\` means it's optional. \n\`[\\]\` means it's either required or not based on the usage. \n**Do not actually include the <>, {\} & [\\] symbols in the command.**]
            $footer[Use "akira command <command>" for more info]
            $addField[Extra links and information:;[[Invite akira\\](https://discord.com/api/oauth2/authorize?client_id=738057910923296839&permissions=8&scope=bot%20applications.commands)\\] | \[[Support Server\\](https://discord.com/invite/TUqZTutDUz)\\] | \[[Vote\\](https://akira.lynnux.xyz/vote)\\] | \[[Website\\](https://akira.lynnux.xyz)\\] | [Premium\\]]
            $addActionRow
            $addButton[close-$authorID;Close;Danger]
            $addButton[Back-$authorID;Back;Secondary]
        ]
`}, {
	module: "Help-Interaction",
	version: "1.0",
    type: "interactionCreate",
	description: "Settings help menu.",
	code: `
        $onlyIf[$toLowerCase[$selectMenuValues]==utility]
        $onlyIf[$checkContains[$customID;$authorID]]
        $interactionUpdate[
            $if[$authorID==705306248538488947;Ping: \`$pingMS\` | Uptime: <t:$round[$math[$math[$getTimestamp-$uptime]/1000];0]:R>;]
            $color[$getVar[color;default]]
            $author[Akira's Features;$userAvatar[$botID]]
            $description[**To check out a section or command use** \`akira help \[section / command\\]\` \n**If you want this command to show up in chat instead of dms add -c at the end of the command.** \n\{Ex. \`Akira help -c\` or \`Akira help moderation -c\`\} \n \nFor arguments in commands#COLON# \n\`<>\` means it's required. \n\`{\}\` means it's optional. \n\`[\\]\` means it's either required or not based on the usage. \n**Do not actually include the <>, {\} & [\\] symbols in the command.**]
            $footer[Use "akira command <command>" for more info]
            $addField[Extra links and information:;[[Invite akira\\](https://discord.com/api/oauth2/authorize?client_id=738057910923296839&permissions=8&scope=bot%20applications.commands)\\] | \[[Support Server\\](https://discord.com/invite/TUqZTutDUz)\\] | \[[Vote\\](https://akira.lynnux.xyz/vote)\\] | \[[Website\\](https://akira.lynnux.xyz)\\] | [Premium\\]]
            $addActionRow
            $addButton[close-$authorID;Close;Danger]
            $addButton[Back-$authorID;Back;Secondary]
        ]
`}]