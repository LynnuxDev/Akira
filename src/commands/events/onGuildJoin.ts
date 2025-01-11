import { Event } from '../../types';

const GuildJoin: Event[] = [{
  type: 'guildCreate',
  module: 'clientSpecific',
  version: 'v1.0.0',
  code: `
    $sendMessage[823241675521392711;
      $title[I joined "$guildName[$guildID]"]
      $thumbnail[$if[$guildIcon!=;$guildIcon;https://cdn.lynnux.xyz/images/No-Server_Icon-found.png]]
      $color[$getVar[color;default]]
      $description[**Guild**: \`$guildName\` ||$guildID||\n**Owner:**  \`$username[$guildOwnerID]\` - ||$guildOwnerID||\n**Members:** \`$guildMemberCount\`\n**Emotes:** $if[$charCount[$guildEmojis]<=555;$guildEmojis;$guildEmojiCount[$guildID]] \n**Boosts:** \`$guildBoostCount[$guildID]/$if[$guildBoostLevel==3;14;$if[$guildBoostLevel==2;7;$if[$guildBoostLevel==1;2;2]]]\` - \`level $guildBoostLevel\`]
    ]
    $if[$guildSystemChannelID!=;
      $sendMessage[$guildSystemChannelID;
        $color[$getGlobalVar[color]]
        $title[Thank you for adding me!]
        $thumbnail[$userAvatar[$clientID]]
        $description[Hey there! I'm **Akira**, an easy to use general purpose Discord bot that can do anything from Moderation, Economy & Automation to Roleplay, Search & other fun commands. And way more in-between!\n\nDon't forget that you can completely configure me like disabling commands, ignoring channels, setting up a custom prefix and a lot more! You can check \`Akira help settings\` for more information on configuring me. (some settings are in other sections)]
        $addField[Here are some useful links:;**Help Command:** \`akira help\`\n**Website:** [akira.lynnux.xyz\\](https://akira.lynnux.xyz)\n**Full Command List:** [/commands\\](https://akira.lynnux.xyz/commands)\n**Full Command List:** [/support\\](https://akira.lynnux.xyz/support)]
      ]
    ;
      $sendMessage[$channelID;
        $color[$getGlobalVar[color]]
        $title[Thank you for adding me!]
        $thumbnail[$userAvatar[$clientID]]
        $description[Hey there! I'm **Akira**, an easy to use general purpose Discord bot that can do anything from Moderation, Economy & Automation to Roleplay, Search & other fun commands. And way more in-between!\n\nDon't forget that you can completely configure me like disabling commands, ignoring channels, setting up a custom prefix and a lot more! You can check \`Akira help settings\` for more information on configuring me. (some settings are in other sections)]
        $addField[Here are some useful links:;**Help Command:** \`akira help\`\n**Website:** [akira.lynnux.xyz\\](https://akira.lynnux.xyz)\n**Full Command List:** [/commands\\](https://akira.lynnux.xyz/commands)\n**Full Command List:** [/support\\](https://akira.lynnux.xyz/support)]
      ]
    ]
  `
}];

export default GuildJoin;