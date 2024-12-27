import { Command } from '@/types';

const setInvalidNotify: Command[] = [{
  name: `setinvalidnotify`,
  aliases: ['invalidnotify'],
  type: 'messageCreate',
  description: 'Change the guilds invalid notify entry.',
  module: 'settings',
  sourcecode: 'src/commands/settings/setInvalidNotify.ts',
  version: 'v1.0.0',
  example: 'setInvalidNotify enabled',
  usage: 'setInvalidNotify {value}',
  code: `

    $onlyIf[$guildID!=;$customError[714;setinvalidnotify]]
    $onlyIf[$hasPerms[$guildID;$authorID;Administrator]==true;$customError[720;setinvalidnotify]]

    $let[guild;$customEncrypt[encrypt;$guildID]]

    $ifx[
      $if[$checkContains[$toLowercase[$message[0]];true;enable;enabled;on]==true;
        $if[$getGuildVar[invalidNotify;$get[guild]]!=true;
          $let[value;enabled]
        ;
          $let[error;true]
        ]
      ]
      $elseif[$checkContains[$toLowercase[$message[0]];false;disable;disabled;off]==true;
        $if[$getGuildVar[invalidNotify;$get[guild]]!=false;
          $let[value;disabled]
        ;
          $let[error;true]
        ]
      ]
      $else[
        $let[value;$if[$getGuildVar[invalidNotify;$get[guild]]==false;enabled;disabled]]
      ]
    ]

    $onlyIf[$get[error]!=true;$customError[724;setinvalidnotify]]
    $getColor
    $author[Guild setting changed!;$if[$guildIcon[$guildID;64;webp]!=;$guildIcon[$guildID;64;webp];https://cdn.lynnux.xyz/images/No-Server_Icon-found.png]]
    $description[InvalidNotify has been \`$get[value]\` from now on i will no longer send a error on incorrect messages starting with my prefixes.]
    $if[$get[value]==enabled;
      $setGuildVar[invalidNotify;true;$get[guild]]
    ;
      $setGuildVar[invalidNotify;false;$get[guild]]
    ]

  `
}];
export default setInvalidNotify;