export interface Command {
  name?: string;
  aliases?: string[];
  type: 'messageCreate' | 'debug' | 'ready' | 'interactionCreate';
  description: string;
  module: string;
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
  module?: string;
  sourcecode?: string;
  documentation?: string;
  usage?: string;
  example?: string;
  version: string;
  code: string;
}

export interface customFunction {
  name: string;
  params?: string[];
  code: string;
}

export interface Translations {
  [key: string]: any;
}

export interface CustomFunction {
  name: string,
  params?: string[],
  code: string,
}
