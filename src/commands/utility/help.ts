import { getModuleCount } from '../../native/getModuleCount';
import { Command } from '@/types';

const commands: Command[] = [
  {
    name: 'help',
    aliases: ['sos', 'help-me', 'what', 'howto', 'how-to'],
    module: 'utility',
    version: '1.0.0',
    sourcecode: 'src/commands/help/help.ts',
    documentation: 'help',
    type: 'messageCreate',
    description: 'Get help using Akira.',
    usage: 'help {module/command}',
    example: 'Help',
    code: `
      
      $if[$guildID==;$c[not a guild];$replace[$replace[$checkContains[$message;-c;-chat];true;$c[is for chat];1];false;**Got it!** I sent you a DM with information on how to use me. Please check your DM <@$authorID>;1]]    

      $if[$toLowercase[$message[0]]!=roleplay;
        $color[$getUserVar[color;$authorID]]
		$author[Akira's Features;$userAvatar[$botID;2048;webp]]
		$description[**To check out a section or command use** \`akira help \[module / command\\]\`
**If you want this command to show up in chat instead of dms add -c at the end of the command.**
{Ex. \`Akira help -c\` or \`Akira help moderation -c\`}

For arguments in commands:
\`<>\` means it's required.
\`{}\` means it's optional.
\`[\\]\` means it's either required or not based on the usage.
**Do not actually include the <> , () & [\\] symbols in the command.**]
        $addField[:robot: Automation;Automatically do things, like welcomeMessages and autoRoles
**${getModuleCount('automation')} Commands**;true]
        $addField[:hammer: Automod;Automatically punish users for swearing or posting server invites
**${getModuleCount('automod')} Commands**;true]
        $addField[:dollar: Economy;Get an economy rolling in your server work, shop, and way more
**${getModuleCount('economy')} Commands**;true]
        $addField[:up: Leveling;Reward members for talking with xp and even give roles at milestones
**${getModuleCount('leveling')} Commands**;true]
        $addField[:shield: Moderation;Keep your server safe with advanced moderation commands
**${getModuleCount('moderation')} Commands**;true]
        $addField[:black_joker: Fun;Play fun little games
**${getModuleCount('fun')} Commands**;true]
        $addField[:star: Premium;Gives you all the premium commands
**${getModuleCount('premium')} Commands**;true]
        $addField[:frame_photo: Profile;See and manage your akira profile
**${getModuleCount('profile')} Commands**;true]
        $addField[:point_up_2: Reaction-Roles;Let people pick their roles from a nice and easy menu
**${getModuleCount('reactionRoles')} Commands**;true]
        $addField[:hugging: Roleplay;Give people hugs, kisses, cuddles and way more
**${getModuleCount('roleplay')} Commands**;true]
        $addField[:mag_right: Search;Find anything and everything on the internet
**${getModuleCount('search')} Commands**;true]
        $addField[:wrench: Settings;Configure some of my settings for your server
**${getModuleCount('settings')} Commands** ;true]
        $addField[:flashlight: Utility;Useful left over commands that don't fit elsewhere
**${getModuleCount('utility')} Commands**;true]
        $addField[Extra links and information:;[[Invite akira\\](https://discord.com/api/oauth2/authorize?client_id=738057910923296839&permissions=8&scope=bot%20applications.commands)\\] | \[[Support Server\\](https://discord.com/invite/TUqZTutDUz)\\] | \[[Vote\\](https://akira.lynnux.xyz/vote)\\] | \[[Website\\](https://akira.lynnux.xyz)\\] | [Premium\\]]

        $addActionRow
        $addStringSelectMenu[helpMenu-$authorID;Which command category do you want to see?;false;1;1]
        $addOption[Automation;Automatically do things, like welcomeMessages etc.;Automation;🤖;false]
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
        $color[$getUserVar[color;$authorID]]
        $description[Express yourself with over \`50\` different gif commands that each track how often you've received and given them so you can see how many hugs you've given and gotten. Check \`akira counters\` to see your statistics.\n\n(Commands executed on yourself do not count towards the counters)]
        $addField[Wholesome:;\`akira [command\\] {users} (reason)\`\n\`\`\`Blush, Boop, Cheer, Cuddle, Dance, Feed, Glomp, Handhold, Happy, Highfive, Hug, Kiss, Laugh, Love, Nom, Nuzzle, Pat, Peck, Tease, Thumbsup, Tickle, Wag, Wave, Wink\`\`\`]
        $addField[Neutral:;\`akira [command\\] {users} (reason)\`\n\`\`\`Bonk, Bored, Chase, Dab, Facepalm, Lick, Lurk, Nervous, No, Panic, Poke, Pout, Run, Shrug, Sip, Sleep, Smug, Stare, Think, Yes\`\`\`]
        $addField[Negative:;\`akira [command\\] {users} (reason)\`\n\`\`\`Bite, Cringe, Cry, Die, Hate, Kill, Sad, Shoot, Slap, Stab, Triggered\`\`\`]
        $addField[Akira counters (user):;See how many times each roleplay action has happened to you and how often you've done them to others.]
        $addField[Akira blockCommand [roleplay command\\]:;Block a roleplay command so people can't use it on you, in case you want to reject everyone from slapping you.]
        $addField[Akira unblockCommand [roleplay command\\]:;Unblock a roleplay command so people can use it on you again, in case you once again accept slaps and bonks.]
        $addField[Akira block [@users\\]:;Block users so they can't spam you with roleplay commands and harass you. Useful if they keep trying to kiss you.]
        $addField[Akira unblock [@users\\]:;Unblock a user so they can use roleplay commands on you again. In case you forgive your stalkers.]
        $addField[Extra links and information:;[[Invite akira\\](https://discord.com/api/oauth2/authorize?client_id=738057910923296839&permissions=8&scope=bot%20applications.commands)\\] | \[[Support Server\\](https://discord.com/invite/TUqZTutDUz)\\] | \[[Vote\\](https://akira.lynnux.xyz/vote)\\] | \[[Website\\](https://akira.lynnux.xyz)\\] | [Premium\\]]
      ]
      $if[$checkContains[$message;-c;-chat]!=true;$sendDM[$authorID];]
    `
  },
  {
    type: 'interactionCreate',
    module: 'utility',
    version: '1.0.0',
    sourcecode: 'src/commands/help/help.ts',
    documentation: 'help',
    description: 'Get help using Akira.',
    usage: 'help {module/command}',
    example: 'Help',
    code: `
      $onlyIf[$checkContains[$customID;$authorID]]
      $onlyIf[$checkContains[$toLowerCase[$customID];back]]
      $interactionUpdate[
        
        $color[$getUserVar[color;$authorID]]
		$author[Akira's Features;$userAvatar[$botID]]
		$description[**To check out a section or command use** \`akira help \[section / command\\]\` \n**If you want this command to show up in chat instead of dms add -c at the end of the command.** \n\{Ex. \`Akira help -c\` or \`Akira help moderation -c\`\} \n \nFor arguments in commands#COLON# \n\`<>\` means it's required. \n\`{\}\` means it's optional. \n\`[\\]\` means it's either required or not based on the usage. \n**Do not actually include the <>, {\} & [\\] symbols in the command.**]
        $addField[:robot: Automation;Automatically do things, like welcomeMessages and autoRoles
**${getModuleCount('automation')} Commands**;true]
        $addField[:hammer: Automod;Automatically punish users for swearing or posting server invites
**${getModuleCount('automod')} Commands**;true]
        $addField[:dollar: Economy;Get an economy rolling in your server work, shop, and way more
**${getModuleCount('economy')} Commands**;true]
        $addField[:up: Leveling;Reward members for talking with xp and even give roles at milestones
**${getModuleCount('leveling')} Commands**;true]
        $addField[:shield: Moderation;Keep your server safe with advanced moderation commands
**${getModuleCount('moderation')} Commands**;true]
        $addField[:black_joker: Fun;Play fun little games
**${getModuleCount('fun')} Commands**;true]
        $addField[:star: Premium;Gives you all the premium commands
**${getModuleCount('premium')} Commands**;true]
        $addField[:frame_photo: Profile;See and manage your akira profile
**${getModuleCount('profile')} Commands**;true]
        $addField[:point_up_2: Reaction-Roles;Let people pick their roles from a nice and easy menu
**${getModuleCount('reactionRoles')} Commands**;true]
        $addField[:hugging: Roleplay;Give people hugs, kisses, cuddles and way more
**${getModuleCount('roleplay')} Commands**;true]
        $addField[:mag_right: Search;Find anything and everything on the internet
**${getModuleCount('search')} Commands**;true]
        $addField[:wrench: Settings;Configure some of my settings for your server
**${getModuleCount('settings')} Commands** ;true]
        $addField[:flashlight: Utility;Useful left over commands that don't fit elsewhere
**${getModuleCount('utility')} Commands**;true]
        $addField[Extra links and information:;[[Invite akira\\](https://discord.com/api/oauth2/authorize?client_id=738057910923296839&permissions=8&scope=bot%20applications.commands)\\] | \[[Support Server\\](https://discord.com/invite/TUqZTutDUz)\\] | \[[Vote\\](https://akira.lynnux.xyz/vote)\\] | \[[Website\\](https://akira.lynnux.xyz)\\] | [Premium\\]]
        $addActionRow
        $addStringSelectMenu[helpMenu-$authorID;Which command category do you want to see?;false;1;1]
        $addOption[Automation;Automatically do things, like welcomeMessages etc.;Automation;🤖;false]
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
    `
  },
  {
    type: 'interactionCreate',
    module: 'utility',
    version: '1.0.0',
    sourcecode: 'src/commands/help/help.ts',
    documentation: 'help',
    description: 'Get help using Akira.',
    usage: 'help {module/command}',
    example: 'Help',
    code: `
      $onlyIf[$toLowerCase[$selectMenuValues]==automation]
      $onlyIf[$checkContains[$customID;$authorID]]
      $interactionUpdate[
        $color[$getUserVar[color;$authorID]]
        $author[Akira's Features;$userAvatar[$botID]]
        $description[**To check out a section or command use** \`akira help \[section / command\\]\` \n**If you want this command to show up in chat instead of dms add -c at the end of the command.** \n\{Ex. \`Akira help -c\` or \`Akira help moderation -c\`\} \n \nFor arguments in commands#COLON# \n\`<>\` means it's required. \n\`{\}\` means it's optional. \n\`[\\]\` means it's either required or not based on the usage. \n**Do not actually include the <>, {\} & [\\] symbols in the command.**]
        $footer[Use "akira command <command>" for more info]
        $addField[Extra links and information:;[[Invite akira\\](https://discord.com/api/oauth2/authorize?client_id=738057910923296839&permissions=8&scope=bot%20applications.commands)\\] | \[[Support Server\\](https://discord.com/invite/TUqZTutDUz)\\] | \[[Vote\\](https://akira.lynnux.xyz/vote)\\] | \[[Website\\](https://akira.lynnux.xyz)\\] | [Premium\\]]

        $addActionRow
        $addButton[close-$authorID;Close;Danger]
        $addButton[Back-$authorID;Back;Secondary]
      ]
    `
  },
  {
    type: 'interactionCreate',
    module: 'utility',
    version: '1.0.0',
    sourcecode: 'src/commands/help/help.ts',
    documentation: 'help',
    description: 'Get help using Akira.',
    usage: 'help {module/command}',
    example: 'Help',
    code: `
      $onlyIf[$toLowerCase[$selectMenuValues]==automod]
      $onlyIf[$checkContains[$customID;$authorID]]
      $interactionUpdate[
        
        $color[$getUserVar[color;$authorID]]
        $author[Akira's Features;$userAvatar[$botID]]
        $description[**To check out a section or command use** \`akira help \[section / command\\]\` \n**If you want this command to show up in chat instead of dms add -c at the end of the command.** \n\{Ex. \`Akira help -c\` or \`Akira help moderation -c\`\} \n \nFor arguments in commands#COLON# \n\`<>\` means it's required. \n\`{\}\` means it's optional. \n\`[\\]\` means it's either required or not based on the usage. \n**Do not actually include the <>, {\} & [\\] symbols in the command.**]
        $footer[Use "akira command <command>" for more info]
        $addField[Extra links and information:;[[Invite akira\\](https://discord.com/api/oauth2/authorize?client_id=738057910923296839&permissions=8&scope=bot%20applications.commands)\\] | \[[Support Server\\](https://discord.com/invite/TUqZTutDUz)\\] | \[[Vote\\](https://akira.lynnux.xyz/vote)\\] | \[[Website\\](https://akira.lynnux.xyz)\\] | [Premium\\]]

        $addActionRow
        $addButton[close-$authorID;Close;Danger]
        $addButton[Back-$authorID;Back;Secondary]
      ]
    `
  },
  {
    type: 'interactionCreate',
    module: 'utility',
    version: '1.0.0',
    sourcecode: 'src/commands/help/help.ts',
    documentation: 'help',
    description: 'Get help using Akira.',
    usage: 'help {module/command}',
    example: 'Help',
    code: `
      $onlyIf[$toLowerCase[$selectMenuValues]==economy]
      $onlyIf[$checkContains[$customID;$authorID]]
      $interactionUpdate[
        
        $color[$getUserVar[color;$authorID]]
        $author[Akira's Features;$userAvatar[$botID]]
        $description[**To check out a section or command use** \`akira help \[section / command\\]\` \n**If you want this command to show up in chat instead of dms add -c at the end of the command.** \n\{Ex. \`Akira help -c\` or \`Akira help moderation -c\`\} \n \nFor arguments in commands#COLON# \n\`<>\` means it's required. \n\`{\}\` means it's optional. \n\`[\\]\` means it's either required or not based on the usage. \n**Do not actually include the <>, {\} & [\\] symbols in the command.**]
        $footer[Use "akira command <command>" for more info]
        $addField[Extra links and information:;[[Invite akira\\](https://discord.com/api/oauth2/authorize?client_id=738057910923296839&permissions=8&scope=bot%20applications.commands)\\] | \[[Support Server\\](https://discord.com/invite/TUqZTutDUz)\\] | \[[Vote\\](https://akira.lynnux.xyz/vote)\\] | \[[Website\\](https://akira.lynnux.xyz)\\] | [Premium\\]]
        $addActionRow
        $addButton[close-$authorID;Close;Danger]
        $addButton[Back-$authorID;Back;Secondary]
      ]
    `
  },
  {
    type: 'interactionCreate',
    module: 'utility',
    version: '1.0.0',
    sourcecode: 'src/commands/help/help.ts',
    documentation: 'help',
    description: 'Get help using Akira.',
    usage: 'help {module/command}',
    example: 'Help',
    code: `
      $onlyIf[$toLowerCase[$selectMenuValues]==leveling]
      $onlyIf[$checkContains[$customID;$authorID]]
      $interactionUpdate[
        
        $color[$getUserVar[color;$authorID]]
        $author[Akira's Features;$userAvatar[$botID]]
        $description[**To check out a section or command use** \`akira help \[section / command\\]\` \n**If you want this command to show up in chat instead of dms add -c at the end of the command.** \n\{Ex. \`Akira help -c\` or \`Akira help moderation -c\`\} \n \nFor arguments in commands#COLON# \n\`<>\` means it's required. \n\`{\}\` means it's optional. \n\`[\\]\` means it's either required or not based on the usage. \n**Do not actually include the <>, {\} & [\\] symbols in the command.**]
        $footer[Use "akira command <command>" for more info]
        $addField[Extra links and information:;[[Invite akira\\](https://discord.com/api/oauth2/authorize?client_id=738057910923296839&permissions=8&scope=bot%20applications.commands)\\] | \[[Support Server\\](https://discord.com/invite/TUqZTutDUz)\\] | \[[Vote\\](https://akira.lynnux.xyz/vote)\\] | \[[Website\\](https://akira.lynnux.xyz)\\] | [Premium\\]]
        $addActionRow
        $addButton[close-$authorID;Close;Danger]
        $addButton[Back-$authorID;Back;Secondary]
      ]
    `
  },
  {
    type: 'interactionCreate',
    module: 'utility',
    version: '1.0.0',
    sourcecode: 'src/commands/help/help.ts',
    documentation: 'help',
    description: 'Get help using Akira.',
    usage: 'help {module/command}',
    example: 'Help',
    code: `
      $onlyIf[$toLowerCase[$selectMenuValues]==moderation]
      $onlyIf[$checkContains[$customID;$authorID]]
      $interactionUpdate[
        
        $color[$getUserVar[color;$authorID]]
        $author[Akira's Features;$userAvatar[$botID]]
        $description[**To check out a section or command use** \`akira help \[section / command\\]\` \n**If you want this command to show up in chat instead of dms add -c at the end of the command.** \n\{Ex. \`Akira help -c\` or \`Akira help moderation -c\`\} \n \nFor arguments in commands#COLON# \n\`<>\` means it's required. \n\`{\}\` means it's optional. \n\`[\\]\` means it's either required or not based on the usage. \n**Do not actually include the <>, {\} & [\\] symbols in the command.**]
        $footer[Use "akira command <command>" for more info]
        $addField[Extra links and information:;[[Invite akira\\](https://discord.com/api/oauth2/authorize?client_id=738057910923296839&permissions=8&scope=bot%20applications.commands)\\] | \[[Support Server\\](https://discord.com/invite/TUqZTutDUz)\\] | \[[Vote\\](https://akira.lynnux.xyz/vote)\\] | \[[Website\\](https://akira.lynnux.xyz)\\] | [Premium\\]]
        $addActionRow
        $addButton[close-$authorID;Close;Danger]
        $addButton[Back-$authorID;Back;Secondary]
      ]
    `
  },
  {
    type: 'interactionCreate',
    module: 'utility',
    version: '1.0.0',
    sourcecode: 'src/commands/help/help.ts',
    documentation: 'help',
    description: 'Get help using Akira.',
    usage: 'help {module/command}',
    example: 'Help',
    code: `
      $onlyIf[$toLowerCase[$selectMenuValues]==fun]
      $onlyIf[$checkContains[$customID;$authorID]]
      $interactionUpdate[
        
        $color[$getUserVar[color;$authorID]]
        $author[Akira's Features;$userAvatar[$botID]]
        $description[**To check out a section or command use** \`akira help \[section / command\\]\` \n**If you want this command to show up in chat instead of dms add -c at the end of the command.** \n\{Ex. \`Akira help -c\` or \`Akira help moderation -c\`\} \n \nFor arguments in commands#COLON# \n\`<>\` means it's required. \n\`{\}\` means it's optional. \n\`[\\]\` means it's either required or not based on the usage. \n**Do not actually include the <>, {\} & [\\] symbols in the command.**]
        $footer[Use "akira command <command>" for more info]
        $addField[Extra links and information:;[[Invite akira\\](https://discord.com/api/oauth2/authorize?client_id=738057910923296839&permissions=8&scope=bot%20applications.commands)\\] | \[[Support Server\\](https://discord.com/invite/TUqZTutDUz)\\] | \[[Vote\\](https://akira.lynnux.xyz/vote)\\] | \[[Website\\](https://akira.lynnux.xyz)\\] | [Premium\\]]
        $addActionRow
        $addButton[close-$authorID;Close;Danger]
        $addButton[Back-$authorID;Back;Secondary]
      ]
    `
  },
  {
    type: 'interactionCreate',
    module: 'utility',
    version: '1.0.0',
    sourcecode: 'src/commands/help/help.ts',
    documentation: 'help',
    description: 'Get help using Akira.',
    usage: 'help {module/command}',
    example: 'Help',
    code: `
      $onlyIf[$toLowerCase[$selectMenuValues]==premium]
      $onlyIf[$checkContains[$customID;$authorID]]
      $interactionUpdate[
        
        $color[$getUserVar[color;$authorID]]
        $author[Akira's Features;$userAvatar[$botID]]
        $description[**To check out a section or command use** \`akira help \[section / command\\]\` \n**If you want this command to show up in chat instead of dms add -c at the end of the command.** \n\{Ex. \`Akira help -c\` or \`Akira help moderation -c\`\} \n \nFor arguments in commands#COLON# \n\`<>\` means it's required. \n\`{\}\` means it's optional. \n\`[\\]\` means it's either required or not based on the usage. \n**Do not actually include the <>, {\} & [\\] symbols in the command.**]
        $footer[Use "akira command <command>" for more info]
        $addField[Extra links and information:;[[Invite akira\\](https://discord.com/api/oauth2/authorize?client_id=738057910923296839&permissions=8&scope=bot%20applications.commands)\\] | \[[Support Server\\](https://discord.com/invite/TUqZTutDUz)\\] | \[[Vote\\](https://akira.lynnux.xyz/vote)\\] | \[[Website\\](https://akira.lynnux.xyz)\\] | [Premium\\]]
        $addActionRow
        $addButton[close-$authorID;Close;Danger]
        $addButton[Back-$authorID;Back;Secondary]
      ]
    `
  },
  {
    type: 'interactionCreate',
    module: 'utility',
    version: '1.0.0',
    sourcecode: 'src/commands/help/help.ts',
    documentation: 'help',
    description: 'Get help using Akira.',
    usage: 'help {module/command}',
    example: 'Help',
    code: `
      $onlyIf[$toLowerCase[$selectMenuValues]==profile]
      $onlyIf[$checkContains[$customID;$authorID]]
      $interactionUpdate[
        
        $color[$getUserVar[color;$authorID]]
        $author[Akira's Features;$userAvatar[$botID]]
        $description[**To check out a section or command use** \`akira help \[section / command\\]\` \n**If you want this command to show up in chat instead of dms add -c at the end of the command.** \n\{Ex. \`Akira help -c\` or \`Akira help moderation -c\`\} \n \nFor arguments in commands#COLON# \n\`<>\` means it's required. \n\`{\}\` means it's optional. \n\`[\\]\` means it's either required or not based on the usage. \n**Do not actually include the <>, {\} & [\\] symbols in the command.**]
        $footer[Use "akira command <command>" for more info]
        $addField[Extra links and information:;[[Invite akira\\](https://discord.com/api/oauth2/authorize?client_id=738057910923296839&permissions=8&scope=bot%20applications.commands)\\] | \[[Support Server\\](https://discord.com/invite/TUqZTutDUz)\\] | \[[Vote\\](https://akira.lynnux.xyz/vote)\\] | \[[Website\\](https://akira.lynnux.xyz)\\] | [Premium\\]]
        $addActionRow
        $addButton[close-$authorID;Close;Danger]
        $addButton[Back-$authorID;Back;Secondary]
      ]
    `
  },
  {
    type: 'interactionCreate',
    module: 'utility',
    version: '1.0.0',
    sourcecode: 'src/commands/help/help.ts',
    documentation: 'help',
    description: 'Get help using Akira.',
    usage: 'help {module/command}',
    example: 'Help',
    code: `
      $onlyIf[$toLowerCase[$selectMenuValues]==reaction-roles]
      $onlyIf[$checkContains[$customID;$authorID]]
      $interactionUpdate[
        
        $color[$getUserVar[color;$authorID]]
        $author[Akira's Features;$userAvatar[$botID]]
        $description[**To check out a section or command use** \`akira help \[section / command\\]\` \n**If you want this command to show up in chat instead of dms add -c at the end of the command.** \n\{Ex. \`Akira help -c\` or \`Akira help moderation -c\`\} \n \nFor arguments in commands#COLON# \n\`<>\` means it's required. \n\`{\}\` means it's optional. \n\`[\\]\` means it's either required or not based on the usage. \n**Do not actually include the <>, {\} & [\\] symbols in the command.**]
        $footer[Use "akira command <command>" for more info]
        $addField[Extra links and information:;[[Invite akira\\](https://discord.com/api/oauth2/authorize?client_id=738057910923296839&permissions=8&scope=bot%20applications.commands)\\] | \[[Support Server\\](https://discord.com/invite/TUqZTutDUz)\\] | \[[Vote\\](https://akira.lynnux.xyz/vote)\\] | \[[Website\\](https://akira.lynnux.xyz)\\] | [Premium\\]]
        $addActionRow
        $addButton[close-$authorID;Close;Danger]
        $addButton[Back-$authorID;Back;Secondary]
      ]
    `
  },
  {
    type: 'interactionCreate',
    module: 'utility',
    version: '1.0.0',
    sourcecode: 'src/commands/help/help.ts',
    documentation: 'help',
    description: 'Get help using Akira.',
    usage: 'help {module/command}',
    example: 'Help',
    code: `
      $onlyIf[$toLowerCase[$selectMenuValues]==roleplay]
      $onlyIf[$checkContains[$customID;$authorID]]
      $interactionUpdate[
        
        $color[$getUserVar[color;$authorID]]
        $author[Akira's Features;$userAvatar[$botID]]
        $description[**To check out a section or command use** \`akira help \[section / command\\]\` \n**If you want this command to show up in chat instead of dms add -c at the end of the command.** \n\{Ex. \`Akira help -c\` or \`Akira help moderation -c\`\} \n \nFor arguments in commands#COLON# \n\`<>\` means it's required. \n\`{\}\` means it's optional. \n\`[\\]\` means it's either required or not based on the usage. \n**Do not actually include the <>, {\} & [\\] symbols in the command.**]
        $footer[Use "akira command <command>" for more info]
        $addField[** **;Express yourself with over \`50\` different gif commands that each track how often you've received and given them so you can see how many hugs you've given and gotten. Check \`akira counters\` to see your statistics.\n\n(Commands executed on yourself do not count towards the counters);false]
        $addField[Wholesome:;\`akira [command\\] {users} (reason)\`\n\`\`\`Blush, Boop, Cheer, Cuddle, Dance, Feed, Glomp, Handhold, Happy, Highfive, Hug, Kiss, Laugh, Love, Nom, Nuzzle, Pat, Peck, Tease, Thumbsup, Tickle, Wag, Wave, Wink\`\`\`]
        $addField[Neutral:;\`akira [command\\] {users} (reason)\`\n\`\`\`Bonk, Bored, Chase, Dab, Facepalm, Lick, Lurk, Nervous, No, Panic, Poke, Pout, Run, Shrug, Sip, Sleep, Smug, Stare, Think, Yes\`\`\`]
        $addField[Negative:;\`akira [command\\] {users} (reason)\`\n\`\`\`Bite, Cringe, Cry, Die, Hate, Kill, Sad, Shoot, Slap, Stab, Triggered\`\`\`]
        $addField[Akira counters (user):;See how many times each roleplay action has happened to you and how often you've done them to others.]
        $addField[Akira blockCommand [roleplay command\\]:;Block a roleplay command so people can't use it on you, in case you want to reject everyone from slapping you.]
        $addField[Akira unblockCommand [roleplay command\\]:;Unblock a roleplay command so people can use it on you again, in case you once again accept slaps and bonks.]
        $addField[Akira block [@users\\]:;Block users so they can't spam you with roleplay commands and harass you. Useful if they keep trying to kiss you.]
        $addField[Akira unblock [@users\\]:;Unblock a user so they can use roleplay commands on you again. In case you forgive your stalkers.]
        $addField[Extra links and information:;[[Invite akira\\](https://discord.com/api/oauth2/authorize?client_id=738057910923296839&permissions=8&scope=bot%20applications.commands)\\] | \[[Support Server\\](https://discord.com/invite/TUqZTutDUz)\\] | \[[Vote\\](https://akira.lynnux.xyz/vote)\\] | \[[Website\\](https://akira.lynnux.xyz)\\] | [Premium\\]]
        $addActionRow
        $addButton[close-$authorID;Close;Danger]
        $addButton[Back-$authorID;Back;Secondary]
      ]
    `
  },
  {
    type: 'interactionCreate',
    module: 'utility',
    version: '1.0.0',
    sourcecode: 'src/commands/help/help.ts',
    documentation: 'help',
    description: 'Get help using Akira.',
    usage: 'help {module/command}',
    example: 'Help',
    code: `
      $onlyIf[$toLowerCase[$selectMenuValues]==search]
      $onlyIf[$checkContains[$customID;$authorID]]
      $interactionUpdate[
        
        $color[$getUserVar[color;$authorID]]
        $author[Akira's Features;$userAvatar[$botID]]
        $description[**To check out a section or command use** \`akira help \[section / command\\]\` \n**If you want this command to show up in chat instead of dms add -c at the end of the command.** \n\{Ex. \`Akira help -c\` or \`Akira help moderation -c\`\} \n \nFor arguments in commands#COLON# \n\`<>\` means it's required. \n\`{\}\` means it's optional. \n\`[\\]\` means it's either required or not based on the usage. \n**Do not actually include the <>, {\} & [\\] symbols in the command.**]
        $footer[Use "akira command <command>" for more info]
        $addField[Extra links and information:;[[Invite akira\\](https://discord.com/api/oauth2/authorize?client_id=738057910923296839&permissions=8&scope=bot%20applications.commands)\\] | \[[Support Server\\](https://discord.com/invite/TUqZTutDUz)\\] | \[[Vote\\](https://akira.lynnux.xyz/vote)\\] | \[[Website\\](https://akira.lynnux.xyz)\\] | [Premium\\]]
        $addActionRow
        $addButton[close-$authorID;Close;Danger]
        $addButton[Back-$authorID;Back;Secondary]
      ]
    `
  },
  {
    type: 'interactionCreate',
    module: 'utility',
    version: '1.0.0',
    sourcecode: 'src/commands/help/help.ts',
    documentation: 'help',
    description: 'Get help using Akira.',
    usage: 'help {module/command}',
    example: 'Help',
    code: `
      $onlyIf[$toLowerCase[$selectMenuValues]==settings]
      $onlyIf[$checkContains[$customID;$authorID]]
      $interactionUpdate[
        
        $color[$getUserVar[color;$authorID]]
        $author[Akira's Features;$userAvatar[$botID]]
        $description[**To check out a section or command use** \`akira help \[section / command\\]\` \n**If you want this command to show up in chat instead of dms add -c at the end of the command.** \n\{Ex. \`Akira help -c\` or \`Akira help moderation -c\`\} \n \nFor arguments in commands#COLON# \n\`<>\` means it's required. \n\`{\}\` means it's optional. \n\`[\\]\` means it's either required or not based on the usage. \n**Do not actually include the <>, {\} & [\\] symbols in the command.**]
        $footer[Use "akira command <command>" for more info]
        $addField[Extra links and information:;[[Invite akira\\](https://discord.com/api/oauth2/authorize?client_id=738057910923296839&permissions=8&scope=bot%20applications.commands)\\] | \[[Support Server\\](https://discord.com/invite/TUqZTutDUz)\\] | \[[Vote\\](https://akira.lynnux.xyz/vote)\\] | \[[Website\\](https://akira.lynnux.xyz)\\] | [Premium\\]]
        $addActionRow
        $addButton[close-$authorID;Close;Danger]
        $addButton[Back-$authorID;Back;Secondary]
      ]
    `
  },
  {
    type: 'interactionCreate',
    module: 'utility',
    version: '1.0.0',
    sourcecode: 'src/commands/help/help.ts',
    documentation: 'help',
    description: 'Get help using Akira.',
    usage: 'help {module/command}',
    example: 'Help',
    code: `
      $onlyIf[$toLowerCase[$selectMenuValues]==utility]
      $onlyIf[$checkContains[$customID;$authorID]]
      $interactionUpdate[
        
        $color[$getUserVar[color;$authorID]]
        $author[Akira's Features;$userAvatar[$botID]]
        $description[**To check out a section or command use** \`akira help \[section / command\\]\` \n**If you want this command to show up in chat instead of dms add -c at the end of the command.** \n\{Ex. \`Akira help -c\` or \`Akira help moderation -c\`\} \n \nFor arguments in commands#COLON# \n\`<>\` means it's required. \n\`{\}\` means it's optional. \n\`[\\]\` means it's either required or not based on the usage. \n**Do not actually include the <>, {\} & [\\] symbols in the command.**]
        $footer[Use "akira command <command>" for more info]
        $addField[Extra links and information:;[[Invite akira\\](https://discord.com/api/oauth2/authorize?client_id=738057910923296839&permissions=8&scope=bot%20applications.commands)\\] | \[[Support Server\\](https://discord.com/invite/TUqZTutDUz)\\] | \[[Vote\\](https://akira.lynnux.xyz/vote)\\] | \[[Website\\](https://akira.lynnux.xyz)\\] | [Premium\\]]
        $addActionRow
        $addButton[close-$authorID;Close;Danger]
        $addButton[Back-$authorID;Back;Secondary]
      ]
    `
  }
];

export default commands;
