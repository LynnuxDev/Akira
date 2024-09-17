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
      $onlyIf[$splitText[0]==animeCharacter;]
      $onlyIf[$checkContains[$splitText[1];previous;next]]
      $onlyIf[$splitText[2]==$authorID;]

$c[=====-=====-===== FILE VARIABLES =====-=====-=====-=====-=====-=====-=====-=====-=====]
      $if[$splitText[1]==next;$let[page;$math[$splitText[3]+1]];$if[$splitText[1]==previous;$let[page;$math[$splitText[3]-1]];$let[page;0]]]
      $jsonLoad[result;$readFile[./files/anime/$getUserVar[uuid;$authorID;not-found].json]]
      $let[description;$cropText[$env[result;data;$get[page];about];0;250]]

$c[=====-=====-===== EDIT EMBED ===-=====-=====-=====-=====-=====-=====-=====-=====-=====]
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

export default commands;