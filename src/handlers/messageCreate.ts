import { Client, Message } from 'discord.js';
import { reactionForAnyContent } from 'reactions';
import { chance, getDebug } from 'utils';

export const messageCreate = async (message: Message<boolean>, server: Client): Promise<void> => {
  if (getDebug()) {
    console.log('on:messageCreate', message.toJSON());
  }

  await Promise.all([
    //
    chance(0.001, () => message.reply('💤💤💤 I sleep. 💤💤💤')),
    reactionForAnyContent(message, server)
  ]);
};
