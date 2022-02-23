import { commandList } from 'commands';
import { Interaction, CacheType } from 'discord.js';

export const interactionCreate = async (interaction: Interaction<CacheType>): Promise<void> => {
  console.log('starting interactionCreate');
  if (!interaction.isCommand() || interaction.command == null) return;
  const interactionName = interaction.command.name;
  console.log(`interactionName: ${interactionName}`);

  const currentCommand = commandList.find(command => command.slashCommand.name === interactionName);

  if (currentCommand) {
    try {
      await currentCommand.execute(interaction);
    } catch (error) {
      console.error('Error when executing a command in interactionCreate', error);
      await interaction.reply({ content: '', ephemeral: true });
    }
  }
};
