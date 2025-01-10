import { CustomFunction } from "@/types";

const Prefix: CustomFunction[] = [{
  name: 'prefix',
  code: `
    $let[defaultPrefix;$getGlobalVar[prefix]]
    $let[userVar;$getUserVar[prefix;$callFunction[getUUID;$authorID];$get[defaultPrefix]]]
    $let[guildVar;$if[$guildID!=;$getGuildVar[prefix;$callFunction[customEncrypt;encrypt;$guildID];$get[defaultPrefix]];$get[defaultPrefix]]]

    $return[$if[$get[userVar]!=$get[defaultPrefix];$get[userVar];$get[guildVar]]]
  `
}];

export default Prefix;