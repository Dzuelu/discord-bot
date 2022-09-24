import { commandList } from 'commands';
import { Interaction, CacheType, Client } from 'discord.js';
import { getDebug } from 'utils';

export const interactionCreate = async (interaction: Interaction<CacheType>, server: Client): Promise<void> => {
  if (getDebug()) {
    console.log('on:interactionCreate', interaction.toJSON());
  }
  if (!interaction.isCommand()) return;

  const currentCommand = commandList.find(command => command.slashCommand.name === interaction.commandName);

  if (currentCommand) {
    try {
      await currentCommand.execute(interaction, server);
    } catch (error) {
      console.error('Error when executing a command in interactionCreate', error);
    }
  }
};
