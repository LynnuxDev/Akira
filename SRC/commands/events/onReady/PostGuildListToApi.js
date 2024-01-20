module.exports = {
    name: "PostGuildsToApi",
    type: "ready",
    code: `

    $c[------------------------------Main------------------------------]

    $loop[-1;
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
        $httpAddHeader[content-type;application/json]
        $httpSetBody[$env[guilds]]
        $httpRequest[https://api.lynnux.xyz/guilds;POST]
        $wait[90m]
    ]

    `
}