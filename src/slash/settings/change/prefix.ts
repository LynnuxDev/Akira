import { ISlash } from '@/types';
import { RegistrationType } from '@tryforge/forgescript';

const ChangePrefix: ISlash = {
  type: RegistrationType.Global,
  code: `
    $let[author;$getUUID[$authorID]]
    $let[authorID;$authorID]
    $defer

    $checkAgreedToTos
    $let[type;$if[$toLowercase[$option[type]]==guild;guild;user]]

    $if[$option[type]==guild;
      $onlyIf[$guildID!=;$customError[714;server-settings-change]]
    ]

    $if[$get[type]==guild;
      $if[$checkIs[$toLowercase[$option[value]];akira;<@$clientID>;<@!$clientID>];
        $customError[807;server-set-prefix] $c[Error if its a reserved prefix]
      ;
        $if[$charCount[$option[value]]<=8;
          $if[$getGuildVar[prefix;$customEncrypt[encrypt;$guildID]]!=$toLowercase[$option[value]];
            $if[$checkIs[$toLowercase[$option[value]];reset;default;undo;none]==false;
              $getColor
              $thumbnail[$getGuildIcon[$guildID]]
              $author[Guild Prefix Changed:]
              $description[I've successfully updated my prefix to your new choice!\n\nFrom now on, all members \`(without custom prefix)\` can use my commands with the new prefix: \`$option[value]\`. \n\nIf you ever want to change it back or to something else, just use the </settings change:$if[$environment==main;TBA;1325075849069985866]> command again.]
              $setGuildVar[prefix;$option[value];$callFunction[customEncrypt;encrypt;$guildID]]
            ;
              $getColor
              $thumbnail[$getGuildIcon[$guildID]]
              $author[Guild Prefix Reset:]
              $description[I've successfully changed the prefix back to the original one!\n\nFrom now on, all members \`(without custom prefix)\` can use my commands with the default prefix: \`$getGlobalVar[prefix]\`.\n\nIf you ever want to change it again, feel free to use the </settings change:$if[$environment==main;TBA;1325075849069985866]> command again.]
              $setGuildVar[prefix;$getGlobalVar[prefix];$callFunction[customEncrypt;encrypt;$guildID]]
            ]
          ;
            $customError[806;server-set-prefix] $c[Error if prefix is the same as before]
          ]
        ;
          $customError[812;server-set-prefix] $c[Error if prefix to long]
        ]
      ]
    ;
      $if[$checkIs[$toLowercase[$option[value]];akira;<@$clientID>;<@!$clientID>];
        $customError[807;user-set-prefix] $c[Error if its a reserved prefix]
      ;
        $if[$charCount[$option[value]]<=8;
          $if[$getUserVar[prefix;$get[author]]!=$toLowercase[$option[value]];
            $if[$checkIs[$toLowercase[$option[value]];reset;default;undo;none]==false;
              $getColor
              $thumbnail[$userAvatar[$authorID]]
              $author[User Prefix Changed:]
              $description[I've successfully updated your prefix to your new choice!\n\nFrom now on, you can use my commands with the new prefix: \`$option[value]\`. \n\nIf you ever want to change it back or to something else, just use the </settings change:$if[$environment==main;TBA;1325075849069985866]> command again.]
              $footer[This user prefix overwrites server specific prefixes.]
              $setUserVar[prefix;$option[value];$get[author]]
            ;
              $getColor
              $thumbnail[$userAvatar[$authorID]]
              $author[User Prefix Reset:]
              $description[I've successfully changed your prefix back to the original one!\n\nFrom now on, you can use my commands with the default prefix: \`$getGlobalVar[prefix]\`.\n\nIf you ever want to change it again, feel free to use the </settings change:$if[$environment==main;TBA;1325075849069985866]> command again.]
              $setUserVar[prefix;$getGlobalVar[prefix];$get[author]]

              $footer[This user prefix does NOT overwrites server specific prefixes.]
            ]
          ;
            $customError[806;user-set-prefix] $c[Error if prefix is the same as before]
          ]
        ;
          $customError[812;user-set-prefix] $c[Error if prefix to long]
        ]
      ]
    ]

  `,
  data: {
    "name": "prefix",
    "description": "change the prefix for message commands. ",
    "options": [
      {
        "type": 3,
        "name": "value",
        "description": "What do you want to change your prefix to?",
        "required": true
      },
      {
        "type": 3,
        "name": "type",
        "description": "Do you want to change the server/guild prefix or your personal user prefix?",
        "choices": [
          {
            "name": "user",
            "value": "user"
          },
          {
            "name": "server",
            "value": "guild"
          }
        ]
      }
    ]
  }
};

export default ChangePrefix;
