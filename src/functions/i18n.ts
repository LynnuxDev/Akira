import { CustomFunction } from '@/types';

const functions: CustomFunction[] = [
  {
    name: 'i18n',
    params: ['lang', 'string'],
    code: `
      $let[lang;$toLowercase[$env[lang]]]

      $let[output;$i18nRequest[$env[lang];$env[string]]]

      $return[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$get[output];{{italic}};*;-1];{{/italic}};*;-1];{{prefix}};$getUserVar[prefix;$get[author];a.];-1];{{newLine}};\n;-1];{{linkDonatePost}};https://www.patreon.com/posts/how-are-being-112094582;-1];{{linkPatreon}};https://www.patreon.com/Dark_Lynn;-1];{{linkKoFi}};https://ko-fi.com/lynnuxdev;-1];{{linkBuyMeACoffee}};https://buymeacoffee.com/darklynn;-1];{{linkLynnuxContact}};https://lynnux.xyz/#contact;-1];{{linkAkira}};https://akira.lynnux.xyz/;-1];{{linkAkiraServer}};discord://-/invite/TUqZTutDUz/login;-1];{{linkAkiraInvite}};https://discord.com/oauth2/authorize?client_id=$clientID&permissions=414800276567&integration_type=0&scope=bot;-1];{{crowding}};[Crowding\\](https://crowdin.com/project/lynnuxdevAkira);1]]
    `
  }
];

export default functions;
