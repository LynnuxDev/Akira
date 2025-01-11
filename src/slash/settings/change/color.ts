import { ISlash } from '@/types';
import { RegistrationType } from '@tryforge/forgescript';

const ChangeColor: ISlash = {
  type: RegistrationType.Global,
  code: `
    $ephemeral
    $defer

    $checkAgreedToTos
    $onlyIf[$guildId!=;$customError[714;ChangeInotify]]
    $onlyIf[$hasPerms[$guildID;$authorID;Administrator]==true;$customError[720;ChangeInotify]]

  `,
  data: {
    "name": "color",
    "description": "Change the color of your embeds.",
    "options": [
      {
        "type": 3,
        "name": "value",
        "description": "The color you want to change it to, use names or hex color code.",
        "required": true
      },
      {
        "type": 3,
        "name": "type",
        "description": "Which color do you want to change? your own or the server color?",
        "choices": [
          {
            "name": "user",
            "value": "user"
          },
          {
            "name": "server",
            "value": "guild"
          }
        ]
      }
    ]
  }
};
export default ChangeColor;