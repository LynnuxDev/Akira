module.exports = [{
    module: "Global-Interaction",
    version: "1.0",
    type: "interactionCreate",
    description: "Changes site featured based on input.",
    code: `
    $textSplit[$customID;-]
    $c[
        $splitText[0] == Custom ID Name
        $splitText[1] == authorID of original author
        $splitText[2] == enabled / disabled / pending / decline / accept
        - "enable"    == allow site featured
        - "disabled"  == disallow site featured 
        $splitText[3] == guildID
        $splitText[4] == N/A
    ]
    $onlyIf[$splitText[0]==SiteFeatured;]
    $switch[$toLowercase[$splitText[2]];
        $case[disable;
            $ephemeral
            $onlyIf[$splitText[1]==$authorID;]
            $interactionUpdate[
                $color[$getVar[color;default]]
                $title[Sad to see you go.]
                $description[<:Correct:1176923637048148059> This server will no longer be featured on [our website\\](<https://akira.lynnux.xyz/>).]
                $footer[It can take upto 24 hours for our website to update.]
            ]
            $setVar[ServerFeatured;$guildID;false]
            $sendMessage[1197534834092941402;$color[$getVar[color;error]]$title[SiteFeatured Removed]$thumbnail[$serverIcon]$description[Server: \`$serverName\` - \`$guildID\`\nOwner: \`$username[$guildOwnerID]\` - ||$guildOwnerID||\nMembers: \`$guildMemberCount\`\nRequested By: \`$userName[$authorID]\` - ||$authorID||]]    
        ]
        $case[enable;
            $ephemeral
            $onlyIf[$splitText[1]==$authorID;]
            $interactionUpdate[
                $color[$getVar[color;default]]
                $title[Thank you,]
                $description[<:Correct:1176923637048148059> $serverName is now pending request to be featured on [our website\\](<https://akira.lynnux.xyz/>)!]
                $footer[It can take upto 24 hours for us to review and update our website.]
            ]
            $sendMessage[1197534834092941402;$color[$getVar[color;default]]$title[New Site Feature request]$thumbnail[$serverIcon]$description[Server: \`$serverName\` - \`$guildID\`\nOwner: \`$username[$guildOwnerID]\` - ||$guildOwnerID||\nMembers: \`$guildMemberCount\`\nRequested By: \`$userName[$authorID]\` - ||$authorID||] $addActionRow $addButton[SiteFeatured-$authorID-accept-$guildID;Accept;Success;;false] $addButton[SiteFeatured-$authorID-decline-$guildID;Decline;Danger;;false]]    
        ]
        $case[pending;
            $ephemeral
            $onlyIf[$splitText[1]==$authorID;]
            $interactionUpdate[
                $color[$getVar[color;error]]
                $title[Something went wrong.]
                $description[<:outage:1176923865478336582> There already is a pending Site-Featured request submitted by a admin of this server!]
                $footer[It can take upto 24 hours for us to review and update our website.]
            ]
        ]
        $case[decline;
            $interactionUpdate[
                $color[$getVar[color;error]]
                $title[New Site Feature request | DECLINED]
                $thumbnail[$serverIcon[$splitText[3]]]
                $description[Server: \`$serverName[$splitText[3]]\` - \`$splitText[3]\`\nOwner: \`$username[$guildOwnerID[$splitText[3]]]\` - ||$guildOwnerID[$splitText[3]]||\nMembers: \`$guildMemberCount[$splitText[3]]\`\nRequested By: \`$userName[$splitText[1]]\` - ||$splitText[1]||] 
                $addActionRow
                $addButton[SiteFeatured-$authorID-accept-$guildID;Accept;Success;;true] 
                $addButton[SiteFeatured-$authorID-decline-$guildID;Decline;Danger;;true]
            ]

            $setVar[ServerFeatured;$splitText[3];false]
            $sendDM[$splitText[1];$color[$getVar[color;default]]$title[SiteFeaturing declined.]$description[Your request to be on [our site\\](https://akira.lynnux.xyz/) has been declined by @$username[$authorID]]$footer[if you want to know the specific reason please use "a.contact"]]
        ]
        $case[accept;
            $interactionUpdate[
                $color[$getVar[color;success]]
                $title[New Site Feature request | ACCEPTED]
                $thumbnail[$serverIcon[$splitText[3]]]
                $description[Server: \`$serverName[$splitText[3]]\` - \`$splitText[3]\`\nOwner: \`$username[$guildOwnerID[$splitText[3]]]\` - ||$guildOwnerID[$splitText[3]]||\nMembers: \`$guildMemberCount[$splitText[3]]\`\nRequested By: \`$userName[$splitText[1]]\` - ||$splitText[1]||] 
                $addActionRow
                $addButton[SiteFeatured-$authorID-accept-$guildID;Accept;Success;;true] 
                $addButton[SiteFeatured-$authorID-decline-$guildID;Decline;Danger;;true]
            ]

            $setVar[ServerFeatured;$splitText[3];true]
            $sendDM[$splitText[1];$color[$getVar[color;default]]$title[SiteFeaturing Accepted.]$description[Your request to be on [our site\\](https://akira.lynnux.xyz/) has been approved by @$username[$authorID]]$footer[if have any questions please use "a.contact"]]
        ]
    ]
`}]