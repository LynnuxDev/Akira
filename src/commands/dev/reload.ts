import { Command } from '@/types';

const commands: Command[] = [
  {
    name: 'update',
    aliases: ['reload', 'updatecommands'],
    type: 'messageCreate',
    description: 'Update all module commands',
    usage: 'update',
    module: 'dev',
    version: '1.0.0',
    sourcecode: 'https://github.com/LynnuxDev/Akira/blob/main/SRC/commands/dev/update.js',
    documentation: 'https://documentation.lynnux.xyz/commands/utility/dev/Not-Available',
    example: 'update',

    code: `
      $onlyForUsers[;705306248538488947;392609934744748032]

      $let[count;$commandCount]
      $updateCommands $updateApplicationCommands
      $let[add;$sub[$commandCount;$get[count]]]

      $color[ff47ff]
      $description[Successfully update all commands.]

      $addActionRow
      $addButton[1;Added: $get[add];Success;✔️;true]
      $addButton[2;Total: $commandCount;Secondary;📃;true]
    `
  }
];
export default commands;
