"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commands = [
    {
        name: "ignore",
        aliases: ["ignore-channel"],
        type: "messageCreate",
        description: "Prevents Akira from responding to commands in the mentioned channel. (defaults to current channel).",
        module: "Permissions",
        sourcecode: "src/commnads/Permissions/ignore.ts",
        documentation: "ignore",
        usage: "ignore {channel}",
        example: "ignore #general",
        version: "1.0.0",
        code: `
      
    `
    }
];
exports.default = commands;
//# sourceMappingURL=Ignore.js.map