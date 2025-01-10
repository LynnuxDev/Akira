import { CustomFunction } from '@/types';

const functions: CustomFunction[] = [
  {
    name: 'getUUID',
    params: ['userID'],
    code: `
      $let[user;$getUserVar[uuid;$customEncrypt[encrypt;$env[userID]]]]
      $return[$get[user]]
    `
  }
];

export default functions;