import { commandList } from 'commands';
import { Client, Intents } from 'discord.js';
import { discordToken } from 'utils';

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
  partials: ['MESSAGE', 'CHANNEL', 'REACTION', 'USER', 'GUILD_MEMBER']
});

client.on('ready', async () => {
  console.log('ready');
});

client.on('messageCreate', async message => {
  console.log('messageCreate');
  if (message.content.includes('brain') && !message.author.bot) {
    await message.react('<:nicecock:809906065247436830>');
  }
});

client.on('interactionCreate', async interaction => {
  console.log('interactionCreate');
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
