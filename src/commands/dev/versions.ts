import { Command } from "@/types";
import { getPackages } from '../../native/getPackageVersions';

const commands: Command[] = [
  {
    name: 'versions',
    aliases: ['package'],
    type: 'messageCreate',
    description: 'Check all package versions.',
    documentation: 'versions',
    sourcecode: 'src/commands/dev/versions.ts',
    example: 'version node',
    usage: 'version {package}',
    version: 'v1.0.0',
    module: 'dev',
    code: `
      $onlyIf[$checkContains[$botOwnerID[true;,];$authorID];]
      $let[packages;${getPackages()}]

      $footer[Total Packages Installed: "$djsEval[const { execSync } = require('child_process');try {const count = execSync('pnpm ls --parseable | wc -l', { encoding: 'utf8' }).trim();count;} catch (err) {console.error('Error:', err.message);}]"]
      $color[$getVar[color;default]]
      $if[$message!=;
        $if[$checkContains[$message[0];/];
          $textSplit[$toLowercase[$message[0]];/]
          $let[package;$try[$djsEval[const path = require('path');const fs = require('fs');const packagePath = path.join('node_modules', '$splitText[0]' ,'$splitText[1]', 'package.json');const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));packageJson.version];N/A]]
        ;
          $let[package;$try[$djsEval[const fs = require('fs');const path = require('path');const packageJson = JSON.parse(fs.readFileSync(path.join('node_modules', '$toLowerCase[$message[0]]', 'package.json'), 'utf8'));packageJson.version];N/A]]
        ]

        $author[Package Versions:;https://cdn.discordapp.com/emojis/1317543328685883404.webp]
        $addField[$message[0] Version:;\`\`\`yml\n$message[0]: $get[package]\`\`\`]
      ;
        $author[Package Versions:;https://cdn.discordapp.com/emojis/1317543328685883404.webp]
        $title[Package List:]
        $description[\`\`\`yml\n$get[packages]\`\`\`]
      ]

    `
  }
];

export default commands;

