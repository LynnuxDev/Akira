"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commands = [
    {
        type: "interactionCreate",
        description: "Runs on every interaction.",
        module: "Client",
        sourcecode: "src/commands/Global-Interactions/triggers/onInteractionCreate.ts",
        documentation: "onInteractionCreate",
        usage: "N/A",
        example: "N/A",
        version: "1.0.0",
        code: `
    $c[$logger[Info;Ran $customID!]]
    `
    }
];
exports.default = commands;
//# sourceMappingURL=onInteractionCreate.js.map