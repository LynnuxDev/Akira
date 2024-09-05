"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commands = [
    {
        name: "botchannel",
        aliases: ["bot-channel"],
        type: "messageCreate",
        description: "Causes Akira to ignore commands in all channels except the one mentioned (defaults to current channel).",
        module: "Permissions",
        sourcecode: "src/commnads/Permissions/BotChannel.ts",
        documentation: "botchannel",
        usage: "botchannel {channel}",
        example: "botchannel\n{prefix}botchannel #commands",
        version: "1.0.0",
        code: `
      
    `
    }
];
exports.default = commands;
//# sourceMappingURL=BotChannel.js.map