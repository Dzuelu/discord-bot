import { Message } from 'discord.js';

export const checkIfDM = async (message: Message<boolean>): Promise<void> => {
  // 223579812080386058 The Oog
  console.log(JSON.stringify(message));
  // console.log(JSON.stringify(message.toJSON()));
  if (message.channel.type === 'DM' && message.author.id === '223579812080386058') {
    // Log any Oog DM for testing
    // DM testing bot commands/other commands allowed
  }
};
