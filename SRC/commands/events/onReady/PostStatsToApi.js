module.exports = {
    name: "PostStatsToApi",
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
        $httpAddHeader[content-type;application/json]
        $httpSetBody[{"members": "$userCount","servers": "$guildCount","commands": $commandCount,"uptime": "$parseDate[$round[$sub[$getTimestamp;$uptime]];Date]"}]
        $httpRequest[https://api.lynnux.xyz/stats;POST]
        $log[\\[$get[month]/$get[day]/$get[year] $get[hour]:$if[$if[$minute==0;00;$minute]<=9;0$minute;$minute]:$if[$second<=9;0$second;$second] $get[AMPM]\\] \\[INFO\\] Akira       | Stats successfully send to https://api.lynnux.xyz/stats !]
        $wait[1h]
    ]
    `
}