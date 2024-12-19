export interface Command {
  name?: string;
  aliases?: string[];
  type: 'messageCreate' | 'debug' | 'ready' | 'interactionCreate';
  description: string;
  module: 'dev' | 'automation' | 'automod' | 'economy' | 'leveling' | 'moderation' | 'fun' | 'permissions' | 'premium' | 'profile' | 'reactionRoles' | 'roleplay' | 'search' | 'settings' | 'utility';
  sourcecode: string;
  documentation?: string;
  usage?: string;
  example?: string;
  version: string;
  code: string;
}

export interface InteractionCommand {
  name?: string;
  aliases?: string[];
  type:'interactionCreate' | 'messageCreate' ;
  description?: string;
  module?: 'client' | 'dev' | 'automation' | 'automod' | 'economy' | 'leveling' | 'moderation' | 'fun' | 'permissions' | 'premium' | 'profile' | 'reactionRoles' | 'roleplay' | 'search' | 'settings' | 'utility';
  sourcecode?: string;
  documentation?: string;
  usage?: string;
  example?: string;
  version: string;
  code: string;
}

export interface CustomFunction {
  name: string;
  params?: string[];
  code: string;
}

export interface Translations {
  [key: string]: any;
}