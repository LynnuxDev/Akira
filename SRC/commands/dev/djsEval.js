module.exports = ({
    name: "eval",
    aliases: ['djs'],
    description: "Allows the bot owner to execute any discord.js code",
    usage: "djseval <code>",
    module: "Developers-Only",
	version: "1.0",
    sourcecode: "https://github.com/LynnuxDev/Akira/blob/main/SRC/commands/dev/djseval.js",
    documentation: "https://documentation.lynnux.xyz/commands/utility/dev/Not-Available",
    type: "messageCreate",
    description: "Run a discord.js code.",
	example: "eval channel.send('uwu')",
    code: ` 
    $onlyForUsers[;705306248538488947;392609934744748032]
    $if[$authorID==705306248538488947;Ping: \`$pingMS\` | Uptime: <t:$round[$math[$math[$getTimestamp-$uptime]/1000];0]:R>;]                
    $let[text;$replace[$djsEval[const channel = ctx.message.channel \nconst message = ctx.message \nconst author = ctx.message.author \nconst client = ctx.message.client \nconst guild = ctx.message.guild \n$message];<ref *1> ;;1]]
    $if[$charCount[$get[text]]>1950;$attachment[$get[text];result.json;true];\`\`\`json\n$get[text]\n\`\`\`]
    `})