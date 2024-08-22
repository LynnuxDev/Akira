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
        $onlyIf[$toLowerCase[$splitText[1]]==$authorID;]

        $c[-----------------------------------MAIN-----------------------------------]
        $setUserVar[AgreedToTos;true;$authorID]

        $try[
            $interactionUpdate[
                $color[$getGlobalVar[color]]
                $title[I'm looking forward to interacting with you.]
                $description[Thanks for confirming that you've read and accepted our terms and policies. You're all set!]
            ]
        ;
            $editMessage[$channelID;$messageID;
                $color[$getGlobalVar[color]]
                $title[I'm looking forward to interacting with you.]
                $description[Thanks for confirming that you've read and accepted our terms and policies. You're all set!]
            ]
        ]
        $setUserVar[uuid;$randomUUID;$authorID]
        $wait[7s]
        $try[$interactionDelete;$deleteMessage[$channelID;$messageID]]
    `
}]