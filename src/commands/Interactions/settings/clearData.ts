import { InteractionCommand } from "@/types";

const ClearData: InteractionCommand[] = [{
  type: 'interactionCreate',
  version: 'V1.0.0',
  code: `
    $textSplit[$customID;~]

    $onlyIf[$startsWith[$splitText[0];cleardata]==true;]
    $onlyIf[$splitText[1]==$authorID;$ephemeral $customError[716;userSettings]]

    $switch[$splitText[0];
      $case[cleardata_0;
        $interactionUpdate[
          $getColor
          $title[You.. You changed your mind?]
          $description[I’m happy you decided to keep your data as it is.\nI’m committed to protecting your information and ensuring your privacy.\nYou can see how my developers handle your data [here\\](https://akira.lynnux.xyz/policy).\nAnd don’t worry, I’m fully [GDPR\\](https://gdpr-info.eu/) compliant!]
        ]
        $wait[1m]
        $interactionDelete
      ]
      $case[cleardata_1;
        $interactionUpdate[
          $title[Oh, Its all gone.]
          $color[#7E3F7E]
          $description[I’ve gone ahead and cleared your data as requested.\nYour privacy means a lot to me, and I’m fully [GDPR\\](https://gdpr-info.eu/) compliant.\nIf you ever have questions or need assistance in the future, you can can contact my developers [here\\](https://lynnux.xyz/#contact).\nI’ll be here if you need me!]
        ]
        $gdprDelete[user;$authorID]

        $wait[1m]
        $interactionDelete
      ]
    ]
  `
}];

export default ClearData;