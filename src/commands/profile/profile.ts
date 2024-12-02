import { Command } from '@/types'

const commands: Command[] = [
  {
    name: "profile",
    aliases: ["myprofile", "my-profile", "me"],
    type: "messageCreate",
    description: "See someones akira profile",
    usage: "profile <user>",
    module: "profile",
    version: "1.0.0",
    sourcecode: "src/commands/profile/profile.ts",
    documentation: "profile/",
    example: "profile @dark-lynn",
    code: `
    TBA
    `
  }
]
export default commands;
