import { CustomFunction } from '@/types';

const functions: CustomFunction[] = [
  {
    name: 'getLang',
    params: ['userID'],
    code: `
      $let[user;$getUserVar[uuid;$customEncrypt[encrypt;$env[userID]]]]
      $let[lang;$getUserVar[language;$get[user];en-us]]
      $return[$get[lang]]
    `
  }
];

export default functions;