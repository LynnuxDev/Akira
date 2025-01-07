import { ISlash } from '@/types';
import { RegistrationType } from '@tryforge/forgescript';

const Settings: ISlash = {
  type: RegistrationType.Global,
  code: `
    $let[author;$getUUID[$authorID]]
    $let[authorID;$authorID]

    $checkAgreedToTos
    $defer
    $let[type;$if[$toLowercase[$option[type]]==guild;guild;user]]

    $if[$option[type]==guild;
      $onlyIf[$guildID!=;$customError[714;server-settings-change]]
    ]

    $switch[$option[setting];
      $case[prefix;
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
              $if[$getGuildVar[prefix;$customEncrypt[encrypt;$guildID]]!=$toLowercase[$option[value]];
                $if[$checkIs[$toLowercase[$option[value]];reset;default;undo;none]==false;
                  $getColor
                  $thumbnail[$userAvatar[$authorID]]
                  $author[User Prefix Changed:]
                  $description[I've successfully updated your prefix to your new choice!\n\nFrom now on, you can use my commands with the new prefix: \`$option[value]\`. \n\nIf you ever want to change it back or to something else, just use the </settings change:$if[$environment==main;TBA;1325075849069985866]> command again.]
                  $footer[This user prefix overwrites server specific prefixes.]
                  $setGuildVar[prefix;$option[value];$callFunction[customEncrypt;encrypt;$guildID]]
                ;
                  $getColor
                  $thumbnail[$userAvatar[$authorID]]
                  $author[User Prefix Reset:]
                  $description[I've successfully changed your prefix back to the original one!\n\nFrom now on, you can use my commands with the default prefix: \`$getGlobalVar[prefix]\`.\n\nIf you ever want to change it again, feel free to use the </settings change:$if[$environment==main;TBA;1325075849069985866]> command again.]
                  $setGuildVar[prefix;$getGlobalVar[prefix];$callFunction[customEncrypt;encrypt;$guildID]]
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
      ]
    ]


  `,
  data: {
    "name": "change",
    "description": "Change your settings.",
    "options": [
      {
        "type": 3,
        "name": "setting",
        "description": "What setting do you want to change?",
        "required": true,
        "choices": [
          {
            "name": "prefix",
            "value": "prefix"
          },
          {
            "name": "language",
            "value": "lang"
          },
          {
            "name": "response",
            "value": "response"
          },
          {
            "name": "color",
            "value": "color"
          },
          {
            "name": "invalid-notify",
            "value": "invalidNotify"
          }
        ]
      },
      {
        "type": 3,
        "name": "value",
        "description": "to what do you want to change it?",
        "required": true,
        "choices": []
      },
      {
        "type": 3,
        "name": "type",
        "description": "do you want to change user setting or guild settings? (default = user)",
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

export default Settings;