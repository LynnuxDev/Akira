import { Command } from '@/types';

const commands: Command[] = [
  {
    name: 'setuservar',
    type: 'messageCreate',
    module: 'dev',
    description: 'Change a user variable using their uuid.',
    sourcecode: 'src/commands/dev/setUserVar.ts',
    version: 'v1.0.0',
    code: `
      $onlyForUsers[;705306248538488947;392609934744748032]
      $onlyIf[$message[2]!=;*Usage:** \`<varname> <user> <newValue>\`]

      $let[user;$getUserVar[uuid;$customEncrypt[encrypt;$message[1]]]]
      $onlyIf[$get[user]!=null;This user doesn't have a UUID yet.]

      $setVar[$message[0];$get[user];$message[2]]
      $!addMessageReactions[$channelID;$messageID;✅]

    `
  }
];

export default commands;
