import { Message } from 'discord.js';

const reactWith = async (reactionId: string, keyWords: string[], message: Message<boolean>): Promise<void> => {
  const keyWordsFound = keyWords.filter(keyWord => message.content.includes(keyWord));
  if (keyWordsFound.length > 0) {
    console.log(`message (${message.content}) reacted with ${reactionId} because of (${keyWordsFound.join(',')})`);
    await message.react(reactionId);
  }
};

export const reactionForAnyContent = async (message: Message<boolean>): Promise<void> => {
  message.client.emojis.cache.forEach(emoji => {
    if (emoji.name && message.content.includes(emoji.name)) {
      console.log(`message id (${message.id}) reacted with ${emoji.name} (${emoji.id})`);
      message.react(emoji.id);
    }
  });
  await Promise.all([
    reactWith('809906065247436830', ['brain', 'bot', 'coc'], message),
    reactWith('676623420997238784', ['69', 'nice'], message),
    reactWith('636992777099542530', ['jojo'], message),
    reactWith('854864449101103105', ['cow'], message),
    reactWith('854863643115520020', ['but', 'bun'], message)
  ]);
};
