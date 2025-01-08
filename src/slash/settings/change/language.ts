import { ISlash } from '@/types';
import { RegistrationType } from '@tryforge/forgescript';

const ChangeLanguage: ISlash = {
  type: RegistrationType.Global,
  code: `
    $let[author;$getUUID[$authorID]]
    $let[authorID;$authorID]
    $ephemeral
    $defer

    $checkAgreedToTos
    $if[$option[to]!=;
      $if[$option[to_2]!=;
        $let[error;true]
        $customError[814;ChangeLanguage]
      ;
        $let[error;false]
      ]
    ;
      $if[$option[to_2]!=;
        $let[error;false]
      ;
        $let[error;true]
        $customError[815;ChangeLanguage]
      ]
    ]

    $textSplit[$option[to]$option[to_2];-]
    $let[lang;$splitText[0]-$toUppercase[$splitText[1]]]
    $onlyIf[$getLang[$get[authorID]]!=$get[lang];$customError[816;ChangeLanguage]]
    $if[$get[error]!=true;
      $interactionReply[
        $getColor $title[Language Changed]
        $description[Your language has been changed to \`$get[lang]\`. From now on all interactions will be in this language]
        $footer[If there is a translation issue feel free to use "$prefix report".]
      ]
    ]
  `,
  data: {
    "name": "language",
    "description": "Change the language i reply in. ",
    "options": [
      {
        "type": 3,
        "name": "to",
        "description": "Due to discord limitations we needed to split our languages, use either this or 'to_2'",
        "choices": [
          {"name": "العربية","value": "ar-sa"},
          {"name": "বাংলা","value": "bn-bd"},
          {"name": "Català","value": "ca-es"},
          {"name": "Afrikaans","value": "af-za"},
          {"name": "čeština","value": "cs-cz"},
          {"name": "ελληνικά","value": "el-gr"},
          {"name": "English","value": "en-us"},
          {"name": "Deutsch","value": "de-de"},
          {"name": "Dansk","value": "da-dk"},
          {"name": "Español","value": "es-es"},
          {"name": "Suomi","value": "fi-fi"},
          {"name": "עברית","value": "he-il"},
          {"name": "हिन्दी","value": "hi-in"},
          {"name": "日本語","value": "ja-jp"},
          {"name": "한국어","value": "ko-kr"},
          {"name": "Română","value": "ro-ro"},
          {"name": "Português","value": "pt-pt"},
          {"name": "Polski","value": "pl-pl"},
          {"name": "Norsk","value": "no-no"},
          {"name": "Nederlands","value": "nl-nl"},
          {"name": "Italiano","value": "it-it"},
          {"name": "Magyar","value": "hu-hu"},
          {"name": "Français","value": "fr-fr"},
          {"name": "Yкраїнська","value": "uk-ua"},
          {"name": "Türkçe","value": "tr-tr"},
        ]
      },
      {
        "type": 3,
        "name": "to_2",
        "description": "Due to discord limitations we needed to split our languages, use either this or 'to'.",
        "choices": [
          {"name": "Svenska","value": "sv-se"},
          {"name": "Cрпски","value": "sr-sp"},
          {"name": "Pусский","value": "ru-ru"},
          {"name": "Tiếng Việt","value": "vi-vn"},
          {"name": "简体中文","value": "zh-cn"},
          {"name": "繁體中文","value": "zh-tw"}
        ]
      }
    ]
  }
};
export default ChangeLanguage;