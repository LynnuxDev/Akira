module.exports = [{
  name: "onEveryFirstOfMonth",
  type: "ready",
  description: "This command runs every first of the month.",
  module: "ClientSpecific",
  sourcecode: "https://github.com/LynnuxDev/Akira/blob/main/SRC/commands/Global-Interactions/loop/onEveryFirstOfMonth.js",
  documentation: "https://documentation.lynnux.xyz/commands/utility/dev/Not-Available",
  usage: "n/a",
  example: "n/a",
  version: "1.0",
  code: `
    $c[
      $loop[-1;
        $if[$hour==03;]
        $wait[1h]
      ]
    ]
  `
}]