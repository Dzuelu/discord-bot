import { Client, Message } from 'discord.js';
import { chance } from 'utils';

// Reacts with a random reaction, randomly
export const randomReaction = async (message: Message<boolean>, server: Client): Promise<void> => {
  const randomEmoji = server.emojis.cache.random();
  await chance(0.01, async () => randomEmoji && message.react(randomEmoji));
};
