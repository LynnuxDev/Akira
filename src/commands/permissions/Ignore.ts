import { Command } from '@/types';

const commands: Command[] = [
  {
    name: 'ignore',
    aliases: ['ignore-channel'],
    type: 'messageCreate',
    description: 'Prevents Akira from responding to commands in the mentioned channel. (defaults to current channel).',
    module: 'Permissions',
    sourcecode: 'src/commnads/Permissions/ignore.ts',
    documentation: 'ignore',
    usage: 'ignore {channel}',
    example: 'ignore #general',
    version: '1.0.0',
    code: `
      
    `
  }
];

export default commands;
