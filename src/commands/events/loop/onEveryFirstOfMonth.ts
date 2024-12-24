import { Event } from '../../../types';

const OnREady: Event[] = [
  {
    name: 'onEveryFirstOfMonth',
    type: 'ready',
    description: 'This command runs every first of the month.',
    module: 'Client',
    version: '1.0.0',
    code: `
      $c[
        $loop[-1;
          $if[$week$day==00;]
          $wait[1d]
        ]
      ]
    `
  }
];

export default OnREady;
