import { Command } from '@/types';

const commands: Command[] = [
  {
    name: 'vote',
    type: 'messageCreate',
    description: 'Get info on how to vote for akira.',
    module: 'utility',
    version: 'V1.0.0',
    sourcecode: 'src/commands/utility/vote.ts',
    code:
    `
      $color[$if[$getUserVar[color;$get[uuid];false]!=false;$getUserVar[color;$get[uuid];#ff47ff];$getUserVar[color;$guildID;#ff47ff]]]
      $author[Here are the links to vote for me!;$userAvatar[$clientID]]
      $description[Voting helps me to spread to even more servers, \nthe bigger I become the more my developer can work on me!\n\n> 1. [top.gg\\](https://top.gg/bot/738057910923296839/vote) (every 12h)\n> 2. [discord.boat\\](https://discord.boats/bot/738057910923296839/vote) (every 24h)\n> 3. [discord bot list\\](https://discordbotlist.com/bots/akira-8248/upvote) (every 24h)\n> 4. [Void Bots\\](https://voidbots.net/bot/738057910923296839/vote) (every 12h)]

      $addActionRow
      $addButton[voteRewards~$authorID;Rewards;Success;;false]
      $addButton[voteReminder~$authorID~NA;Vote Reminder;Secondary;;false]
    `
  }
];

export default commands;
