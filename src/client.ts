import { Client, Intents } from 'discord.js';
import { cronDaily, interactionCreate, messageCreate } from 'handlers';
import { discordToken } from 'utils';
import { schedule } from 'node-cron';

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
  partials: ['MESSAGE', 'CHANNEL', 'REACTION', 'USER', 'GUILD_MEMBER']
});

client.on('ready', async () => {
  console.log('ready');
  client.guilds.cache.forEach(guild => {
    console.log(`${guild.name} (${guild.id}) emojis:`);
    guild.emojis.cache.each(e => console.log(`${e.id}: ${e.name}`));
  });
  const generalChannel = client.channels.cache.get('223498053246648321');
  if (generalChannel?.isText()) {
    generalChannel.send('I awake');
  }
});

client.on('messageCreate', messageCreate);
client.on('interactionCreate', interactionCreate);
schedule('0 12 * * *', () => cronDaily(client));

client.login(discordToken());
