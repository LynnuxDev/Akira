// @ts-nocheck

module.exports = ({
    name: "eval",
    aliases: ['djs'],
    description: "Allows the bot owner to execute any discord.js code",
    usage: "djseval <code>",
    code: ` 
    $onlyForUsers[;705306248538488947;392609934744748032]
    $if[$authorID==705306248538488947;Ping: \`$pingMS\` | Uptime: <t:$round[$math[$math[$getTimestamp-$uptime]/1000];0]:R>;]                
    $djsEval[$message]
`})
