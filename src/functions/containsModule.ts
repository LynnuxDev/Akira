import { CustomFunction } from "@/types";


const functions: CustomFunction[] = [
  {
    name: "containsModule",
    params: ["module"],
    code: `
      $return[$checkContains[$toLowerCase[$env[module]];automation;automod;features;economy;leveling;moderation;fun;premium;profile;reactionroles;reaction-roles;roleplay;search;settings;permissions;utility]]
    `
  }
]

export default functions;