import { CustomFunction } from "@/types";

const functions: CustomFunction[] = [
  {
    name: "checkBotChannel", 
    code: `
      $onlyIf[$channelID==$getGuildVar[BotChannel;$guildID;$channelID];$getGlobalVar[BotChannelError]]
    `
  }
]

export default functions;