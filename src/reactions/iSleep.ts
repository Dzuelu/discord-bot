import { Message } from 'discord.js';

export const iSleep = async (message: Message<boolean>): Promise<void> => {
  await message.reply('I sleep. 💤');
};
