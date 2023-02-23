import { SlashCommandBuilder } from '@discordjs/builders';
import { CommandItem } from 'models';
import { sleep } from 'utils';

export const ping: CommandItem = {
  execute: async (interaction): Promise<void> => {
    if (!interaction.channel?.isTextBased() || interaction.channel.isVoiceBased()) {
      return;
    }
    await interaction.channel.sendTyping();
    await sleep(1000);
    await interaction.reply({ content: 'pong!' });
  },
  slashCommand: new SlashCommandBuilder()
    .setDescription('Replies with Pong! Test the bot lives with this command.')
    .setDMPermission(true)
    .setName('ping')
};
