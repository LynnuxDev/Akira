interface CustomFunction {
  name: string,
  params?: string[],
  code: string,
}

const functions: CustomFunction[] = [
  {
    name: "i18n",
    params: ["lang","string"],
    code: `
      $let[lang;$toLowercase[$env[lang]]]
      $onlyIf[$checkContains[$get[lang];af;ar;ca;cs;da;de;el;en;es;fi;fr;he;hu;it;ja;ko;nl;no;pl;pt;ro;ru;sr;sv;tr;uk;vi;zh;custom;default]==true;]

      $switch[$replace[$get[lang];default;origional;1];
        $case[custom;
        ]
        $case[origional;
          $c[Counts as default input]
        ]
        $case[default;
          $c[Any language.]
          $return[
            $djsEval[
              const path = require('path');
              const { loadYaml } = require(path.join(__dirname, '../../../../../../dist/i18n.js'));
              const successMessage = loadYaml("$get[lang]", '$env[string]');
              successMessage
            ]
          ]
        ]
      ]
      $return[$checkContains[$toLowerCase[$env[command]];blacklist;black-list;botchannel;bot-channel;default;default-channels;disable;disable-command;enable-command;enable;freechannel;free-channel;free;ignore;ignore-channel;listen;listen-channel;permission;permissions;perm;perms;white-list;whitelist;anime;animelookup;whattheanime;about;info;information;avatar;useravatar;cleardata;removedata;cmd;commandinfo;command-info;command;sos;help;help-me;what;howto;how-to;report;ifoundabug;ibrokesomething;settings;setting;seting;userinfo;user;whois]]
    `
  }
]

export default functions;