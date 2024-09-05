"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commands = [
    {
        name: "perms",
        aliases: ["permission", "perm", "permissions"],
        type: "messageCreate",
        description: "Edit specific permissions for Akira commands.",
        module: "Permissions",
        sourcecode: "src/commnads/Permissions/Perms.ts",
        documentation: "perms",
        usage: "perms <option> [group/command] [target]",
        example: "perms list\n{prefix}perms allow economy #commands\n{prefix}perms deny @users",
        version: "1.0.0",
        code: `
      $onlyIf[$authorID==705306248538488947;]
      $onlyIf[$guildID!=;$customError[714;perms]]

      $let[option;$replace[$replace[$toLowerCase[$if[$message[0]==;not-given;$message[0]]];uwu;niceTry;1];default;uwu;1]]

      $disableConsoleErrors
      $switch[$get[option];
        $case[not-given;
          $customError[717;perms]
        ]
        $case[show;
          $if[$message[1]==;
            $customError[802;perms]
            $let[type;error]
          ;
            $if[$findGuildChannel[$guildID;$message[1]]!=;
              $let[type;channel]
              $let[query;$findGuildChannel[$guildID;$message[1]]]
            ;
              $if[$findRole[$guildID;$message[1]]!=;
                $if[$findRole[$guildID;$message[1]]==$guildID;
                  $customError[718;perms]
                  $let[type;error]
                ;
                  $let[type;role]
                  $let[query;$findRole[$guildID;$message[1]]]
                ]
              ;
                $if[$findMember[$guildID;$message[1];false]!=;
                  $let[type;user]
                  $let[query;$findMember[$guildID;$message[1];false]]
                ;
                  $customError[802;perms]
                  $let[type;error]
                ]
              ]
            ]
            $if[$get[type]!=error;
              $color[$if[$getUserVar[color;$get[author];false]!=false;$getUserVar[color;$get[author];#ff47ff];$getUserVar[color;$guildID;#ff47ff]]]
              $switch[$get[type];
                $case[user;
                  $title[@$userGlobalName[$get[query]]'s Permission list:]
                  $thumbnail[$userAvatar[$get[query]]]
                  $footer[These perms do not include Channel/Role perms overrides.]
                ]
                $case[role;
                  $title[@$roleName[$guildID;$get[query]] Permission list:]
                  $if[$roleIcon[$guildID;1037678738197979176;128;webp]!=;$thumbnail[$roleIcon[$guildID;1037678738197979176;128;webp]]]
                  $footer[These perms do not include User/Channel perms overrides.]
                ]
                $case[channel;
                  $title[#$channelName[$get[query]] Permission list:]
                  $footer[These perms do not include User/Role perms overrides.]
                ]
                $case[default;
                  $customError[708;perms]
                ]
              ]
              $description[Perms Priority:\n-# "Channel" > "User" > "Role"\n\`\`\`diff\n$replace[$if[$getGuildVar[perms~$get[query];$guildID]!=;$getGuildVar[perms~$get[query];$guildID];No custom perms.];,;\n;-1]\`\`\`]
            ]
          ]
        ]
        $case[allow;
          $if[$message[1]!=;
            $if[$containsCommand[$message[1]]==true;
              $if[$findGuildChannel[$guildID;$message[2]]!=;
                $let[type;channel]
                $let[query;$findGuildChannel[$guildID;$message[2]]]
              ;
                $if[$findRole[$guildID;$message[2]]!=;
                  $if[$findRole[$guildID;$message[2]]==$guildID;
                    $customError[718;perms]
                    $let[type;error]
                  ;
                    $let[type;role]
                    $let[query;$findRole[$guildID;$message[2]]]
                  ]
                ;
                  $if[$findMember[$guildID;$message[2];false]!=;
                    $let[type;user]
                    $let[query;$findMember[$guildID;$message[2];false]]
                  ;
                    $customError[802;perms]
                    $let[type;error]
                  ]
                ]
              ]
              $if[$get[type]!=error;
                $if[$checkContains[$getGuildVar[perms~$get[query];$guildID];+ $toLowercase[$message[1]]]!=true;
                  $setGuildVar[perms~$get[query];$if[$getGuildVar[perms~$get[query];$guildID]==;;$getGuildVar[perms~$get[query];$guildID],]+ $toLowercase[$message[1]];$guildID]
                  $color[$if[$getUserVar[color;$get[author];false]!=false;$getUserVar[color;$get[author];#ff47ff];$getUserVar[color;$guildID;#ff47ff]]]
                  $title[Permissions Changed:]
                  $description[The permission \`$message[1]\` has been allowed $if[$get[type]==channel;in;for] $if[$get[type]==channel;<#$get[query]>;$if[$get[type]==role;<@&$get[query]>;<@$get[query]>]]]
                  $if[$checkContains[$getGuildVar[perms~$get[query];$guildID];- $toLowercase[$message[1]]]==true;$setGuildVar[perms~$get[query];$replace[$replace[$getGuildVar[perms~$get[query];$guildID];,- $toLowercase[$message[1]];;-1];- $toLowercase[$message[1]];;-1];$guildID]]
                  $if[$get[type]!=user;$footer[NOTE: User specific permissions override these permissions.]]
                ;
                  $customError[803;perms]
                ]
              ]
            ;
              $if[$containsModule[$message[1]]==true;
                $if[$findGuildChannel[$guildID;$message[2]]!=;
                  $let[type;channel]
                  $let[query;$findGuildChannel[$guildID;$message[2]]]
                ;
                  $if[$findRole[$guildID;$message[2]]!=;
                    $if[$findRole[$guildID;$message[2]]==$guildID;
                      $customError[718;perms]
                      $let[type;error]
                    ;
                      $let[type;role]
                      $let[query;$findRole[$guildID;$message[2]]]
                    ]
                  ;
                    $if[$findMember[$guildID;$message[2];false]!=;
                      $let[type;user]
                      $let[query;$findMember[$guildID;$message[2];false]]
                    ;
                      $customError[802;perms]
                      $let[type;error]
                    ]
                  ]
                ]
                $if[$get[type]!=error;
                  $if[$checkContains[$getGuildVar[perms~$get[query];$guildID];+ $toLowercase[$message[1]]]!=true;
                    $setGuildVar[perms~$get[query];$if[$getGuildVar[perms~$get[query];$guildID]==;;$getGuildVar[perms~$get[query];$guildID],]+ $toLowercase[$message[1]];$guildID]
                    $color[$if[$getUserVar[color;$get[author];false]!=false;$getUserVar[color;$get[author];#ff47ff];$getUserVar[color;$guildID;#ff47ff]]]
                    $title[Permissions Changed:]
                    $description[The permission \`$message[1]\` has been allowed $if[$get[type]==channel;in;for] $if[$get[type]==channel;<#$get[query]>;$if[$get[type]==role;<@&$get[query]>;<@$get[query]>]]]
                    $if[$get[type]!=user;$footer[NOTE: User specific permissions override these permissions.]]
                    $if[$checkContains[$getGuildVar[perms~$get[query];$guildID];- $toLowercase[$message[1]]]==true;$setGuildVar[perms~$get[query];$replace[$replace[$getGuildVar[perms~$get[query];$guildID];,- $toLowercase[$message[1]];;-1];- $toLowercase[$message[1]];;-1];$guildID]]
                  ;
                    $customError[803;perms]
                  ]
                ]
              ;
                $customError[404;perms]
              ]
            ]
          ;
            $customError[717;perms]
          ]
        ]
        $case[deny;
          $if[$message[1]!=;
            $if[$containsCommand[$message[1]]==true;
              $if[$findGuildChannel[$guildID;$message[2]]!=;
                $let[type;channel]
                $let[query;$findGuildChannel[$guildID;$message[2]]]
              ;
                $if[$findRole[$guildID;$message[2]]!=;
                  $if[$findRole[$guildID;$message[2]]==$guildID;
                    $customError[718;perms]
                    $let[type;error]
                  ;
                    $let[type;role]
                    $let[query;$findRole[$guildID;$message[2]]]
                  ]
                ;
                  $if[$findMember[$guildID;$message[2];false]!=;
                    $let[type;user]
                    $let[query;$findMember[$guildID;$message[2];false]]
                  ;
                    $customError[802;perms]
                    $let[type;error]
                  ]
                ]
              ]
              $if[$get[type]!=error;
                $if[$checkContains[$getGuildVar[perms~$get[query];$guildID];- $toLowercase[$message[1]]]!=true;
                  $setGuildVar[perms~$get[query];$if[$getGuildVar[perms~$get[query];$guildID]==;;$getGuildVar[perms~$get[query];$guildID],]- $toLowercase[$message[1]];$guildID]
                  $color[$if[$getUserVar[color;$get[author];false]!=false;$getUserVar[color;$get[author];#ff47ff];$getUserVar[color;$guildID;#ff47ff]]]
                  $title[Permissions Changed:]
                  $description[The permission \`$message[1]\` has been denied $if[$get[type]==channel;in;for] $if[$get[type]==channel;<#$get[query]>;$if[$get[type]==role;<@&$get[query]>;<@$get[query]>]]]
                  $if[$get[type]!=user;$footer[NOTE: User specific permissions override these permissions.]]
                  $if[$checkContains[$getGuildVar[perms~$get[query];$guildID];+ $toLowercase[$message[1]]]==true;$setGuildVar[perms~$get[query];$replace[$replace[$getGuildVar[perms~$get[query];$guildID];,+ $toLowercase[$message[1]];;-1];+ $toLowercase[$message[1]];;-1];$guildID]]
                ;
                  $customError[803;perms]
                ]
              ]
            ;
              $if[$containsModule[$message[1]]==true;
                $if[$findGuildChannel[$guildID;$message[2]]!=;
                  $let[type;channel]
                  $let[query;$findGuildChannel[$guildID;$message[2]]]
                ;
                  $if[$findRole[$guildID;$message[2]]!=;
                    $if[$findRole[$guildID;$message[2]]==$guildID;
                      $customError[718;perms]
                      $let[type;error]
                    ;
                      $let[type;role]
                      $let[query;$findRole[$guildID;$message[2]]]
                    ]
                  ;
                    $if[$findMember[$guildID;$message[2];false]!=;
                      $let[type;user]
                      $let[query;$findMember[$guildID;$message[2];false]]
                    ;
                      $customError[802;perms]
                      $let[type;error]
                    ]
                  ]
                ]
                $if[$get[type]!=error;
                  $if[$checkContains[$getGuildVar[perms~$get[query];$guildID];- $toLowercase[$message[1]]]!=true;
                    $setGuildVar[perms~$get[query];$if[$getGuildVar[perms~$get[query];$guildID]==;;$getGuildVar[perms~$get[query];$guildID],]- $toLowercase[$message[1]];$guildID]
                    $color[$if[$getUserVar[color;$get[author];false]!=false;$getUserVar[color;$get[author];#ff47ff];$getUserVar[color;$guildID;#ff47ff]]]
                    $title[Permissions Changed:]
                    $description[The permission \`$message[1]\` has been allowed $if[$get[type]==channel;in;for] $if[$get[type]==channel;<#$get[query]>;$if[$get[type]==role;<@&$get[query]>;<@$get[query]>]]]
                    $if[$get[type]!=user;$footer[NOTE: User specific permissions override these permissions.]]
                    $if[$checkContains[$getGuildVar[perms~$get[query];$guildID];+ $toLowercase[$message[1]]]==true;$setGuildVar[perms~$get[query];$replace[$replace[$getGuildVar[perms~$get[query];$guildID];,+ $toLowercase[$message[1]];;-1];+ $toLowercase[$message[1]];;-1];$guildID]]
                  ;
                    $customError[803;perms]
                  ]
                ]
              ;
                $customError[404;perms]
              ]
            ]
          ;
            $customError[717;perms]
          ]
        ]
        $case[uwu;
          $if[$message[1]!=;
            $if[$containsCommand[$message[1]]==true;
              $if[$findGuildChannel[$guildID;$message[2]]!=;
                $let[type;channel]
                $let[query;$findGuildChannel[$guildID;$message[2]]]
              ;
                $if[$findRole[$guildID;$message[2]]!=;
                  $if[$findRole[$guildID;$message[2]]==$guildID;
                    $customError[718;perms]
                    $let[type;error]
                  ;
                    $let[type;role]
                    $let[query;$findRole[$guildID;$message[2]]]
                  ]
                ;
                  $if[$findMember[$guildID;$message[2];false]!=;
                    $let[type;user]
                    $let[query;$findMember[$guildID;$message[2];false]]
                  ;
                    $customError[802;perms]
                    $let[type;error]
                  ]
                ]
              ]
              $if[$get[type]!=error;
                $if[$checkContains[$getGuildVar[perms~$get[query];$guildID];- $toLowercase[$message[1]]]==true;
                  $let[error;min]
                ;
                  $if[$checkContains[$getGuildVar[perms~$get[query];$guildID];+ $toLowercase[$message[1]]]==true;
                    $let[error;plus]
                  ;
                    $customError[804;perms]
                    $let[error;true]
                  ]
                ]
                $if[$get[error]!=true;
                  $if[$get[error]==min;
                    $setGuildVar[perms~$get[query];$replace[$replace[$getGuildVar[perm~$get[query];$guildID];- $toLowercase[$message[1]],;;-1];- $toLowercase[$message[1]];;-1];$guildID]
                  ;
                    $setGuildVar[perms~$get[query];$replace[$replace[$getGuildVar[perm~$get[query];$guildID];+ $toLowercase[$message[1]],;;-1];+ $toLowercase[$message[1]];;-1];$guildID]
                  ]
                  $color[$if[$getUserVar[color;$get[author];false]!=false;$getUserVar[color;$get[author];#ff47ff];$getUserVar[color;$guildID;#ff47ff]]]
                  $title[Permissions unset:]
                  $description[The permission \`$message[1]\` set to default for $if[$get[type]==channel;in;for] $if[$get[type]==channel;<#$get[query]>;$if[$get[type]==role;<@&$get[query]>;<@$get[query]>]]]
                ]
              ]
            ;
              $if[$containsModule[$message[1]]==true;
                $if[$findGuildChannel[$guildID;$message[2]]!=;
                  $let[type;channel]
                  $let[query;$findGuildChannel[$guildID;$message[2]]]
                ;
                  $if[$findRole[$guildID;$message[2]]!=;
                    $if[$findRole[$guildID;$message[2]]==$guildID;
                      $customError[718;perms]
                      $let[type;error]
                    ;
                      $let[type;role]
                      $let[query;$findRole[$guildID;$message[2]]]
                    ]
                  ;
                    $if[$findMember[$guildID;$message[2];false]!=;
                      $let[type;user]
                      $let[query;$findMember[$guildID;$message[2];false]]
                    ;
                      $customError[805;perms]
                      $let[type;error]
                    ]
                  ]
                ]
                $if[$get[type]!=error;
                  $if[$checkContains[$getGuildVar[perms~$get[query];$guildID];- $toLowercase[$message[1]]]==true;
                    $let[error;min]
                  ;
                    $if[$checkContains[$getGuildVar[perms~$get[query];$guildID];+ $toLowercase[$message[1]]]==true;
                      $let[error;plus]
                    ;
                      $customError[804;perms]
                      $let[error;true]
                    ]
                  ]
                  $if[$get[error]!=true;
                    $if[$get[error]==min;
                      $setGuildVar[perms~$get[query];$replace[$replace[$getGuildVar[perm~$get[query];$guildID];- $toLowercase[$message[1]],;;-1];- $toLowercase[$message[1]];;-1];$guildID]
                    ;
                      $setGuildVar[perms~$get[query];$replace[$replace[$getGuildVar[perm~$get[query];$guildID];+ $toLowercase[$message[1]],;;-1];+ $toLowercase[$message[1]];;-1];$guildID]
                    ]
                    $color[$if[$getUserVar[color;$get[author];false]!=false;$getUserVar[color;$get[author];#ff47ff];$getUserVar[color;$guildID;#ff47ff]]]
                    $title[Permissions unset:]
                    $description[The permission \`$message[1]\` set to default for $if[$get[type]==channel;in;for] $if[$get[type]==channel;<#$get[query]>;$if[$get[type]==role;<@&$get[query]>;<@$get[query]>]]]
                  ]
                ]
              ;
                $customError[404;perms]
              ]
            ]
          ;
            $customError[717;perms]
          ]
        ]
        $case[clear;
          $if[$message[1]!=;
            $if[$findGuildChannel[$guildID;$message[1]]!=;
              $let[type;channel]
              $let[query;$findGuildChannel[$guildID;$message[1]]]
            ;
              $if[$findRole[$guildID;$message[1]]!=;
                $if[$findRole[$guildID;$message[1]]==$guildID;
                  $customError[718;perms]
                  $let[type;error]
                ;
                  $let[type;role]
                  $let[query;$findRole[$guildID;$message[1]]]
                ]
              ;
                $if[$findMember[$guildID;$message[1];false]!=;
                  $let[type;user]
                  $let[query;$findMember[$guildID;$message[1];false]]
                ;
                  $customError[805;perms]
                  $let[type;error]
                ]
              ]
            ]
            $if[$get[type]!=error;
              $color[$if[$getUserVar[color;$get[author];false]!=false;$getUserVar[color;$get[author];#ff47ff];$getUserVar[color;$guildID;#ff47ff]]]
              $title[Permissions cleared:]
              $description[The permissions have been cleared for $if[$get[type]==channel;<#$get[query]>;$if[$get[type]==role;<@&$get[query]>;<@$get[query]>]]]
            ]
          ;
            $customError[717;perms]
          ]
        ]
        $case[reply;
          $switch[$toLowerCase[$message[1]];
            $case[react;
              $color[$if[$getUserVar[color;$get[author];false]!=false;$getUserVar[color;$get[author];#ff47ff];$getUserVar[color;$guildID;#ff47ff]]]
              $title[Reply setting changed!]
              $description[Changed reply setting from \`$getGuildVar[permsReply;$guildID]\` to \`react\`.\nIf someone doesn't have the right perms i'll react to the message.]
              $setGuildVar[permsReply;react;$guildID]
            ]
            $case[ignore;
              $color[$if[$getUserVar[color;$get[author];false]!=false;$getUserVar[color;$get[author];#ff47ff];$getUserVar[color;$guildID;#ff47ff]]]
              $title[Reply setting changed!]
              $description[Changed reply setting from \`$getGuildVar[permsReply;$guildID]\` to \`ignore\`.\nIf someone doesn't have the right perms i wont do anything.]
              $setGuildVar[permsReply;ignore;$guildID]
            ]
            $case[reply;
              $color[$if[$getUserVar[color;$get[author];false]!=false;$getUserVar[color;$get[author];#ff47ff];$getUserVar[color;$guildID;#ff47ff]]]
              $title[Reply setting changed!]
              $description[Changed reply setting from \`$getGuildVar[permsReply;$guildID]\` to \`reply\`.\nIf someone doesn't have the right perms i'll reply with a message.]
              $setGuildVar[permsReply;reply;$guildID]
            ]
            $case[default;
              $customError[801;perms]
            ]
          ]
        ]
        $case[default;
          $customError[718;perms]
        ]
      ]
    `
    }
];
exports.default = commands;
//# sourceMappingURL=Perms.js.map