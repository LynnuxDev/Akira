import { Event } from '../../../types';

const OnReady: Event[] = [
  {
    name: 'onEveryHour',
    type: 'ready',
    description: 'This command runs every hour on startup.',
    module: 'clientSpecific',
    version: '1.0.0',
    code: `
      $setInterval[
        $httpSetBody[{"members": $userCount, "servers": $guildCount, "commands": $commandCount, "uptime": "$uptime"}]
        $httpAddHeader[Content-Type;application/json]
        $let[status;$httpRequest[https://api.lynnux.xyz/akira/stats;POST]]
        $if[$get[status]==200;$logger[Info;stats posted to api.lynnux.xyz.];$logger[Error;Stats failed to post got "$get[status]".]]
        $logger[Debug;Akira | Hourly Loop ran.]
      ;1h]
    `
  }
];

export default OnReady;