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
      $c[=====-=====-===== ONLY IFS =====-=====-=====-=====-=====-=====-=====-=====-=====-=====]
      $onlyIf[$getUserVar[AgreedToTos;$callFunction[customEncrypt;encrypt;$authorID]]==true;$getGlobalVar[AgreedToTosEmbedReply]]

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
          $case[default;
            $customError[500;animechar]
          ]
        ]
      ;
        WHAT CHARACTER ARE YOU LOOKIGN FOR?
      ]
    `
  }
]