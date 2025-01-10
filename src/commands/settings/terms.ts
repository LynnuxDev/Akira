import { Command } from "@/types";

const termsOfService: Command[] = [{
  name: 'terms',
  aliases: ['tos', 'termsofservice'],
  description: "Read more into the terms of service.",
  documentation: 'terms',
  sourcecode: 'src/commands/settings/terms.ts',
  example: 'terms',
  usage: 'terms',
  module: 'settings',
  type: 'messageCreate',
  version: 'v1.0.0',
  code: `
    $getColor
    $title[Akira - Terms of Service]
    $if[$getUserVar[AgreedToTos;$getUUID[$authorID]]==true;
      $description[You've already agreed to my [Terms of Service\\](https://akira.lynnux.xyz/terms). Thank you for taking the time to do so!\n\nFor your convenience, here’s a summary of the terms you agreed to. If you have any questions or notice changes, feel free to revisit the full terms at any time and you if you need more help, feel free to ask using \`$getUserVar[prefix;$getUUID[$authorID]]contact\`!]
      $addActionRow
      $addButton[AcceptTerms-$authorID;Agreed;Success;;true]
    ;
      $description[Hello! Before you start using my commands, please review my [Terms of Service\\](https://akira.lynnux.xyz/terms). By clicking 'Agree', you accept these terms and can begin using my services. If you have any questions, feel free to ask using \`$getUserVar[prefix;$getUUID[$authorID]]contact\`!]
      $addActionRow
      $addButton[AcceptTerms-$authorID;Agree To These Terms;Success;;false]
    ]
    $addField[Use of the Bot;Akira is intended for personal and non-commercial use. Please refrain from using the bot for any illegal or unauthorized purposes. Violations may result in termination of your access.]
    $addField[User-Generated Content;By interacting with Akira, you grant Akira a non-exclusive, transferable, sub-licensable, royalty-free, worldwide license to use any content you provide.]
    $addField[Modifications;We (LynnuxDev) may update Akira's features or these [terms\\](https://akira.lynnux.xyz/terms) at any time. Continued use after changes indicates your acceptance of the new [terms\\](https://akira.lynnux.xyz/terms).]
    $addField[Disclaimer;We (LynnuxDev) strive to provide a reliable service, but I cannot guarantee uninterrupted or error-free operation. Use at your own risk.]
    $addField[Limitation of Liability;We (LynnuxDev) are not liable for any damages arising from your use of my services, including indirect or consequential damages.]
    $addField[Data Deletion;If you would like to delete your data, simply use the \`!deleteMyData\` command, and I'll handle it for you.]
    $footer[Thanks for using Akira! ❤️]
  `
}];

export default termsOfService;