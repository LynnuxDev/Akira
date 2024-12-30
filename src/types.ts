import { CommandType, IForgeFunction, IBaseCommand } from "@tryforge/forgescript";

export interface CustomFunction extends IForgeFunction {
  version?: string;
}

export interface Command extends IBaseCommand<CommandType> {
  description: string;
  module: 'clientSpecific' | 'dev' | 'automation' | 'automod' | 'economy' | 'leveling' | 'moderation' | 'fun' | 'permissions' | 'premium' | 'profile' | 'reactionRoles' | 'roleplay' | 'search' | 'settings' | 'utility';
  sourcecode: string;
  documentation?: string;
  usage?: string;
  example?: string;
  version: string;
}

export interface InteractionCommand extends IBaseCommand<String> {
  description?: string;
  module?: 'client' | 'dev' | 'automation' | 'automod' | 'economy' | 'leveling' | 'moderation' | 'fun' | 'permissions' | 'premium' | 'profile' | 'reactionRoles' | 'roleplay' | 'search' | 'settings' | 'utility';
  sourcecode?: string;
  documentation?: string;
  usage?: string;
  example?: string;
  version: string;
}

export interface Translations {
  [key: string]: any;
}

export interface TopGG {
  type: 'voted' | 'error' | 'posted';
  code: string;
}


export interface Event {
  type: 'ready' | 'guildCreate' | 'error' | 'messageCreate';
  name?: string;
  description?: string;
  module: 'Client';
  version: string;
  code: string;
}