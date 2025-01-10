import { Command } from '@/types';

const Panel: Command[] = [
  // PanelNext Button
  {
    type: 'interactionCreate',
    module: 'dev',
    version: 'V1.0.0',
    code: `
      $textSplit[$customID;~]

      $onlyIf[$splitText[0]==panelNext;]
      $onlyIf[$splitText[1]==$authorID;$ephemeral $customError[716;panel]]

      $interactionUpdate[
        $color[$getGlobalVar[color]]
        $title[Shards Info:]
        $thumbnail[$userAvatar[$clientID]]
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
    module: 'dev',
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
        $thumbnail[$userAvatar[$clientID]]
        $addField[Server Info;- <:Website:$if[$environment==main;1263809959267930213;1271544143423996005]> Ip: ||$get[ip]||\n- <:Clock:$if[$environment==main;1263809772478529576;1271543787637833759]> Uptime: <t:$round[$math[$round[$math[$getTimestamp/1000];0]-$osUptime];0]:R>\n- <:CPU:$if[$environment==main;1263809787661910050;1271543827395772517]> CPU: \`$round[$get[cpuUsage];2]%\` - {$cpuCores}\n- <:Server:$if[$environment==main;1263809924295819285;1271544093838938235]> Ram: \`$ram[true;true]\`;true]

        $addField[Process Info;- <:Clock:$if[$environment==main;1263809772478529576;1271543787637833759]> Uptime: <t:$round[$math[$math[$getTimestamp-$uptime]/1000];0]:R>\n- <:CPU:$if[$environment==main;1263809787661910050;1271543827395772517]> CPU: \n- <:Server:$if[$environment==main;1263809924295819285;1271544093838938235]> Ram: \`$ram[true;false]\`;true]

        $addField[;;true]
        $addField[Client Info;**Client Stats:**\n- <:Roles:$if[$environment==main;1263809915529728072;1271544076491292736]> Guilds: \`$guildCount\`\n- <:members:$if[$environment==main;1263809852145270926;1271543939576627322]> Users: \`$userCount\`\n- <:shard:$if[$environment==main;1263809940569456650;1271544119080259666]> Shards: \`$shardsOnline/$shardCount\`\n- <:Plus:$if[$environment==main;1263809898878210149;1271544047579693148]> Commands: \`$commandCount\`;true]
        $addField[<:Spacer:$if[$environment==main;1324808760207736842;1275843251349356675]>;<:Spacer:$if[$environment==main;1324808760207736842;1275843251349356675]>\n- <:Akira_Active_Dev:$if[$environment==main;1263809801817821278;1271546151543373906]> CMDs since startup: \`$getGlobalVar[startCommands]\`\n- <:ping:$if[$environment==main;1263809890468499508;1271544029053452297]> DB Latency: \`$dbPing\`\n- <:ping:$if[$environment==main;1263809890468499508;1271544029053452297]> WS Latency: \`$pingms\`\n- <:ping:$if[$environment==main;1263809890468499508;1271544029053452297]> RoundTrip Latency: \`$roundtrip\`;true]
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
    module: 'dev',
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
- <:shard:$if[$environment==main;1263809940569456650;1271544119080259666]> shardID: \`$guildShardID\`
- <:Akira_Active_Dev:$if[$environment==main;1263809794632974346;1271543843157971014]> Joined: \`Join time stamp\`
        ;true]
        $addField[Stats:;
- <:Date:$if[$environment==main;1263809801817821278;1271546151543373906]> Slash Used: \`NaN\`
- <:Date:$if[$environment==main;1263809801817821278;1271546151543373906]> Message Used: \`NaN\`
        ;true]

        $addActionRow
        $addButton[panelPrevGuild~$authorID~0;;Secondary;◀️;true]
        $addButton[resetGuildPanel~$authorID;Reset;Danger;🗑️;false]
        $addButton[banGuildPanel~$guildID;ban;Danger;🔨;false]
        $addButton[panelNextGuild~$authorID~0;;Secondary;▶️;false]

        $addActionRow
        $addButton[close~$authorID~message~$messageID;Close;Danger;✖️]
        $addButton[panelPrevious~$authorID;Developer;Secondary;;false]
      ]
    `
  },
  {
    type: 'interactionCreate',
    version: 'V1.0.0',
    module: 'dev',
    code: `
      $textSplit[$customID;~]

      $onlyIf[$splitText[0]==panelNextGuild;]
      $onlyIf[$splitText[1]==$authorID;$ephemeral $customError[716;panel]]

      $interactionUpdate[
        $color[$getGlobalVar[color]]
        $title[Developer Guild Panel:]
        $thumbnail[$guildIcon[$guildID;2048;webp;false]]
        $description[**Guild Permissions:**\n\`\`\`\n$memberPerms[$guildID;$clientID;,\n]\n\`\`\`]
        $addActionRow
        $addButton[panelGuild~$authorID~1;;Secondary;◀️;false]
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