import { CustomFunction } from "@/types";

const functions: CustomFunction[] = [
  {
    name: "checkBotChannel",
    code: `
      $onlyIf[$getUserVar[AgreedToTos;$get[author];false]==true;$callEmbed[agreeToTerms]]
    `
  }
]

export default functions;