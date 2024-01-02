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
        $onlyIf[$message==]
        $if[$authorID==705306248538488947;Ping: \`$pingMS\` | Uptime: <t:$round[$math[$math[$getTimestamp-$uptime]/1000];0]:R>;]        

        $color[$getVar[color;default]]
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
        $onlyIf[$message[0]!=]
        $if[$commandInfo[messageCreate;$message[0];name]==;$sendMessage[$channelID;$color[DF2A4A]$description[❌ I could not find the command command \`$message[0]\`.]$title[$randomText[Something went wrong.;Oopsie-daisy;Gremlins at work!;404: Fun Not Found;An invisible ninja broke something.;Error 418: I'm a teapot ☕;The hamster fell off the wheel.;A wild error appeared!;Houston, we have a problem.]]] $stop]
        $title[Commandinfo: "$message[0]"]
        $color[$getVar[color;default]]
        $description[**Command:** \`$commandInfo[messageCreate;$message[0];name]\`
**Aliases:** [\`$commandInfo[messageCreate;$message[0];aliases]\`\\] 
**Description:**  \`$commandInfo[messageCreate;$message[0];description]\`
**Usage:** \`$getVar[prefix;default]$commandInfo[messageCreate;$message[0];usage]\`
**Version:** \`$commandInfo[messageCreate;$message[0];version]\`
**Example:**
\`\`\`
$getVar[prefix;default]$replace[$commandInfo[messageCreate;$message[0];example];{prefix};$getVar[prefix;default]]
\`\`\`
**Module:** \`$commandInfo[messageCreate;$message[0];module]\`]
        $addActionRow
        $addButton[$commandInfo[messageCreate;$message[0];sourcecode];Source-Code;Link;🌐]
        $addButton[$commandInfo[messageCreate;$message[0];documentation];Documentation;Link;📖]
        $addActionRow
        $addButton[close-$authorID;Close;Danger]

`}]