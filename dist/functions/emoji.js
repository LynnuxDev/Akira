"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = [
    {
        name: "emoji",
        params: ["endpoint"],
        code: `
      $let[emoji;$env[endpoint]]
      $switch[$get[emoji];
        $case[verified-bot;
          $let[emote;<:VerifiedBot_1:1271552378876727356><:VerifiedBot_2:1271552361692663911>]
        ]
        $case[hypesquad-balance;
          $let[emote;<a:Discord_hypesquad_balance:1271554630349754402>]
        ]
        $case[hypesquad-bravery;
          $let[emote;<a:Discord_hypesquad_bravery:1271553774229524522>]
        ]
        $case[hypesquad-brilliance;
          $let[emote;<a:Discord_hypesquad_brilliance:1271558909089419385>]
        ]
        $case[active-developer;
          $let[emote;<:Discord_Developer:1271552502776467658>]
        ]
        $case[discord-staff;
          $let[emote;<:Discord_Staff:1271552443951349891>]
        ]
        $case[hypesquad-event;
          $let[emote;<:Hypesquad_Events:1271552414419259472>]
        ]
        $case[verified-developer;
          $let[emote;<:Discord_Early_Developer:1271561425227354192>]
        ]
        $case[discord-early-support;
          $let[emote;<:Early_Supporter:1271552426574610522>]
        ]
        $case[discord-moderator;
          $let[emote;<:Discord_Moderator:1271552489317203969>]
        ]
        $case[discord-bughunter-two;
          $let[emote;<:Discord_bughunter_2:1271563213271466076>]
        ]
        $case[discord-bughunter-one;
          $let[emote;<:Discord_bughunter_1:1271563200025985174>]
        ]
        $case[akira-id;
          $let[emote;<:ID:1271543923600265278>]
        ]
        $case[akira-date;
          $let[emote;<:Date:1271543843157971014>]
        ]
        $case[akira-discord;
          $let[emote;<:Discord:1271543869233823774>]
        ]
        $case[akira-plus;
          $let[emote;<:Plus:1271544047579693148>]
        ]
        $case[akira-booster;
          $let[emote;<:Boosters:1271543754376876052>]
        ]
        $case[akira-clock;
          $let[emote;<:Clock:1271543787637833759>]
        ]
      ]
      $return[$get[emote]]
    `
    }
];
exports.default = functions;
//# sourceMappingURL=emoji.js.map