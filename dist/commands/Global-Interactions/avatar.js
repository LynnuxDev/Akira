"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commands = [
    {
        type: "interactionCreate",
        description: "Interaction used for userinfo and avatar",
        module: "Client",
        sourcecode: "src/commands/Global-Interactions/avatar.ts",
        documentation: "avatar",
        usage: "N/A",
        example: "N/A",
        version: "1.0.0",
        code: `
      $textSplit[$customID;~]
      $c[
        $splitText[0] == Custom ID Name
        $splitText[1] == userID
        $splitText[2] == authorID
      ]

      $c[$logger[Info;$splitText[2] == $authorID]]
      $disableConsoleErrors

      $onlyIf[$splitText[0]==userAvatar;]
      $onlyIf[$splitText[2]==$authorID;]

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

      $interactionUpdate[
        $author[UserInfo: "$username[$splitText[1]]";$get[userAvatar]]
        $color[$getUserVar[color;$splitText[1]]]
        $if[$get[memberAvatar]!=$get[userAvatar];$thumbnail[$get[memberAvatar]]]
        $image[$get[userAvatar]]

        $addActionRow
        $addButton[userInfo~$splitText[1]~$splitText[2];UserAvatar;Secondary;;false]
        $addButton[memberAvatar~$splitText[1]~$splitText[2];MemberAvatar;Primary;;$if[$get[userAvatar]==$get[memberAvatar];true;false]]
      ]
    `
    }, {
        type: "interactionCreate",
        description: "Interaction used for userinfo and avatar",
        module: "Client",
        sourcecode: "src/commands/Global-Interactions/avatar.ts",
        documentation: "avatar",
        usage: "N/A",
        example: "N/A",
        version: "1.0.0",
        code: `
      $textSplit[$customID;~]
      $c[
        $splitText[0] == Custom ID Name
        $splitText[1] == userID
        $splitText[2] == authorID
      ]

      $c[$logger[Info;$splitText[2] == $authorID]]
      $disableConsoleErrors

      $onlyIf[$splitText[0]==memberAvatar;]
      $onlyIf[$splitText[2]==$authorID;]

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

      $interactionUpdate[
        $author[UserInfo: "$username[$splitText[1]]";$get[userAvatar]]
        $color[$getUserVar[color;$splitText[1]]]
        $thumbnail[$get[userAvatar]]
        $image[$get[memberAvatar]]

        $addActionRow
        $addButton[userAvatar~$splitText[1]~$splitText[2];UserAvatar;Primary;;false]
        $addButton[userInfo~$splitText[1]~$splitText[2];MemberAvatar;Secondary;;$if[$get[userAvatar]==$get[memberAvatar];true;false]]
      ]
    `
    }
];
exports.default = commands;
//# sourceMappingURL=avatar.js.map