import { Command } from '../../../types';

const AgreeToTOS: Command[] = [
  {
    type: 'interactionCreate',
    description: 'Closes the embed/message.',
    module: 'settings',
    sourcecode: '/src/commands/Global-Interactions/settings/agreedToTos.ts',
    version: '1.0.0',
    code: `
      $c[------------------------------------LET-----------------------------------]
      $let[author;$customEncrypt[encrypt;$authorID]]
      $let[uuid;$randomUUID]
      $let[lang;$if[$guildID!=;$replace[$guildPreferredLocale;null;en-us;-1];en-us]]

      $textSplit[$customID;-]

      $c[----------------------------------ONLY-IF---------------------------------]
      $onlyIf[$splitText[0]==AcceptTerms;]
      $onlyIf[$splitText[1]==$authorID;]

      $c[-----------------------------------MAIN-----------------------------------]
      $try[
        $interactionUpdate[
          $color[$getGlobalVar[color]]
          $title[$i18n[$get[lang];interactions.settings.agreedtoterms.agree.title]]
          $description[$i18n[$get[lang];interactions.settings.agreedtoterms.agree.description]]
          $footer[$i18n[$get[lang];interactions.settings.agreedtoterms.agree.footer]]
        ]
      ;
        $editMessage[$channelID;$messageID;
          $color[$getGlobalVar[color]]
          $title[$i18n[$get[lang];interactions.settings.agreedtoterms.agree.title]]
          $description[$i18n[$get[lang];interactions.settings.agreedtoterms.agree.description]]
          $footer[$i18n[$get[lang];interactions.settings.agreedtoterms.agree.footer]]
        ]
      ]

      $c[----------------------------------SET-VAR---------------------------------]
      $setUserVar[uuid;$get[uuid];$get[author]]
      $setUserVar[AgreedToTos;true;$get[uuid]]

      $c[---------------------------------CONTINUE---------------------------------]
      $wait[5s]
      $try[$interactionDelete;$deleteMessage[$channelID;$messageID]]
    `
  }
];
export default AgreeToTOS;
