module.exports = [{
    name: "avatar",
    aliases: ['useravatar','user-avatar','pfp','profilepicture','profilepic','av'],
    description: "See the avatar of a user..",
    type: "messageCreate",
    usage: "avatar {User}",
    module: "Utility",
    version: "1.0",
    sourcecode: "https://github.com/LynnuxDev/Akira/blob/main/SRC/commands/utility/avatar.js",
    documentation: "https://documentation.lynnux.xyz/commands/utility/avatar",
    example: "avatar @dark_lynn",
    code: `
        $if[$authorID==705306248538488947;Ping: \`$pingMS\` | Uptime: <t:$round[$math[$math[$getTimestamp-$uptime]/1000];0]:R>;]
        $onlyID[$hasPerms[$guildID;$botID;embedlinks]==true;$color[ff3333]$title[❌ Missing Permission!]$description[I'm missing the \`Use_External_Emojis\` Permission.]]
        $onlyID[$hasPerms[$guildID;$botID;sendmessages]==true;$dm[$authorID]$color[ff3333]$title[❌ Missing Permission!]$description[I'm missing the \`Use_External_Emojis\` Permission.]]

        $color[$getVar[color;default]]
        $title[uwu]
`}]
/* 
        $if[$authorID==705306248538488947;Ping: \`$pingMS\` | Uptime: <t:$round[$math[$math[$djsEval[Date.now();true]-$uptime[ms]]/1000]]:R>;]

        $color[$getGlobalUserVar[color;$get[user]]]
        $title[$username[$get[user]]'s Avatar]
        $thumbnail[$get[avatarURL]]
        $image[$if[$get[memberAvatar]==null;$get[avatarURL];$get[memberAvatarURL]]]

        $let[memberAvatarURL;https://cdn.discordapp.com/guilds/$guildID/users/$get[user]/avatars/$get[memberAvatar].webp?size=2048]
        $let[memberAvatar;$getObjectProperty[avatar]]
        $createObject[$djsEval[JSON.stringify(guild.members.cache.get('$if[$memberExists[$get[user]]==true;$get[user];$clientID]'));true]]
        
        $addButton[1;MemberAvatar;primary;FindMemberAvatar_$get[user];$if[$memberExists[$get[user]]==true;$if[$get[avatar]==null;true;false];true]]
        $addButton[1;UserAvatar;primary;FindUserAvatar_$get[user];false]

        $let[avatarURL;https://cdn.discordapp.com/avatars/$get[user]/$get[avatar].webp?size=2048]
        $let[avatar;$djsEval[let user = client.users.cache.get('$if[$memberExists[$get[user]]==true;$get[user];$clientID]');\nuser.avatar;true]]
        $let[user;$findUser[$if[$message!=;$message;$authorID];true]]
    
        $onlyClientPerms[readmessagehistory;{newEmbed:{color:ff3333}{title:❌ Missing Permission!}{description:I'm missing the \`Read_Message_History\` Permission.}}]
        $onlyClientPerms[useexternalemojis;{newEmbed:{color:ff3333}{title:❌ Missing Permission!}{description:I'm missing the \`Use_External_Emojis\` Permission.}}]
        $onlyClientPerms[embedlinks;I'm missing the following permmision: \`EmbedLinks\`]
        $onlyClientPerms[sendmessages;]
      








        $onlyIf[$hasPermsInChannel[$channelID;$clientID;readmessagehistory]==true;{newEmbed:{color:ff3333}{title:❌ Missing Permission!}{description:I'm missing the \`Read_Message_History\` Permission.}}]
        $onlyIf[$hasPermsInChannel[$channelID;$clientID;useexternalemojis]==true;{newEmbed:{color:ff3333}{title:❌ Missing Permission!}{description:I'm missing the \`Use_External_Emojis\` Permission in this channel.}}]
        $onlyIf[$hasPermsInChannel[$channelID;$clientID;embedlinks]==true;I'm missing the following permmision: \`EmbedLinks\`]
        $onlyIf[$hasPermsInChannel[$channelID;$clientID;sendmessages]==true;]
*/
/* 
        If i want to add slash i can here

    ,{
        name: "avatar",
        type: "interaction",
        prototype: "slash",
        code: `
        $interactionReply[$if[$authorID==705306248538488947;Ping: \`$pingMS\` | Uptime: <t:$round[$math[$math[$djsEval[Date.now();true]-$uptime[ms]]/1000]]:R>;];
            {newEmbed:
                {color:$getGlobalUserVar[color;$get[user]]}
                {title:$username[$get[user]]'s MemberAvatar}
                {thumbnail:$if[$memberExists[$get[user]]==true;$if[$get[memberAvatar]==null;$get[avatarURL];$get[memberAvatarURL]];$get[avatarURL]]}
                {image:$get[avatarURL]}
            };   
            {actionRow:
                {button:UserAvatar:primary:FindUserAvatar_$get[user]:true}
                {button:MemberAvatar:primary:FindMemberAvatar_$get[user]:$if[$memberExists[$get[user]]==true;$if[$get[memberAvatar]==null;true;false];true]}
                {button:Close:danger:Close:false}
            }
            {actionRow:
                {button:PNG:link:$replaceText[$get[avatarURL];webp;png;1]}
                {button:WEBP:link:$get[avatarURL]}
                {button:JPG:link:$replaceText[$get[avatarURL];webp;jpg;1]}
            }
        ]

        $let[memberAvatarURL;https://cdn.discordapp.com/guilds/$guildID/users/$get[user]/avatars/$get[memberAvatar].webp?size=2048]
        $let[memberAvatar;$getObjectProperty[avatar]]
        $createObject[$djsEval[JSON.stringify(guild.members.cache.get('$if[$memberExists[$get[user]]==true;$get[user];$clientID]'));true]]    

        $let[avatarURL;https://cdn.discordapp.com/avatars/$get[user]/$get[avatar].webp?size=2048]
        $let[avatar;$djsEval[let user = client.users.cache.get('$if[$memberExists[$get[user]]==true;$get[user];$clientID]');\nuser.avatar;true]]
        $let[user;$findUser[$if[$slashOption[user]!=;$slashOption[user];$authorID];true]]
        
        $let[user;$findUser[$if[$slashOption[user]!=;$slashOption[user];$authorID];true]]    
      `}

*/