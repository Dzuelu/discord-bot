import { SlashCommandBuilder } from '@discordjs/builders';
import { PermissionsBitField } from 'discord.js';
import { CommandItem } from 'models';

export const say: CommandItem = {
  execute: async (interaction, server): Promise<void> => {
    if (!interaction.isChatInputCommand()) return;
    const input = interaction.options.getString('input');

    const interactionChannel = server.channels.cache.get(interaction.channelId);
    if (input && interactionChannel?.isTextBased() && !interactionChannel.isVoiceBased()) {
      // Send an ephemeral message so no other user sees the slash command usage
      await interaction.reply({ content: 'Consider it done.', ephemeral: true });
      await interactionChannel.send(input);
    }
  },
  slashCommand: new SlashCommandBuilder()
    .addStringOption(option => option.setName('input').setDescription('What to say').setRequired(true))
    .setDefaultMemberPermissions(new PermissionsBitField('Administrator').bitfield)
    .setDescription('Makes BrainBot say a thing.')
    .setDMPermission(false)
    .setName('say')
};
