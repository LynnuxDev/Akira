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
        $c[runs every day at 3AM]
        $if[$hour==03;

        ]
        $wait[1h]
      ]
    `
  }
];

export default OnReady;
