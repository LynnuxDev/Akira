import { Event } from '@/types';

const ShardEvent: Event[] = [
  {
    type: 'shardDisconnect',
    description: 'Execute Once a shard is ready.',
    module: 'Client',
    version: '1.0.0',
    code: `
      $logger[Debug;Shard '$shardID' is now offline.]
    `
  }
];

export default ShardEvent;
