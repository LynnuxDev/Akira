module.exports = [{
    module: "Global-Interaction",
    version: "1.4",
    type: "interactionCreate",
    description: "Closes the embed/message.",
    code: `
    $textSplit[$customID;-]
    $c[
        $splitText[0] == Custom ID Name
        $splitText[1] == authorID of original author
        $splitText[2] == Command MessageID 
        - "EMBED" == ephemeral
        - "NaN" == Not available 
    ]
    $onlyIf[$toLowerCase[$splitText[0]]==close;]
    $onlyIf[$splitText[1]==$authorID;]

    $if[$splitText[2]==NaN;$c[NaN];$if[$splitText[2]==EMBED;$interactionUpdate[:x: This message can't be deleted! Please click "Dismiss message" under the embed.];$if[$hasPerms[$if[$guildID==;813511476052492328;$guildID];$botID;ManageMessages]==true;$function[$deleteMessage[$channelID;$splitText[2]]];$c[false]]$function[$deleteMessage[$channelID;$messageID]]]]

`}]