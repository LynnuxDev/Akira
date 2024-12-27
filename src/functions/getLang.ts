import { CustomFunction } from '@/types';

const functions: CustomFunction[] = [
  {
    name: 'getLang',
    params: ['userID'],
    code: `
      $if[$findUser[$env[userId]]!=;
        $let[user;$getUserVar[uuid;$customEncrypt[encrypt;$env[userID]]]]
        $let[lang;$getUserVar[language;$get[user];en-us]]
      ;
        $if[$guildExists[$env[userID]]==true;
          $let[guild;$getGuildVar[uuid;$customEncrypt[encrypt;$env[userID]]]]
          $let[lang;$getGuildVar[language;$get[guild];en-us]]
        ;
        $let[lang;en-us]
        ]
      ]
      $return[$get[lang]]
    `
  }
];

export default functions;