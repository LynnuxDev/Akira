import { Event } from '../../../types';

const OnReady: Event[] = [
  {
    name: 'onEveryDay',
    type: 'ready',
    description: 'This command runs every first of the month.',
    module: 'clientSpecific',
    version: '1.0.0',
    code: `
      $setInterval[
        $if[$day[Short]==Mon;
          $setGlobalVar[weekMessageUses;0]
          $setGlobalVar[weekSlashUses;0]
          $setGlobalVar[weekButtonUses;0]
          $setGlobalVar[weekErrors;0]
        ]
      ;1h]
    `
  }
];

export default OnReady;
