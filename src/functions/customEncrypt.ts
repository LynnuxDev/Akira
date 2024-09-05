import encryptionKey from "../handler/encrytionKey";

interface CustomFunction {
  name: string,
  params: string[],
  code: string,
}

const functions: CustomFunction[] = [
  {
    name: "customencrypt",
    params: ["option", "text"],
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
]

export default functions;