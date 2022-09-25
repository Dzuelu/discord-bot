import { SlashCommandBuilder } from '@discordjs/builders';
import { PermissionsBitField } from 'discord.js';
import { CommandItem } from 'models';
import { no } from 'responses';
import { randomFrom } from 'utils';

export const update: CommandItem = {
  execute: async (interaction): Promise<void> => {
    const authorizedUsers = ['223579812080386058'];
    if (authorizedUsers.includes(interaction.user.id ?? 'unauthorized...')) {
      await interaction.reply({ content: randomFrom('Ok, I sleep.', 'If I must...', 'k', '💤'), ephemeral: true });
      process.abort();
    } else {
      await interaction.reply({ content: randomFrom(...no), ephemeral: true });
    }
  },
  slashCommand: new SlashCommandBuilder()
    .setDefaultMemberPermissions(new PermissionsBitField('Administrator').bitfield)
    .setDescription('Updates the bot! Only select users are able to issue this command.')
    .setDMPermission(true)
    .setName('update')
};
