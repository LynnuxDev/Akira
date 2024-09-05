"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commands = [
    {
        name: "userinfo",
        aliases: ['user', 'whois'],
        type: "messageCreate",
        description: "Get info on a user.",
        module: "Utility",
        sourcecode: "src/commands/utility/userInfo.ts",
        documentation: "userinfo",
        usage: "userinfo {user}",
        example: "userinfo @dark-lynn",
        version: "1.0.0",
        code: `
      $disableConsoleErrors

      $let[author;$authorID]
      $let[user;$findUser[$message[0];true]]
      $let[userAvatar;$userAvatar[$get[user]]]
      $if[$guildID==;
        $let[memberAvatar;$get[userAvatar]]
      ;
        $try[
          $let[memberAvatar;$memberAvatar[$guildID;$get[user]]]
        ;
          $let[memberAvatar;$get[userAvatar]]
        ]
      ]

      $reply[$channelID;$messageID]
      $author[UserInfo: "$username[$get[user]]";$get[userAvatar]]
      $color[$getUserVar[color;$get[user]]]
      $thumbnail[$get[memberAvatar]]
      $addField[**User Info:**;<:Discord:1271543869233823774> **Username:** <@$get[user]> ~ \`@$username[$get[user]]$if[$discriminator[$get[user]]!=0;#$discriminator[$get[user]]]\`\n<:ID:1271543923600265278> **UserID:** \`$get[user]\`\n<:Date:1271543843157971014> **Created:** <t:$round[$math[$userCreatedAt[$get[user]]/1000]]:D> ~ <t:$round[$math[$userCreatedAt[$get[user]]/1000]]:R>\n<:Plus:1271544047579693148> **Badges:** $replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$userBadges[$get[user];, ];ActiveDeveloper;$callFunction[emoji;active-developer];1];HypeSquadOnlineHouse1;$callFunction[emoji;hypesquad-bravery];1];HypeSquadOnlineHouse3;$callFunction[emoji;hypesquad-balance];1];VerifiedBot;$callFunction[emoji;verified-bot];1];HypeSquadOnlineHouse2;$callFunction[emoji;hypesquad-brilliance];1];Staff;$callFunction[emoji;discord-staff];1];Hypesquad;$callFunction[emoji;hypesquad-event];1];VerifiedDeveloper;$callFunction[emoji;verified-developer];1];PremiumEarlySupporter;$callFunction[emoji;discord-early-support];1];CertifiedModerator;$callFunction[emoji;discord-moderator];1];BugHunterLevel2;$callFunction[emoji;discord-bughunter-two];1];BugHunterLevel1;$callFunction[emoji;discord-bughunter-one];1]]

      $if[$try[$memberExists[$guildID;$get[user]];false]==true;
        $addField[**Member Info:**;<:Discord:1271543869233823774> **Nickname:** $try[$nickname[$guildID;$get[user]]]\n<:Boosters:1271543754376876052> **Booster:** $try[$if[$hasRoles[$guildID;$get[user];$guildBoostRoleID[$guildID]]==true;Is boosting.;Is not boosting.]]\n<:Clock:1271543787637833759> **Joined:** $try[<t:$round[$math[$memberJoinedAt[$guildID;$get[user]]/1000]]:D> ~ <t:$round[$math[$memberJoinedAt[$guildID;$get[user]]/1000]]:R>]]
      ]
      $addActionRow
      $addButton[userAvatar~$get[user]~$get[author];UserAvatar;Primary;;false]
      $addButton[memberAvatar~$Get[user]~$get[author];MemberAvatar;Primary;;$if[$get[userAvatar]==$get[memberAvatar];true;false]]
    `
    }, {
        type: "interactionCreate",
        description: "Get info on a user.",
        module: "Utility",
        sourcecode: "src/commands/utility/userInfo.ts",
        documentation: "userinfo",
        usage: "userinfo {user}",
        example: "userinfo @dark-lynn",
        version: "1.0.0",
        code: `
      $textSplit[$customID;~]
      $c[
        $splitText[0] == Custom ID Name
        $splitText[1] == userID
        $splitText[2] == authorID
      ]

      $disableConsoleErrors

      $c[$logger[Info;$splitText[2] == $authorID]]
      $disableConsoleErrors

      $onlyIf[$splitText[0]==userInfo;]
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
        $thumbnail[$get[memberAvatar]]
        $addField[**User Info:**;<:Discord:1271543869233823774> **Username:** <@$splitText[1]> ~ \`@$username[$splitText[1]]$if[$discriminator[$splitText[1]]!=0;#$discriminator[$splitText[1]]]\`\n<:ID:1271543923600265278> **UserID:** \`$splitText[1]\`\n<:Date:1271543843157971014> **Created:** <t:$round[$math[$userCreatedAt[$splitText[1]]/1000]]:D> ~ <t:$round[$math[$userCreatedAt[$splitText[1]]/1000]]:R>\n<:Plus:1271544047579693148> **Badges:** $replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$userBadges[$splitText[1];, ];ActiveDeveloper;$callFunction[emoji;active-developer];1];HypeSquadOnlineHouse1;$callFunction[emoji;hypesquad-bravery];1];HypeSquadOnlineHouse3;$callFunction[emoji;hypesquad-balance];1];VerifiedBot;$callFunction[emoji;verified-bot];1];HypeSquadOnlineHouse2;$callFunction[emoji;hypesquad-brilliance];1];Staff;$callFunction[emoji;discord-staff];1];Hypesquad;$callFunction[emoji;hypesquad-event];1];VerifiedDeveloper;$callFunction[emoji;verified-developer];1];PremiumEarlySupporter;$callFunction[emoji;discord-early-support];1];CertifiedModerator;$callFunction[emoji;discord-moderator];1];BugHunterLevel2;$callFunction[emoji;discord-bughunter-two];1];BugHunterLevel1;$callFunction[emoji;discord-bughunter-one];1]]

        $if[$try[$memberExists[$guildID;$splitText[1]];false]==true;
          $addField[**Member Info:**;<:Discord:1271543869233823774> **Nickname:** $try[$nickname[$guildID;$splitText[1]]]\n<:Boosters:1271543754376876052> **Booster:** $try[$if[$hasRoles[$guildID;$splitText[1];$guildBoostRoleID[$guildID]]==true;Is boosting.;Is not boosting.]]\n<:Clock:1271543787637833759> **Joined:** $try[<t:$round[$math[$memberJoinedAt[$guildID;$splitText[1]]/1000]]:D> ~ <t:$round[$math[$memberJoinedAt[$guildID;$splitText[1]]/1000]]:R>]]
        ]
        $addActionRow
        $addButton[userAvatar~$splitText[1]~$splitText[2];UserAvatar;Primary;;false]
        $addButton[memberAvatar~$splitText[1]~$splitText[2];MemberAvatar;Primary;;$if[$get[userAvatar]==$get[memberAvatar];true;false]]
      ]
    `
    }
];
exports.default = commands;
//# sourceMappingURL=userInfo.js.map