"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commands = [
    {
        name: "listen",
        aliases: ["listen-channel"],
        type: "messageCreate",
        description: "Allows Akira to respond to commands in the mentioned channel, if the channel was restricted by the ignore command (defaults to current channel).",
        module: "Permissions",
        sourcecode: "src/commnads/Permissions/Listen.ts",
        documentation: "listen",
        usage: "listen {channel}",
        example: "listen #general",
        version: "1.0.0",
        code: `
      
    `
    }
];
exports.default = commands;
//# sourceMappingURL=Listen.js.map