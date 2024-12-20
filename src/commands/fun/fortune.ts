import { Command } from '../../types';
const path = require('path');

const location = path.join(__dirname, '..', 'files', 'fun', 'fortune.json');

// TODO: swap fortune json to api.

const Commands: Command[] = [
  {
    name: 'fortune',
    module: 'fun',
    type: 'messageCreate',
    sourcecode: 'src/commands/fun/fortune.ts',
    documentation: 'fortune',
    description: 'get a random fortune',
    usage: 'fortune',
    version: 'V1.0.0',
    example: 'fortune',
    code: `
      $jsonLoad[json;$readFile[./files/fun/fortunes.json]]
      $jsonLoad[result;$env[json;fortunes]]
      $let[fortune;$arrayRandomValue[result]]
      $getColor
      $title[Your Fortune Cookie.]
      $footer[Brought to you by Akira.;$userAvatar[$clientID]]
      $description[$get[fortune]]
    `
  }
];

export default Commands;