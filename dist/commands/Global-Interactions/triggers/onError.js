"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commands = [
    {
        type: "error",
        description: "Execute on errors.",
        module: "Client",
        sourcecode: "src/commands/Global-Interactions/triggers/onError.ts",
        documentation: "onError",
        usage: "N/A",
        example: "N/A",
        version: "1.0.0",
        code: `
      $disableConsoleErrors
      $logger[Error;$error[]]
  `
    }
];
exports.default = commands;
//# sourceMappingURL=onError.js.map