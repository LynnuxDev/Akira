import { Command } from "@/types";

const Panel: Command[] = [{
  name: 'test',
  description: 'Get bot client info.',
  module: "clientSpecific",
  sourcecode: 'src/commands/dev/client.ts',
  version: 'v1.0.0',
  type: 'messageCreate',
  guildOnly: false,
  documentation: 'client',
  usage: 'client',
  example: 'client',
  code: `
    $defer

    $color[$getGlobalVar[color]]
    $title[Example:]

    $addActionRow
    $addButton[test~$authorID~2;;Secondary;◀️;false]
  `
}];

export default Panel;