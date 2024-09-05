interface CustomFunction {
  name: string,
  params: string[],
  code: string,
}

const functions: CustomFunction[] = [
  {
    name: "customerror",
    params: ["errorid","type","cmdid"],
    code: `
      $jsonLoad[result;$readFile[./files/errors.json]]
      $jsonLoad[command;$readFile[./files/commands.json]]
      $sendMessage[1083095711094149180;
        $color[#d50056]
        $title[A error $env[errorid] in "$env[command;slash;$env[cmdid];main]"]
        $description[**in:** $if[$env[type]==slash;<$env[command;slash;$env[cmdid];main]:$env[cmdid]>;$env[command;main;$env[cmdid];main]]\n**Error:** \`$env[errorid] ($env[result;$env[errorid];meaning])\`\n**Error Message:** \n\`\`\`$env[result;$env[errorid];description]\`\`\`]
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