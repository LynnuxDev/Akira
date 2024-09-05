"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commands = [
    {
        name: "whitelist",
        aliases: ["white-list"],
        type: "messageCreate",
        description: "Allow the mentioned member to use Akira in the server.",
        module: "Permissions",
        sourcecode: "src/commnads/Permissions/Whitelist.ts",
        documentation: "whitelist",
        usage: "whitelist <member>",
        example: "whitelist @dark-lynn",
        version: "1.0.0",
        code: `
      
    `
    }
];
exports.default = commands;
//# sourceMappingURL=Whitelist.js.map