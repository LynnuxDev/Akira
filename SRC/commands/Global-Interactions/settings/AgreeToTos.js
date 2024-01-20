module.exports = [{
    module: "Global-Interaction",
    version: "1.4",
    type: "interactionCreate",
    description: "Closes the embed/message.",
    code: `
    $c[--------------------------------TEXT-SPLIT--------------------------------]
    $textSplit[$customID;-]

    $c[----------------------------------ONLY-IF---------------------------------]
    $onlyIf[$toLowerCase[$splitText[0]]==acceptterms;]

    $c[-----------------------------------MAIN-----------------------------------]
    $setVar[AgreedToTos;$authorID;true]

    $try[
        $interactionUpdate[
            $color[$getVar[color;default]]
            $title[I'm looking forward to interacting with you.]
            $description[Thanks for confirming that you've read and accepted our terms and policies. You're all set!]
        ]
    ;
        $editMessage[$channelID;$messageID;
            $color[$getVar[color;default]]
            $title[I'm looking forward to interacting with you.]
            $description[Thanks for confirming that you've read and accepted our terms and policies. You're all set!]
        ]
        
    ]

    $wait[7s]
    $try[$interactionDelete;$deleteMessage[$channelID;$messageID]]
    
`}]