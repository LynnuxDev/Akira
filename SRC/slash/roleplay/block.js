module.exports = {
    code: `
    $onlyIf[$getVar[AgreedToTos;$authorID]==true;$ephemeral $color[$getVar[color;default]] $title[Before we continue:] $footer[You have to agree with these terms before using akira.] $description[Before you proceed, please make sure to read and agree to our [Terms of Service\\](https://akira.lynnux.xyz/terms) and [Privacy Policy\\](https://akira.lynnux.xyz/policy).\n\nBy using the button below, you confirm that you have read and agree to abide by our terms and policies.\n\nIf you have any questions or concerns, feel free to contact our support team.] $addActionRow $addButton[AcceptTerms-$authorID;I have read and agree to abide by these terms and policies.;Success;;false]]

    $let[user;$option[user]]
    $let[unblock;$if[$option[unblock]!=;$option[unblock];false]]

    $onlyIf[$get[user]!=$authorID;:x: You can't block yourself!$ephemeral]

    $switch[$toLowercase[$get[unblock]];
        $case[true;
            $onlyIf[$getVar[rp-blocked-$get[user];$authorID]==true;:x: You don't have this user blocked.$ephemeral]
            $setVar[rp-blocked-$get[user];$authorID;false]
            $color[$getVar[color;default]]
            $title[User unblocked!]
            $thumbnail[$userAvatar[$get[user]]]
            $description[You have unblocked **$username[$get[user]]**\nThey can use roleplay commands on you again.]
            $ephemeral
        ]
        $case[false;
            $onlyIf[$getVar[rp-blocked-$get[user];$authorID]!=true;:x: You have this user is blocked already.$ephemeral]
            $setVar[rp-blocked-$get[user];$authorID;true]
            $color[$getVar[color;default]]
            $title[User blocked!]
            $thumbnail[$userAvatar[$get[user]]]
            $description[You have blocked **$username[$get[user]]**\nThey can no longer use roleplay commands on you.]
            $ephemeral
        ]
    ]
    
    `,
    data: {
        "name": "block",
        "description": "Block users so they can't spam you with roleplay commands and harass you.",
        "options": [
            {
                "type": 6,
                "name": "user",
                "description": "Who's do you want to block?",
                "required": true,
                "choices": []
            },
            {
                "type": 5,
                "name": "unblock",
                "description": "use true if you want to unblock instead of block.",
                "choices": [
                {
                    "name": "true",
                    "value": "true"
                },
                {
                    "name": "false",
                    "value": "false"
                }
                ]
            }
        ]
    }
}