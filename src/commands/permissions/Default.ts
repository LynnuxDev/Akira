import { Command } from '@/types';

const commands: Command[] = [
  {
    name: 'default',
    aliases: ['default-channels'],
    type: 'messageCreate',
    description: 'Sets the mentioned command or command group to default permissions.',
    module: 'permissions',
    sourcecode: 'src/commnads/Permissions/Default.ts',
    documentation: 'default',
    usage: 'default <Command/Modules>',
    example: 'default Economy',
    version: '1.0.0',
    code: `
      
    `
  }
];

export default commands;
