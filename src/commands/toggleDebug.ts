import { SlashCommandBuilder } from '@discordjs/builders';
import { PermissionsBitField } from 'discord.js';
import { CommandItem } from 'models';
import { no } from 'responses';
import { getDebug, randomFrom, setDebug } from 'utils';

export const toggleDebug: CommandItem = {
  execute: async (interaction): Promise<void> => {
    const authorizedUsers = ['223579812080386058'];
    if (authorizedUsers.includes(interaction.user.id ?? 'unauthorized...')) {
      setDebug(!getDebug());
      await interaction.reply({ content: `Debug set to: ${getDebug()}`, ephemeral: true });
    } else {
      await interaction.reply({ content: randomFrom(...no), ephemeral: true });
    }
  },
  slashCommand: new SlashCommandBuilder()
    .setDefaultMemberPermissions(new PermissionsBitField('Administrator').bitfield)
    .setDescription('Toggles debug. You will never see the difference if you are not Kenny.')
    .setDMPermission(true)
    .setName('toggle-debug')
};
