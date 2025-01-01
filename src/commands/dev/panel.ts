import { Command } from "@/types";
import os from 'os';

const Panel: Command[] = [{
  name: 'panel',
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
    $onlyIf[$checkContains[$botOwnerID[true;,];$authorID];]

    $if[$guildID==;
      $!httpRequest[https://api.ipify.org/?format=json;GET]
      $let[ip;$httpResult[ip]]
    ;
      $let[ip;REDACTED]
    ]

    $color[$getGlobalVar[color]]
    $title[Developer Panel:]
    $addField[Server Info;- <:Website:1271544143423996005> Ip: ||$get[ip]||\n- <:Clock:1271543787637833759> Uptime: <t:$round[$math[$round[$math[$getTimestamp/1000];0]-$osUptime];0]:R>\n- <:CPU:1271543827395772517> CPU: \`$cpuUsage[true]%\` - {$cpuCores}\n- <:Server:1271544093838938235> Ram: \`$ram[true;true]\`;true]
    $addField[Process Info;\n- <:Clock:1271543787637833759> Uptime: <t:$round[$math[$math[$getTimestamp-$uptime]/1000];0]:R>\n- <:CPU:1271543827395772517> CPU: \`$cpuUsage[false]% {$cpuCores}\`\n- <:Server:1271544093838938235> Ram: \`$ram[true;false]\`;true]
    $addField[;;true]
    $addField[Client Info;**Client Stats:**\n- <:Roles:1271544076491292736> Guilds: \`$guildCount\`\n- <:members:1271543939576627322> Users: \`$userCount\`\n- <:shard:1271544119080259666> Shards: \`$shardsOnline/$shardCount\`\n- <:Plus:1271544047579693148> Commands: \`$commandCount\`;true]
    $addField[<:Spacer:1275843251349356675>;<:Spacer:1275843251349356675>\n- <:Akira_Active_Dev:1271546151543373906> Commands used since startup: \`$getGlobalVar[startCommands]\`\n- <:ping:1271544029053452297> DB Latency: \`$dbPing\`\n- <:ping:1271544029053452297> WS Latency: \`$pingms\`\n- <:ping:1271544029053452297> RoundTrip Latency: \`$roundtrip\`;true]
    $addField[;;true]

    $addActionRow
    $addButton[panelPrevious~$authorID~0;;Secondary;◀️;true]
    $addButton[panelGuild~$authorID;Guild;Secondary;;$if[$guildID==;true;false]]
    $addButton[panelNext~$authorID~0;;Secondary;▶️;false]
    $addButton[close~$authorID~message~$messageID;Close;Danger;✖️]
  `
}];

export default Panel;