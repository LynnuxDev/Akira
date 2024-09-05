"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const encrytionKey_1 = __importDefault(require("../handler/encrytionKey"));
const functions = [
    {
        name: "customencrypt",
        params: ["option", "text"],
        code: `
      $switch[$env[option];
        $case[encrypt;
          $return[$encrypt[$env[text];${encrytionKey_1.default}]]
        ]
        $case[decrypt;
          $return[$decrypt[$env[text];${encrytionKey_1.default}]]
        ]
      ]
    `
    }
];
exports.default = functions;
//# sourceMappingURL=customEncrypt.js.map