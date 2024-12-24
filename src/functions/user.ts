import { CustomFunction } from "../types";

const userFunction : CustomFunction[] = [{
  name: "user",
  params: ["type", "user"],
  code: `
      $return[
        $start
        $onlyIf[$or[$env[type]==ID;$env[type]==Username];
          $description[$env[type] in not a valid type.
            Instead specify what you want.
            ID or Username
          ]
          $footer[Be Better Smh]
        ]
        $onlyIf[$env[user]!=;
          $description[
            $env[user] in not a valid user. Instead specify what you want.
            ID or Username
          ]
          $footer[Be Better Smh]
        ]
        $onlyIf[$findUser[$env[user]]!=;
          $description[$env[user] in not a valid user.]
          $footer[Be Better Smh]
        ]

        $ifx[
          $if[$env[type]==ID;
            $findUser[$env[user]]
          ]

          $else[
            $username[$findUser[$env[user]]]
          ]
        ]
      ]
    `,
},
];

export default userFunction;