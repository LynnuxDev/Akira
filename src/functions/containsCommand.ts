interface CustomFunction {
  name: string,
  params?: string[],
  code: string,
}

const functions: CustomFunction[] = [
  {
    name: "containsCommand",
    params: ["command"],
    code: `
      $return[$checkContains[$toLowerCase[$env[command]];blacklist;black-list;botchannel;bot-channel;default;default-channels;disable;disable-command;enable-command;enable;freechannel;free-channel;free;ignore;ignore-channel;listen;listen-channel;permission;permissions;perm;perms;white-list;whitelist;anime;animelookup;whattheanime;about;info;information;avatar;useravatar;cleardata;removedata;cmd;commandinfo;command-info;command;sos;help;help-me;what;howto;how-to;report;ifoundabug;ibrokesomething;settings;setting;seting;userinfo;user;whois]]
    `
  }
]

export default functions;