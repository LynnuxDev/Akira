import { Command } from '@/types';

const interactionCreate: Command[] = [
  {
    type: 'interactionCreate',
    description: 'Runs on every interaction.',
    module: 'clientSpecific',
    sourcecode: 'src/commands/Global-Interactions/triggers/onInteractionCreate.ts',
    documentation: 'onInteractionCreate',
    usage: 'N/A',
    example: 'N/A',
    version: '1.0.0',
    code: `
    $if[$isSlashCommand;
      $setGlobalVar[sessionSlashUses;$math[$getGlobalVar[sessionSlashUses]+1]]
      $setGlobalVar[monthSlashUses;$math[$getGlobalVar[monthSlashUses]+1]]
      $setGlobalVar[weekSlashUses;$math[$getGlobalVar[weekSlashUses]+1]]
      $setGlobalVar[daySlashUses;$math[$getGlobalVar[daySlashUses]+1]]
      $setGlobalVar[totalSlashUses;$math[$getGlobalVar[totalSlashUses]+1]]
      $if[$guildID!=;
        $setGuildVar[totalSlashUses;$math[$getGuildVar[totalSlashUses;$customEncrypt[encrypt;$guildID]]+1];$customEncrypt[encrypt;$guildID]]
      ]
    ]
    $if[$isButton;
      $setGlobalVar[totalButtonUses;$math[$getGlobalVar[totalButtonUses]+1]]
      $setGlobalVar[monthButtonUses;$math[$getGlobalVar[monthButtonUses]+1]]
      $setGlobalVar[weekButtonUses;$math[$getGlobalVar[weekButtonUses]+1]]
      $setGlobalVar[dayButtonUses;$math[$getGlobalVar[dayButtonUses]+1]]
      $setGlobalVar[sessionButtonUses;$math[$getGlobalVar[sessionButtonUses]+1]]
    ]
    `
  }
];

export default interactionCreate;
