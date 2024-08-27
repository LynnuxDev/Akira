module.exports = [{
  name: "anime",
  aliases: ["animelookup", "whattheanime"],
  type: "messageCreate",
  description: "test",
  usage: "anime <query> {option}",
  module: "Search",
  version: "1.0",
  sourcecode: "https://github.com/LynnuxDev/Akira/blob/main/SRC/commands/search/anime.js",
  documentation: "https://documentation.lynnux.xyz/commands/Search/anime/",
  example: "anime frieren",
  code: `
    $disableConsoleErrors
    $onlyIf[$authorID==705306248538488947;]
    $onlyIf[$getUserVar[AgreedToTos;$authorID]==true;$getGlobalVar[AgreedToTosEmbedReply]]
    $switch[$toLowercase[$message[0]];
      $case[favorite;
        $if[$getUserVar[anime~favorite;$authorID]!=;
          $color[$if[$guildID==;$getUserVar[color;$userID;#ff47ff];$getGuildVar[color;$guildID;#ff47ff]]]
          $title[$userGlobalName[$authorID]'s favorite anime:]
          $description[- $replace[$replace[$getUserVar[anime~favorite;$authorID];,;;1];,;\n\n- ;-1]]
        ;
          YOU DONT HAVE ANY FAVORITED ANIME
        ]
      ]
      $case[character;
        $if[$message[1]!=;
          $let[input;$replace[$replace[$message;$message[0] ;;1]; ;%20;-1]]
          $let[request;$httpRequest[https://api.jikan.moe/v4/characters?page=1&limit=5&q=$get[input];get]]
          $switch[$get[request];
            $case[200;
              $writeFile[./files/anime/$getUserVar[uuid;$authorID;not-found].json;$httpResult]
              $jsonLoad[result;$readFile[./files/anime/$getUserVar[uuid;$authorID;not-found].json]]
              $let[description;$cropText[$env[result;data;0;about];0;250]]
              $color[$if[$guildID==;$getUserVar[color;$userID;#ff47ff];$getGuildVar[color;$guildID;#ff47ff]]]
              $title[$env[result;data;0;name] ~ ($env[result;data;0;name_kanji]);$env[result;data;0;url]]
              $thumbnail[$env[result;data;0;images;webp;image_url]]
              $description[$get[description]$if[$endsWith[$get[description]; ]!=false;...; ...]]
              $addActionRow
              $addButton[NoUseCom;;Secondary;<:Spacer:1275843251349356675>;true]
              $addButton[animeCharacter~previous~$authorID~0;;Primary;◀️;true]
              $addButton[NoReply~$authorID;1/$env[result;pagination;items;count];Secondary;;true]
              $addButton[animeCharacter~next~$authorID~0;;Primary;▶️;$if[$env[result;pagination;items;count]>=2;false;true]]
              $addButton[close~$authorID~anime;;Danger;✖️;false]
              $let[malID;$env[result;data;0;mal_id]]
              $let[vaRequest;$httpRequest[https://api.jikan.moe/v4/characters/$get[malID]/voices;get]]
              $if[$httpResult[data;0;language]!=;
                $addField[Voice Actors:;- **$httpResult[data;0;language]:** [$httpResult[data;0;person;name]\\]($httpResult[data;0;person;url])$if[$httpResult[data;1;language]!=;\n- **$httpResult[data;1;language]:** [$httpResult[data;1;person;name]\\]($httpResult[data;1;person;url])]$if[$httpResult[data;2;language]!=;\n- **$httpResult[data;2;language]:** [$httpResult[data;2;person;name]\\]($httpResult[data;2;person;url])]$if[$httpResult[data;3;language]!=;\n- **$httpResult[data;3;language]:** [$httpResult[data;3;person;name]\\]($httpResult[data;3;person;url])]$if[$httpResult[data;4;language]!=;\n- **$httpResult[data;4;language]:** [$httpResult[data;4;person;name]\\]($httpResult[data;4;person;url])]$if[$httpResult[data;5;language]!=;\n- **$httpResult[data;5;language]:** [$httpResult[data;5;person;name]\\]($httpResult[data;5;person;url])]$if[$httpResult[data;6;language]!=;\n- **$httpResult[data;6;language]:** [$httpResult[data;6;person;name]\\]($httpResult[data;6;person;url])];true]
              ]
              $let[animeRequest;$httpRequest[https://api.jikan.moe/v4/characters/$get[malID]/anime;get]]
              $if[$get[animeRequest]==200;$author[From the anime: "$httpResult[data;0;anime;title]"]]
            ]
            $case[default;woops]
          ]
        ;
          WHAT CHARACTER ARE YOU LOOKIGN FOR?
        ]
      ]
      $case[default;
        $let[query;$replace[$replace[$message; --all;;-1]; --tv;;-1]]
        $let[type;$if[$checkContains[$message;--all]==true;&type=all;$if[$checkContains[$message;--tv]==true;&type=tv;]]]
        $let[request;$httpRequest[https://api.jikan.moe/v4/anime?page=1&limit=5&q=$replace[$get[query]; ;%20;-1]&sfw=true$get[type];get]]
        $reply[$channelID;$messageID;false]
        $c[-# $userName[$clientID] is thinking <a:Loading:1275473940789330000>]
        $writeFile[./files/anime/$getUserVar[uuid;$authorID;not-found].json;$httpResult]
        $jsonLoad[result;$readFile[./files/anime/$getUserVar[uuid;$authorID;not-found].json]]
        $jsonLoad[genres;$env[result;data;0;genres]]
        $arrayMap[genres;genre;
          $jsonLoad[uwu;$env[genre]]
          $return[$env[uwu;name]]
        ;final]

        $let[amount;$env[result;pagination;items;count]]
        $let[TitleOrigional;$env[result;data;0;title]]
        $let[TitleDefault;$env[result;data;0;title_english]]
        $let[TitleJapanese;$env[result;data;0;title_japanese]]
        $let[TrailerUrl;$env[result;data;0;trailer;url]]
        $let[description;$env[result;data;0;synopsis]]
        $let[page;0]
        $let[malID;$env[result;data;0;mal_id]]
      $c[-------------------------------------------=[    EMBED  \\]=-------------------------------------------]
        $switch[$get[request];
          $case[200;
            $if[$get[amount]==0;
              $color[$getGlobalVar[colorError]]
              $title[Something went wrong]
              $description[i couldnt find the anime your looking for \`$get[query]\`]
            ;

              $if[$get[TrailerUrl]==null;
                $title[$if[$get[TitleDefault]!=null;$get[TitleDefault];$get[TitleOrigional]] - ($get[TitleJapanese])]
              ;
                $title[$if[$get[TitleDefault]!=null;$get[TitleDefault];$get[TitleOrigional]] - ($get[TitleJapanese]);$get[TrailerUrl]]
              ]

    $description[$djsEval[
    function trimString(str, maxLength) {
      if (str.length > maxLength) {
        return str.slice(0, maxLength - 3) + '...';
      }
      return str;
    }

    const longString = \`$get[description]\`;

    const trimmedString = trimString(longString, 450);
    trimmedString;
    ]]
              $thumbnail[$httpResult[data;0;images;webp;image_url]]
              $color[$if[$guildID==;$getUserVar[color;$userID;#ff47ff];$getGuildVar[color;$guildID;#ff47ff]]]
              $switch[$env[result;data;0;type];
                $case[TV Special;
                  $addField[TV Special: Info;<:Clock:1271543787637833759> **Duration:** $env[result;data;0;duration]\n<:Date:1271543843157971014> **Aired:** $replace[$replace[$env[result;data;0;aired;string];to ?;Until $if[$env[result;data;0;status]==Currently Airing;Present;Unknown];1];tp;untill;-1]\n<:Episode:1275135592140640403> **Episodes:** $env[result;data;0;episodes]\n<:Plus:1271544047579693148> **Age Rating:** $env[result;data;0;rating]]
                ]
                $case[TV;
                  $addField[TV Series: Info;<:Clock:1271543787637833759> **Duration:** $env[result;data;0;duration]\n<:Date:1271543843157971014> **Aired:** $replace[$replace[$env[result;data;0;aired;string];to ?;Until $if[$env[result;data;0;status]==Currently Airing;Present;Unknown];1];tp;untill;-1]\n<:Episode:1275135592140640403> **Episodes:** $env[result;data;0;episodes]\n<:Plus:1271544047579693148> **Age Rating:** $env[result;data;0;rating]]
                ]
                $case[Music;
                  $addField[Music: Info;<:Clock:1271543787637833759> **Duration:** $env[result;data;0;duration]\n<:Date:1271543843157971014> **Aired:** $replace[$replace[$env[result;data;0;aired;string];to ?;Until $if[$env[result;data;0;status]==Currently Airing;Present;Unknown];1];tp;untill;-1]\n<:Music:1275405140232372336>**Tracks:** $env[result;data;0;episodes]\n<:Plus:1271544047579693148> **Age Rating:** $env[result;data;0;rating]]
                ]
                $case[Movie;
                  $addField[Movie: Info;<:Clock:1271543787637833759> **Duration:** $env[result;data;0;duration]\n<:Date:1271543843157971014> **Aired:** $replace[$replace[$env[result;data;0;aired;string];to ?;Until $if[$env[result;data;0;status]==Currently Airing;Present;Unknown];1];tp;untill;-1]\n<:Movie:1275435316441907321>**Genres:** $arrayJoin[final;, ]\n<:Plus:1271544047579693148> **Age Rating:** $env[result;data;0;rating]]
                ]
                $case[OVA;
                  $addField[Origional Video Animation: Info;<:Clock:1271543787637833759> **Duration:** $env[result;data;0;duration]\n<:Date:1271543843157971014> **Aired:** $replace[$replace[$env[result;data;0;aired;string];to ?;Until $if[$env[result;data;0;status]==Currently Airing;Present;Unknown];1];tp;untill;-1]\n<:Episode:1275135592140640403> **Episodes:** $env[result;data;0;episodes]\n<:Plus:1271544047579693148> **Age Rating:** $env[result;data;0;rating]]
                ]
                $case[ONA;
                  $addField[Web Anime: Info;<:Clock:1271543787637833759> **Duration:** $env[result;data;0;duration]\n<:Date:1271543843157971014> **Aired:** $replace[$replace[$env[result;data;0;aired;string];to ?;Until $if[$env[result;data;0;status]==Currently Airing;Present;Unknown];1];tp;untill;-1]\n<:Movie:1275435316441907321> **Genres:** $arrayJoin[final;, ]\n<:Plus:1271544047579693148> **Age Rating:** $env[result;data;0;rating]]
                ]
              ]
            ]

      $c[-------------------------------------------=[   BUTTONS \\]=-------------------------------------------]
            $switch[$get[amount];
              $case[0;
                $c[
                  $addActionRow
                  $addButton[close~$authorID~anime;;Danger;✖️;false]
                ]
              ]
              $case[1;
                $addActionRow
                $addButton[anime~$if[$checkContains[$getUserVar[anime~favorite;$authorID];$get[malID]]==true;unfavorite;favorite]~$authorID~0~$env[result;data;0;mal_id];;$if[$checkContains[$getUserVar[anime~favorite;$authorID];$get[malID]]==true;Success;Secondary];⭐;false]
                $addButton[anime~previous~$authorID~0;;Primary;◀️;true]
                $addButton[NoReply~$authorID;1/1;Secondary;;true]
                $addButton[anime~next~$authorID~1;;Primary;▶️;true]
                $addButton[close~$authorID~anime;;Danger;✖️;false]
              ]
              $case[2;
                $addActionRow
                $addButton[anime~$if[$checkContains[$getUserVar[anime~favorite;$authorID];$get[malID]]==true;unfavorite;favorite]~$authorID~0~$env[result;data;0;mal_id];;$if[$checkContains[$getUserVar[anime~favorite;$authorID];$get[malID]]==true;Success;Secondary];⭐;false]
                $addButton[anime~previous~$authorID~0;;Primary;◀️;true]
                $addButton[NoReply~$authorID;1/2;Secondary;;true]
                $addButton[anime~next~$authorID~1;;Primary;▶️;false]
                $addButton[close~$authorID~anime;;Danger;✖️;false]
              ]
              $case[3;
                $addActionRow
                $addButton[anime~$if[$checkContains[$getUserVar[anime~favorite;$authorID];$get[malID]]==true;unfavorite;favorite]~$authorID~0~$env[result;data;0;mal_id];;$if[$checkContains[$getUserVar[anime~favorite;$authorID];$get[malID]]==true;Success;Secondary];⭐;false]
                $addButton[anime~previous~$authorID~0;;Primary;◀️;true]
                $addButton[NoReply~$authorID;1/3;Secondary;;true]
                $addButton[anime~next~$authorID~1;;Primary;▶️;false]
                $addButton[close~$authorID~anime;;Danger;✖️;false]
              ]
              $case[4;
                $addActionRow
                $addButton[anime~$if[$checkContains[$getUserVar[anime~favorite;$authorID];$get[malID]]==true;unfavorite;favorite]~$authorID~0~$env[result;data;0;mal_id];;$if[$checkContains[$getUserVar[anime~favorite;$authorID];$get[malID]]==true;Success;Secondary];⭐;false]
                $addButton[anime~previous~$authorID~0;;Primary;◀️;true]
                $addButton[NoReply~$authorID;1/4;Secondary;;true]
                $addButton[anime~next~$authorID~1;;Primary;▶️;false]
                $addButton[close~$authorID~anime;;Danger;✖️;false]
              ]
              $case[5;
                $addActionRow
                $addButton[anime~$if[$checkContains[$getUserVar[anime~favorite;$authorID];$get[malID]]==true;unfavorite;favorite]~$authorID~0~$env[result;data;0;mal_id];;$if[$checkContains[$getUserVar[anime~favorite;$authorID];$get[malID]]==true;Success;Secondary];⭐;false]
                $addButton[anime~previous~$authorID~0;;Primary;◀️;true]
                $addButton[NoReply~$authorID;1/5;Secondary;;true]
                $addButton[anime~next~$authorID~1;;Primary;▶️;false]
                $addButton[close~$authorID~anime;;Danger;✖️;false]
              ]
              $case[default;
                $reply[
                  $ephemeral
                  $color[$getGlobalVar[colorError]]
                  $title[This is not supposed to happen!]
                  $description[Something went wrong in my code, try again in a bit!]
                  $footer[a log of this error has been send to my developers.]
                ]
                $sendMessage[$getGlobalVar[botErrorChannel];
                  $color[$getGlobalVar[colorError]]
                  $title[Error in "Normal Command"]
                  \n<@&1269723532162760816>
                  $description[Error in \`!anime\`]
                  $addField[Issue:;**author**: <@$get[author]> ~ ||$get[author]||\n**Command**: \`!anime $message\`;true]
                  $try[
                    $if[$guildID!=;
                      $attachment[$memberPerms[$guildID;$clientID;,\n];result.actionscript;true]
                      $addField[GuildInfo:;**Guild**: $guildName[$guildID] ~ ||$guildID||\n**Permissions**: \`in file attached\`;true]
                    ]
                  ]
                ]
              ]
            ]
          ]
          $case[304;
            $reply[
              $ephemeral
              $color[$getGlobalVar[colorError]]
              $title[This is not supposed to happen!]
              $description[There seems to be an issue with the API i interact with, please try again later!]
              $footer[A log of this error has been send to my developers.]
            ]
            $sendMessage[$getGlobalVar[botErrorChannel];
              $color[$getGlobalVar[colorError]]
              $title[Error in "Normal Command"]
              \n<@&1269723532162760816>
              $description[Error in \`!anime\` ~ StatusCode 304 (Not modified)]
              $addField[Issue:;**author**: <@$get[author]> ~ ||$get[author]||\n**Command**: \`!anime $message\`;true]
              $try[
                $if[$guildID!=;
                  $attachment[$memberPerms[$guildID;$clientID;,\n];result.actionscript;true]
                  $addField[GuildInfo:;**Guild**: $guildName[$guildID] ~ ||$guildID||\n**Permissions**: \`in file attached\`;true]
                ]
              ]
            ]
          ]
          $case[400;
            $reply[
              $ephemeral
              $color[$getGlobalVar[colorError]]
              $title[This is not supposed to happen!]
              $description[There seems to be an issue with the API i interact with, please try again later!]
              $footer[a log of this error has been send to my developers.]
            ]
            $sendMessage[$getGlobalVar[botErrorChannel];
              $color[$getGlobalVar[colorError]]
              $title[Error in "Normal Command"]
              \n<@&1269723532162760816>
              $description[Error in \`!anime\` ~ StatusCode 400 (Bad Request)]
              $addField[Issue:;**author**: <@$get[author]> ~ ||$get[author]||\n**Command**: \`!anime $message\`;true]
              $try[
                $if[$guildID!=;
                  $attachment[$memberPerms[$guildID;$clientID;,\n];result.actionscript;true]
                  $addField[GuildInfo:;**Guild**: $guildName[$guildID] ~ ||$guildID||\n**Permissions**: \`in file attached\`;true]
                ]
              ]
            ]
          ]
          $case[404;
            $reply[
              $ephemeral
              $color[$getGlobalVar[colorError]]
              $title[Woops Whats this anime?]
              $description[I couldnt fien the anime \`$get[query]\` sorry.]
            ]
          ]
          $case[405;
            $reply[
              $ephemeral
              $color[$getGlobalVar[colorError]]
              $title[This is not supposed to happen!]
              $description[There seems to be an issue with the API i interact with, please try again later!]
              $footer[a log of this error has been send to my developers.]
            ]
            $sendMessage[$getGlobalVar[botErrorChannel];
              $color[$getGlobalVar[colorError]]
              $title[Error in "Normal Command"]
              \n<@&1269723532162760816>
              $description[Error in \`!anime\` ~ StatusCode 405 (Method Not Allowed)]
              $addField[Issue:;**author**: <@$get[author]> ~ ||$get[author]||\n**Command**: \`!anime $message\`;true]
              $try[
                $if[$guildID!=;
                  $attachment[$memberPerms[$guildID;$clientID;,\n];result.actionscript;true]
                  $addField[GuildInfo:;**Guild**: $guildName[$guildID] ~ ||$guildID||\n**Permissions**: \`in file attached\`;true]
                ]
              ]
            ]
          ]
          $case[429;
            $reply[
              $ephemeral
              $color[$getGlobalVar[colorError]]
              $title[This is not supposed to happen!]
              $description[There seems to be an issue with the API i interact with, please try again later!]
              $footer[a log of this error has been send to my developers.]
            ]
            $sendMessage[$getGlobalVar[botErrorChannel];
              $color[$getGlobalVar[colorError]]
              $title[Error in "Normal Command"]
              \n<@&1269723532162760816>
              $description[Error in \`!anime\` ~ StatusCode 429 (RateLimited ~ To many requests)]
              $addField[Issue:;**author**: <@$get[author]> ~ ||$get[author]||\n**Command**: \`!anime $message\`;true]
              $try[
                $if[$guildID!=;
                  $attachment[$memberPerms[$guildID;$clientID;,\n];result.actionscript;true]
                  $addField[GuildInfo:;**Guild**: $guildName[$guildID] ~ ||$guildID||\n**Permissions**: \`in file attached\`;true]
                ]
              ]
            ]
          ]
          $case[500;
            $reply[
              $ephemeral
              $color[$getGlobalVar[colorError]]
              $title[This is not supposed to happen!]
              $description[There seems to be an issue with the API i interact with, please try again later!]
              $footer[a log of this error has been send to my developers.]
            ]
            $sendMessage[$getGlobalVar[botErrorChannel];
              $color[$getGlobalVar[colorError]]
              $title[Error in "Normal Command"]
              \n<@&1269723532162760816>
              $description[Error in \`!anime\` ~ StatusCode 500 (Internal Error)]
              $addField[Issue:;**author**: <@$get[author]> ~ ||$get[author]||\n**Command**: \`!anime $message\`;true]
              $try[
                $if[$guildID!=;
                  $attachment[$memberPerms[$guildID;$clientID;,\n];result.actionscript;true]
                  $addField[GuildInfo:;**Guild**: $guildName[$guildID] ~ ||$guildID||\n**Permissions**: \`in file attached\`;true]
                ]
              ]
            ]
          ]
          $case[503;
            $reply[
              $ephemeral
              $color[$getGlobalVar[colorError]]
              $title[This is not supposed to happen!]
              $description[There seems to be an issue with the API i interact with, please try again later!]
              $footer[a log of this error has been send to my developers.]
            ]
            $sendMessage[$getGlobalVar[botErrorChannel];
              $color[$getGlobalVar[colorError]]
              $title[Error in "Normal Command"]
              \n<@&1269723532162760816>
              $description[Error in \`!anime\` ~ StatusCode 503 (Service Unavailable)]
              $addField[Issue:;**author**: <@$get[author]> ~ ||$get[author]||\n**Command**: \`!anime $message\`;true]
              $try[
                $if[$guildID!=;
                  $attachment[$memberPerms[$guildID;$clientID;,\n];result.actionscript;true]
                  $addField[GuildInfo:;**Guild**: $guildName[$guildID] ~ ||$guildID||\n**Permissions**: \`in file attached\`;true]
                ]
              ]
            ]
          ]
        ]
      ]
    ]
  `},{
    type: "interactionCreate",
    code: `
      $disableConsoleErrors
      $textSplit[$customID;~]
      $c[
        $splitText[0] == Custom ID Name
        $splitText[1] == function
        $splitText[2] == authorID
        $splitText[3] == number of page
        $splitText[4] == MalID if given
      ]


      $disableConsoleErrors
      $onlyIf[$splitText[0]==anime;]
      $onlyIf[$splitText[2]==$authorID;]

      $jsonLoad[result;$readFile[./files/anime/$getUserVar[uuid;$authorID;not-found].json]]
      $let[page;$splitText[3]]
      $let[amount;$env[result;pagination;items;count]]
      $let[TitleOrigional;$env[result;data;$get[page];title]]
      $let[TitleDefault;$env[result;data;$get[page];title_english]]
      $let[TitleJapanese;$env[result;data;$get[page];title_japanese]]
      $let[TrailerUrl;$env[result;data;$get[page];trailer;url]]
      $let[description;$env[result;data;$get[page];synopsis]]
      $let[malID;$env[result;data;$get[page];mal_id]]
      $let[image;$env[result;data;$get[page];images;webp;image_url]]
      $switch[$splitText[1];
        $case[next;
          $interactionUpdate[
            $color[$if[$guildID==;$getUserVar[color;$userID;#ff47ff];$getGuildVar[color;$guildID;#ff47ff]]]
            $if[$get[TrailerUrl]==null;
              $title[$if[$get[TitleDefault]!=null;$get[TitleDefault];$get[TitleOrigional]] - ($get[TitleJapanese])]
            ;
              $title[$if[$get[TitleDefault]!=null;$get[TitleDefault];$get[TitleOrigional]] - ($get[TitleJapanese]);$get[TrailerUrl]]
            ]
            $thumbnail[$httpResult[data;$get[page];images;webp;image_url]]
            $switch[$env[result;data;$get[page];type];
              $case[TV Special;
                $addField[TV Special: Info;<:Clock:1271543787637833759> **Duration:** $env[result;data;$get[page];duration]\n<:Date:1271543843157971014> **Aired:** $replace[$replace[$env[result;data;$get[page];aired;string];to ?;Until $if[$env[result;data;$get[page];status]==Currently Airing;Present;Unknown];1];tp;untill;-1]\n<:Episode:1275135592140640403> **Episodes:** $env[result;data;$get[page];episodes]\n<:Plus:1271544047579693148> **Age Rating:** $env[result;data;$get[page];rating]]
              ]
              $case[TV;
                $addField[TV Series: Info;<:Clock:1271543787637833759> **Duration:** $env[result;data;$get[page];duration]\n<:Date:1271543843157971014> **Aired:** $replace[$replace[$env[result;data;$get[page];aired;string];to ?;Until $if[$env[result;data;$get[page];status]==Currently Airing;Present;Unknown];1];tp;untill;-1]\n<:Episode:1275135592140640403> **Episodes:** $env[result;data;$get[page];episodes]\n<:Plus:1271544047579693148> **Age Rating:** $env[result;data;$get[page];rating]]
              ]
              $case[Music;
                $addField[Music: Info;<:Clock:1271543787637833759> **Duration:** $env[result;data;$get[page];duration]\n<:Date:1271543843157971014> **Aired:** $replace[$replace[$env[result;data;$get[page];aired;string];to ?;Until $if[$env[result;data;$get[page];status]==Currently Airing;Present;Unknown];1];tp;untill;-1]\n<:Music:1275405140232372336>**Tracks:** $env[result;data;$get[page];episodes]\n<:Plus:1271544047579693148> **Age Rating:** $env[result;data;$get[page];rating]]
              ]
              $case[Movie;
                $addField[Movie: Info;<:Clock:1271543787637833759> **Duration:** $env[result;data;$get[page];duration]\n<:Date:1271543843157971014> **Aired:** $replace[$replace[$env[result;data;$get[page];aired;string];to ?;Until $if[$env[result;data;$get[page];status]==Currently Airing;Present;Unknown];1];tp;untill;-1]\n<:Movie:1275435316441907321>**Genres:** $arrayJoin[final;, ]\n<:Plus:1271544047579693148> **Age Rating:** $env[result;data;$get[page];rating]]
              ]
              $case[OVA;
                $addField[Origional Video Animation: Info;<:Clock:1271543787637833759> **Duration:** $env[result;data;$get[page];duration]\n<:Date:1271543843157971014> **Aired:** $replace[$replace[$env[result;data;$get[page];aired;string];to ?;Until $if[$env[result;data;$get[page];status]==Currently Airing;Present;Unknown];1];tp;untill;-1]\n<:Episode:1275135592140640403> **Episodes:** $env[result;data;$get[page];episodes]\n<:Plus:1271544047579693148> **Age Rating:** $env[result;data;$get[page];rating]]
              ]
              $case[ONA;
                $addField[Web Anime: Info;<:Clock:1271543787637833759> **Duration:** $env[result;data;$get[page];duration]\n<:Date:1271543843157971014> **Aired:** $replace[$replace[$env[result;data;$get[page];aired;string];to ?;Until $if[$env[result;data;$get[page];status]==Currently Airing;Present;Unknown];1];tp;untill;-1]\n<:Movie:1275435316441907321> **Genres:** $arrayJoin[final;, ]\n<:Plus:1271544047579693148> **Age Rating:** $env[result;data;$get[page];rating]]
              ]
            ]
            $description[$replace[$djsEval[
function trimString(str, maxLength) {
  if (str.length > maxLength) {
    return str.slice(0, maxLength - 3) + '...';
  }
  return str;
}

const longString = \`$get[description]\`;

const trimmedString = trimString(longString, 450);
trimmedString;
];\n[Written by MAL Rewrite\\];;-1]]
            $c[-------------------------------------------=[   BUTTONS \\]=-------------------------------------------]
            $switch[$get[page];
              $case[0;
                $addActionRow
                $addButton[anime~$if[$checkContains[$getUserVar[anime~favorite;$authorID];$get[malID]]==true;unfavorite;favorite]~$authorID~$get[page]~$env[result;data;$get[page];mal_id];;$if[$checkContains[$getUserVar[anime~favorite;$authorID];$get[malID]]==true;Success;Secondary];⭐;false]
                $addButton[anime~previous~$authorID~0;;Primary;◀️;true]
                $addButton[NoReply~$authorID;$math[$get[page]+1]/$get[amount];Secondary;;true]
                $addButton[anime~next~$authorID~$math[$get[page]+1];;Primary;▶️;$if[$get[amount]==1;true;false]]
                $addButton[close~$authorID~anime;;Danger;✖️;false]
              ]
              $case[1;
                $addActionRow
                $addButton[anime~$if[$checkContains[$getUserVar[anime~favorite;$authorID];$get[malID]]==true;unfavorite;favorite]~$authorID~$get[page]~$env[result;data;$get[page];mal_id];;$if[$checkContains[$getUserVar[anime~favorite;$authorID];$get[malID]]==true;Success;Secondary];⭐;false]
                $addButton[anime~previous~$authorID~$math[$get[page]-1];;Primary;◀️;false]
                $addButton[NoReply~$authorID;$math[$get[page]+1]/$get[amount];Secondary;;true]
                $addButton[anime~next~$authorID~$math[$get[page]+1];;Primary;▶️;$if[$get[amount]==2;true;false]]
                $addButton[close~$authorID~anime;;Danger;✖️;false]
              ]
              $case[2;
                $addActionRow
                $addButton[anime~$if[$checkContains[$getUserVar[anime~favorite;$authorID];$get[malID]]==true;unfavorite;favorite]~$authorID~$get[page]~$env[result;data;$get[page];mal_id];;$if[$checkContains[$getUserVar[anime~favorite;$authorID];$get[malID]]==true;Success;Secondary];⭐;false]
                $addButton[anime~previous~$authorID~$math[$get[page]-1];;Primary;◀️;false]
                $addButton[NoReply~$authorID;$math[$get[page]+1]/$get[amount];Secondary;;true]
                $addButton[anime~next~$authorID~$math[$get[page]+1];;Primary;▶️;$if[$get[amount]==3;true;false]]
                $addButton[close~$authorID~anime;;Danger;✖️;false]
              ]
              $case[3;
                $addActionRow
                $addButton[anime~$if[$checkContains[$getUserVar[anime~favorite;$authorID];$get[malID]]==true;unfavorite;favorite]~$authorID~$get[page]~$env[result;data;$get[page];mal_id];;$if[$checkContains[$getUserVar[anime~favorite;$authorID];$get[malID]]==true;Success;Secondary];⭐;false]
                $addButton[anime~previous~$authorID~$math[$get[page]-1];;Primary;◀️;false]
                $addButton[NoReply~$authorID;$math[$get[page]+1]/$get[amount];Secondary;;true]
                $addButton[anime~next~$authorID~$math[$get[page]+1];;Primary;▶️;$if[$get[amount]==4;true;false]]
                $addButton[close~$authorID~anime;;Danger;✖️;false]
              ]
              $case[4;
                $addActionRow
                $addButton[anime~$if[$checkContains[$getUserVar[anime~favorite;$authorID];$get[malID]]==true;unfavorite;favorite]~$authorID~$get[page]~$env[result;data;$get[page];mal_id];;$if[$checkContains[$getUserVar[anime~favorite;$authorID];$get[malID]]==true;Success;Secondary];⭐;false]
                $addButton[anime~previous~$authorID~$math[$get[page]-1];;Primary;◀️;false]
                $addButton[NoReply~$authorID;$math[$get[page]+1]/$get[amount];Secondary;;true]
                $addButton[anime~next~$authorID~1;;Primary;▶️;true]
                $addButton[close~$authorID~anime;;Danger;✖️;false]
              ]
              $case[default;
                $sendMessage[$getGlobalVar[botErrorChannel];
                  $color[$getGlobalVar[colorError]]
                  $title[Error in "Normal Command"]
                  \n<@&1269723532162760816>
                  $description[Error in \`!anime\`]
                  $addField[Issue:;**author**: <@$get[author]> ~ ||$get[author]||\n**Command**: \`!anime $message\`;true]
                  $try[
                    $if[$guildID!=;
                      $attachment[$memberPerms[$guildID;$clientID;,\n];result.actionscript;true]
                      $addField[GuildInfo:;**Guild**: $guildName[$guildID] ~ ||$guildID||\n**Permissions**: \`in file attached\`;true]
                    ]
                  ]
                  $ephemeral
                  $color[$getGlobalVar[colorError]]
                  $title[This is not supposed to happen!]
                  $description[Something went wrong in my code, try again in a bit!]
                  $footer[a log of this error has been send to my developers.]
                ]
              ]
            ]
          ]
        ]

        $case[previous;
          $interactionUpdate[
            $color[$if[$guildID==;$getUserVar[color;$userID;#ff47ff];$getGuildVar[color;$guildID;#ff47ff]]]
            $if[$get[TrailerUrl]==null;
              $title[$if[$get[TitleDefault]!=null;$get[TitleDefault];$get[TitleOrigional]] - ($get[TitleJapanese])]
            ;
              $title[$if[$get[TitleDefault]!=null;$get[TitleDefault];$get[TitleOrigional]] - ($get[TitleJapanese]);$get[TrailerUrl]]
            ]
            $thumbnail[$httpResult[data;$get[page];images;webp;image_url]]
            $switch[$env[result;data;$get[page];type];
              $case[TV Special;
                $addField[TV Special: Info;<:Clock:1271543787637833759> **Duration:** $env[result;data;$get[page];duration]\n<:Date:1271543843157971014> **Aired:** $replace[$replace[$env[result;data;$get[page];aired;string];to ?;Until $if[$env[result;data;$get[page];status]==Currently Airing;Present;Unknown];1];tp;untill;-1]\n<:Episode:1275135592140640403> **Episodes:** $env[result;data;$get[page];episodes]\n<:Plus:1271544047579693148> **Age Rating:** $env[result;data;$get[page];rating]]
              ]
              $case[TV;
                $addField[TV Series: Info;<:Clock:1271543787637833759> **Duration:** $env[result;data;$get[page];duration]\n<:Date:1271543843157971014> **Aired:** $replace[$replace[$env[result;data;$get[page];aired;string];to ?;Until $if[$env[result;data;$get[page];status]==Currently Airing;Present;Unknown];1];tp;untill;-1]\n<:Episode:1275135592140640403> **Episodes:** $env[result;data;$get[page];episodes]\n<:Plus:1271544047579693148> **Age Rating:** $env[result;data;$get[page];rating]]
              ]
              $case[Music;
                $addField[Music: Info;<:Clock:1271543787637833759> **Duration:** $env[result;data;$get[page];duration]\n<:Date:1271543843157971014> **Aired:** $replace[$replace[$env[result;data;$get[page];aired;string];to ?;Until $if[$env[result;data;$get[page];status]==Currently Airing;Present;Unknown];1];tp;untill;-1]\n<:Music:1275405140232372336>**Tracks:** $env[result;data;$get[page];episodes]\n<:Plus:1271544047579693148> **Age Rating:** $env[result;data;$get[page];rating]]
              ]
              $case[Movie;
                $addField[Movie: Info;<:Clock:1271543787637833759> **Duration:** $env[result;data;$get[page];duration]\n<:Date:1271543843157971014> **Aired:** $replace[$replace[$env[result;data;$get[page];aired;string];to ?;Until $if[$env[result;data;$get[page];status]==Currently Airing;Present;Unknown];1];tp;untill;-1]\n<:Movie:1275435316441907321>**Genres:** $arrayJoin[final;, ]\n<:Plus:1271544047579693148> **Age Rating:** $env[result;data;$get[page];rating]]
              ]
              $case[OVA;
                $addField[Origional Video Animation: Info;<:Clock:1271543787637833759> **Duration:** $env[result;data;$get[page];duration]\n<:Date:1271543843157971014> **Aired:** $replace[$replace[$env[result;data;$get[page];aired;string];to ?;Until $if[$env[result;data;$get[page];status]==Currently Airing;Present;Unknown];1];tp;untill;-1]\n<:Episode:1275135592140640403> **Episodes:** $env[result;data;$get[page];episodes]\n<:Plus:1271544047579693148> **Age Rating:** $env[result;data;$get[page];rating]]
              ]
              $case[ONA;
                $addField[Web Anime: Info;<:Clock:1271543787637833759> **Duration:** $env[result;data;$get[page];duration]\n<:Date:1271543843157971014> **Aired:** $replace[$replace[$env[result;data;$get[page];aired;string];to ?;Until $if[$env[result;data;$get[page];status]==Currently Airing;Present;Unknown];1];tp;untill;-1]\n<:Movie:1275435316441907321> **Genres:** $arrayJoin[final;, ]\n<:Plus:1271544047579693148> **Age Rating:** $env[result;data;$get[page];rating]]
              ]
            ]
            $description[$replace[$djsEval[
function trimString(str, maxLength) {
  if (str.length > maxLength) {
    return str.slice(0, maxLength - 3) + '...';
  }
  return str;
}

const longString = \`$get[description]\`;

const trimmedString = trimString(longString, 450);
trimmedString;
];\n[Written by MAL Rewrite\\];;-1]]
            $c[-------------------------------------------=[   BUTTONS \\]=-------------------------------------------]
            $switch[$get[page];
              $case[0;
                $addActionRow
                $addButton[anime~$if[$checkContains[$getUserVar[anime~favorite;$authorID];$get[malID]]==true;unfavorite;favorite]~$authorID~$get[page]~$env[result;data;$get[page];mal_id];;$if[$checkContains[$getUserVar[anime~favorite;$authorID];$get[malID]]==true;Success;Secondary];⭐;false]
                $addButton[anime~previous~$authorID~0;;Primary;◀️;true]
                $addButton[NoReply~$authorID;$math[$get[page]+1]/$get[amount];Secondary;;true]
                $addButton[anime~next~$authorID~$math[$get[page]+1];;Primary;▶️;$if[$get[amount]==1;true;false]]
                $addButton[close~$authorID~anime;;Danger;✖️;false]
              ]
              $case[1;
                $addActionRow
                $addButton[anime~$if[$checkContains[$getUserVar[anime~favorite;$authorID];$get[malID]]==true;unfavorite;favorite]~$authorID~$get[page]~$env[result;data;$get[page];mal_id];;$if[$checkContains[$getUserVar[anime~favorite;$authorID];$get[malID]]==true;Success;Secondary];⭐;false]
                $addButton[anime~previous~$authorID~$math[$get[page]-1];;Primary;◀️;false]
                $addButton[NoReply~$authorID;$math[$get[page]+1]/$get[amount];Secondary;;true]
                $addButton[anime~next~$authorID~$math[$get[page]+1];;Primary;▶️;$if[$get[amount]==2;true;false]]
                $addButton[close~$authorID~anime;;Danger;✖️;false]
              ]
              $case[2;
                $addActionRow
                $addButton[anime~$if[$checkContains[$getUserVar[anime~favorite;$authorID];$get[malID]]==true;unfavorite;favorite]~$authorID~$get[page]~$env[result;data;$get[page];mal_id];;$if[$checkContains[$getUserVar[anime~favorite;$authorID];$get[malID]]==true;Success;Secondary];⭐;false]
                $addButton[anime~previous~$authorID~$math[$get[page]-1];;Primary;◀️;false]
                $addButton[NoReply~$authorID;$math[$get[page]+1]/$get[amount];Secondary;;true]
                $addButton[anime~next~$authorID~$math[$get[page]+1];;Primary;▶️;$if[$get[amount]==3;true;false]]
                $addButton[close~$authorID~anime;;Danger;✖️;false]
              ]
              $case[3;
                $addActionRow
                $addButton[anime~$if[$checkContains[$getUserVar[anime~favorite;$authorID];$get[malID]]==true;unfavorite;favorite]~$authorID~$get[page]~$env[result;data;$get[page];mal_id];;$if[$checkContains[$getUserVar[anime~favorite;$authorID];$get[malID]]==true;Success;Secondary];⭐;false]
                $addButton[anime~previous~$authorID~$math[$get[page]-1];;Primary;◀️;false]
                $addButton[NoReply~$authorID;$math[$get[page]+1]/$get[amount];Secondary;;true]
                $addButton[anime~next~$authorID~$math[$get[page]+1];;Primary;▶️;$if[$get[amount]==4;true;false]]
                $addButton[close~$authorID~anime;;Danger;✖️;false]
              ]
              $case[4;
                $addActionRow
                $addButton[anime~$if[$checkContains[$getUserVar[anime~favorite;$authorID];$get[malID]]==true;unfavorite;favorite]~$authorID~$get[page]~$env[result;data;$get[page];mal_id];;$if[$checkContains[$getUserVar[anime~favorite;$authorID];$get[malID]]==true;Success;Secondary];⭐;false]
                $addButton[anime~previous~$authorID~$math[$get[page]-1];;Primary;◀️;false]
                $addButton[NoReply~$authorID;$math[$get[page]+1]/$get[amount];Secondary;;true]
                $addButton[anime~next~$authorID~1;;Primary;▶️;true]
                $addButton[close~$authorID~anime;;Danger;✖️;false]
              ]
              $case[default;
                $sendMessage[$getGlobalVar[botErrorChannel];
                  $color[$getGlobalVar[colorError]]
                  $title[Error in "Normal Command"]
                  \n<@&1269723532162760816>
                  $description[Error in \`!anime\`]
                  $addField[Issue:;**author**: <@$get[author]> ~ ||$get[author]||\n**Command**: \`!anime $message\`;true]
                  $try[
                    $if[$guildID!=;
                      $attachment[$memberPerms[$guildID;$clientID;,\n];result.actionscript;true]
                      $addField[GuildInfo:;**Guild**: $guildName[$guildID] ~ ||$guildID||\n**Permissions**: \`in file attached\`;true]
                    ]
                  ]
                  $ephemeral
                  $color[$getGlobalVar[colorError]]
                  $title[This is not supposed to happen!]
                  $description[Something went wrong in my code, try again in a bit!]
                  $footer[a log of this error has been send to my developers.]
                ]
              ]
            ]
          ]
        ]

        $case[favorite;
          $arrayLoad[anime~favorite;,;$getuserVar[anime~favorite;$authorID]]
          $arrayPush[anime~favorite;$splitText[4]]
          $setUserVar[anime~favorite;$arrayJoin[anime~favorite;,];$authorID]
          $httpAddHeader[Content-Type;application/json]
          $httpSetBody[{
    "id": "$env[result;data;$get[page];mal_id]",
    "title": "$get[TitleJapanese]",
    "title_english": "$get[TitleDefault]",
    "url": "$get[TrailerUrl]",
    "favorited": 1
}]
          $!httpRequest[https://api.lynnux.xyz/anime;post]
          $jsonLoad[result;$readFile[./files/anime/$getUserVar[uuid;$authorID;not-found].json]]
          $interactionUpdate[
            $color[$if[$guildID==;$getUserVar[color;$userID;#ff47ff];$getGuildVar[color;$guildID;#ff47ff]]]
            $if[$get[TrailerUrl]==null;
              $title[$if[$get[TitleDefault]!=null;$get[TitleDefault];$get[TitleOrigional]] - ($get[TitleJapanese])]
            ;
              $title[$if[$get[TitleDefault]!=null;$get[TitleDefault];$get[TitleOrigional]] - ($get[TitleJapanese]);$get[TrailerUrl]]
            ]
            $thumbnail[$env[result;data;$get[page];images;webp;image_url]]
            $switch[$env[result;data;$get[page];type];
              $case[TV Special;
                $addField[TV Special: Info;<:Clock:1271543787637833759> **Duration:** $env[result;data;$get[page];duration]\n<:Date:1271543843157971014> **Aired:** $replace[$replace[$env[result;data;$get[page];aired;string];to ?;Until $if[$env[result;data;$get[page];status]==Currently Airing;Present;Unknown];1];tp;untill;-1]\n<:Episode:1275135592140640403> **Episodes:** $env[result;data;$get[page];episodes]\n<:Plus:1271544047579693148> **Age Rating:** $env[result;data;$get[page];rating]]
              ]
              $case[TV;
                $addField[TV Series: Info;<:Clock:1271543787637833759> **Duration:** $env[result;data;$get[page];duration]\n<:Date:1271543843157971014> **Aired:** $replace[$replace[$env[result;data;$get[page];aired;string];to ?;Until $if[$env[result;data;$get[page];status]==Currently Airing;Present;Unknown];1];tp;untill;-1]\n<:Episode:1275135592140640403> **Episodes:** $env[result;data;$get[page];episodes]\n<:Plus:1271544047579693148> **Age Rating:** $env[result;data;$get[page];rating]]
              ]
              $case[Music;
                $addField[Music: Info;<:Clock:1271543787637833759> **Duration:** $env[result;data;$get[page];duration]\n<:Date:1271543843157971014> **Aired:** $replace[$replace[$env[result;data;$get[page];aired;string];to ?;Until $if[$env[result;data;$get[page];status]==Currently Airing;Present;Unknown];1];tp;untill;-1]\n<:Music:1275405140232372336>**Tracks:** $env[result;data;$get[page];episodes]\n<:Plus:1271544047579693148> **Age Rating:** $env[result;data;$get[page];rating]]
              ]
              $case[Movie;
                $addField[Movie: Info;<:Clock:1271543787637833759> **Duration:** $env[result;data;$get[page];duration]\n<:Date:1271543843157971014> **Aired:** $replace[$replace[$env[result;data;$get[page];aired;string];to ?;Until $if[$env[result;data;$get[page];status]==Currently Airing;Present;Unknown];1];tp;untill;-1]\n<:Movie:1275435316441907321>**Genres:** $arrayJoin[final;, ]\n<:Plus:1271544047579693148> **Age Rating:** $env[result;data;$get[page];rating]]
              ]
              $case[OVA;
                $addField[Origional Video Animation: Info;<:Clock:1271543787637833759> **Duration:** $env[result;data;$get[page];duration]\n<:Date:1271543843157971014> **Aired:** $replace[$replace[$env[result;data;$get[page];aired;string];to ?;Until $if[$env[result;data;$get[page];status]==Currently Airing;Present;Unknown];1];tp;untill;-1]\n<:Episode:1275135592140640403> **Episodes:** $env[result;data;$get[page];episodes]\n<:Plus:1271544047579693148> **Age Rating:** $env[result;data;$get[page];rating]]
              ]
              $case[ONA;
                $addField[Web Anime: Info;<:Clock:1271543787637833759> **Duration:** $env[result;data;$get[page];duration]\n<:Date:1271543843157971014> **Aired:** $replace[$replace[$env[result;data;$get[page];aired;string];to ?;Until $if[$env[result;data;$get[page];status]==Currently Airing;Present;Unknown];1];tp;untill;-1]\n<:Movie:1275435316441907321> **Genres:** $arrayJoin[final;, ]\n<:Plus:1271544047579693148> **Age Rating:** $env[result;data;$get[page];rating]]
              ]
            ]
            $description[$replace[$djsEval[
function trimString(str, maxLength) {
  if (str.length > maxLength) {
    return str.slice(0, maxLength - 3) + '...';
  }
  return str;
}

const longString = \`$get[description]\`;

const trimmedString = trimString(longString, 450);
trimmedString;
];\n[Written by MAL Rewrite\\];;-1]]
            $c[-------------------------------------------=[   BUTTONS \\]=-------------------------------------------]
            $switch[$get[page];
              $case[0;
                $addActionRow
                $addButton[anime~unfavorite~$authorID~$get[page]~$env[result;data;$get[page];mal_id];;Success;⭐;false]
                $addButton[anime~previous~$authorID~0;;Primary;◀️;true]
                $addButton[NoReply~$authorID;$math[$get[page]+1]/$get[amount];Secondary;;true]
                $addButton[anime~next~$authorID~$math[$get[page]+1];;Primary;▶️;$if[$get[amount]==1;true;false]]
                $addButton[close~$authorID~anime;;Danger;✖️;false]
              ]
              $case[1;
                $addActionRow
                $addButton[anime~unfavorite~$authorID~$get[page]~$env[result;data;$get[page];mal_id];;Success;⭐;false]
                $addButton[anime~previous~$authorID~$math[$get[page]-1];;Primary;◀️;false]
                $addButton[NoReply~$authorID;$math[$get[page]+1]/$get[amount];Secondary;;true]
                $addButton[anime~next~$authorID~$math[$get[page]+1];;Primary;▶️;$if[$get[amount]==2;true;false]]
                $addButton[close~$authorID~anime;;Danger;✖️;false]
              ]
              $case[2;
                $addActionRow
                $addButton[anime~unfavorite~$authorID~$get[page]~$env[result;data;$get[page];mal_id];;Success;⭐;false]
                $addButton[anime~previous~$authorID~$math[$get[page]-1];;Primary;◀️;false]
                $addButton[NoReply~$authorID;$math[$get[page]+1]/$get[amount];Secondary;;true]
                $addButton[anime~next~$authorID~$math[$get[page]+1];;Primary;▶️;$if[$get[amount]==3;true;false]]
                $addButton[close~$authorID~anime;;Danger;✖️;false]
              ]
              $case[3;
                $addActionRow
                $addButton[anime~unfavorite~$authorID~$get[page]~$env[result;data;$get[page];mal_id];;Success;⭐;false]
                $addButton[anime~previous~$authorID~$math[$get[page]-1];;Primary;◀️;false]
                $addButton[NoReply~$authorID;$math[$get[page]+1]/$get[amount];Secondary;;true]
                $addButton[anime~next~$authorID~$math[$get[page]+1];;Primary;▶️;$if[$get[amount]==4;true;false]]
                $addButton[close~$authorID~anime;;Danger;✖️;false]
              ]
              $case[4;
                $addActionRow
                $addButton[anime~unfavorite~$authorID~$get[page]~$env[result;data;$get[page];mal_id];;Success;⭐;false]
                $addButton[anime~previous~$authorID~$math[$get[page]-1];;Primary;◀️;false]
                $addButton[NoReply~$authorID;$math[$get[page]+1]/$get[amount];Secondary;;true]
                $addButton[anime~next~$authorID~1;;Primary;▶️;true]
                $addButton[close~$authorID~anime;;Danger;✖️;false]
              ]
              $case[default;
                $sendMessage[$getGlobalVar[botErrorChannel];
                  $color[$getGlobalVar[colorError]]
                  $title[Error in "Normal Command"]
                  \n<@&1269723532162760816>
                  $description[Error in \`!anime\`]
                  $addField[Issue:;**author**: <@$get[author]> ~ ||$get[author]||\n**Command**: \`!anime $message\`;true]
                  $try[
                    $if[$guildID!=;
                      $attachment[$memberPerms[$guildID;$clientID;,\n];result.actionscript;true]
                      $addField[GuildInfo:;**Guild**: $guildName[$guildID] ~ ||$guildID||\n**Permissions**: \`in file attached\`;true]
                    ]
                  ]
                  $ephemeral
                  $color[$getGlobalVar[colorError]]
                  $title[This is not supposed to happen!]
                  $description[Something went wrong in my code, try again in a bit!]
                  $footer[a log of this error has been send to my developers.]
                ]
              ]
            ]
          ]
        ]
        $case[unfavorite;
          $setUserVar[anime~favorite;$replace[$getUserVar[anime~favorite;$authorID];,$get[malID];;1];$authorID]
          $!httpRequest[https://api.lynnux.xyz/anime?id=$env[result;data;$get[page];mal_id];delete]
          $jsonLoad[result;$readFile[./files/anime/$getUserVar[uuid;$authorID;not-found].json]]
          $interactionUpdate[
            $color[$if[$guildID==;$getUserVar[color;$userID;#ff47ff];$getGuildVar[color;$guildID;#ff47ff]]]
            $if[$get[TrailerUrl]==null;
              $title[$if[$get[TitleDefault]!=null;$get[TitleDefault];$get[TitleOrigional]] - ($get[TitleJapanese])]
            ;
              $title[$if[$get[TitleDefault]!=null;$get[TitleDefault];$get[TitleOrigional]] - ($get[TitleJapanese]);$get[TrailerUrl]]
            ]
            $thumbnail[$env[result;data;$get[page];images;webp;image_url]]
            $switch[$env[result;data;$get[page];type];
              $case[TV Special;
                $addField[TV Special: Info;<:Clock:1271543787637833759> **Duration:** $env[result;data;$get[page];duration]\n<:Date:1271543843157971014> **Aired:** $replace[$replace[$env[result;data;$get[page];aired;string];to ?;Until $if[$env[result;data;$get[page];status]==Currently Airing;Present;Unknown];1];tp;untill;-1]\n<:Episode:1275135592140640403> **Episodes:** $env[result;data;$get[page];episodes]\n<:Plus:1271544047579693148> **Age Rating:** $env[result;data;$get[page];rating]]
              ]
              $case[TV;
                $addField[TV Series: Info;<:Clock:1271543787637833759> **Duration:** $env[result;data;$get[page];duration]\n<:Date:1271543843157971014> **Aired:** $replace[$replace[$env[result;data;$get[page];aired;string];to ?;Until $if[$env[result;data;$get[page];status]==Currently Airing;Present;Unknown];1];tp;untill;-1]\n<:Episode:1275135592140640403> **Episodes:** $env[result;data;$get[page];episodes]\n<:Plus:1271544047579693148> **Age Rating:** $env[result;data;$get[page];rating]]
              ]
              $case[Music;
                $addField[Music: Info;<:Clock:1271543787637833759> **Duration:** $env[result;data;$get[page];duration]\n<:Date:1271543843157971014> **Aired:** $replace[$replace[$env[result;data;$get[page];aired;string];to ?;Until $if[$env[result;data;$get[page];status]==Currently Airing;Present;Unknown];1];tp;untill;-1]\n<:Music:1275405140232372336>**Tracks:** $env[result;data;$get[page];episodes]\n<:Plus:1271544047579693148> **Age Rating:** $env[result;data;$get[page];rating]]
              ]
              $case[Movie;
                $addField[Movie: Info;<:Clock:1271543787637833759> **Duration:** $env[result;data;$get[page];duration]\n<:Date:1271543843157971014> **Aired:** $replace[$replace[$env[result;data;$get[page];aired;string];to ?;Until $if[$env[result;data;$get[page];status]==Currently Airing;Present;Unknown];1];tp;untill;-1]\n<:Movie:1275435316441907321>**Genres:** $arrayJoin[final;, ]\n<:Plus:1271544047579693148> **Age Rating:** $env[result;data;$get[page];rating]]
              ]
              $case[OVA;
                $addField[Origional Video Animation: Info;<:Clock:1271543787637833759> **Duration:** $env[result;data;$get[page];duration]\n<:Date:1271543843157971014> **Aired:** $replace[$replace[$env[result;data;$get[page];aired;string];to ?;Until $if[$env[result;data;$get[page];status]==Currently Airing;Present;Unknown];1];tp;untill;-1]\n<:Episode:1275135592140640403> **Episodes:** $env[result;data;$get[page];episodes]\n<:Plus:1271544047579693148> **Age Rating:** $env[result;data;$get[page];rating]]
              ]
              $case[ONA;
                $addField[Web Anime: Info;<:Clock:1271543787637833759> **Duration:** $env[result;data;$get[page];duration]\n<:Date:1271543843157971014> **Aired:** $replace[$replace[$env[result;data;$get[page];aired;string];to ?;Until $if[$env[result;data;$get[page];status]==Currently Airing;Present;Unknown];1];tp;untill;-1]\n<:Movie:1275435316441907321> **Genres:** $arrayJoin[final;, ]\n<:Plus:1271544047579693148> **Age Rating:** $env[result;data;$get[page];rating]]
              ]
            ]
            $description[$replace[$djsEval[
function trimString(str, maxLength) {
  if (str.length > maxLength) {
    return str.slice(0, maxLength - 3) + '...';
  }
  return str;
}

const longString = \`$get[description]\`;

const trimmedString = trimString(longString, 450);
trimmedString;
];\n[Written by MAL Rewrite\\];;-1]]
            $switch[$get[page];
              $case[0;
                $addActionRow
                $addButton[anime~favorite~$authorID~$get[page]~$env[result;data;$get[page];mal_id];;Secondary;⭐;false]
                $addButton[anime~previous~$authorID~0;;Primary;◀️;true]
                $addButton[NoReply~$authorID;$math[$get[page]+1]/$get[amount];Secondary;;true]
                $addButton[anime~next~$authorID~$math[$get[page]+1];;Primary;▶️;$if[$get[amount]==1;true;false]]
                $addButton[close~$authorID~anime;;Danger;✖️;false]
              ]
              $case[1;
                $addActionRow
                $addButton[anime~favorite~$authorID~$get[page]~$env[result;data;$get[page];mal_id];;Secondary;⭐;false]
                $addButton[anime~previous~$authorID~$math[$get[page]-1];;Primary;◀️;false]
                $addButton[NoReply~$authorID;$math[$get[page]+1]/$get[amount];Secondary;;true]
                $addButton[anime~next~$authorID~$math[$get[page]+1];;Primary;▶️;$if[$get[amount]==2;true;false]]
                $addButton[close~$authorID~anime;;Danger;✖️;false]
              ]
              $case[2;
                $addActionRow
                $addButton[anime~favorite~$authorID~$get[page]~$env[result;data;$get[page];mal_id];;Secondary;⭐;false]
                $addButton[anime~previous~$authorID~$math[$get[page]-1];;Primary;◀️;false]
                $addButton[NoReply~$authorID;$math[$get[page]+1]/$get[amount];Secondary;;true]
                $addButton[anime~next~$authorID~$math[$get[page]+1];;Primary;▶️;$if[$get[amount]==3;true;false]]
                $addButton[close~$authorID~anime;;Danger;✖️;false]
              ]
              $case[3;
                $addActionRow
                $addButton[anime~favorite~$authorID~$get[page]~$env[result;data;$get[page];mal_id];;Secondary;⭐;false]
                $addButton[anime~previous~$authorID~$math[$get[page]-1];;Primary;◀️;false]
                $addButton[NoReply~$authorID;$math[$get[page]+1]/$get[amount];Secondary;;true]
                $addButton[anime~next~$authorID~$math[$get[page]+1];;Primary;▶️;$if[$get[amount]==4;true;false]]
                $addButton[close~$authorID~anime;;Danger;✖️;false]
              ]
              $case[4;
                $addActionRow
                $addButton[anime~favorite~$authorID~$get[page]~$env[result;data;$get[page];mal_id];;Success;⭐;false]
                $addButton[anime~previous~$authorID~$math[$get[page]-1];;Primary;◀️;false]
                $addButton[NoReply~$authorID;$math[$get[page]+1]/$get[amount];Secondary;;true]
                $addButton[anime~next~$authorID~1;;Primary;▶️;true]
                $addButton[close~$authorID~anime;;Danger;✖️;false]
              ]
              $case[default;
                $sendMessage[$getGlobalVar[botErrorChannel];
                  $color[$getGlobalVar[colorError]]
                  $title[Error in "Normal Command"]
                  \n<@&1269723532162760816>
                  $description[Error in \`!anime\`]
                  $addField[Issue:;**author**: <@$get[author]> ~ ||$get[author]||\n**Command**: \`!anime $message\`;true]
                  $try[
                    $if[$guildID!=;
                      $attachment[$memberPerms[$guildID;$clientID;,\n];result.actionscript;true]
                      $addField[GuildInfo:;**Guild**: $guildName[$guildID] ~ ||$guildID||\n**Permissions**: \`in file attached\`;true]
                    ]
                  ]
                  $ephemeral
                  $color[$getGlobalVar[colorError]]
                  $title[This is not supposed to happen!]
                  $description[Something went wrong in my code, try again in a bit!]
                  $footer[a log of this error has been send to my developers.]
                ]
              ]
            ]
          ]
        ]
      ]
    `
  },{
    type: "interactionCreate",
    code: `
      $disableConsoleErrors
      $textSplit[$customID;~]
      $c[
        $splitText[0] == Custom ID Name
        $splitText[1] == function
        $splitText[2] == authorID
        $splitText[3] == number of page
        $splitText[4] == MalID if given
      ]


      $disableConsoleErrors
      $onlyIf[$splitText[0]==animeCharacter;]
      $onlyIf[$splitText[2]==$authorID;]

      $if[$splitText[1]==next;$let[page;$math[$splitText[3]+1]];$if[$splitText[1]==previous;$let[page;$math[$splitText[3]-1]];$let[page;0]]]
      $jsonLoad[result;$readFile[./files/anime/$getUserVar[uuid;$authorID;not-found].json]]
      $let[description;$cropText[$env[result;data;$get[page];about];0;250]]

      $interactionUpdate[
        $title[$env[result;data;$get[page];name] $replace[~ ($env[result;data;$get[page];name_kanji]);~ (null);;1];$env[result;data;$get[page];url]]
        $thumbnail[$env[result;data;$get[page];images;webp;image_url]]
        $if[$env[result;data;$get[page];about]!=null;$description[$get[description]$if[$endsWith[$get[description]; ]!=false;...; ...]];$description[No info available on this character.]]
        $color[$if[$guildID==;$getUserVar[color;$userID;#ff47ff];$getGuildVar[color;$guildID;#ff47ff]]]

        $addActionRow
        $addButton[NoUseCom;;Secondary;<:Spacer:1275843251349356675>;true]
        $addButton[animeCharacter~previous~$authorID~$get[page];;Primary;◀️;$if[$get[page]==0;true;false]]
        $addButton[NoReply~$authorID;$math[$get[page]+1]/$env[result;pagination;items;count];Secondary;;true]
        $addButton[animeCharacter~next~$authorID~$get[page];;Primary;▶️;$if[$get[page]<=$math[$env[result;pagination;items;count]-2];false;true]]
        $addButton[close~$authorID~anime;;Danger;✖️;false]
        $let[malID;$env[result;data;$get[page];mal_id]]
        $let[vaRequest;$httpRequest[https://api.jikan.moe/v4/characters/$get[malID]/voices;get]]
        $if[$httpResult[data;0;language]!=;
          $addField[Voice Actors:;- **$httpResult[data;0;language]:** [$httpResult[data;0;person;name]\\]($httpResult[data;0;person;url])$if[$httpResult[data;1;language]!=;\n- **$httpResult[data;1;language]:** [$httpResult[data;1;person;name]\\]($httpResult[data;1;person;url])]$if[$httpResult[data;2;language]!=;\n- **$httpResult[data;2;language]:** [$httpResult[data;2;person;name]\\]($httpResult[data;2;person;url])]$if[$httpResult[data;3;language]!=;\n- **$httpResult[data;3;language]:** [$httpResult[data;3;person;name]\\]($httpResult[data;3;person;url])]$if[$httpResult[data;4;language]!=;\n- **$httpResult[data;4;language]:** [$httpResult[data;4;person;name]\\]($httpResult[data;4;person;url])]$if[$httpResult[data;5;language]!=;\n- **$httpResult[data;5;language]:** [$httpResult[data;5;person;name]\\]($httpResult[data;5;person;url])]$if[$httpResult[data;6;language]!=;\n- **$httpResult[data;6;language]:** [$httpResult[data;6;person;name]\\]($httpResult[data;6;person;url])];true]
        ]
        $let[animeRequest;$httpRequest[https://api.jikan.moe/v4/characters/$get[malID]/anime;get]]
        $if[$get[animeRequest]==200;$author[From the anime: "$httpResult[data;0;anime;title]"]]

      ]


    `
  }]

// ^ JikanAPI
// &

/*
~  | Status Codes
*  | 200 - OK
*  | 304 - Not Modified
*  | 400 - Bad Request
*  | 404 - Not Found
*  | 405 - Method Not Allowed
*  | 429 - Too Many Request
*  | 500 - Internal Server Error
*  | 503 - Service Unavailable
*/

/*
~  | Full Juston
*/