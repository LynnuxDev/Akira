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
    name: "onEveryFirstOfMonth",
    type: "ready",
    description: "This command runs every first of the month.",
    module: "ClientSpecific",
    sourcecode: "https://github.com/LynnuxDev/Akira/blob/main/SRC/commands/Global-Interactions/loop/onEveryFirstOfMonth.js",
    documentation: "https://documentation.lynnux.xyz/commands/utility/dev/Not-Available",
    usage: "n/a",
    example: "n/a",
    version: "1.0.0",
    code: `
      $c[
        $loop[-1;
          $if[$week$day==00;]
          $wait[1d]
        ]
      ]
    `
  }
]

export default commands;