import { Command } from '../../types';

const commands: Command[] = [
  {
    name: 'test',
    description: 'test file for devs.',
    type: 'messageCreate',
    sourcecode: 'src/commands/dev/test.ts',
    module: 'dev',
    version: 'v1.0.0',
    code: `
      $onlyIf[$checkContains[$botOwnerID[true;,];$authorID];]

      $httpAddHeader[Authorization;Bearer ${process.env.CROWDIN_API_TOKEN}]
      $httpRequest[https://api.crowdin.com/api/v2/projects/717569/languages/en/progress;GET;process]

      $logger[Info;$env[process;data;0;data;translationProgress]]
    `
  }
];

export default commands;