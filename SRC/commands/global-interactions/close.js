module.exports = [{
    module: "Global-Interaction",
    version: "1.0",
    type: "interactionCreate",
    description: "Closes the embed/message.",
    code: `
    $onlyIf[$checkContains[$customID;$authorID]]
    $onlyIf[$checkContains[$toLowerCase[$customID];close]]
    $function[$deleteMessage[$channelID;$messageID]]
`}]