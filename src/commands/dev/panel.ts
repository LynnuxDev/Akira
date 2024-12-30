import { Command } from "@/types";
import os from 'os';

const totalRAMBytes = os.totalmem();
const totalRAMMB = (totalRAMBytes / 1024 / 1024).toFixed(2);


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

    $let[cpuUsage;$djsEval[
      var os = require('os');
      const cpus = os.cpus();
      const totalIdle = cpus.reduce((acc, core) => acc + core.times.idle, 0);
      const totalTick = cpus.reduce((acc, core) => acc + Object.values(core.times).reduce((sum, val) => sum + val, 0), 0);
      const totalUsage = totalTick - totalIdle;
      (totalUsage / totalTick) * 100
    ]]

    $color[$getGlobalVar[color]]
    $title[Developer Panel:]
    $addField[Server Info;$trim[
      <:Website:1271544143423996005> Ip: ||$get[ip]||
      <:Clock:1271543787637833759> Uptime: <t:$round[$math[$round[$math[$getTimestamp/1000];0]-${os.uptime()}];0]:R>
      <:CPU:1271543827395772517> CPU: \`$round[$get[cpuUsage];2]%\` - {$cpuCores} @$cpuSpeed
      <:Server:1271544093838938235> Ram: \`$round[$ram;2]MB/${totalRAMMB}MB\`
    ];true]
    $addField[Process Info;$trim[
      <:Clock:1271543787637833759> Uptime: <t:$round[$math[$math[$getTimestamp-$uptime]/1000];0]:R>
      <:CPU:1271543827395772517> CPU: \`$cpuUsage% {$cpuCores} / $cpuUsage[true]% {1}\`
      <:Server:1271544093838938235> Ram: \`stats.memory\`
    ];true]
  `
}];

export default Panel;