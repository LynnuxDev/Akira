import { ForgeDB } from '@tryforge/forge.db';
import { ForgeClient, LogPriority } from '@tryforge/forgescript';
import { ForgeTopGG } from '@tryforge/forge.topgg';
import { ForgeQuirks } from 'forge.quirks';

// ForgeAPI removed due to having https://api.lynnux.xyz
import { join } from 'path';
import * as dotenv from 'dotenv';
import { events, intents, variables } from './handler';

dotenv.config();
const isMain = process.env.PRODUCTION === 'main';

/// ////////////////////////////
//  [ Environment Config ]  //
/// ////////////////////////////

const isDevelopment: boolean = process.env.NODE_ENV === 'development';

// Paths for dynamic module loading
const commandsPath: string = isDevelopment ? 'src/commands' : 'dist/commands';
const slashCommandsPath: string = isDevelopment ? 'src/slash' : 'dist/slash';
const topGgPath: string = isDevelopment ? 'src/TopGG' : 'dist/TopGG';

/// ////////////////////////////
// [ ForgeTopGG Setup ]       //
/// ////////////////////////////

const topgg = new ForgeTopGG({
  token: `${process.env.TOPGG_TOKEN}`,
  auth: `${process.env.TOPGG_AUTH}`,
  events: [
    'error',
    'posted',
    'voted'
  ],
  post: {
    interval: 43_200_000 // Update every 12 hours
  },
  port: 3001
});

/// ////////////////////////////
// [  Database Setup   ]     //
/// ////////////////////////////

const database = new ForgeDB({
  type: isMain ? 'mysql' : 'sqlite',
  host: isMain && process.env.DATABASE_IP || undefined,
  port: isMain ? 4020 : undefined,
  username: isMain && process.env.DATABASE_USERNAME || undefined,
  password: isMain && process.env.DATABASE_PASSWORD || undefined,
  database: isMain ? 'akiradb' : undefined,
  events: ['connect']
});

/// ////////////////////////////
// [   Client Setup    ]     //
/// ////////////////////////////

const client = new ForgeClient({
  events,
  intents,
  useInviteSystem: false,
  shardCount: 1,
  shards: 'auto',
  logLevel: LogPriority.High,   // Use High for debug, use Medium otherwise.
  respondOnEdit: false,         // Respond on message IF we ever use this change to <number> of ms
  prefixCaseInsensitive: true,
  prefixes: [
    '$callFunction[prefix]',
    'akira',
    '<@!$clientID>',
    '<@$clientID>'
  ],
  extensions: [
    database,
    new ForgeQuirks(),
    // topgg
  ]
});


// Load functions, variables and commands
client.functions.load(join(__dirname, 'functions'));
client.commands.load(commandsPath);
client.applicationCommands.load(slashCommandsPath);

database.commands.load("dist/dataBase");
database.variables(variables);

//topgg.commands.load(topGgPath);

/// ////////////////////////////
//  [   Client Login    ]    //
/// ////////////////////////////

client.login(`${process.env.DISCORD_TOKEN}`);
