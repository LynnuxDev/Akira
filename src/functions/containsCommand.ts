import { CustomFunction } from '@/types';

const functions: CustomFunction[] = [
  {
    name: 'containsCommand',
    params: ['command'],
    code: `
      $return[$if[$commandInfo[messageCreate;$tolowercase[$env[command]];name]!=;true;false]]
    `
  }
];

export default functions;
