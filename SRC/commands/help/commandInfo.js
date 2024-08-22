module.exports = [{
    name: "commandinfo",
    subName: "ping",
    aliases: ['command-info','command','cmd'],
    type: "messageCreate",
    module: "Help",
    sourcecode: "https://github.com/LynnuxDev/Akira/blob/main/SRC/commands/help/commandinfo.js",
    documentation: "https://documentation.lynnux.xyz/commands/utility/commandinfo",
	version: "1.0",
    usage: "commandinfo {command}",
	description: "See information about a command.",
	example: "commandinfo about",
    code: `
        $onlyIf[$getUserVar[AgreedToTos;$authorID]==true;$ephemeral $color[$getUserVar[color;$authorID]] $title[Before we continue:] $footer[You have to agree with these terms before using akira.] $description[Before you proceed, please make sure to read and agree to our [Terms of Service\\](https://akira.lynnux.xyz/terms) and [Privacy Policy\\](https://akira.lynnux.xyz/policy).\n\nBy using the button below, you confirm that you have read and agree to abide by our terms and policies.\n\nIf you have any questions or concerns, feel free to contact our support team.] $addActionRow $addButton[AcceptTerms-$authorID;I have read and agree to abide by these terms and policies.;Success;;false]]
        $onlyIf[$message==]
        $onlyIf[$channelID==$getGuildVar[BotChannel;$guildID;$channelID];$getGlobalVar[BotChannelError]]
        $if[$authorID==705306248538488947;Ping: \`$pingMS\` | Uptime: <t:$round[$math[$math[$getTimestamp-$uptime]/1000];0]:R>;]

        $color[$getUserVar[color;$authorID]]
        $title[Commandinfo:]
        $description[This command is used to see information about a command.\n\n\nExample of what this will return:\n\`\`\`\nAliases: [List of alternative commands.\\]\nDescription: Command Description.\nUsage: A example of how to use the command.\nVersion: Version of the command.\n\nExample:\nHere you will see a examples.\n\`\`\`]
    `},{
    name: "commandinfo",
    subName: "ping",
    aliases: ['command-info','command','cmd'],
    type: "messageCreate",
    module: "Help",
    sourcecode: "https://github.com/LynnuxDev/Akira/blob/main/SRC/commands/help/commandinfo.js",
    documentation: "https://documentation.lynnux.xyz/commands/utility/commandinfo",
    version: "1.0",
    usage: "commandinfo {command}",
    description: "See information about a command.",
    example: "commandinfo about",
    code: `
        $onlyIf[$getUserVar[AgreedToTos;$authorID]==true;]
        $onlyIf[$channelID==$getGuildVar[BotChannel;$guildID;$channelID];]

        $onlyIf[$message[0]!=;]
        $if[$commandInfo[messageCreate;$message[0];name]==;$sendMessage[$channelID;$color[DF2A4A]$description[❌ I could not find the command command \`$message[0]\`.]$title[$randomText[Something went wrong.;Oopsie-daisy;Gremlins at work!;404: Fun Not Found;An invisible ninja broke something.;Error 418: I'm a teapot ☕;The hamster fell off the wheel.;A wild error appeared!;Houston, we have a problem.]]] $stop]
        $title[Commandinfo: "$message[0]"]
        $color[$getUserVar[color;$authorID]]
        $description[**Command:** \`$commandInfo[messageCreate;$message[0];name]\`
**Aliases:** \`\`\`$commandInfo[$replace[messageCreate;\\[;;1];$message[0];aliases]\`\`\`
**Description:**  \`$commandInfo[messageCreate;$message[0];description]\`
**Usage:** \`$getGlobalVar[prefix]$commandInfo[messageCreate;$message[0];usage]\`
**Version:** \`$commandInfo[messageCreate;$message[0];version]\`
**Example:**
\`\`\`
$getUserVar[prefix;$authorID]$replace[$commandInfo[messageCreate;$message[0];example];{prefix};$getUserVar[prefix;$authorID]]
\`\`\`
**Module:** \`$commandInfo[messageCreate;$message[0];module]\`]
        $addActionRow
        $addButton[$commandInfo[messageCreate;$message[0];sourcecode];Source-Code;Link;🌐]
        $addButton[$commandInfo[messageCreate;$message[0];documentation];Documentation;Link;📖]
        $addActionRow
        $addButton[close-$authorID;Close;Danger]

`}]