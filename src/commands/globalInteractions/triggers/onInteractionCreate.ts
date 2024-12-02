import { InteractionCommand } from '@/types'

const commands: InteractionCommand[] = [
  {
    type: "interactionCreate",
    description: "Runs on every interaction.",
    module: "Client",
    sourcecode: "src/commands/Global-Interactions/triggers/onInteractionCreate.ts",
    documentation: "onInteractionCreate",
    usage: "N/A",
    example: "N/A",
    version: "1.0.0",
    code: `
    $c[$logger[Info;Ran $customID!]]
    `
  }
]

export default commands;