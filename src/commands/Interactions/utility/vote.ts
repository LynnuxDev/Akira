import { InteractionCommand } from '@/types'

const commands: InteractionCommand[] = [
  {
    type: "interactionCreate",
    version: "v1.0.0",
    code: `
      $textSplit[$customID;~]

      $onlyIf[$splitText[0]==voteRewards;]
      $onlyIf[$splitText[1]==$authorID;]

      $interactionUpdate[
        $color[$if[$getUserVar[color;$get[uuid];false]!=false;$getUserVar[color;$get[uuid];#ff47ff];$getUserVar[color;$guildID;#ff47ff]]]
        $title[Earn Rewards by Voting for Me!]
        $description[Every vote you give me helps me grow and add new features! Plus, I have some special rewards just for you. ❤️]
        $addField[Commutative votes:;\`\`\`sql\n- 1 Vote: I’ll send you 100 coins!\n- 10 Votes: You’ll get a special profile role.\n- 25 Votes: Unlock exclusive commands!\`\`\`]
        $addField[Singular votes:;\`\`\`sql\n- 65 Coins each vote you make.\n- limited timed voter badge on your profile.\n- More coming soon.\n\`\`\`\n-# some rewards can only be gained once at the same time.]
        $addField[My Top Voters;\`\`\`graphql\n1. @unknown - 0 votes\n2. @unknown - 0 votes\n3. @unknown - 0 votes\`\`\`;false]
        $footer[I really appreciate each and every vote! 💖 Thank you for supporting me!]
        $addActionRow
        $addButton[voteReturn~$authorID;Return;Danger;;false]
        $addButton[voteReminder~$authorID~NA;Vote Reminder;Secondary;;false]
      ]
    `
  }, {
    type: "interactionCreate",
    version: "v1.0.0",
    code: `
      $textSplit[$customID;~]

      $onlyIf[$splitText[0]==voteReturn;]
      $onlyIf[$splitText[1]==$authorID;]

      $interactionUpdate[
        $color[$if[$getUserVar[color;$get[uuid];false]!=false;$getUserVar[color;$get[uuid];#ff47ff];$getUserVar[color;$guildID;#ff47ff]]]
        $author[Here are the links to vote for me!;$userAvatar[$clientID]]
        $description[Voting helps me to spread to even more servers, \nthe bigger I become the more my developer can work on me!\n\n> 1. [top.gg\\](https://top.gg/bot/738057910923296839/vote) (every 12h)\n> 2. [discord.boat\\](https://discord.boats/bot/738057910923296839/vote) (every 24h)\n> 3. [discord bot list\\](https://discordbotlist.com/bots/akira-8248/upvote) (every 24h)\n> 4. [Void Bots\\](https://voidbots.net/bot/738057910923296839/vote) (every 12h)]

        $addActionRow
        $addButton[voteRewards~$authorID;Rewards;Success;;false]
        $addButton[voteReminder~$authorID~NA;Vote Reminder;Secondary;;false]
      ]
    `
  }, {
    type: "interactionCreate",
    version: "v1.0.0",
    code: `
      $textSplit[$customID;~]

      $onlyIf[$splitText[0]==voteReminder;]
      $onlyIf[$splitText[1]==$authorID;]
      $onlyIf[$splitText[2]==NA;]
      $let[author;$getUserVar[uuid;$customEncrypt[encrypt;$authorID]]]

      $let[reminder;$getUserVar[voteReminder;$get[author];false]]

      $let[description;You currently have vote reminders **$if[$get[reminder]==false;disabled;enabled]** this means you will$if[$get[reminder]==false; not;] be notified when you can vote again.\nYou can change this by using the "Enable Reminder" button under this message.]

      $interactionUpdate[
        $color[$if[$getUserVar[color;$get[uuid];false]!=false;$getUserVar[color;$get[uuid];#ff47ff];$getUserVar[color;$guildID;#ff47ff]]]
        $title[Vote Reminders!]
        $description[$get[description]]
        $addField[What will you get?:;\`\`\`sql\n- 65 Coins each vote you make.\n- 1 Vote: I’ll send you 100 coins!\n- 10 Votes: You’ll get a special profile role.\n- 25 Votes: Unlock exclusive commands!\`\`\`]
        $addActionRow
        $addButton[voteReturn~$authorID;Return;Danger;;false]
        $if[$get[reminder]==false;
          $addButton[voteReminder~$authorID~enable;Enable Reminder;Secondary;;false]
        ;
          $addButton[voteReminder~$authorID~disable;Disable Reminder;Secondary;;false]
        ]
      ]
    `
  },  {
    type: "interactionCreate",
    version: "v1.0.0",
    code: `
      $textSplit[$customID;~]

      $onlyIf[$splitText[0]==voteReminder;]
      $onlyIf[$splitText[1]==$authorID;]
      $onlyIf[$splitText[2]==disable;]
      $let[author;$getUserVar[uuid;$customEncrypt[encrypt;$authorID]]]
      $setUserVar[voteReminder;false;$get[author]]

      $interactionUpdate[
        $color[$if[$getUserVar[color;$get[uuid];false]!=false;$getUserVar[color;$get[uuid];#ff47ff];$getUserVar[color;$guildID;#ff47ff]]]
        $title[Vote Reminders: disabled!]
        $description[I see you’ve disabled my vote reminders. 😢\nI won’t be able to remind you when it’s time to vote again, but I know you’ll still help me grow!]
        $addField[No Reminders:;I won’t bother you with reminders anymore, but you can always turn them back on if you change your mind! 💖]
        $addActionRow
        $addButton[voteReturn~$authorID;Return;Danger;;false]
        $addButton[voteReminder~$authorID~enable;Enable Reminder;Secondary;;false]
      ]
    `
  }, {
    type: "interactionCreate",
    version: "v1.0.0",
    code: `
      $textSplit[$customID;~]

      $onlyIf[$splitText[0]==voteReminder;]
      $onlyIf[$splitText[1]==$authorID;]
      $onlyIf[$splitText[2]==enable;]
      $let[author;$getUserVar[uuid;$customEncrypt[encrypt;$authorID]]]
      $setUserVar[voteReminder;true;$get[author]]

      $interactionUpdate[
        $color[$if[$getUserVar[color;$get[uuid];false]!=false;$getUserVar[color;$get[uuid];#ff47ff];$getUserVar[color;$guildID;#ff47ff]]]
        $title[Vote Reminders: Enabled!]
        $description[I’ve successfully enabled your vote reminders! 🎉  \nYou’ll get a reminder from me when it’s time to vote again. I don’t want you to miss a chance to help me grow! 💖]
        $addField[When will you be reminded?;Starting the next time you vote, i will remind you to vote every 12 or 24 Hours depending on the platform you voted on.]
        $addActionRow
        $addButton[voteReturn~$authorID;Return;Danger;;false]
        $addButton[voteReminder~$authorID~disable;Disable Reminder;Secondary;;false]
      ]
    `
  }
]

export default commands;