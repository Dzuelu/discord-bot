import { Client, Intents } from 'discord.js';
import { interactionCreate, messageCreate } from 'handlers';
import { discordToken } from 'utils';

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
  partials: ['MESSAGE', 'CHANNEL', 'REACTION', 'USER', 'GUILD_MEMBER']
});

client.on('ready', async () => {
  console.log('ready');
});
client.on('messageCreate', messageCreate);
client.on('interactionCreate', interactionCreate);

client.login(discordToken());
