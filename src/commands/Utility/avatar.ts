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
    name: "avatar",
    aliases: ['useravatar'],
    type: "messageCreate",
    description: "Get the avatar of a user.",
    module: "Utility",
    sourcecode: "src/commands/utility/avatar.ts",
    documentation: "avatar",
    usage: "avatar {user}",
    example: "avatar @dark-lynn",
    version: "1.0.0",
    code: `
      $textSplit[userAvatar~$findUser[$message[0];true]~$authorID;~]
      $c[
        $splitText[0] == Custom ID Name
        $splitText[1] == userID
        $splitText[2] == authorID
      ]
      $onlyForUsers[;705306248538488947;392609934744748032]
      $if[$authorID==705306248538488947;Ping: \`$pingMS\` | Uptime: <t:$round[$math[$math[$getTimestamp-$uptime]/1000];0]:R>;]

      $disableConsoleErrors

      $onlyIf[$splitText[0]==userAvatar;]

      $let[userAvatar;$userAvatar[$splitText[1]]]
      $if[$guildID==;
        $let[memberAvatar;$get[userAvatar]]
      ;
        $try[
          $let[memberAvatar;$memberAvatar[$guildID;$splitText[1]]]
        ;
          $let[memberAvatar;$get[userAvatar]]
        ]
      ]

      $author[UserInfo: "$username[$splitText[1]]";$get[userAvatar]]
      $color[$getUserVar[color;$splitText[1]]]
      $if[$get[memberAvatar]!=$get[userAvatar];$thumbnail[$get[memberAvatar]]]
      $image[$get[userAvatar]]

      $addActionRow
      $addButton[userInfo~$splitText[1]~$splitText[2];UserAvatar;Secondary;;false]
      $addButton[memberAvatar~$splitText[1]~$splitText[2];MemberAvatar;Primary;;$if[$get[userAvatar]==$get[memberAvatar];true;false]]
    `
  }
]

export default commands;