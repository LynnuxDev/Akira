import { Event } from '@/types';

const ShardEvent: Event[] = [
  {
    type: 'shardReady',
    description: 'Execute Once a shard is ready.',
    module: 'Client',
    version: '1.0.0',
    code: `
      $logger[Debug;Shard '$shardID' is now online.]
    `
  }
];

export default ShardEvent;
