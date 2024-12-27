import { Command } from '@/types';

const setPrefix: Command[] = [{
  name: 'set-prefix',
  aliases: ['prefix','change-prefix','set-trigger','trigger','change-trigger'],
  type: 'messageCreate',
  description: 'Command for changing the prefix for a user or server.',
  sourcecode: 'src/commands/settings/setPrefix.ts',
  documentation: 'prefix',
  example: 'set-prefix ! guild',
  usage: 'set-prefix <new_prefix> {user/guild}',
  module: 'settings',
  version: 'v1.0.0',
  code: `
    $checkAgreedToTos

    $if[$checkContains[$toLowercase[$message[1]];user]==true;$let[type;user];$if[$checkContains[$toLowercase[$message[1]];guild;server]==true;$let[type;guild];$let[type;user]]]
    $let[author;$getUUID[$authorID]]

    $switch[$toLowercase[$replace[$replace[$message[0];default;$getGlobalVar[prefix];1];reset;$getGlobalVar[prefix];1]];
      $case[$getGlobalVar[prefix];
        $if[$if[$get[type]==user;$getUserVar[prefix;$getUUID[$authorID]];$getGuildVar[prefix;$customEncrypt[encrypt;$guildID]]]!=$getGlobalVar[prefix];
          $getColor
          $author[$if[$get[type]==user;User;Guild] Prefix Reset:]
          $description[I've successfully changed the prefix back to the original one!\n\nFrom now on, $if[$get[type]==user;you;all members] can use my commands with the default prefix: \`$getGlobalVar[prefix]\`.\n\nIf you ever want to change it again, feel free to use the \`$getGlobalVar[prefix]set-prefix {prefix}\` command.]
          $if[$get[type]==user;
            $logger[Debug;Prefix changed for "$authorID" ($get[author]) from "$getUserVar[prefix;$get[author]]" to "$getGlobalVar[prefix]"]
            $setUserVar[prefix;$getGlobalVar[prefix];$get[author]]
          ;
            $logger[Debug;Prefix changed for "$guildID" from "$getGuildVar[prefix;$customEncrypt[encrypt;$guildID]]" to "$getGlobalVar[prefix]"]
            $setGuildVar[prefix;$getGlobalVar[prefix];$callFunction[customEncrypt;encrypt;$guildID]]
          ]
        ;
          $customError[806;set-prefix]
        ]
      ]
      $case[;
        $customError[717;set-prefix]
      ]
      $case[<@$clientID>;$customError[807;set-prefix]]
      $case[<@!$clientID>;$customError[807;set-prefix]]
      $case[akira;$customError[807;set-prefix]]

      $case[default;
        $if[$get[type]==user;
          $if[$toLowerCase[$message[0]]!=$getUserVar[prefix;author];
            $author[User Prefix Changed:]
            $getColor
            $description[I've successfully updated my prefix to your new choice!\n\nFrom now on, you can use my commands with the new prefix: \`$toLowercase[$message[0]]\`. \n\nIf you ever want to change it back or to something else, just use the \`$toLowercase[$message[0]]set-Prefix\` command.]
            $logger[Debug;Prefix changed for "$authorID" ($get[author]) from "$getUserVar[prefix;$get[author]]" to "$toLowercase[$message[0]]"]
            $setUserVar[prefix;$toLowercase[$message[0]];$get[author]]
          ;
            $customError[806;set-prefix]
          ]
        ;
          $if[$toLowerCase[$message[0]]!=$getGuildVar[prefix;$customEncrypt[encrypt;$guildID]];
            $author[Guild Prefix Changed:]
            $getColor
            $description[I've successfully updated my prefix to your new choice!\n\nFrom now on, your members can use my commands with the new prefix: \`$toLowercase[$message[0]]\`. \n\nIf you ever want to change it back or to something else, just use the \`$toLowercase[$message[0]]set-Prefix\` command.]
            $logger[Debug;Prefix changed for "$guildID" from "$getGuildVar[prefix;$customEncrypt[encrypt;$guildID]]" to "$toLowercase[$message[0]]"]
            $setGuildVar[prefix;$toLowercase[$message[0]];$customEncrypt[encrypt;$guildID]]
          ;
            $customError[806;set-prefix]
          ]
        ]
      ]
    ]
  `
}];

export default setPrefix;