import { CustomFunction } from '@/types';

const functions: CustomFunction[] = [
  {
    name: 'crowdinProgress',
    params: ['lang'],
    code: `
      $httpAddHeader[Authorization;Bearer ${process.env.CROWDIN_API_TOKEN}]
      $!httpRequest[https://api.crowdin.com/api/v2/projects/717569/languages/$env[lang]/progress;GET;process]

      $return[$env[process;data;0;data;translationProgress]]

    `
  }
];

export default functions;
