import { SlashCommandBuilder } from '@discordjs/builders';
import { PermissionsBitField } from 'discord.js';
import { CommandItem } from 'models';

export const say: CommandItem = {
  execute: async (interaction): Promise<void> => {
    if (!interaction.isChatInputCommand()) return;
    const input = interaction.options.getString('input');

    if (input && interaction.channel?.isTextBased()) {
      await interaction.channel.send(input);
    }
  },
  slashCommand: new SlashCommandBuilder()
    .addStringOption(option => option.setName('input').setDescription('What to say').setRequired(true))
    .setDefaultMemberPermissions(new PermissionsBitField('Administrator').bitfield)
    .setDescription('Makes BrainBot say a thing.')
    .setDMPermission(true)
    .setName('say')
};
