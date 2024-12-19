import { Command } from '@/types';

const commands: Command[] = [
  {
    name: 'report',
    aliases: ['ifoundabug', 'ibrokesomething'],
    type: 'messageCreate',
    description: 'Report issues related to akira.',
    module: 'utility',
    sourcecode: 'src/commands/utility/report.ts',
    documentation: 'report',
    usage: 'report',
    example: 'report',
    version: '1.0.0',
    code: `
      $if[$authorID==705306248538488947;Ping: \`$pingMS\` | Uptime: <t:$round[$math[$math[$getTimestamp-$uptime]/1000];0]:R>;]
    `
  }
];

export default commands;
