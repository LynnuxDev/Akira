import { Event } from '../../types';

const onReady: Event[] = [{
  name: 'onReady',
  type: 'ready',
  description: 'This command runs every time the bot becomes online.',
  module: 'clientSpecific',
  version: '1.0',
  code: `
    $logger[Info;$username[$clientID] | Running with "$commandCount" commands]
    $setGlobalVar[startCommands;0]
  `
}];

export default onReady;
