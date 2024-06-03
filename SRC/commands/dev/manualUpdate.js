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
        $replace[$httpRequest[https://api.lynnux.xyz/stats;POST];200;Stats successfully send to https://api.lynnux.xyz/guilds !]
        $logger[Info;Akira       | Stats successfully send to https://api.lynnux.xyz/guilds !] 

        $arrayCreate[guilds;0]
        $arrayLoad[ids;, ;$guildIDs]
        $scope[
            $arrayForEach[ids;id;
                $useGuildContext[$env[id]]
                $if[$getVar[ServerFeatured;$env[id]]==true;
                    $switch[$checkContains[$toLowercase[$serverName[$env[id]]];nigger;nsfw];
                        $case[false;
                            $jsonLoad[guild;{}]
                            $c[executing for $guildName]
                            $jsonSet[guild;members;$guildMemberCount]
                            $jsonSet[guild;id;"$guildID"]
                            $jsonSet[guild;name;$guildName]
                            $jsonSet[guild;icon;$if[$guildIcon==;https://cdn.lynnux.xyz/images/No-Server_Icon-found.png;$guildIcon]]
                            $arrayPushJSON[guilds;$env[guild]]
                        ]
                        $case[true;
                            $c[L id]
                        ]
                    ]
                ;
                    $c[Server has Site-Featured disabled]
                ]
            ]
        ]
        $logger[Info;Akira       | Guilds successfully send to https://api.lynnux.xyz/guilds !] 

    `}
)