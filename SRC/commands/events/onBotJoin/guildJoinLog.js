module.exports = {
    name: "bot.onGuildJoin",
    type: "guildCreate",
    code: `
    $sendMessage[823241675521392711;
        $title[I joined "$guildName[$guildID]"]
        $thumbnail[$if[$guildIcon!=;$guildIcon;https://cdn.lynnux.xyz/images/No-Server_Icon-found.png]]
        $color[$getVar[color;default]]
        $description[**Guild**: \`$guildName\` ||$guildID||\n**Owner:**  \`$username[$guildOwnerID]\` - ||$guildOwnerID||\n**Members:** \`$guildMemberCount\`\n**Emotes:** $if[$charCount[$guildEmojis]<=555;$guildEmojis;$guildEmojiCount[$guildID]] \n**Boosts:** \`$guildBoostCount[$guildID]/$if[$guildBoostLevel==3;14;$if[$guildBoostLevel==2;7;$if[$guildBoostLevel==1;2;2]]]\` - \`level $guildBoostLevel\`]
    ]
    $setVar[ServerFeatured;$guildID;$if[$getVar[ServerFeatured;$guildID]!=;$getVar[ServerFeatured;$guildID];true]]
    `
}
