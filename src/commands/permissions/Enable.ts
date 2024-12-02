import { Command } from '@/types'

const commands: Command[] = [
  {
    name: "enable",
    aliases: ["enable-command"],
    type: "messageCreate",
    description: "Enables the mentioned command or command group.",
    module: "Permissions",
    sourcecode: "src/commnads/Permissions/Enable.ts",
    documentation: "enable",
    usage: "enable <Command/Modules>",
    example: "enable Roleplay",
    version: "1.0.0",
    code: `
      $onlyIf[$authorID==705306248538488947;]
      $if[$checkContains[$getGuildVar[perms~$channelID;$guildID];- enable]!=true;
        $if[$checkContains[$getGuildVar[perms~$authorID;$guildID];- enable]!=true;
        
        ;
          $customError[901;perms]
        ]
      ;
        $customError[901;perms]
      ]
    `
  }
]

export default commands;