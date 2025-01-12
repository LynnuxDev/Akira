import { CommandType, IForgeFunction, IBaseCommand, IApplicationCommandData } from "@tryforge/forgescript";
import { IDBEvents } from "@tryforge/forge.db/dist/structures";

type ModuleList = 'clientSpecific'  | 'dev' | 'automation' | 'automod' | 'economy' | 'leveling' | 'moderation' | 'fun' | 'permissions' | 'premium' | 'profile' | 'reactionRoles' | 'roleplay' | 'search' | 'settings' | 'utility';
type topggEvent = 'voted' | 'error' | 'posted';
type ForgeEvent = 'ready' | 'guildCreate' | 'error' | 'messageCreate' | 'shardReady' | 'shardDisconnect' ;

export interface CustomFunction extends IForgeFunction {
  version?: string;
}

export interface Command extends IBaseCommand<CommandType> {
  description?: string;
  module: ModuleList
  sourcecode?: string;
  documentation?: string;
  usage?: string;
  example?: string;
  version?: string;
}

export interface Translations {
  [key: string]: string | string[] | { [key: string]: string };
}

export interface TopGG {
  type: topggEvent;
  code: string;
}

export interface Event {
  type: ForgeEvent;
  name?: string;
  description?: string;
  module: ModuleList;
  version: string;
  code: string;
}

export interface ISlash extends IApplicationCommandData {
  usage?: string;
  module?: ModuleList
}

export interface DBEvent {
  type: 'connect';
  code: string;
}