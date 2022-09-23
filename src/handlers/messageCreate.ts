import { Message } from 'discord.js';
import { reactionForAnyContent } from 'reactions';
import { chance } from 'utils';

export const messageCreate = async (message: Message<boolean>): Promise<void> => {
  Promise.all([
    //
    chance(0.001, () => message.reply('💤💤💤 I sleep. 💤💤💤')),
    reactionForAnyContent(message)
  ]);
};
