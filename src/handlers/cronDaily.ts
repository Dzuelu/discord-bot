import { Client } from 'discord.js';

const sentences = [
  'Hey Todd',
  'Sup Todd',
  'Hey, frick you Todd',
  'Todd, heard of Skyrim? Doubt it.',
  "Hey Todd, bet you'll react with a dumb emoji",
  'Imagine Todd playing Skyrim still',
  'Hey Toddrick Stormcloak',
  'toddbot Country Roads',
  'toddbot sing your song',
  'toddbot seduce me',
  'toddbot can I vote for you',
  'toddbot tell me lies',
  'toddbot cursed',
  'toddbot gucci',
  'toddbot how valid',
  'toddbot dndalign',
  'toddbot sing your song',
  'toddbot falloutradio',
  'toddbot send dagoth ur fanfic',
  'toddbot yagrum bagarn amv',
  'toddbot dagothwave',
  'toddbot skyrim shuffle',
  'toddbot jauffre jam',
  'toddbot how many toddcoins do I have',
  'toddbot how many skyrims do I have',
  'toddbot how old are you'
];

export const cronDaily = async (client: Client<boolean>): Promise<void> => {
  //
  const generalChannel = client.channels.cache.get('223498053246648321');
  if (generalChannel?.isText()) {
    generalChannel.send(sentences[Math.floor(Math.random() * sentences.length)]);
  }
};
