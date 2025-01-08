import { Command } from '@/types';

const commands: Command[] = [
  {
    name: 'cpu',
    type: 'messageCreate',
    module: 'dev',
    description: 'cpu.',
    sourcecode: 'src/commands/dev/cpu.ts',
    version: 'v1.0.0',
    code: `
      $cpuUsage[true]
    `
  }
];

export default commands;
