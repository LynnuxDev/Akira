import { CustomFunction } from '@/types';

const functions: CustomFunction[] = [
  {
    name: 'getGuildIcon',
    params: ['guild'],
    code: `
      $let[author;$getUUID[$authorID]]
      $return[$if[$guildIcon[$guildID;64;webp]!=;$guildIcon[$guildID;64;webp];https://cdn.lynnux.xyz/images/No-Server_Icon-found.png]]
    `
  }
];

export default functions;
