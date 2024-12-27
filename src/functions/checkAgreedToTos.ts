import { CustomFunction } from '@/types';

const functions: CustomFunction[] = [
  {
    name: 'checkAgreedToTos',
    code: `
      $let[author;$getUUID[$authorID]]
      $onlyIf[$getUserVar[AgreedToTos;$get[author];false]==true;$callEmbed[agreeToTerms]]
    `
  }
];

export default functions;
