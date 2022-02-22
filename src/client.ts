import { commandList } from 'commands';
import { Client, Intents } from 'discord.js';
import { discordToken } from 'utils';

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.on('ready', () => {
  console.log('ready');
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand() || interaction.command == null) return;

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const currentCommand = commandList.find(command => command.slashCommand.name === interaction.command!.name);

  if (currentCommand) {
    try {
      await currentCommand.execute(interaction);
    } catch (error) {
      console.error('Error when executing a command in interactionCreate', error);
      await interaction.reply({ content: '', ephemeral: true });
    }
  }
});

client.login(discordToken());
