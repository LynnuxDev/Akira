import { CustomFunction } from "@/types";

const functions: CustomFunction[] = [
  {
    name: "callEmbed",
    params: ["embedName"],
    code: `
      $let[lang;$if[$guildID!=;$replace[$guildPreferredLocale;null;en-us;-1];en-us]]

      $switch[$env[embedName];
        $case[agreeToTerms;
          $return[
            $if[$isSlashCommand==true;$ephemeral $interactionReply;$reply]
            $color[$getVar[color;default]]
            $get[lang]
            $title[$i18n[$get[lang];interactions.settings.agreedtoterms.main.title]]
            $description[$i18n[$get[lang];interactions.settings.agreedtoterms.main.description]]
            $addField[$i18n[$get[lang];global.buttons.terms]:;$i18n[$get[lang];interactions.settings.agreedtoterms.main.field.fieldone]]
            $addField[$i18n[$get[lang];interactions.settings.agreedtoterms.main.field.fieldtwo.title]:;$i18n[$get[lang];interactions.settings.agreedtoterms.main.field.fieldtwo.description]]
            $addField[$i18n[$get[lang];interactions.settings.agreedtoterms.main.field.fieldthree.title]:;$i18n[$get[lang];interactions.settings.agreedtoterms.main.field.fieldthree.description]]
            $addActionRow
            $addButton[AcceptTerms-$authorID;$i18n[$get[lang];interactions.settings.agreedtoterms.main.button];Success;;false]
          ]
        ]
        $case[default;$return[\`callEmbed\` not found]]
      ]
    `
  }
]

export default functions;