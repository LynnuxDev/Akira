interface CustomFunction {
  name: string,
  params: string[],
  code: string,
}

const functions: CustomFunction[] = [
  {
    name: "errorEmbed",
    params: ["errorid","type","cmdid"],
    code: `
      $jsonLoad[result;$readFile[./files/errors.json]]
      $jsonLoad[command;$readFile[./files/commands.json]]
      $sendMessage[1083095711094149180;
        $color[#d50056]
        $switch[$toLowercase[$env[type]];
          $case[slash;
            $title[A error $env[errorid] in "$env[command;slash;$env[cmdid];main]"]
            $description[**in:** <$env[command;slash;$env[cmdid];main]:$env[cmdid]>\n**Error:** \`$env[errorid] ($env[result;$env[errorid];meaning])\`\n**Error Message:** \n\`\`\`$env[result;$env[errorid];description]\`\`\`]
          ]
          $case[default;
            $title[A error $env[errorid] in "$replace[$env[command;$env[type];$env[cmdid];main];{prefix};$getGuildVar[prefix;$customEncrypt[encrypt;$guildID;$getGlobalVar[prefix;a.]]]]"]
            $description[**in:** $replace[$env[command;$env[type];$env[cmdid];main];{prefix};$getGuildVar[prefix;$customEncrypt[encrypt;$guildID;$getGlobalVar[prefix;a.]]]]\n**Error:** \`$env[errorid] ($env[result;$env[errorid];meaning])\`\n**Error Message:** \n\`\`\`$env[result;$env[errorid];description]\`\`\`]
          ]
        ]
        $addField[Isued:;**Author:** <@$authorID> ||$authorID||\n**Usage:** \n\`$env[command;slash;$env[cmdid];main] $getUserVar[error;$authorID]\`;true]
        $if[$guildID!=;
          $attachment[$memberPerms[$guildID;$clientID;,\n];result.actionscript;true]
          $addField[GuildInfo:;**Guild**: $guildName[$guildID] ~ ||$guildID||\n**Permissions**: \`in file attached\`;true]
        ]
      ]
    `
  }
]

export default functions;