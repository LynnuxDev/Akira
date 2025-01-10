import encryptionKey from '../handler/encryptionKey';
import { CustomFunction } from '@/types';

const functions: CustomFunction[] = [
  {
    name: 'customEncrypt',
    params: ['option', 'text'],
    code: `
      $switch[$env[option];
        $case[encrypt;
          $return[$encrypt[$env[text];${encryptionKey}]]
        ]
        $case[decrypt;
          $return[$decrypt[$env[text];${encryptionKey}]]
        ]
      ]
    `
  }
];

export default functions;
