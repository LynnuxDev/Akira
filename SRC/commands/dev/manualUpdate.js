module.exports = ({
    name: "manual",
    aliases: ["manual-update", "manualupdate"],
    description: "send stats to api.lynnux,xyz.",
    type: "messageCreate",
    usage: "update",
    module: "Developers-Only",
	version: "1.0",
    sourcecode: "https://github.com/LynnuxDev/Akira/",
    documentation: "https://documentation.lynnux.xyz/",
    type: "messageCreate",
	example: "manual",
    code: `
        $onlyForUsers[;705306248538488947;392609934744748032]

        $httpAddHeader[content-type;application/json]
        $httpSetBody[{"members": "$userCount","servers": "$guildCount","commands": $commandCount,"uptime": "$parseDate[$round[$sub[$getTimestamp;$uptime]];Date]"}]
        $httpRequest[https://api.lynnux.xyz/stats;POST]

    `}
)