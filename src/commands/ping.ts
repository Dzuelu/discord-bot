import { SlashCommandBuilder } from '@discordjs/builders';
import { CommandItem } from 'models';
import { sleep } from 'utils';

export const ping: CommandItem = {
  execute: async (interaction): Promise<void> => {
    await sleep(1000);
    await interaction.reply({ content: 'pong!' });
  },
  slashCommand: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with Pong! Test the bot lives with this command.')
};
