import { CustomFunction } from '@/types';

const functions: CustomFunction[] = [
  {
    name: 'roleplay',
    params: ['endpoint'],
    code: `
      $let[endpoint;$env[endpoint]]

      $let[request;$httpRequest[https://api.lynnux.xyz/akira/roleplay/$toLowercase[$get[endpoint]];get]]
      $let[url;$httpResult[embed;image;url]]
      $let[name;$replace[$replace[$replace[$httpResult[embed;title]; ;_;-1];!;;-1];?;;-1]]


      $!attachment[$get[url];$get[name]]
      $return[attachment://$get[name]]

    `
  }
];

export default functions;
