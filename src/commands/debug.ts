import { SlashCommandBuilder } from '@discordjs/builders';
import { PermissionsBitField } from 'discord.js';
import { CommandItem } from 'models';
import { getDebug, setDebug } from 'utils';

export const debug: CommandItem = {
  execute: async (interaction): Promise<void> => {
    setDebug(!getDebug());
    await interaction.reply({ content: `Debug set to: ${getDebug()}` });
  },
  slashCommand: new SlashCommandBuilder()
    .setDefaultMemberPermissions(new PermissionsBitField('Administrator').bitfield)
    .setDescription('Replies with Pong! Test the bot lives with this command.')
    .setDMPermission(true)
    .setName('toggle-debug')
};
