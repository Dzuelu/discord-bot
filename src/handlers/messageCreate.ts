import { Message } from 'discord.js';

export const messageCreate = async (message: Message<boolean>): Promise<void> => {
  console.log('messageCreate');
  if (message.content.includes('brain') && !message.author.bot) {
    await message.react('<:nicecock:809906065247436830>');
  }
};
