"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commands = [
    {
        name: "settings",
        aliases: ["setting", "seting"],
        description: "Change your settings",
        type: "messageCreate",
        module: "Information",
        version: "1.0.0",
        sourcecode: "src/commands/utility/settings.ts",
        documentation: "settings",
        usage: "settings",
        example: "settings",
        code: `
      $c[----------------------------------ONLY-IF---------------------------------]
      This command will be added in v 1.3.0
    `
    }
];
exports.default = commands;
//# sourceMappingURL=settings.js.map