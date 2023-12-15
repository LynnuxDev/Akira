module.exports = ({
    name: "update",
    aliases: ["reload", "updatecommands"],
    description: "reload all codes.",
    type: "messageCreate",
    usage: "update",
    module: "Developers-Only",
	version: "1.0",
    sourcecode: "https://github.com/LynnuxDev/Akira/blob/main/SRC/commands/dev/reload.js",
    documentation: "https://documentation.lynnux.xyz/commands/utility/dev/Not-Available",
    type: "messageCreate",
	example: "update",
    code: `
        $onlyForUsers[;705306248538488947;392609934744748032]

        $let[count;$commandCount]
        $updateCommands
        $let[add;$sub[$commandCount;$get[count]]]
 
        $color[ff47ff]
        $description[Successfully update all commands.]

        $addActionRow
        $addButton[1;Added: $get[add];Success;✔️]
        $addButton[2;Total: $commandCount;Secondary;📃]
`})