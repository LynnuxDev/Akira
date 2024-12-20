import { Command } from '@/types';

const commands: Command[] = [
  {
    name: 'stats',
    aliases: ['statistics'],
    description: 'Check Bot Stats',
    type: 'messageCreate',
    module: 'utility',
    version: '1.0.0',
    sourcecode: 'src/commands/utility/stats.ts',
    documentation: 'stats',
    usage: 'stats',
    example: 'stats',
    code: `
    $!httpRequest[https://api.github.com/repos/LynnuxDev/Akira/contributors;Get;team]

    $getColor
    $title[Akira's Statistics]
    $thumbnail[$userAvatar[$clientID]]
    $footer[Made with ❤️ by LynnuxDev.]
    $addField[Servers:;$guildCount servers;true]
    $addField[Users:;$userCount users;true]
    $addField[Shards:;Shard $if[$shardID==;0;$shardID] of $try[$djsEval[client.shard.count];0];true]
    $addField[Team:;]
    $addField[Uptime:; $formatTime[$uptime];true]
    $addField[Ping:; $ping ms;true]
    `
  }
];

export default commands;