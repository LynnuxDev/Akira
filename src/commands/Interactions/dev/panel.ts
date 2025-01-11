import { Command } from '@/types';

const Panel: Command[] = [
  // PanelButton Button
  {
    type: 'interactionCreate',
    module: 'dev',
    version: 'V1.0.0',
    code: `
      $textSplit[$customID;~]

      $onlyIf[$splitText[0]==panelButton;]
      $onlyIf[$splitText[1]==$authorID;$ephemeral $customError[716;panel]]

      $switch[$splitText[2];
        $case[0;
          $interactionUpdate[
            $if[$guildID==;$!httpRequest[https://api.ipify.org/?format=json;GET] $let[ip;$httpResult[ip]];$let[ip;REDACTED]]
            $color[$getGlobalVar[color]]
            $title[Developer Panel:]
            $thumbnail[$userAvatar[$clientID]]
            $addField[Server Info;- <:Website:$if[$environment==main;1263809959267930213;1271544143423996005]> Ip: ||$get[ip]||\n- <:Clock:$if[$environment==main;1263809772478529576;1271543787637833759]> Uptime: <t:$round[$math[$round[$math[$getTimestamp/1000];0]-$osUptime];0]:R>\n- <:CPU:$if[$environment==main;1263809787661910050;1271543827395772517]> CPU: \`$round[$get[cpuUsage];2]%\` - {$cpuCores}\n- <:Server:$if[$environment==main;1263809924295819285;1271544093838938235]> Ram: \`$ram[true;true]\`;true]
            $addField[Process Info;- <:Clock:$if[$environment==main;1263809772478529576;1271543787637833759]> Uptime: <t:$round[$math[$math[$getTimestamp-$uptime]/1000];0]:R>\n- <:CPU:$if[$environment==main;1263809787661910050;1271543827395772517]> CPU: \n- <:Server:$if[$environment==main;1263809924295819285;1271544093838938235]> Ram: \`$ram[true;false]\`;true]

            $addField[;;true]
            $addField[Client Info;**Client Stats:**\n- <:Roles:$if[$environment==main;1263809915529728072;1271544076491292736]> Guilds: \`$guildCount\`\n- <:members:$if[$environment==main;1263809852145270926;1271543939576627322]> Users: \`$userCount\`\n- <:shard:$if[$environment==main;1263809940569456650;1271544119080259666]> Shards: \`$shardsOnline/$shardCount\`\n- <:Plus:$if[$environment==main;1263809898878210149;1271544047579693148]> Commands: \`$commandCount\`;true]
            $addField[<:Spacer:$if[$environment==main;1324808760207736842;1275843251349356675]>;<:Spacer:$if[$environment==main;1324808760207736842;1275843251349356675]>\n- <:ping:$if[$environment==main;1263809890468499508;1271544029053452297]> DB Latency: \`$dbPing\`\n- <:ping:$if[$environment==main;1263809890468499508;1271544029053452297]> WS Latency: \`$pingms\`\n- <:ping:$if[$environment==main;1263809890468499508;1271544029053452297]> RT Latency: \`$roundtrip\`;true]
            $addField[;;true]

            $addActionRow
            $addButton[panelButton~$authorID~0;;Secondary;◀️;true]
            $addButton[panelGuild~$authorID;Guild;Secondary;;$if[$guildID==;true;false]]
            $addButton[panelButton~$authorID~1;;Secondary;▶️;false]
            $addButton[close~$authorID~message~$messageID;Close;Danger;✖️]
          ]
        ]
        $case[1;
          $interactionUpdate[
            $color[$getGlobalVar[color]]
            $title[Shards Info:]
            $thumbnail[$userAvatar[$clientID]]
            $description[Total Shards: \`$shardCount\` | <:Online:827491388530360321> \`$shardsOnline\` | <:Idle:827491473271685170> \`$shardsIdle\` | <:Offline:827492369679122433> \`$shardsOffline\`]
            $addField[;\`\`\`$replace[$replace[$replace[$replace[$replace[$shardsStatus;{;;1];};;1];";;-1];:;: ;-1];,;;-1]\`\`\`]

            $addActionRow
            $addButton[panelButton~$authorID~0~1;;Secondary;◀️;false]
            $addButton[panelGuild~$authorID;Guild;Secondary;;$if[$guildID==;true;false]]
            $addButton[panelButton~$authorID~2~1;;Secondary;▶️;false]
          ]
        ]
        $case[2;
          $interactionUpdate[
            $color[$getGlobalVar[color]]
            $title[Command Usage Info:]
            $addField[<:Akira_Active_Dev:$if[$environment==main;1263809801817821278;1271546151543373906]> Slash Usage:;
<:NextContinue:936952796056518686> Total Uses: \`$getGlobalVar[totalSlashUses]\`
<:NextContinue:936952796056518686> Monthly Uses: \`$getGlobalVar[monthSlashUses]\`
<:NextContinue:936952796056518686> Weekly Uses: \`$getGlobalVar[weekSlashUses]\`
<:NextContinue:936952796056518686> Daily Uses: \`$getGlobalVar[daySlashUses]\`
<:NextStop:936952858711052318> Session Uses: \`$getGlobalVar[sessionSlashUses]\`
            ;true]
            $addField[<:Commands:$if[$environment==main;1263809779818692700;1271543811390050414]> Message Usage:;
<:NextContinue:936952796056518686> Total Uses: \`$getGlobalVar[totalMessageUses]\`
<:NextContinue:936952796056518686> Monthly Uses: \`$getGlobalVar[monthMessageUses]\`
<:NextContinue:936952796056518686> Weekly Uses: \`$getGlobalVar[weekMessageUses]\`
<:NextContinue:936952796056518686> Daily Uses: \`$getGlobalVar[dayMessageUses]\`
<:NextStop:936952858711052318> Session Uses: \`$getGlobalVar[sessionMessageUses]\`
            ;true]
            $addField[<:Plus:$if[$environment==main;1263809898878210149;1271544047579693148]> Button Usage:;
<:NextContinue:936952796056518686> Total Pressed: \`$getGlobalVar[totalButtonUses]\`
<:NextContinue:936952796056518686> Monthly Pressed: \`$getGlobalVar[monthButtonUses]\`
<:NextContinue:936952796056518686> Weekly Pressed: \`$getGlobalVar[weekButtonUses]\`
<:NextContinue:936952796056518686> Daily Pressed: \`$getGlobalVar[dayButtonUses]\`
<:NextStop:936952858711052318> Session Pressed: \`$getGlobalVar[sessionButtonUses]\`
            ;true]
            $addField[<:Error:$if[$environment==main;1269706678039744574;1327339457279688811]> Errors:;
<:NextContinue:936952796056518686> Total Errors: \`$getGlobalVar[totalErrors]\`
<:NextContinue:936952796056518686> Monthly Errors: \`$getGlobalVar[monthErrors]\`
<:NextContinue:936952796056518686> Weekly Errors: \`$getGlobalVar[weekErrors]\`
<:NextContinue:936952796056518686> Daily Errors: \`$getGlobalVar[dayErrors]\`
<:NextStop:936952858711052318> Session Errors: \`$getGlobalVar[sessionErrors]\`
            ;true]
            $footer[Weekly resets "Mon" | Monthly reset every "1st"]

            $addActionRow
            $addButton[panelButton~$authorID~1~2;;Secondary;◀️;false]
            $addButton[panelGuild~$authorID;Guild;Secondary;;$if[$guildID==;true;false]]
            $addButton[panelButton~$authorID~3~2;;Secondary;▶️;true]
          ]
        ]
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
      $let[guild;$customEncrypt[encrypt;$guildID]]

      $interactionUpdate[
        $color[$getGlobalVar[color]]
        $title[Developer Guild Panel:]
        $thumbnail[$guildIcon[$guildID;2048;webp;false]]
        $description[**Guild Banned:** \`False\`]
        $addField[Bot Info:;
- <:shard:$if[$environment==main;1263809940569456650;1271544119080259666]> shardID: \`$guildShardID\`
- <:Akira_Active_Dev:$if[$environment==main;1263809794632974346;1271543843157971014]> Joined: <t:$round[$math[$memberJoinedAt[$guildID;$clientID]/1000]]:R>
        ;true]
        $addField[Stats:;
- <:Date:$if[$environment==main;1263809801817821278;1271546151543373906]> Slash Used: \`$getGuildVar[totalSlashUses;$customEncrypt[encrypt;$guildID]]\`
- <:Date:$if[$environment==main;1263809801817821278;1271546151543373906]> Message Used: \`$getGuildVar[totalMessageUses;$customEncrypt[encrypt;$guildID]]\`
        ;true]
        $addField[Values:;
- <:settings:$if[$environment==main;1263809931476336662;1271544107851845683]> Lang: \`$getLang[$guildID]\`
- <:settings:$if[$environment==main;1263809931476336662;1271544107851845683]> Color: \`$getGuildVar[color;$get[guild]]\`
- <:settings:$if[$environment==main;1263809931476336662;1271544107851845683]> Prefix: \`$getGuildVar[prefix;$get[guild]]\`
- <:settings:$if[$environment==main;1263809931476336662;1271544107851845683]> invalidNotify: \`$getGuildVar[invalidNotify;$get[guild]]\`
        ;false]

        $addActionRow
        $addButton[panelPrevGuild~$authorID~0;;Secondary;◀️;true]
        $addButton[resetGuildPanel~$authorID;Reset;Danger;🗑️;false]
        $addButton[banGuildPanel~$authorID~modal;ban;Danger;🔨;false]
        $addButton[panelNextGuild~$authorID~0;;Secondary;▶️;false]

        $addActionRow
        $addButton[close~$authorID~message~$messageID;Close;Danger;✖️]
        $addButton[panelButton~$authorID~0;Developer;Secondary;;false]
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
        $addButton[banGuildPanel~$authorID~modal;ban;Danger;🔨;false]
        $addButton[panelNextGuild~$authorID~1;;Secondary;▶️;true]

        $addActionRow
        $addButton[close~$authorID~message~$messageID;Close;Danger;✖️]
        $addButton[panelButton~$authorID~0;Developer;Secondary;;false]
      ]
    `
  },
  {
    type: 'interactionCreate',
    version: 'V1.0.0',
    module: 'dev',
    code: `
      $textSplit[$customID;~]

      $onlyIf[$splitText[0]==banGuildPanel;]
      $onlyIf[$splitText[1]==$authorID;$ephemeral $customError[716;panel]]

      $switch[$splitText[2];
        $case[modal;
          $!modal[banGuildPanel~$authorID~submit;Guild Banishment modal:]
          $!addTextInput[guild;GuildID;Paragraph;true;$guildID;$guildID;5;50]
          $!addTextInput[reason;Reason;Paragraph;true;Not Given;This guild or the owner has broken the Akira [Terms Of Service\\](https://akira.lynnux.xyz/terms).;1;1999]

          $!showModal
        ]

        $case[submit;
          $!jsonLoad[banned;$readFile[/media/lynnux/[E\\] Other/Codes/@Github/@LynnuxDev/Akira-Beta/files/banned.json]]
          $!jsonLoad[bannedGuilds;$env[banned;guild]]
          $!arrayPush[bannedGuilds;$guildID]
          $!jsonSet[banned;guild;$env[bannedGuilds]]
          $!writeFile[/media/lynnux/[E\\] Other/Codes/@Github/@LynnuxDev/Akira-Beta/files/banned.json;$env[banned]]

          $interactionUpdate[
            $color[$getGlobalVar[colorError]]
            $title[Guild Banned:]
            $thumbnail[$guildIcon[$guildID;2048;webp;false]]
            $description[This guild (**$guildName**) has been banned from akira.]
            $addField[Reason:;$input[reason]]
            $footer[They can request a unban with a.request.]
            $addActionRow
            $addButton[panelGuild~$authorID;Return;Secondary;;false]
            $addButton[close~$authorID~message~$messageID;Close;Danger;✖️]
          ]
        ]
      ]
    `
  }
];

export default Panel;