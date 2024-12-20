import { CustomFunction } from '@/types';

const functions: CustomFunction[] = [
  {
    name: 'getColor',
    code: `
      $let[author;$getUUID[$authorID]]
      $color[$if[$getUserVar[color;$get[author];false]!=false;$getUserVar[color;$get[author];#ff47ff];$getGuildVar[color;$guildID;#ff47ff]]]
    `
  }
];

export default functions;
