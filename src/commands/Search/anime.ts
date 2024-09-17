interface Command {
  name?: string;
  aliases?: string[];
  type: string;
  description: string;
  module: string;
  sourcecode: string;
  documentation?: string;
  usage?: string;
  example?: string;
  version: string;
  code: string;
}

const commands: Command[] = [
  {
    name: "anime",
    aliases: ["animelookup", "whattheanime"],
    type: "messageCreate",
    description: "Search for a anime or a anime character",
    usage: "anime <query> {option}",
    module: "Search",
    version: "1.0.0",
    sourcecode: "src/commands/search/anime.ts",
    documentation: "anime/",
    example: "anime frieren",
    code: `
      $onlyIf[$getUserVar[AgreedToTos;$callFunction[customEncrypt;encrypt;$authorID]]==true;$getGlobalVar[AgreedToTosEmbedReply]]
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
        $case[default;
          $let[author;$customEncrypt[encrypt;$authorID]]
          $let[query;$replace[$replace[$message; --all;;-1]; --tv;;-1]]
          $let[type;$if[$checkContains[$message;--all]==true;&type=all;$if[$checkContains[$message;--tv]==true;&type=tv;]]]
          $let[request;$httpRequest[https://api.jikan.moe/v4/anime?page=1&limit=5&q=$replace[$get[query]; ;%20;-1]&sfw=true$get[type];get]]
          $reply[$channelID;$messageID;false]
          $c[-# $userName[$clientID] is thinking <a:Loading:1275473940789330000>]
          $writeFile[./files/anime/$getUserVar[uuid;$authorID;not-found].json;$httpResult]
          $jsonLoad[result;$readFile[./files/anime/$getUserVar[uuid;$authorID;not-found].json]]
          $jsonLoad[genres;$env[result;data;0;genres]]
          $arrayMap[genres;genre;$jsonLoad[uwu;$env[genre]]$return[$env[uwu;name]];final]

          $let[amount;$env[result;pagination;items;count]]
          $let[TitleOrigional;$env[result;data;0;title]]
          $let[TitleDefault;$env[result;data;0;title_english]]
          $let[TitleJapanese;$env[result;data;0;title_japanese]]
          $let[TrailerUrl;$env[result;data;0;trailer;url]]
          $let[description;$env[result;data;0;synopsis]]
          $let[page;0]
          $let[malID;$env[result;data;0;mal_id]]

$c[=====-=====-===== EDIT EMBED ===-=====-=====-=====-=====-=====-=====-=====-=====-=====]
          $switch[$get[request];
            $case[200;
              $if[$get[amount]==0;
                $customError[400;anime]
              ;
                $color[$if[$getUserVar[color;$get[author];false]!=false;$getUserVar[color;$get[author];#ff47ff];$getUserVar[color;$get[guild];#ff47ff]]]
                $title[$if[$get[TitleDefault]!=null;$get[TitleDefault];$get[TitleOrigional]] - ($get[TitleJapanese]);$if[$get[TrailerUrl]==null;https://akira.lynnux.xyz/anime?id=$splitText[4];$get[TrailerUrl]]]
                $description[$djsEval[function trimString(str, maxLength) {if (str.length > maxLength) {return str.slice(0, maxLength - 3) + '...';}return str;}const longString = \`$get[description]\`;const trimmedString = trimString(longString, 450);trimmedString;]]
                $thumbnail[$httpResult[data;0;images;webp;image_url]]
                $switch[$env[result;data;0;type];
                  $case[TV Special;$addField[TV Special: Info;<:Clock:1271543787637833759> **Duration:** $env[result;data;0;duration]\n<:Date:1271543843157971014> **Aired:** $replace[$replace[$env[result;data;0;aired;string];to ?;Until $if[$env[result;data;0;status]==Currently Airing;Present;Unknown];1];tp;untill;-1]\n<:Episode:1275135592140640403> **Episodes:** $env[result;data;0;episodes]\n<:Plus:1271544047579693148> **Age Rating:** $env[result;data;0;rating]]]
                  $case[TV;$addField[TV Series: Info;<:Clock:1271543787637833759> **Duration:** $env[result;data;0;duration]\n<:Date:1271543843157971014> **Aired:** $replace[$replace[$env[result;data;0;aired;string];to ?;Until $if[$env[result;data;0;status]==Currently Airing;Present;Unknown];1];tp;untill;-1]\n<:Episode:1275135592140640403> **Episodes:** $env[result;data;0;episodes]\n<:Plus:1271544047579693148> **Age Rating:** $env[result;data;0;rating]]]
                  $case[Music;$addField[Music: Info;<:Clock:1271543787637833759> **Duration:** $env[result;data;0;duration]\n<:Date:1271543843157971014> **Aired:** $replace[$replace[$env[result;data;0;aired;string];to ?;Until $if[$env[result;data;0;status]==Currently Airing;Present;Unknown];1];tp;untill;-1]\n<:Music:1275405140232372336>**Tracks:** $env[result;data;0;episodes]\n<:Plus:1271544047579693148> **Age Rating:** $env[result;data;0;rating]]]
                  $case[Movie;$addField[Movie: Info;<:Clock:1271543787637833759> **Duration:** $env[result;data;0;duration]\n<:Date:1271543843157971014> **Aired:** $replace[$replace[$env[result;data;0;aired;string];to ?;Until $if[$env[result;data;0;status]==Currently Airing;Present;Unknown];1];tp;untill;-1]\n<:Movie:1275435316441907321>**Genres:** $arrayJoin[final;, ]\n<:Plus:1271544047579693148> **Age Rating:** $env[result;data;0;rating]]]
                  $case[OVA;$addField[Origional Video Animation: Info;<:Clock:1271543787637833759> **Duration:** $env[result;data;0;duration]\n<:Date:1271543843157971014> **Aired:** $replace[$replace[$env[result;data;0;aired;string];to ?;Until $if[$env[result;data;0;status]==Currently Airing;Present;Unknown];1];tp;untill;-1]\n<:Episode:1275135592140640403> **Episodes:** $env[result;data;0;episodes]\n<:Plus:1271544047579693148> **Age Rating:** $env[result;data;0;rating]]]
                  $case[ONA;$addField[Web Anime: Info;<:Clock:1271543787637833759> **Duration:** $env[result;data;0;duration]\n<:Date:1271543843157971014> **Aired:** $replace[$replace[$env[result;data;0;aired;string];to ?;Until $if[$env[result;data;0;status]==Currently Airing;Present;Unknown];1];tp;untill;-1]\n<:Movie:1275435316441907321> **Genres:** $arrayJoin[final;, ]\n<:Plus:1271544047579693148> **Age Rating:** $env[result;data;0;rating]]]
                ]
                $addActionRow
                $addButton[anime~favorite~$authorID~$get[page]~$get[malID];;$if[$checkContains[$getuserVar[anime~favorite;$get[author]];$get[malID]]==true;Success;Secondary];⭐;false]
                $addButton[anime~previous~$authorID~$math[$get[page]-1]~$get[malID];;Primary;◀️;$if[$get[page]==0;true;false]]
                $addButton[NoReply~$authorID;$math[$get[page]+1]/$get[amount];Secondary;;true]
                $addButton[anime~next~$authorID~$math[$get[page]+1]~$get[malID];;Primary;▶️;$if[$get[amount]==1;true;false]]
                $addButton[close~$authorID~anime;;Danger;✖️;false]
              ]
            ]
            $case[404;
              $reply[
                $ephemeral
                $color[$getGlobalVar[colorError]]
                $title[Woops Whats this anime?]
                $description[I couldnt find the anime \`$get[query]\` sorry.]
              ]
            ]
            $case[default;
              $customError[$get[request];anime]
              $errorEmbed[$get[request];message;anime]
            ]
          ]
        ]
      ]
    `
  }
]

export default commands;


