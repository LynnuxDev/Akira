module.exports = ({
    name: "about",
    aliases: ["info", "information"],
    description: "get info about akira",
    type: "messageCreate",
    module: "Utility",
    version: "1.0",
    sourcecode: "https://github.com/LynnuxDev/Akira/blob/main/SRC/commands/utility/about.js",
    documentation: "https://documentation.lynnux.xyz/commands/information/about",
    usage: "update",
    example: "about",
    code: `
        $c[----------------------------------ONLY-IF---------------------------------]
            $onlyIf[$getUserVar[AgreedToTos;$authorID]==true;$ephemeral $color[$getGlobalVar[color]] $title[Before we continue:] $footer[You have to agree with these terms before using akira.] $description[Before you proceed, please make sure to read and agree to our [Terms of Service\\](https://akira.lynnux.xyz/terms) and [Privacy Policy\\](https://akira.lynnux.xyz/policy).\n\nBy using the button below, you confirm that you have read and agree to abide by our terms and policies.\n\nIf you have any questions or concerns, feel free to contact our support team.] $addActionRow $addButton[AcceptTerms-$authorID;I have read and agree to abide by these terms and policies.;Success;;false]]
            $onlyIf[$channelID==$getGuildVar[BotChannel;$guildID;$channelID];$getGlobalVar[BotChannelError]]

        $c[-----------------------------------MAIN-----------------------------------]
            $reply[$channelID;$messageID]
            $if[$guildID!=;$let[DefaultMessage;$messageID];$let[DefaultMessage;NaN]]
            $thumbnail[$userAvatar[$botID;2048;webp]]
            $color[$getGlobalVar[color]]
            $title[❯ Akira information:]
            $addField[❯ Build;'Beta';true]
            $addField[❯ Akira version;v1.0.0;true]
            $addField[\u200B;\u200B;true]
            $description[Akira is a multipurpose easy to use discord bot.]
            $addField[❯ Website;[[Click Me\\](https://akira.lynnux.xyz/)\\];true]
            $addField[❯ Server;[[Click Me\\](discord://-/invite/TUqZTutDUz/login)\\];true]
            $addField[❯ Invite;[[Click Me\\](https://discord.com/oauth2/authorize?client_id=$clientID&permissions=414800276567&integration_type=0&scope=bot)\\];true]
            $addActionRow
            $addButton[close-$authorID-$get[DefaultMessage]-false;Close;Danger;✖️]
            $addButton[https://github.com/LynnuxDev/Akira;Source-Code;Link;📖]
    `})