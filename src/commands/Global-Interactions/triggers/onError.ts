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
    type: "error",
    description: "Execute on errors.",
    module: "Client",
    sourcecode: "src/commands/Global-Interactions/triggers/onError.ts",
    documentation: "onError",
    usage: "N/A",
    example: "N/A",
    version: "1.0.0",
    code: `
      $disableConsoleErrors
      $logger[Error;$error[]]
  `
}];

export default commands;