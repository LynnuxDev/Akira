"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commands = [
    {
        name: "importvars",
        aliases: ["importvariables", "variablesimport"],
        description: "import global vars.",
        type: "messageCreate",
        usage: "importvars",
        module: "Developers-Only",
        version: "1.0.0",
        sourcecode: "https://github.com/LynnuxDev/Akira/blob/main/SRC/commands/dev/globalVars.js",
        documentation: "https://documentation.lynnux.xyz/commands/dev/Not-Available",
        example: "importvars",
        code: `
    $c[==================================[ Main \\]=============================]
      $setGlobalVar[prefix;a.]
      $setGlobalVar[color;#ff47ff]
      $setGlobalVar[colorError;#d50056]

    $c[=================================[ Errors \\]============================]
    `
    }
];
exports.default = commands;
//# sourceMappingURL=globalVars.js.map