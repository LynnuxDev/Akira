module.exports = {
    code: `

$c[----------------------------------ONLY-IF---------------------------------]
$onlyIf[$getVar[AgreedToTos;$authorID]==true;$ephemeral $color[$getVar[color;default]] $title[Before we continue:] $footer[You have to agree with these terms before using akira.] $description[Before you proceed, please make sure to read and agree to our [Terms of Service\\](https://akira.lynnux.xyz/terms) and [Privacy Policy\\](https://akira.lynnux.xyz/policy).\n\nBy using the button below, you confirm that you have read and agree to abide by our terms and policies.\n\nIf you have any questions or concerns, feel free to contact our support team.] $addActionRow $addButton[AcceptTerms-$authorID;I have read and agree to abide by these terms and policies.;Success;;false]]

$c[-----------------------------------MAIN-----------------------------------]
    $ephemeral

$c[------------------------------------LET-----------------------------------]
    $let[author;$authorID]
    $let[guild;$if[$guildID==;1123575264497123348;$guildID]]
    $let[category;$if[$option[category]==;user;$option[category]]]
    $let[Allow-Site-Featured;$getVar[ServerFeatured;$if[$guildID==;1123575264497123348;$guildID]]]
    $let[Terms-Policy-Guild;$if[$getVar[AgreedToTos;$if[$guildOwnerID==;$clientID;$guildOwnerID]]==;$getVar[AgreedToTos;$get[author]];false]]
    $let[Terms-Policy;$if[$getVar[AgreedToTos;$get[author]]==;false;$getVar[AgreedToTos;$get[author]]]]

$c[------------------------------EMBED-FOR-BOTH------------------------------]

$c[----------------------------------SWITCH----------------------------------]
    $switch[$get[category];
        $case[guild;
            $if[$guildID!=;
                $if[$hasPerms[$guildID;$authorID;Administrator]==true;
                    $title["$serverName" Privacy Settings:]
                    $color[$getVar[color;default]]
                    $thumbnail[$serverIcon[$get[guild]]]

                    $addField[Akira Website Related:;Allow Guild Featured: $if[$get[Allow-Site-Featured]==true;<:Enabled_Switch:827659766738321460>;<:Disabled_Switch:827659815266025482>]]
                    $addField[Terms And Policy:;Agreed To [TOS\\](https://akira.lynnux.xyz/terms) and [Policy\\](https://akira.lynnux.xyz/terms): <:Enabled_Switch:827659766738321460>]
                    $footer[My adding Akira to your discord server you by automaticly agree with Akira's TOS and Policy]
                    $addActionRow
                    $if[$get[Allow-Site-Featured]!=true;
                        $addButton[SiteFeatured-$authorID-enable;Enable Guild Featured;Primary;;false]
                    ;
                        $addButton[SiteFeatured-$authorID-disable;Disable Guild Featured;Secondary;;false]
                    ]
                ;
                \n:x: Only server admins can manage/see server privacy settings.
                ]
            ;
                \n:x: You currently aren't in a server, please try this in a server or use the normal </settings privacy:1196491242578649169> for user privacy settings.
            ]
        ]
        $case[user;
            $title[$username's Privacy Settings:]
            $color[$getVar[color;default]]
            $thumbnail[$userAvatar[$get[author]]]
            $addField[Terms And Policy:;Agreed To [TOS\\](https://akira.lynnux.xyz/terms) and [Policy\\](https://akira.lynnux.xyz/terms): $if[$get[Terms-Policy]==true;<:Enabled_Switch:827659766738321460>;<:Disabled_Switch:827659815266025482>]]
        ]
        $default[
            $title[$username's Privacy Settings:]
            $color[$getVar[color;default]]
            $thumbnail[$userAvatar[$get[author]]]
            $addField[Terms And Policy:;Agreed To [TOS\\](https://akira.lynnux.xyz/terms) and [Policy\\](https://akira.lynnux.xyz/terms): $if[$get[Terms-Policy]==true;<:Enabled_Switch:827659766738321460>;<:Disabled_Switch:827659815266025482>]]
        ]
    ]
    `,
    data: {
        "name": "privacy",
        "description": "Change your privacy settings.",
        "options": [
          {
            "type": 3,
            "name": "category",
            "description": "Weather you want to See the \"server privacy\"/\"user privacy\".",
            "choices": [
              {
                "name": "server",
                "value": "guild"
              },
              {
                "name": "user",
                "value": "user"
              }
            ]
          }
        ]
    }
}