module.exports = [{
    module: "Global-Interaction",
    version: "1.4",
    type: "interactionCreate",
    description: "Delete user/guild data.",
    code: `
    $c[--------------------------------TEXT-SPLIT--------------------------------]
    $textSplit[$customID;-]
    
    $c[
        $splitText[0] === === Name
        $splitText[1] === === authorID
        $splitText[2] === === USER/GUILD
        $splitText[3] === === Comfirmed?
    ]
    $c[-----------------------------------LET------------------------------------]
    $let[DefaultMessage;EMBED]
    $let[language;$if[$getVar[language;$splitText[1]]!=;$getVar[language;$splitText[1]];en]]

    $c[---------------------------------LANGUAGE---------------------------------]
    $switch[$get[language];
        $case[en;
            $let[title;Are you sure?]
            $let[description;**You are about to delete ALL your data.**\nthis includes but is not limited to:\n\`Agreement to the terms and privacy policy,Roleplay Counters,\`.]
            $let[footer;This can not be undone.]
            $let[CloseButton;No, i changed my mind]
            $let[RemoveDataConfirm;Yes Delete My Data]
            $let[titleConfirm;We are sad to see you leave.]
            $let[descriptionConfirm;All data collected on you has been removed.]
            $let[footerConfirm;This can not be undone.]
        ]
    ]

    $c[----------------------------------ONLY-IF---------------------------------]
    $onlyIf[$toLowerCase[$splitText[0]]==removemydata;]

    $c[-----------------------------------MAIN-----------------------------------]
$switch[$splitText[2];
    $case[user;
        $if[$toLowercase[$splitText[3]]==confirm;
            $try[
                $interactionUpdate[
                    $color[$getVar[color;error]]
                    $title[$get[titleConfirm]]
                    $description[$get[descriptionConfirm]]
                    $footer[$get[footerConfirm]]
                ]
            ;
                $editMessage[$channelID;$messageID;
                    $color[$getVar[color;error]]
                    $title[$get[titleConfirm]]
                    $description[$get[descriptionConfirm]]
                    $footer[$get[footerConfirm]]
                ]
            ]
            $deleteVar[prefix;$authorID]
            $deleteVar[AgreedToTos;$authorID]
            $deleteVar[color;$authorID]
    $c[---------------------------------ROLEPLAY---------------------------------]
        $c[-----------------------------WholeSome-----------------------------]
            $deleteVar[rp-commandblocked;$authorID]
            $deleteVar[blush-give;$authorID]  
            $deleteVar[blush-got;$authorID]
            $deleteVar[boop-give;$authorID]
            $deleteVar[boop-got;$authorID]
            $deleteVar[cheer-give;$authorID]
            $deleteVar[cheer-got;$authorID]
            $deleteVar[cuddle-give;$authorID]
            $deleteVar[cuddle-got;$authorID]
            $deleteVar[dance-give;$authorID]
            $deleteVar[dance-got;$authorID]
            $deleteVar[feed-give;$authorID]
            $deleteVar[feed-got;$authorID]
            $deleteVar[glomp-give;$authorID]
            $deleteVar[glomp-got;$authorID]
            $deleteVar[handhold-give;$authorID]
            $deleteVar[handhold-got;$authorID]
            $deleteVar[happy-give;$authorID]
            $deleteVar[happy-got;$authorID]
            $deleteVar[highfive-give;$authorID]
            $deleteVar[highfive-got;$authorID]
            $deleteVar[hug-give;$authorID]
            $deleteVar[hug-got;$authorID]
            $deleteVar[kiss-give;$authorID]
            $deleteVar[kiss-got;$authorID]
            $deleteVar[laugh-give;$authorID]
            $deleteVar[laugh-got;$authorID]
            $deleteVar[lick-give;$authorID]
            $deleteVar[lick-got;$authorID]
            $deleteVar[love-give;$authorID]
            $deleteVar[love-got;$authorID]
            $deleteVar[lurk-give;$authorID]
            $deleteVar[lurk-got;$authorID]
            $deleteVar[nom-give;$authorID]
            $deleteVar[nom-got;$authorID]
            $deleteVar[nuzzle-give;$authorID]
            $deleteVar[nuzzle-got;$authorID]
            $deleteVar[pat-give;$authorID]
            $deleteVar[pat-got;$authorID]
            $deleteVar[peck-give;$authorID]
            $deleteVar[peck-got;$authorID]
            $deleteVar[poke-give;$authorID]
            $deleteVar[poke-got;$authorID]
            $deleteVar[pout-give;$authorID]
            $deleteVar[pout-got;$authorID]
            $deleteVar[sleep-give;$authorID]
            $deleteVar[sleep-got;$authorID]
            $deleteVar[thumbsup-give;$authorID]
            $deleteVar[thumbsup-got;$authorID]
            $deleteVar[tickle-give;$authorID]
            $deleteVar[tickle-got;$authorID]
            $deleteVar[wag-give;$authorID]
            $deleteVar[wag-got;$authorID]
            $deleteVar[wave-give;$authorID]
            $deleteVar[wave-got;$authorID]
        $c[-----------------------------Neutral-----------------------------]
            $deleteVar[bonk-give;$authorID]
            $deleteVar[bonk-got;$authorID]
            $deleteVar[bored-give;$authorID]
            $deleteVar[bored-got;$authorID]
            $deleteVar[chase-give;$authorID]
            $deleteVar[chase-got;$authorID]
            $deleteVar[cringe-give;$authorID]
            $deleteVar[cringe-got;$authorID]
            $deleteVar[dab-give;$authorID]
            $deleteVar[dab-got;$authorID]
            $deleteVar[facepalm-give;$authorID]
            $deleteVar[facepalm-got;$authorID]
            $deleteVar[nervous-give;$authorID]
            $deleteVar[nervous-got;$authorID]
            $deleteVar[no-give;$authorID]
            $deleteVar[no-got;$authorID]
            $deleteVar[panic-give;$authorID]
            $deleteVar[panic-got;$authorID]
            $deleteVar[run-give;$authorID]
            $deleteVar[run-got;$authorID]
            $deleteVar[sip-give;$authorID]
            $deleteVar[sip-got;$authorID]
            $deleteVar[smug-give;$authorID]
            $deleteVar[smug-got;$authorID]
            $deleteVar[stare-give;$authorID]
            $deleteVar[stare-got;$authorID]
            $deleteVar[tease-give;$authorID]
            $deleteVar[tease-got;$authorID]
            $deleteVar[think-give;$authorID]
            $deleteVar[think-got;$authorID]
            $deleteVar[rage-give;$authorID]
            $deleteVar[rage-got;$authorID]
            $deleteVar[wink-give;$authorID]
            $deleteVar[wink-got;$authorID]
            $deleteVar[yes-give;$authorID]
            $deleteVar[yes-got;$authorID]
        $c[-----------------------------NEGATIVE-----------------------------]
            $deleteVar[bite-give;$authorID]
            $deleteVar[bite-got;$authorID]
            $deleteVar[cry-give;$authorID]
            $deleteVar[cry-got;$authorID]
            $deleteVar[die-give;$authorID]
            $deleteVar[die-got;$authorID]
            $deleteVar[hate-give;$authorID]
            $deleteVar[hate-got;$authorID]
            $deleteVar[sad-give;$authorID]
            $deleteVar[sad-got;$authorID]
            $deleteVar[kill-give;$authorID]
            $deleteVar[kill-got;$authorID]
            $deleteVar[shoot-give;$authorID]
            $deleteVar[shoot-got;$authorID]
            $deleteVar[slap-give;$authorID]
            $deleteVar[slap-got;$authorID]
            $deleteVar[stab-give;$authorID]
            $deleteVar[stab-got;$authorID]
            $deleteVar[triggered-give;$authorID]
            $deleteVar[triggered-got;$authorID]
        ;
            $try[
                $interactionUpdate[
                    $color[$getVar[color;error]]
                    $title[$get[title]]
                    $description[$get[description]]
                    $footer[$get[footer]]
                    $addActionRow
                    $addButton[close-$authorID-$get[DefaultMessage];$get[CloseButton];Secondary;✖️]   
                    $addButton[RemoveMyData-$authorID-user-confirm;$get[RemoveDataConfirm];Danger;;false]
                ]
            ;
                $editMessage[$channelID;$messageID;
                    $color[$getVar[color;error]]
                    $title[$get[title]]
                    $description[$get[description]]
                    $footer[$get[footer]]
                    $addActionRow
                    $addButton[close-$authorID-$get[DefaultMessage];$get[CloseButton];Secondary;✖️]   
                    $addButton[RemoveMyData-$authorID-user-confirm;$get[RemoveDataConfirm];Danger;;false]
                ]
            ]
        ]
    ]
    $case[guild;
        $if[$toLowercase[$splitText[3]]==confirmed;
            $log[confirmed]
        ;
            $log[Not confirmed]
        ]    ]
]
`}]