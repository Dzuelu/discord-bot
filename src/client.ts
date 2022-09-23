import { Client, IntentsBitField, Partials } from 'discord.js';
import { cronDaily, interactionCreate, messageCreate } from 'handlers';
import { chance, discordToken } from 'utils';
import { schedule } from 'node-cron';

const client = new Client({
  intents: [IntentsBitField.Flags.Guilds, IntentsBitField.Flags.GuildMessages],
  partials: [Partials.Message, Partials.Channel, Partials.Reaction, Partials.User, Partials.GuildMember]
});

client.on('ready', async () => {
  console.log('ready');
  client.guilds.cache.forEach(guild => {
    console.log(`${guild.name} (${guild.id}) emojis:`);
    guild.emojis.cache.each(e => console.log(`${e.id}: ${e.name}`));
  });
  const generalChannel = client.channels.cache.get('223498053246648321'); // wrinkle brains general
  await chance(
    0.1,
    (): Promise<unknown> => (generalChannel?.isTextBased() ? generalChannel.send('I awake!') : Promise.resolve())
  );
});

client.on('messageCreate', messageCreate);
client.on('interactionCreate', interactionCreate);
schedule('0 12 * * *', () => cronDaily(client));

client.login(discordToken());
