import { SlashCommandBuilder } from '@discordjs/builders';
import { PermissionsBitField } from 'discord.js';
import { CommandItem } from 'models';

export const say: CommandItem = {
  execute: async (interaction, client): Promise<void> => {
    if (!interaction.isChatInputCommand()) return;
    const input = interaction.options.getString('input');

    const interactionChannel = client.channels.cache.get(interaction.channelId);
    if (interactionChannel && input && interactionChannel.isTextBased()) {
      await interaction.channel?.sendTyping();
      // await interaction.reply({ content: 'It is done.', ephemeral: true });
      await interactionChannel.send(input);
    }
  },
  slashCommand: new SlashCommandBuilder()
    .addStringOption(option => option.setName('input').setDescription('What to say').setRequired(true))
    .setDefaultMemberPermissions(new PermissionsBitField('Administrator').bitfield)
    .setDescription('Makes BrainBot say a thing.')
    .setDMPermission(true)
    .setName('say')
};
