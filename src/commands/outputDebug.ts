import { SlashCommandBuilder } from '@discordjs/builders';
import { PermissionsBitField } from 'discord.js';
import { CommandItem } from 'models';

export const outputDebug: CommandItem = {
  execute: async (interaction, server): Promise<void> => {
    await interaction.reply({ content: '--- Server Debug Output ---', ephemeral: true });
    await interaction.followUp({
      content: [
        'List of all cached server emojis and ids',
        ...server.emojis.cache.map(emoji => `${emoji.id}=${emoji.name}`)
      ].join('\n'),
      ephemeral: true
    });
  },
  slashCommand: new SlashCommandBuilder()
    .setDefaultMemberPermissions(new PermissionsBitField('Administrator').bitfield)
    .setDescription('Outputs some server debug.')
    .setDMPermission(true)
    .setName('output-debug')
};
