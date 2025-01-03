import { CustomFunction } from '@/types';

const functions: CustomFunction[] = [
  {
    name: 'environment',
    code: `
      $return[$if[$clientID==737388665260605480;dev;main]]
    `
  }
];

export default functions;