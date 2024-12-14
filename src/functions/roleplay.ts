import { CustomFunction } from '@/types';

const functions: CustomFunction[] = [
  {
    name: 'roleplay',
    params: ['endpoint'],
    code: `
      $let[endpoint;$env[endpoint]]

      $let[request;$httpRequest[https://api.lynnux.xyz/roleplay/$get[endpoint].json;get]]
      $let[url;$httpResult[embed;image;url]]
      $let[name;$replace[$replace[$replace[$httpResult[embed;title]; ;_;-1];!;;-1];?;;-1]]

      $c[
        $!attachment[$get[url];$get[name]]
        $return[attachment://$get[name]]
      ]
      $return[$get[url]]
    `
  }
];

export default functions;
