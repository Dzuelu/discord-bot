import { SlashCommandBuilder } from '@discordjs/builders';
import { PermissionsBitField } from 'discord.js';
import { CommandItem } from 'models';
import { getDebug, setDebug } from 'utils';

export const debug: CommandItem = {
  execute: async (interaction): Promise<void> => {
    setDebug(!getDebug());
    await interaction.reply({ content: `Debug set to: ${getDebug()}`, ephemeral: true });
  },
  slashCommand: new SlashCommandBuilder()
    .setDefaultMemberPermissions(new PermissionsBitField('Administrator').bitfield)
    .setDescription('Toggles debug. You will never see the difference if you are not Kenny.')
    .setDMPermission(true)
    .setName('toggle-debug')
};
