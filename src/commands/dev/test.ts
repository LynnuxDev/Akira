import { Command } from '../../types';
import { fetchLanguageProgressSync } from '../../native/crowdingLanguageProcess';

try {
  const progress = fetchLanguageProgressSync('en');
  console.log('Language Progress:', progress);
} catch (err) {
  const progress = "0";
  console.error('Error fetching language progress:', err);
}

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
      ${process}
    `
  }
];

export default commands;