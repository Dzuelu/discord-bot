import { Client, IntentsBitField, Partials } from 'discord.js';
import { cronDaily, interactionCreate, memberAdded, messageCreate } from 'handlers';
import { chance, discordToken } from 'utils';
import { schedule } from 'node-cron';

const server = new Client({
  intents: [IntentsBitField.Flags.Guilds, IntentsBitField.Flags.GuildMessages],
  partials: [Partials.Message, Partials.Channel, Partials.Reaction, Partials.User, Partials.GuildMember]
});

server.on('ready', async () => {
  console.log('ready');
  const generalChannel = server.channels.cache.get('223498053246648321'); // wrinkle brains general
  await chance(
    0.01,
    (): Promise<unknown> => (generalChannel?.isTextBased() ? generalChannel.send('I awake!') : Promise.resolve())
  );
});

server.on('messageCreate', message => messageCreate(message, server));
server.on('interactionCreate', interaction => interactionCreate(interaction, server));
server.on('guildMemberAdd', member => memberAdded(member, server));
schedule('0 12 * * *', () => cronDaily(server));
server.login(discordToken());
