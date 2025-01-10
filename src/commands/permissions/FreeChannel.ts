import { Command } from '@/types';

const commands: Command[] = [
  {
    name: 'Freechannel',
    aliases: ['free-channel', 'free'],
    type: 'messageCreate',
    description: 'Removes the bot channel restriction from the server, if there is one in place.',
    module: 'permissions',
    sourcecode: 'src/commnads/Permissions/freeChannel.ts',
    documentation: 'freechannel',
    usage: 'freechannel',
    example: 'freechannel',
    version: '1.0.0',
    code: `
      
    `
  }
];

export default commands;
