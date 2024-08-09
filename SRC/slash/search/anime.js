module.exports = {
    code: `
$c[----------------------------------ONLY-IF---------------------------------]
    $onlyIf[$getVar[AgreedToTos;$authorID]==true;$ephemeral $color[$getVar[color;default]] $title[Before we continue:] $footer[You have to agree with these terms before using akira.] $description[Before you proceed, please make sure to read and agree to our [Terms of Service\\](https://akira.lynnux.xyz/terms) and [Privacy Policy\\](https://akira.lynnux.xyz/policy).\n\nBy using the button below, you confirm that you have read and agree to abide by our terms and policies.\n\nIf you have any questions or concerns, feel free to contact our support team.] $addActionRow $addButton[AcceptTerms-$authorID;I have read and agree to abide by these terms and policies.;Success;;false]]
    $onlyIf[$channelID==$getVar[BotChannel;$guildID];$interactionUpdate[$getVar[BotChannelError;default]]]
$c[----------------------------------PRELET----------------------------------]
    $let[anime;$replace[$option[name]; ;%20;-1]]
    $if[$guildID!=;$let[DefaultMessage;$messageID];$let[DefaultMessage;NaN]]

$c[--------------------------------HTTPREQUEST-------------------------------]
    $!httpRequest[https://api.jikan.moe/v4/anime?sfw&q=$get[anime]&page=1&limit=1;GET]

$c[------------------------------------LET-----------------------------------]
    $let[author;$authorID]
    $let[nsfw;$if[$if[$option[nsfw]!=;$option[nsfw];false]==false;sfw;nsfw]]
        $c[====-----=====-----====HttpRequestLets=====-----=====-----=====---]
    $let[CurrentPage;$httpResult[pagination;current_page]]
    $let[HasNextPage;$httpResult[pagination;has_next_page]]
    $let[LargeImage;$httpResult[data;0;images;webp;large_image_url]]

    $let[TitleOrigional;$httpResult[data;0;title]]
    $let[TitleDefault;$httpResult[data;0;title_english]]
    $let[TitleJapanese;$httpResult[data;0;title_japanese]]
    $let[TrailerUrl;$httpResult[data;0;trailer;url]]
    $let[synopsis;$httpResult[data;0;synopsis]]
$c[----------------------------------ONLYIF----------------------------------]
    $onlyIf[$get[TitleDefault]!=;$color[$getVar[color;error]]$title[Oh no thats not supposed to happen!]$description[The anime "\`$option[name]\`" couldn't be found, please check your spelling or try again later.]]

$c[-----------------------------------MAIN-----------------------------------]
$try[
    $color[$getVar[color;default]]
    $title[$if[$get[TitleDefault]!=null;$get[TitleDefault];$get[TitleOrigional]] - ($get[TitleJapanese]);$get[TrailerUrl]]
    $description[**Description:**\`\`\`$replace[$get[synopsis];\n[Written by MAL Rewrite\\];;1]\`\`\`]
    $addField[Information:;<:Clock:937415318278647818> **Duration:** \`$httpResult[data;0;duration]\`\n<:Members:936736954853236816> **Rating:** \`$if[$advancedTextSplit[$httpResult[data;0;rating]; - ;1]==;$if[$advancedTextSplit[$httpResult[data;0;rating]; - ;0]==null;Unknown];$advancedTextSplit[$httpResult[data;0;rating]; - ;1]]\`\n<:Plus:936967540700221440> **Release Date:** \`$httpResult[data;0;season] $httpResult[data;0;year]\`\n<:Owner:936963916607680533> **Anime Ranking:** \`$if[$httpResult[data;0;rank]==null;Not Ranked Yet!]$if[$httpResult[data;0;score]!=null; ($httpResult[data;0;score] Rated);]\`;true]
    $image[$get[LargeImage]]
    $try[
        $addActionRow
        $addButton[close-$authorID-$get[DefaultMessage]-false;Close;Danger;✖️]   
    ]
    $c[
        $if[$get[CurrentPage]>=2;$addButton[anime-$authorID-PreviousPage-$get[anime]-$get[CurrentPage];PreviousPage;Secondary;⬅️;false];$addButton[anime-$authorID-PreviousPage-$get[anime]-$get[CurrentPage];PreviousPage;Secondary;⬅️;true]]
        $if[$get[HasNextPage]==true;$addButton[anime-$authorID-NextPage-$get[anime]-$get[CurrentPage];NextPage;Secondary;➡️;false];$addButton[anime-$authorID-NextPage-$get[anime]-$get[CurrentPage];NextPage;Secondary;➡️;true]]
    ]
    $c[$attachment[$httpResult;result.json;true]]
;
    $color[$getVar[color;error]]
    $title[Oh no thats not supposed to happen!]
    $description[Something went wrong, please try again later.]
    $footer[If this issue continues this error will be send to the dev team.]
    $sendMessage[1083095711094149180;
        $color[$getVar[color;error]]
        $title[A error in "/search anime"]
        $addField[Usage Info:;Server: $if[$guildID!=;$serverName - $guildID;Direct Message]\nAuthor: $username - $authorID\nCommand Used: \`/search anime name:$option[name]\`\nTimeStamp: <t:$round[$math[$getTimestamp/1000]]:R>]
    ]
]
`,
    data: {
        "name": "anime",
        "description": "Search for a anime and/or its related information.",
        "options": [
            {
                "type": 3,
                "name": "name",
                "description": "The name of the anime your looking for.",
                "required": true
            },
        ]
    }
}