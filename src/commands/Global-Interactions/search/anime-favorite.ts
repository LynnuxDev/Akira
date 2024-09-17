interface Command {
  name?: string;
  aliases?: string[];
  type: string;
  description?: string;
  module?: string;
  sourcecode: string;
  documentation?: string;
  usage?: string;
  example?: string;
  version: string;
  code: string;
}

const commands: Command[] = [
  {
    type: "interactionCreate",
    version: "1.0.0",
    sourcecode: "src/commands/Global-Interactions/search/anime.ts",
    code: `
      $textSplit[$customID;~]
      $c[
        $splitText[0] == Custom ID Name
        $splitText[1] == function
        $splitText[2] == authorID
        $splitText[3] == number of page
        $splitText[4] == MalID if given
      ]

$c[=====-=====-===== ONLY IFS =====-=====-=====-=====-=====-=====-=====-=====-=====-=====]
      $onlyIf[$splitText[0]==anime;]
      $onlyIf[$splitText[1]==favorite;]
      $onlyIf[$splitText[2]==$authorID;]

$c[=====-=====-===== FILE VARIABLES =====-=====-=====-=====-=====-=====-=====-=====-=====]
      $jsonLoad[result;$readFile[./files/anime/$getUserVar[uuid;$get[author];not-found].json]]
      $let[author;$customEncrypt[encrypt;$authorID]]
      $let[guild;$customEncrypt[encrypt;$guildID]]
      $let[page;$splitText[3]]
      $let[amount;$env[result;pagination;items;count]]
      $let[TitleOrigional;$env[result;data;$get[page];title]]
      $let[TitleDefault;$env[result;data;$get[page];title_english]]
      $let[TitleJapanese;$env[result;data;$get[page];title_japanese]]
      $let[TrailerUrl;$env[result;data;$get[page];trailer;url]]
      $let[description;$env[result;data;$get[page];synopsis]]
      $let[malID;$env[result;data;$get[page];mal_id]]

$c[=====-=====-===== CHANGE VARIABLES =====-=====-=====-=====-=====-=====-=====-=====-=====]
      $if[$checkContains[$getuserVar[anime~favorite;$get[author]];$splitText[4]]==true;
        $setUserVar[anime~favorite;$replace[$replace[$getUserVar[anime~favorite;$get[author]];,$splitText[4];;-1];$splitText[4];;-1];$get[author]]
      ;
        $arrayLoad[anime~favorite;,;$getuserVar[anime~favorite;$get[author]]]
        $arrayPush[anime~favorite;$splitText[4]]
        $setUserVar[anime~favorite;$arrayJoin[anime~favorite;,];$get[author]]
      ]

$c[=====-=====-===== EDIT EMBED ===-=====-=====-=====-=====-=====-=====-=====-=====-=====]
      $interactionUpdate[
        $color[$if[$getUserVar[color;$get[author];false]!=false;$getUserVar[color;$get[author];#ff47ff];$getUserVar[color;$get[guild];#ff47ff]]]
        $title[$if[$get[TitleDefault]!=null;$get[TitleDefault];$get[TitleOrigional]] - ($get[TitleJapanese]);$if[$get[TrailerUrl]==null;https://akira.lynnux.xyz/anime?id=$splitText[4];$get[TrailerUrl]]]
        $thumbnail[$env[result;data;$get[page];images;webp;image_url]]
        $switch[$env[result;data;$get[page];type];
          $case[TV Special;$addField[TV Special: Info;<:Clock:1271543787637833759> **Duration:** $env[result;data;$get[page];duration]\n<:Date:1271543843157971014> **Aired:** $replace[$replace[$env[result;data;$get[page];aired;string];to ?;Until $if[$env[result;data;$get[page];status]==Currently Airing;Present;Unknown];1];tp;untill;-1]\n<:Episode:1275135592140640403> **Episodes:** $env[result;data;$get[page];episodes]\n<:Plus:1271544047579693148> **Age Rating:** $env[result;data;$get[page];rating]]]
          $case[TV;$addField[TV Series: Info;<:Clock:1271543787637833759> **Duration:** $env[result;data;$get[page];duration]\n<:Date:1271543843157971014> **Aired:** $replace[$replace[$env[result;data;$get[page];aired;string];to ?;Until $if[$env[result;data;$get[page];status]==Currently Airing;Present;Unknown];1];tp;untill;-1]\n<:Episode:1275135592140640403> **Episodes:** $env[result;data;$get[page];episodes]\n<:Plus:1271544047579693148> **Age Rating:** $env[result;data;$get[page];rating]]]
          $case[Music;$addField[Music: Info;<:Clock:1271543787637833759> **Duration:** $env[result;data;$get[page];duration]\n<:Date:1271543843157971014> **Aired:** $replace[$replace[$env[result;data;$get[page];aired;string];to ?;Until $if[$env[result;data;$get[page];status]==Currently Airing;Present;Unknown];1];tp;untill;-1]\n<:Music:1275405140232372336>**Tracks:** $env[result;data;$get[page];episodes]\n<:Plus:1271544047579693148> **Age Rating:** $env[result;data;$get[page];rating]]]
          $case[Movie;$addField[Movie: Info;<:Clock:1271543787637833759> **Duration:** $env[result;data;$get[page];duration]\n<:Date:1271543843157971014> **Aired:** $replace[$replace[$env[result;data;$get[page];aired;string];to ?;Until $if[$env[result;data;$get[page];status]==Currently Airing;Present;Unknown];1];tp;untill;-1]\n<:Movie:1275435316441907321>**Genres:** $arrayJoin[final;, ]\n<:Plus:1271544047579693148> **Age Rating:** $env[result;data;$get[page];rating]]]
          $case[OVA;$addField[Origional Video Animation: Info;<:Clock:1271543787637833759> **Duration:** $env[result;data;$get[page];duration]\n<:Date:1271543843157971014> **Aired:** $replace[$replace[$env[result;data;$get[page];aired;string];to ?;Until $if[$env[result;data;$get[page];status]==Currently Airing;Present;Unknown];1];tp;untill;-1]\n<:Episode:1275135592140640403> **Episodes:** $env[result;data;$get[page];episodes]\n<:Plus:1271544047579693148> **Age Rating:** $env[result;data;$get[page];rating]]]
          $case[ONA;$addField[Web Anime: Info;<:Clock:1271543787637833759> **Duration:** $env[result;data;$get[page];duration]\n<:Date:1271543843157971014> **Aired:** $replace[$replace[$env[result;data;$get[page];aired;string];to ?;Until $if[$env[result;data;$get[page];status]==Currently Airing;Present;Unknown];1];tp;untill;-1]\n<:Movie:1275435316441907321> **Genres:** $arrayJoin[final;, ]\n<:Plus:1271544047579693148> **Age Rating:** $env[result;data;$get[page];rating]]]
        ]
        $description[$replace[$djsEval[function trimString(str, maxLength) {if (str.length > maxLength) {return str.slice(0, maxLength - 3) + '...';} return str;}const longString = \`$get[description]\`;const trimmedString = trimString(longString, 450);trimmedString;];\n[Written by MAL Rewrite\\];;-1]]
        $addActionRow
        $addButton[anime~favorite~$authorID~$get[page]~$get[malID];;$if[$checkContains[$getuserVar[anime~favorite;$get[author]];$get[malID]]==true;Success;Secondary];⭐;false]
        $addButton[anime~previous~$authorID~$math[$get[page]-1]~$get[malID];;Primary;◀️;$if[$get[page]==0;true;false]]
        $addButton[NoReply~$authorID;$math[$get[page]+1]/$get[amount];Secondary;;true]
        $addButton[anime~next~$authorID~$math[$get[page]+1]~$get[malID];;Primary;▶️;$if[$get[amount]==1;true;false]]
        $addButton[close~$authorID~anime;;Danger;✖️;false]
      ]

$c[=====-=====-=====   HTTP REQUES  =====-=====-=====-=====-=====-=====-=====-=====-=====]
      $httpAddHeader[Content-Type;application/json]
      $httpSetBody[{
        "id": "$splitText[4]",
        "title": "$get[TitleJapanese]",
        "title_english": "$get[TitleDefault]",
        "url": "$get[TrailerUrl]",
        "favorited": 1
      }]
      $!httpRequest[https://api.lynnux.xyz/anime;post]
  `
}]

export default commands;