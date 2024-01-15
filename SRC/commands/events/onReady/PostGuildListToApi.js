module.exports = {
    name: "PostGuildsToApi",
    type: "ready",
    code: `
    $c[------------------------------LET FOR LOG ------------------------------]

    $let[day;$djseval[const getFormattedDay = () => {
        const options = {
            day: 'numeric',
        };
    
        const formatter = new Intl.DateTimeFormat('en-US', options);
        const formattedDay = formatter.format(new Date());
    
        return formattedDay;
    };
    
    // Example usage
    const dayOfMonth = getFormattedDay();    
    dayOfMonth      
    ]]
    $let[month;$djseval[const getFormattedMonth = () => {
            const options = {
              month: 'numeric',
            };
          
            const formatter = new Intl.DateTimeFormat('en-US', options);
            const formattedMonth = formatter.format(new Date());
          
            return formattedMonth;
        };
        
        // Example usage
        const monthOfYear = getFormattedMonth();
        monthOfYear      
    ]]
    $let[year;$year]

    $let[hour;$if[$hour>=13;$math[$hour-12];$hour]]
    $let[AMPM;$if[$hour>=12;PM;AM]]


    $c[------------------------------Main------------------------------]

    $loop[-1;
        $arrayCreate[guilds;0]
        $arrayLoad[ids;, ;$guildIDs]
        $scope[
            $arrayForEach[ids;id;
                $useGuildContext[$env[id]]
                $if[$getVar[ServerFeatured;$env[id]]==true;
                    $switch[$checkContains[$env[id];841669300015333416;841669300015333416];
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
        $log[\\[$get[month]/$get[day]/$get[year] $get[hour]:$if[$if[$minute==0;00;$minute]<=9;0$minute;$minute]:$if[$second<=9;0$second;$second] $get[AMPM]\\] \\[INFO\\] Akira       | Guilds successfully send to https://api.lynnux.xyz/guilds !]
        $httpAddHeader[content-type;application/json]
        $httpSetBody[$env[guilds]]
        $httpRequest[https://api.lynnux.xyz/guilds;POST]
        $wait[1d]
    ]

    `
}