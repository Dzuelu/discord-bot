import { Client, Message, MessageType } from 'discord.js';
import { randomReaction, reactionInContent } from 'reactions';
import { chance, getDebug } from 'utils';

export const messageCreate = async (message: Message<boolean>, server: Client): Promise<void> => {
  if (getDebug()) console.log('on:messageCreate', message.toJSON());
  if (message.type === MessageType.ChatInputCommand) return;
  if (message.flags.any('Ephemeral')) return;

  await Promise.all([
    chance(0.0001, () => message.reply('💤💤💤 I sleep. 💤💤💤')),
    randomReaction(message, server),
    reactionInContent(message, server)
  ]);
};
