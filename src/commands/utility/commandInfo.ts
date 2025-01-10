import { Command } from '@/types';

const CommandInfo: Command[] = [
  {
    name: 'commandinfo',
    aliases: ['command-info', 'command', 'cmd'],
    type: 'messageCreate',
    module: 'utility',
    sourcecode: 'SRC/commands/help/commandinfo.js',
    documentation: 'commandinfo',
    version: '1.0.0',
    usage: 'commandinfo {command}',
    description: 'See information about a command.',
    example: 'commandinfo about',
    code: `
      $let[author;$callFunction[customEncrypt;encrypt;$authorID]]
      $let[uuid;$getUserVar[uuid;$get[author]]]

      $checkAgreedToTos
      $onlyIf[$channelID==$getGuildVar[BotChannel;$guildID;$channelID];$getGlobalVar[BotChannelError]]

      $c[get the module]
      $textSplit[$commandInfo[messageCreate;$message[0];path];/]
      $let[module;$splitText[$math[$getSplitTextLength-2]]]

      $switch[$if[$message[0]==;true;false];
        $case[true;
          $interactionReply[
            $color[$getUserVar[color;$authorID]]
            $title[Commandinfo:]
            $description[This command is used to see information about a command.\n\n\nExample of what this will return:\n\`\`\`\nAliases: [List of alternative commands.\\]\nDescription: Command Description.\nUsage: A example of how to use the command.\nVersion: Version of the command.\n\nExample:\nHere you will see a examples.\n\`\`\`]
          ]
        ]
        $case[false;
          $if[$commandInfo[messageCreate;$message[0];name]==;
            $color[$getGlobalVar[colorError]]
            $footer[Error code: "708" | Meaning: "$env[result;708;meaning]"]
            $arrayLoad[title;,;$env[result;708;title]]
            $title[$replace[$replace[$replace[$arrayRandomValue[title];";;2];\\];;1];[;;1]]
            $description[$env[result;708;description]]
          ;
            $title[Commandinfo: "$message[0]"]
            $color[$if[$getUserVar[color;$get[uuid];false]!=false;$getUserVar[color;$get[uuid];#ff47ff];$getUserVar[color;$guildID;#ff47ff]]]
            $description[**Command:** \`$commandInfo[messageCreate;$message[0];name]\`\n**Aliases:**\n\`\`\`\n$replace[$replace[$replace[$replace[$commandInfo[$replace[messageCreate;\\[;;1];$message[0];aliases];    ;;-1];[;;1];\\];;1];";;-1]\n\`\`\`\n**Description:**  \`$commandInfo[messageCreate;$message[0];description]\`\n**Usage:** \`$if[$getUserVar[prefix;$get[author];false]!=false;$getUserVar[prefix;$get[author];$getGlobalVar[prefix]];$getUserVar[prefix;$guildID;a.]]$commandInfo[messageCreate;$message[0];usage]\`\n**Version:** \`$commandInfo[messageCreate;$message[0];version]\`\n**Example:**\n\`\`\`\n$if[$getUserVar[prefix;$get[author];false]!=false;$getUserVar[prefix;$get[author];a.];$getUserVar[prefix;$guildID;a.]]$replace[$commandInfo[messageCreate;$message[0];example];{prefix};$if[$getUserVar[prefix;$get[author];false]!=false;$getUserVar[prefix;$get[author];a.];$getUserVar[prefix;$guildID;a.]];-1]\n\`\`\`\n**Module:** \`$get[module]\`]
            $addActionRow
            $addButton[close~$authorID~commandinfo;Close;Danger]
            $addButton[https://github.com/LynnuxDev/Akira/tree/V$commandInfo[messageCreate;$message[0];version]/$commandInfo[messageCreate;$message[0];sourcecode];Source-Code;Link;🌐]
            $addButton[https://documentation.lynnux.xyz/akira/$toLowerCase[$commandInfo[messageCreate;$message[0];module]]/$commandInfo[messageCreate;$message[0];documentation];Documentation;Link;📖]
          ]
        ]
      ]
    `
  }
];

export default CommandInfo;
