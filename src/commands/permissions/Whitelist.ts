import { Command } from '@/types';

const commands: Command[] = [
  {
    name: 'whitelist',
    aliases: ['white-list'],
    type: 'messageCreate',
    description: 'Allow the mentioned member to use Akira in the server.',
    module: 'permissions',
    sourcecode: 'src/commnads/Permissions/Whitelist.ts',
    documentation: 'whitelist',
    usage: 'whitelist <member>',
    example: 'whitelist @dark-lynn',
    version: '1.0.0',
    code: `
      
    `
  }
];

export default commands;
