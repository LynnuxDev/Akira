// @ts-nocheck
// @ts-ignore

module.exports = {
  url: '/commands',
  method: 'get',
  auth: true,
  handler: async function (ctx) {
    const commandsArray = ctx.client.commands.toArray().map(s => s.data);
    const messageCommands = commandsArray.filter(command => command.type === 'messageCreate');
    const messageCommandsCount = messageCommands.length;
    const interactionCommand = commandsArray.filter(command => command.type === 'interactionCreate');
    const interactionCommandCount = interactionCommand.length;
    const otherCommands = commandsArray.filter(command => command.type !== 'messageCreate' && command.type !== 'interactionCreate');
    const otherCommandsCount = otherCommands.length;

    ctx.res.send(`
{
  "messageCommands": {
    "list": ${JSON.stringify(messageCommands, null, 2)},
    "paths": "${ctx.client.commands.paths}",
    "amount": "${messageCommandsCount}"
  },
  "interactions": {
    "list": ${JSON.stringify(interactionCommand, null, 2)},
    "paths": "${ctx.client.applicationCommands.path}",
    "amount": "${interactionCommandCount}"
  },
  "other": {
    "list": ${JSON.stringify(otherCommands, null, 2)},
    "amount": "${otherCommandsCount}"
  }
}
    `);
  }
};
