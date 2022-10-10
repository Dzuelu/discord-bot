import { Client, Message, MessageType } from 'discord.js';
import { reactionForAnyContent } from 'reactions';
import { checkForUrls } from 'reactions/checkForUrls';
import { chance, getDebug } from 'utils';

export const messageCreate = async (message: Message<boolean>, server: Client): Promise<void> => {
  if (getDebug()) console.log('on:messageCreate', message.toJSON());
  if (message.type === MessageType.ChatInputCommand) return;
  if (message.flags.any('Ephemeral')) return;

  await Promise.all([
    checkForUrls(message),
    chance(0.0001, () => message.reply('💤💤💤 I sleep. 💤💤💤')),
    reactionForAnyContent(message, server)
  ]);
};
