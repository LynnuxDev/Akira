import { ForgeDB } from '@tryforge/forge.db';
import { ForgeClient } from '@tryforge/forgescript';
import { ForgeTopGG } from '@tryforge/forge.topgg';
import { ForgeAPI } from '@tryforge/forge.api';
import { join } from 'path';

import token from './handler/token'; // Secure bot token
import events from './handler/events'; // Event handlers
import intents from './handler/intents'; // Discord API intents
import variables from './handler/database';

/// ////////////////////////////
//  [ Environment Config ]  //
/// ////////////////////////////

const isDevelopment: boolean = process.env.NODE_ENV === 'development';

// Paths for dynamic module loading
const commandsPath: string = isDevelopment ? 'src/commands' : 'dist/commands';
const slashCommandsPath: string = isDevelopment ? 'src/slash' : 'dist/slash';
const apiPath: string = isDevelopment ? 'src/Api' : 'dist/Api';

/// ////////////////////////////
//  [    API Setup      ]    //
/// ////////////////////////////

const api = new ForgeAPI({
  port: 1069,
  logLevel: 1,
  auth: {
    bearer: true,
    type: 1,
    code: 'ImAAuthCode',
    ip: '127.0.0.1'
  }
});

/// ////////////////////////////
// [  Database Setup   ]     //
/// ////////////////////////////

const database = new ForgeDB({
  type: 'mysql',
  host: 'IP',
  port: 1069,
  username: 'AkiraDB',
  password: 'PASSWORD',
  database: 'Akira'
});

/// ////////////////////////////
// [   Top.gg Setup    ]     //
/// ////////////////////////////

const top = new ForgeTopGG({
  token: 'TOP.GG TOKEN',
  auth: 'TOP.GG AUTH',
  events: ['error', 'posted', 'voted'],
  post: {
    interval: 3_600_000 // Post bot stats every hour
  }
});

/// ////////////////////////////
// [   Client Setup    ]     //
/// ////////////////////////////

const client = new ForgeClient({
  events,
  intents,
  useInviteSystem: false,
  prefixes: [
    '$if[$checkContains[$authorID;1004291040150298715;521676495316582400;705306248538488947]==true;!]',             // Dev prefix
    '$if[$checkContains[$authorID;1004291040150298715;521676495316582400;705306248538488947]==true;<@!$clientID>]', // Mention prefix
    '$if[$checkContains[$authorID;1004291040150298715;521676495316582400;705306248538488947]==true;<@$clientID>]'   // Alternative mention prefix
  ],
  extensions: [
    new ForgeDB(),
    api
  ]
});

// Load default variables
ForgeDB.variables(variables);

// Load functions and commands
client.functions.load(join(__dirname, 'functions'));
client.commands.load(commandsPath);
client.applicationCommands.load(slashCommandsPath);


/// ////////////////////////////
//  [   Client Login    ]    //
/// ////////////////////////////

// api.router.load(apiPath) // will be used later
client.login(`${token}`);
