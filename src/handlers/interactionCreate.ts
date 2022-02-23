import { commandList } from 'commands';
import { Interaction, CacheType } from 'discord.js';

export const interactionCreate = async (interaction: Interaction<CacheType>): Promise<void> => {
  console.log('starting interactionCreate');
  if (!interaction.isCommand()) return;
  console.log(`interactionName: ${interaction.commandName}`);

  const currentCommand = commandList.find(command => command.slashCommand.name === interaction.commandName);

  if (currentCommand) {
    try {
      await currentCommand.execute(interaction);
    } catch (error) {
      console.error('Error when executing a command in interactionCreate', error);
      await interaction.reply({ content: '', ephemeral: true });
    }
  }
};
