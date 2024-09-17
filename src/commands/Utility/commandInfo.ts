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
    name: "commandinfo",
    aliases: ['command-info','command','cmd'],
    type: "messageCreate",
    module: "Utility",
    sourcecode: "SRC/commands/help/commandinfo.js",
    documentation: "commandinfo",
    version: "1.0.0",
    usage: "commandinfo {command}",
    description: "See information about a command.",
    example: "commandinfo about",
    code: `
      $onlyIf[$getUserVar[AgreedToTos;$authorID]==true;$ephemeral $color[$getUserVar[color;$authorID]] $title[Before we continue:] $footer[You have to agree with these terms before using akira.] $description[Before you proceed, please make sure to read and agree to our [Terms of Service\\](https://akira.lynnux.xyz/terms) and [Privacy Policy\\](https://akira.lynnux.xyz/policy).\n\nBy using the button below, you confirm that you have read and agree to abide by our terms and policies.\n\nIf you have any questions or concerns, feel free to contact our support team.] $addActionRow $addButton[AcceptTerms-$authorID;I have read and agree to abide by these terms and policies.;Success;;false]]
      $onlyIf[$channelID==$getGuildVar[BotChannel;$guildID;$channelID];$getGlobalVar[BotChannelError]]

      $let[author;$getUserVar[uuid;$callFunction[customencrypt;encrypt;$authorID]]]

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
            $color[$if[$getUserVar[color;$get[author];false]!=false;$getUserVar[color;$get[author];#ff47ff];$getUserVar[color;$guildID;#ff47ff]]]
            $description[**Command:** \`$commandInfo[messageCreate;$message[0];name]\`\n**Aliases:**\n\`\`\`\n$replace[$replace[$replace[$replace[$commandInfo[$replace[messageCreate;\\[;;1];$message[0];aliases];    ;;-1];[;;1];\\];;1];";;-1]\n\`\`\`\n**Description:**  \`$commandInfo[messageCreate;$message[0];description]\`\n**Usage:** \`$if[$getUserVar[prefix;$get[author];false]!=false;$getUserVar[prefix;$get[author];a.];$getUserVar[prefix;$guildID;a.]]$commandInfo[messageCreate;$message[0];usage]\`\n**Version:** \`$commandInfo[messageCreate;$message[0];version]\`\n**Example:**\n\`\`\`\n$if[$getUserVar[prefix;$get[author];false]!=false;$getUserVar[prefix;$get[author];a.];$getUserVar[prefix;$guildID;a.]]$replace[$commandInfo[messageCreate;$message[0];example];{prefix};$if[$getUserVar[prefix;$get[author];false]!=false;$getUserVar[prefix;$get[author];a.];$getUserVar[prefix;$guildID;a.]];-1]\n\`\`\`\n**Module:** \`$commandInfo[messageCreate;$message[0];module]\`]
            $addActionRow
            $addButton[https://github.com/LynnuxDev/Akira/tree/V$commandInfo[messageCreate;$message[0];version]/$commandInfo[messageCreate;$message[0];sourcecode];Source-Code;Link;🌐]
            $addButton[https://documentation.lynnux.xyz/commands/$toLowerCase[$commandInfo[messageCreate;$message[0];module]]/$commandInfo[messageCreate;$message[0];documentation];Documentation;Link;📖]
            $addActionRow
            $addButton[close-$authorID;Close;Danger]
          ]
        ]
      ]
    `
  }
]

export default commands;