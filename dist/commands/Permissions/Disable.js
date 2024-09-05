"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commands = [
    {
        name: "disable",
        aliases: ["disable-command"],
        type: "messageCreate",
        description: "Disables the mentioned command or command group.",
        module: "Permissions",
        sourcecode: "src/commnads/Permissions/Disable.ts",
        documentation: "disable",
        usage: "disable <Command/Modules>",
        example: "disable Roleplay",
        version: "1.0.0",
        code: `
      
    `
    }
];
exports.default = commands;
//# sourceMappingURL=Disable.js.map