"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = [
    {
        name: "containsModule",
        params: ["module"],
        code: `
      $return[$checkContains[$toLowerCase[$env[module]];automation;automod;features;economy;leveling;moderation;fun;premium;profile;reactionroles;reaction-roles;roleplay;search;settings;permissions;utility]]
    `
    }
];
exports.default = functions;
//# sourceMappingURL=containsModule.js.map