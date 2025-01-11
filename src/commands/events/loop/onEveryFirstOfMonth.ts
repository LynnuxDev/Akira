import { Event } from '../../../types';

const OnREady: Event[] = [
  {
    name: 'onEveryFirstOfMonth',
    type: 'ready',
    description: 'This command runs every first of the month.',
    module: 'clientSpecific',
    version: '1.0.0',
    code: `
      $setInterval[
        $if[$day==1;
          $setGlobalVar[monthMessageUses;0]
          $setGlobalVar[monthSlashUses;0]
          $setGlobalVar[monthButtonUses;0]
          $setGlobalVar[monthErrors;0]
        ]
      ;1d]
    `
  }
];

export default OnREady;
