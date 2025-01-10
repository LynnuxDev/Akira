import { Command } from '@/types';

const commands: Command[] = [
  {
    name: 'cleardata',
    aliases: ['deletemydata', 'removedata', 'gdpr'],
    type: 'messageCreate',
    description: 'Clear all your Akira data. ~ !THIS CANNOT BE UNDONE!',
    module: 'utility',
    sourcecode: '/SRC/commands/utility/cleardata.js',
    documentation: 'cleardata',
    usage: 'cleardata',
    example: 'clearData',
    version: '1.0.0',
    code: `
      $onlyIf[$getUserVar[AgreedToTos;$getUUID[$authorID]]==true;
        $reply
        $getColor
        $title[Hey there stranger!]
        $addField[Why GDPR Matters;GDPR is all about protecting your personal data and giving you control over it. I want to make sure that if you ever want to delete your information, it’s easy to do so.;true]
        $addField[How to Register;To get started, simply use any command, or type \`!terms\` to review and agree to my terms. Once you've agreed, you'll be registered and able to use my commands!;true]
        $description[Hey there <@$authorID>, It looks like I don’t have any data stored for you yet. Since you haven’t registered with me, there’s nothing to delete at the moment.\n\nThe \`$cropArgs[$messageContent;0;1]\` command is part of my efforts to be fully GDPR-compliant. This allows you to request the deletion of any personal data I might have about you. But since I don’t have anything stored yet, you’re all good!\n\nIf you’d like to know more about how I handle your data, feel free to check out my [privacy policy\\](https://akira.lynnux.xyz/policy).]
      ]
      $title[Are you sure you?]
      $description[Are you sure you want me to forget who you are?\nThis will mean i will forget every interaction we had.]
      $addField[I will forget:;- If you agreed to the [terms\\](https://akira.lynnux.xyz/terms) and [policy\\](https://akira.lynnux.xyz/policy).\n- Every roleplay interaction you had.\n- Your money, info and stats for my economy.\n- Everything related to your akira profile.]
      $footer[I will also leave any servers you own.]
      $color[$getGlobalVar[color]]
      $addActionRow
      $addButton[cleardata_0~$authorID;never-mind;Secondary]
      $addButton[cleardata_1~$authorID;Delete my data;Danger]
      $try[$deleteCommand]
    `
  }
];

export default commands;
