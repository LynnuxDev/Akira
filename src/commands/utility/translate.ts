import { Command } from '@/types';

const commands: Command[] = [
  {
    name: 'translate',
    aliases: ['help-translate', 'localization', 'i18n', 'translation'],
    description: 'See info on translation.',
    type: 'messageCreate',
    module: 'utility',
    version: '1.0.0',
    sourcecode: 'src/commands/utility/translate.ts',
    documentation: 'Utility',
    usage: 'translate',
    example: 'translate',
    code: `
      $c[---------------------------------PRE-LETS---------------------------------]
      $let[author;$callFunction[customEncrypt;encrypt;$authorID]]
      $let[uuid;$getUserVar[uuid;$get[author]]]
      $let[lang;$getLang[$authorID]]

      $c[----------------------------------ONLY-IF---------------------------------]
      $onlyIf[$getUserVar[AgreedToTos;$get[uuid]]==true;$getGlobalVar[AgreedToTosEmbedReply]]
      $onlyIf[$channelID==$getGuildVar[BotChannel;$guildID;$channelID];$getGlobalVar[BotChannelError]]

      $switch[$message[0];
        $case[default;
          $color[$if[$getUserVar[color;$get[uuid];false]!=false;$getUserVar[color;$get[uuid];#ff47ff];$getUserVar[color;$guildID;#ff47ff]]]
          $title[$i18n[$get[lang];message.utility.translate.title]]
          $description[$i18n[$get[lang];message.utility.translate.description.one]\n\n$i18n[$get[lang];message.utility.translate.description.two] $i18n[$get[lang];message.utility.translate.description.three]\n\n$i18n[$get[lang];message.utility.translate.description.four] $i18n[$get[lang];message.utility.translate.description.five] \[[$i18n[$get[lang];message.utility.translate.description.seven]\\](https://crowdin.com/project/lynnuxdevAkira)\\]\n\n-# $replace[$i18n[$get[lang];message.utility.translate.description.six];{{amount}};1;1].]
          $footer[$i18n[$get[lang];message.utility.translate.footer] 💖]

          $addActionRow
          $addStringSelectMenu[translate~$authorID;Select a language;false;1;1]
          $addOption[English;Check English translation information.;translateEnglish;🇬🇧;false]
          $addOption[Afrikaans;Check Afrikaans translation information.;translateAfrikaans;🇿🇦;false]
          $addOption[العربية;Check Arabic translation Information.;translateArabic;🇸🇦;false]
          $addOption[বাংলা;Check Bengali translation Information.;translateBengali;🇸🇧;false]
          $addOption[Català;Check Catalan translation Information.;translateCatalan;🇪🇸;false]
          $addOption[简体中文;Check Chinese (Simplified) translation Information.;translateChineseSimplified;🇨🇳;false]
          $addOption[繁體中文;Check Chinese (Traditional) translation Information.;translateChineseTraditional;🇹🇼;false]
          $addOption[Čeština;Check Czech translation Information.;translateCzech;🇨🇿;false]
          $addOption[Dansk;Check Danish translation Information.;translateDanish;🇩🇰;false]
          $addOption[Nederlands;Check Dutch translation Information.;translateDutch;🇳🇱;false]
          $addOption[Suomi;Check Finnish translation Information.;translateFinnish;🇫🇮;false]
          $addOption[Français;Check French translation Information.;translateFrench;🇫🇷;false]
          $addOption[Deutsch;Check German translation Information.;translateGerman;🇩🇪;false]
          $addOption[Ελληνικά;Check Greek translation Information.;translateGreek;🇬🇷;false]
          $addOption[עברית;Check Hebrew translation Information.;translateHebrew;🇮🇱;false]
          $addOption[हिंदी;Check Hindi translation Information.;translateHindi;🇮🇳;false]
          $addOption[Magyar;Check Hungarian translation Information.;translateHungarian;🇭🇺;false]
          $addOption[Italiano;Check Italian translation Information.;translateItalian;🇮🇹;false]
          $addOption[日本語;Check Japanese translation Information.;translateJapanese;🇯🇵;false]
          $c[
            $addOption[한국어;Check Korean translation Information.;translateKorean;🇰🇷;false]
            $addOption[Norsk;Check Norwegian translation Information.;translateNorwegian;🇳🇴;false]
          ]
          $addOption[Polski;Check Polish translation Information.;translatePolish;🇵🇱;false]
          $c[
            $addOption[Português;Check Portuguese translation Information.;translatePortuguese;🇵🇹;false]
          ]
          $addOption[Português (Brasil);Check Portuguese (Brazilian) translation Information.;translatePortugueseBrazilian;🇧🇷;false]
          $c[
            $addOption[Română;Check Romanian translation Information.;translateRomanian;🇷🇴;false]
            $addOption[Русский;Check Russian translation Information.;translateRussian;🇷🇺;false]
          ]
          $addOption[Српски;Check Serbian translation Information.;translateSerbian;🇷🇸;false]
          $addOption[Español;Check Spanish translation Information.;translateSpanish;🇪🇸;false]
          $addOption[Svenska;Check Swedish translation Information.;translateSwedish;🇸🇪;false]
          $addOption[Türkçe;Check Turkish translation Information.;translateTurkish;🇹🇷;false]
          $c[
            $addOption[Українська;Check Ukrainian translation Information.;translateUkrainian;🇺🇦;false]
            $addOption[Tiếng Việt;Check Vietnamese translation Information.;translateVietnamese;🇻🇳;false]
          ]

        ]
      ]
    `
  },
  {
    type: 'interactionCreate',
    module: 'utility',
    version: '1.0.0',
    description: 'See info on translation.',
    sourcecode: 'src/commands/utility/translate.ts',
    documentation: 'Utility',
    usage: 'translate',
    example: 'translate',
    code: `
      $textSplit[$customID;~]
      $onlyIf[$splitText[1]==$authorID]
      $onlyIf[$splitText[0]==translate]

      $let[uuid;$getUserVar[uuid;$customEncrypt[encrypt;$authorID]]]
      $let[lang;$getUserVar[language;$get[uuid];en-us]]

      $switch[$selectMenuValues;
        $case[translateEnglish;
          $let[progression;$crowdinProgress[en]]
          $let[languageName;English]
          $let[languageShort;en-US]
          $let[translatorAmount;1]
          $let[translator1;Dark-LYNN]
          $let[translatorID1;705306248538488947]
          $let[translatorURL1;https://crowdin.com/profile/Dark-LYNN]
          $let[translationDate;Nov 6, 2024]
        ]
        $case[translateGerman;
          $let[progression;$crowdinProgress[de]]
          $let[languageName;German]
          $let[languageShort;de-DE]
          $let[translatorAmount;1]
          $let[translator1;ARD0NIZ]
          $let[translatorID1;521676495316582400]
          $let[translatorURL1;https://crowdin.com/profile/ARD0NIZ]
          $let[translationDate;Nov 6, 2024]
        ]
        $case[translateDutch;
          $let[progression;$crowdinProgress[nl]]
          $let[languageName;Dutch]
          $let[languageShort;nl-NL]
          $let[translatorAmount;1]
          $let[translator1;Dark-LYNN]
          $let[translatorID1;705306248538488947]
          $let[translatorURL1;https://crowdin.com/profile/Dark-LYNN]
          $let[translationDate;Nov 6, 2024]
        ]
        $case[translatePortugueseBrazilian;
          $let[progression;$crowdinProgress[pt-PT]]
          $let[languageName;Portuguese (Brazilian)]
          $let[languageShort;pt-BR]
          $let[translatorAmount;1]
          $let[translator1;renancolombini6]
          $let[translatorID1;NA]
          $let[translatorURL1;https://crowdin.com/profile/renancolombini6]
        ]
        $case[translateSpanish;
          $let[progression;$crowdinProgress[es-ES]]
          $let[languageName;Spanish]
          $let[languageShort;es-ES]
          $let[translatorAmount;1]
          $let[translator1;Dark-LYNN]
          $let[translatorID1;705306248538488947]
          $let[translatorURL1;https://crowdin.com/profile/Dark-LYNN]?>
        ]
        $case[translateHindi;
          $let[progression;$crowdinProgress[he]]
          $let[languageName;Hindi]
          $let[languageShort;hi-IN]
          $let[translatorAmount;1]
          $let[translator1;iconicayansh]
          $let[translatorID1;1004291040150298715]
          $let[translatorURL1;https://crowdin.com/profile/iconicayansh]
        ]
        $case[default;
          $let[progression;0]
          $let[languageName;NotYetTranslated]
          $let[languageShort;N/A]
          $let[translatorAmount;1]
          $let[translator1;Dark-LYNN]
          $let[translatorID1;NA]
          $let[translatorURL1;https://crowdin.com/profile/Dark-LYNN]
          $let[translationDate;n/a]
        ]
      ]
      $interactionUpdate[
        $color[$if[$getUserVar[color;$get[uuid];false]!=false;$getUserVar[color;$get[uuid];#ff47ff];$getUserVar[color;$guildID;#ff47ff]]]
        $title[$toTitleCase[$i18n[$get[lang];message.utility.translate.translationInfo]]: $get[languageName]]
        $description[$replace[$i18n[$get[lang];message.utility.translate.thanksTranslators];{{language}};**$get[languageName]**;1]]
        $addField[$toTitleCase[$i18n[$get[lang];message.utility.translate.progress]]:;$replace[$i18n[$get[lang];message.utility.translate.translationProgress];{{amount}};\`$get[progression]%\`;1] | $if[$get[progression]>=21;<:0_1:1303091965365194812>;$if[$get[progression]<=8;<:0_0:1303091907269759029>;<:0_2:1303092011087433790>]]$if[$get[progression]<=20;<:1_0:1303092075998478336>;$if[$get[progression]<=35;<:1_2:1303092127353278535>;$if[$get[progression]<=40;<:1_3:1303147748446568523>;<:1_1:1303092105035649185>]]]$if[$get[progression]<=40;<:1_0:1303092075998478336>;$if[$get[progression]<=55;<:1_2:1303092127353278535>;$if[$get[progression]<=60;<:1_3:1303147748446568523>;<:1_1:1303092105035649185>]]]$if[$get[progression]<=60;<:1_0:1303092075998478336>;$if[$get[progression]<=75;<:1_2:1303092127353278535>;$if[$get[progression]<=80;<:1_3:1303147748446568523>;<:1_1:1303092105035649185>]]]$if[$get[progression]<=80;<:2_0:1303091778840166500>;$if[$get[progression]==100;<:2_2:1303133192143769620>;<:2_1:1303091807256580166>]];true]
        $addField[$toTitleCase[$i18n[$get[lang];message.utility.translate.lastUpdate]]:;\`$get[translationDate]\`;true]

        $addField[$toTitleCase[$i18n[$get[lang];message.utility.translate.translators]]:;$if[$get[translatorAmount]==1;[$get[translator1]\\]($get[translatorURL1]) $if[$get[translatorID1]==NA;;([$userGlobalName[$if[$get[translatorID1]==NA;705306248538488947;$get[translatorID1]]]\\](https://discord.com/users/$get[translatorID1]))];$if[$get[translatorAmount]==0;\`n/a\`;\n> - [$get[translator1]\\]($get[translatorURL1]) ([$userGlobalName[$get[translatorID1]]\\](https://discord.com/users/$get[translatorID1]))]] $if[$get[translatorAmount]>=2;\n> - [$get[translator2]\\]($get[translatorURL2]) ([$userGlobalName[$get[translatorID2]]\\](https://discord.com/users/$get[translatorID2]));];false]
      ]

    `
  }
];

export default commands;
