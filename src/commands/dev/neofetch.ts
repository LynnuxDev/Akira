import { getNeofetch } from '../../native/neofetch';
import { Command } from '../../types';

const commands: Command[] = [
  {
    name: 'neofetch',
    description: 'get a neofetch.',
    type: 'messageCreate',
    sourcecode: 'src/commands/dev/neofetch.ts',
    module: 'dev',
    version: 'v1.0.0',
    code: `
    $onlyIf[$checkContains[$botOwnerID[true;,];$authorID];]
\`\`\`yml
${getNeofetch()}
\`\`\`
`
  }
];

export default commands;