import { Event } from '../../../types';

const OnReady: Event[] = [
  {
    name: 'onEveryFirstOfMonth',
    type: 'ready',
    description: 'This command runs every first of the month.',
    module: 'Client',
    version: '1.0.0',
    code: `
      $loop[-1;
        $c[runs every day at Hour starting on startup]
        $httpSetBody[{"members": $userCount, "servers": $guildCount, "commands": $commandCount, "uptime": $uptime}]
        $httpSetContentType[application/json]
        $let[status;$httpRequest[https://api.lynnux.xyz/akira/stats;POST]]
        $if[$get[status]==200;$logger[Info;stats posted];$logger[Error;stats not posted $get[status]]]
        $wait[1h]
      ]
    `
  }
];

export default OnReady;
