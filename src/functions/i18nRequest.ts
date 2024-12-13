import { CustomFunction } from "@/types";


const functions: CustomFunction[] = [
  {
    name: "i18nRequest",
    params: ["lang","string"],
    code: `
      $textSplit[$env[lang];-]
      $let[lang;$toLowercase[$splitText[0]]-$toUpperCase[$splitText[1]]]

      $switch[$replace[$get[lang];default;original;1];
        $case[custom;
        ]
        $case[original;
          $c[Counts as default input]
        ]
        $case[default;
          $c[Any language.]
          $return[$djsEval[const path = require('path');const { loadYaml } = require('@dist/i18n.js');const successMessage = loadYaml("$get[lang]", '$env[string]');successMessage]]
        ]
      ]
      $return[$checkContains[$toLowerCase[$env[command]];blacklist;black-list;botchannel;bot-channel;default;default-channels;disable;disable-command;enable-command;enable;freechannel;free-channel;free;ignore;ignore-channel;listen;listen-channel;permission;permissions;perm;perms;white-list;whitelist;anime;animelookup;whattheanime;about;info;information;avatar;useravatar;cleardata;removedata;cmd;commandinfo;command-info;command;sos;help;help-me;what;howto;how-to;report;ifoundabug;ibrokesomething;settings;setting;setting;userinfo;user;whois]]
    `
  }
]

export default functions;