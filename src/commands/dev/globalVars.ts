interface Command {
  name?: string;
  aliases?: string[];
  type: string;
  description: string;
  module: string;
  sourcecode: string;
  documentation?: string;
  usage?: string;
  example?: string;
  version: string;
  code: string;
}

const commands: Command[] = [
  {
    name: "importvars",
    aliases: ["importvariables","variablesimport"],
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
]

export default commands;