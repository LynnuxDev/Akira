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
    $addField[Server Info;- <:Website:$if[$environment==main;1263809959267930213;1271544143423996005]> Ip: ||$get[ip]||\n- <:Clock:$if[$environment==main;1263809772478529576;1271543787637833759]> Uptime: <t:$round[$math[$round[$math[$getTimestamp/1000];0]-$osUptime];0]:R>\n- <:CPU:$if[$environment==main;1263809787661910050;1271543827395772517]> CPU: \`$cpuUsage[true]%\` - {$cpuCores}\n- <:Server:$if[$environment==main;1263809924295819285;1271544093838938235]> Ram: \`$ram[true;true]\`;true]
    $addField[Process Info;\n- <:Clock:$if[$environment==main;1263809772478529576;1271543787637833759]> Uptime: <t:$round[$math[$math[$getTimestamp-$uptime]/1000];0]:R>\n- <:CPU:$if[$environment==main;1263809787661910050;1271543827395772517]> CPU: \`$cpuUsage[false]% {$cpuCores}\`\n- <:Server:$if[$environment==main;1263809924295819285;1271544093838938235]> Ram: \`$ram[true;false]\`;true]
    $addField[;;true]
    $addField[Client Info;**Client Stats:**\n- <:Roles:$if[$environment==main;1263809915529728072;1271544076491292736]> Guilds: \`$guildCount\`\n- <:members:$if[$environment==main;1263809852145270926;1271543939576627322]> Users: \`$userCount\`\n- <:shard:$if[$environment==main;1263809940569456650;1271544119080259666]> Shards: \`$shardsOnline/$shardCount\`\n- <:Plus:$if[$environment==main;1263809898878210149;1271544047579693148]> Commands: \`$commandCount\`;true]
    $addField[<:Spacer:$if[$environment==main;1324808760207736842;1275843251349356675]>;<:Spacer:$if[$environment==main;1324808760207736842;1275843251349356675]>\n- <:Akira_Active_Dev:$if[$environment==main;1263809801817821278;1271546151543373906]> Commands used since startup: \`$getGlobalVar[startCommands]\`\n- <:ping:$if[$environment==main;1263809890468499508;1271544029053452297]> DB Latency: \`$dbPing\`\n- <:ping:$if[$environment==main;1263809890468499508;1271544029053452297]> WS Latency: \`$pingms\`\n- <:ping:$if[$environment==main;1263809890468499508;1271544029053452297]> RT Latency: \`$roundtrip\`;true]
    $addField[;;true]

    $addActionRow
    $addButton[panelPrevious~$authorID~0;;Secondary;◀️;true]
    $addButton[panelGuild~$authorID;Guild;Secondary;;$if[$guildID==;true;false]]
    $addButton[panelNext~$authorID~0;;Secondary;▶️;false]
    $addButton[close~$authorID~message~$messageID;Close;Danger;✖️]
  `
}];

export default Panel;