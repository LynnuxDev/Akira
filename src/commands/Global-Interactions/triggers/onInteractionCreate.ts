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
]

export default commands;