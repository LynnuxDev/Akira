import { InteractionCommand } from '@/types';

const Panel: InteractionCommand[] = [
  // PanelNext Button
  {
    type: 'interactionCreate',
    version: 'V1.0.0',
    code: `
      $textSplit[$customID;~]

      $onlyIf[$splitText[0]==panelNext;]
      $onlyIf[$splitText[1]==$authorID;$ephemeral $customError[716;panel]]

      $interactionUpdate[
        $color[$getGlobalVar[color]]
        $title[Shards Info:]
        $description[Total Shards: \`$shardCount\` | <:Online:827491388530360321> \`$shardsOnline\` | <:Idle:827491473271685170> \`$shardsIdle\` | <:Offline:827492369679122433> \`$shardsOffline\`]
        $addField[;\`\`\`$replace[$replace[$replace[$replace[$replace[$shardsStatus;{;;1];};;1];";;-1];:;: ;-1];,;;-1]\`\`\`]

        $addActionRow
        $addButton[panelPrevious~$authorID~1;;Secondary;◀️;false]
        $addButton[panelGuild~$authorID;Guild;Secondary;;$if[$guildID==;true;false]]
        $addButton[panelNext~$authorID~1;;Secondary;▶️;true]
      ]
    `
  },
  // PanelPrevious Button
  {
    type: 'interactionCreate',
    version: 'V1.0.0',
    code: `
      $textSplit[$customID;~]

      $onlyIf[$splitText[0]==panelPrevious;]
      $onlyIf[$splitText[1]==$authorID;$ephemeral $customError[716;panel]]

      $if[$guildID==;
        $!httpRequest[https://api.ipify.org/?format=json;GET]
        $let[ip;$httpResult[ip]]
      ;
        $let[ip;REDACTED]
      ]

      $interactionUpdate[
        $color[$getGlobalVar[color]]
        $title[Developer Panel:]
        $addField[Server Info;- <:Website:1271544143423996005> Ip: ||$get[ip]||\n- <:Clock:1271543787637833759> Uptime: <t:$round[$math[$round[$math[$getTimestamp/1000];0]-$osUptime];0]:R>\n- <:CPU:1271543827395772517> CPU: \`$round[$get[cpuUsage];2]%\` - {$cpuCores}\n- <:Server:1271544093838938235> Ram: \`$ram[true;true]\`;true]
        $addField[Process Info;- <:Clock:1271543787637833759> Uptime: <t:$round[$math[$math[$getTimestamp-$uptime]/1000];0]:R>\n- <:CPU:1271543827395772517> CPU: \`$cpuUsage[false]% {$cpuCores}\`\n- <:Server:1271544093838938235> Ram: \`$ram[true;false]\`;true]
        $addField[;;true]
        $addField[Client Info;**Client Stats:**\n- <:Roles:1271544076491292736> Guilds: \`$guildCount\`\n- <:members:1271543939576627322> Users: \`$userCount\`\n- <:shard:1271544119080259666> Shards: \`$shardsOnline/$shardCount\`\n- <:Plus:1271544047579693148> Commands: \`$commandCount\`;true]
        $addField[<:Spacer:1275843251349356675>;<:Spacer:1275843251349356675>\n- <:Akira_Active_Dev:1271546151543373906> Commands used since startup: \`$getGlobalVar[startCommands]\`\n- <:ping:1271544029053452297> DB Latency: \`$dbPing\`\n- <:ping:1271544029053452297> WS Latency: \`$pingms\`\n- <:ping:1271544029053452297> RoundTrip Latency: \`$roundtrip\`;true]
        $addField[;;true]

        $addActionRow
        $addButton[panelPrevious~$authorID~1;;Secondary;◀️;true]
        $addButton[panelGuild~$authorID;Guild;Secondary;;$if[$guildID==;true;false]]
        $addButton[panelNext~$authorID~1;;Secondary;▶️;false]
        $addButton[close~$authorID~message~$messageID;Close;Danger;✖️]
      ]
    `
  },
  // panelGuild Button
  {
    type: 'interactionCreate',
    version: 'V1.0.0',
    code: `
      $textSplit[$customID;~]

      $onlyIf[$splitText[0]==panelGuild;]
      $onlyIf[$splitText[1]==$authorID;$ephemeral $customError[716;panel]]

      $interactionUpdate[
        $color[$getGlobalVar[color]]
        $title[Developer Guild Panel:]
        $thumbnail[$guildIcon[$guildID;2048;webp;false]]
        $description[**Guild Banned:** \`False\`]
        $addField[Bot Info:;
shardID: \`$guildShardID\`
Joined: \`Join time stamp\`
        ;true]
        $addField[Stats:;
Slash Commands Used: \`NaN\`
Message Commands Used: \`NaN\`
        ;true]

        $addActionRow
        $addButton[panelPrevGuild~$authorID~1;;Secondary;◀️;true]
        $addButton[resetGuildPanel~$authorID;Reset;Danger;🗑️;false]
        $addButton[banGuildPanel~$guildID;ban;Danger;🔨;false]
        $addButton[panelNextGuild~$authorID~1;;Secondary;▶️;true]

        $addActionRow
        $addButton[close~$authorID~message~$messageID;Close;Danger;✖️]
        $addButton[panelPrevious~$authorID;Developer;Secondary;;false]
      ]
    `
  }
];

export default Panel;