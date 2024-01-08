module.exports = {
    type: "error",
    code: `
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
        $let[AMPM;$if[$hour>=13;PM;AM]]
    $log[\\[$get[month]/$get[day]/$get[year] $get[hour]:$if[$if[$minute==0;00;$minute]<=9;0$minute;$minute]:$second $get[AMPM]\\] \\[INFO\\] ForgeTopGG  | $postStatsError!]
    
`}