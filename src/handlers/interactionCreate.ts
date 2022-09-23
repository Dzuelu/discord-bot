import { commandList } from 'commands';
import { Interaction, CacheType, Client } from 'discord.js';

export const interactionCreate = async (interaction: Interaction<CacheType>, client: Client): Promise<void> => {
  if (!interaction.isCommand()) return;

  const currentCommand = commandList.find(command => command.slashCommand.name === interaction.commandName);

  if (currentCommand) {
    try {
      await currentCommand.execute(interaction, client);
    } catch (error) {
      console.error('Error when executing a command in interactionCreate', error);
    }
  }
};
