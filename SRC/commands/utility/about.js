module.exports = ({
    name: "about",
    aliases: ["info", "information"],
    description: "get info about akira",
    type: "messageCreate",
    module: "Information",
    version: "1.2",
    sourcecode: "https://github.com/LynnuxDev/Akira/blob/main/SRC/commands/utility/about.js",
    documentation: "https://documentation.lynnux.xyz/commands/information/about",
    usage: "update",
    example: "about",
    code: `
    $reply[$channelID;$messageID]
    $if[$guildID!=;$let[DefaultMessage;$messageID];$let[DefaultMessage;NaN]]
    $thumbnail[$userAvatar[$botID;2048;webp]]
    $color[ff47ff]
    $title[❯ Akira information:]
    $addField[❯ Build;'Beta';true]
    $addField[❯ Akira version;v1.0.0;true]
    $addField[\u200B;\u200B;true]
    $description[Akira is a multipurpose easy to use discord bot.]
    $addField[❯ Website;[[Click Me\\](https://akira.lynnux.xyz/)\\];true]
    $addField[❯ Server;[[Click Me\\](https://discord.gg/SBj5WzeVBj)\\];true]
    $addField[❯ Invite;[[Click Me\\](https://discord.com/api/oauth2/authorize?client_id=738057910923296839&permissions=8&redirect_uri=https%3A%2F%2Fdiscord.gg%2FSBj5WzeVBj&scope=bot)\\];true]
    $addActionRow
    $addButton[close-$authorID-$get[DefaultMessage];Close;Danger;✖️]   
    $addButton[https://github.com/LynnuxDev/Akira;Source-Code;Link;📖]
    `})