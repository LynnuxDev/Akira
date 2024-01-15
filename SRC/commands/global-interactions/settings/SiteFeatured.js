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
        $splitText[2] == enabled or disabled  
        - "enable"    == allow site featured
        - "disabled"  == disallow site featured 
    ]
    $onlyIf[$splitText[0]==SiteFeatured;]
    $onlyIf[$splitText[1]==$authorID;]
    $ephemeral
    $if[$splitText[2]!=enable;
        $c[enabled]
            $interactionUpdate[
                $color[$getVar[color;default]]
                $description[<:Correct:1176923637048148059> This server will no longer be featured on [our website\\](<https://akira.lynnux.xyz/>).]
                $footer[It can take upto 24 hours for our website to update.]
            ]
        $setVar[ServerFeatured;$guildID;false]
    ;
        $c[disabled]
            $interactionUpdate[
                $color[$getVar[color;default]]
                $description[<:Correct:1176923637048148059> This server will appear on [our website\\](<https://akira.lynnux.xyz/>) again!]
                $footer[It can take upto 24 hours for our website to update.]
            ]
        $setVar[ServerFeatured;$guildID;true]
    ] 

`}]