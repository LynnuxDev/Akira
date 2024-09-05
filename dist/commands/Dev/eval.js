"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commands = [
    {
        name: "ev",
        aliases: ["fs", "ForgeScript"],
        description: "Evals an ForgeScript code",
        type: "messageCreate",
        usage: "ev <code>",
        module: "Dev",
        version: "1.0.0",
        sourcecode: "/src/commands/dev/eval.ts",
        documentation: "eval",
        example: "ev you are $authorID",
        code: `
      $onlyForUsers[;705306248538488947;392609934744748032]
      $if[$authorID==705306248538488947;Ping: \`$pingMS\` | Uptime: <t:$round[$math[$math[$getTimestamp-$uptime]/1000];0]:R>;]
      $eval[$message;true]
    `
    }
];
exports.default = commands;
//# sourceMappingURL=eval.js.map