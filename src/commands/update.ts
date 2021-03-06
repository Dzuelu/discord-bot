import { SlashCommandBuilder } from '@discordjs/builders';
import { CommandItem } from 'models';
import { randomFrom } from 'utils';

export const update: CommandItem = {
  execute: async (interaction): Promise<void> => {
    const authorizedUsers = ['223579812080386058'];
    if (authorizedUsers.includes(interaction.member?.user.id ?? 'unauthorized...')) {
      await interaction.reply({ content: randomFrom('Ok, I sleep.', 'If I must...', 'k', '💤', undefined, null) });
      process.abort();
    } else {
      // Ignore command. This shows a no-response message in the discord ui for the non-authorized user
    }
  },
  slashCommand: new SlashCommandBuilder()
    .setName('update')
    .setDescription('Updates the bot! Only select users are able to issue this command.')
};
