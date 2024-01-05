module.exports = [{
    module: "Global-Interaction",
    version: "1.4",
    type: "interactionCreate",
    description: "Closes the embed/message.",
    code: `
    $textSplit[$customID;-]
    $onlyIf[$checkContains[$splitText[1];$authorID]]
    $onlyIf[$checkContains[$toLowerCase[$splitText[0]];close]]
    $if[$splitText[2]==NaN;$c[NaN];$if[$hasPerms[$if[$guildID==;813511476052492328;$guildID];$botID;ManageMessages]==true;$function[$deleteMessage[$channelID;$splitText[2]]];$c[false]]]
    $function[$deleteMessage[$channelID;$messageID]]
`}]