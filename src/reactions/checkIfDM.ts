import { Message } from 'discord.js';

export const checkIfDM = async (message: Message<boolean>): Promise<void> => {
  // 223579812080386058 The Oog
  if (message.channel.type === 'DM' && message.author.id === '223579812080386058') {
    // Log any Oog DM for testing
    console.log(JSON.stringify(message.toJSON()));
    // DM testing bot commands/other commands allowed
  }
};
