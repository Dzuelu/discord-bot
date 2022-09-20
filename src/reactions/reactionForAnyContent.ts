import { Message } from 'discord.js';

const reactWith = async (reactionId: string, keyWords: string[], message: Message<boolean>): Promise<void> => {
  const keyWordsFound = keyWords.filter(keyWord => message.content.toLowerCase().includes(keyWord.toLowerCase()));
  if (keyWordsFound.length > 0) {
    console.log(`message (${message.content}) reacted with ${reactionId} because of (${keyWordsFound.join(',')})`);
    await message.react(reactionId);
  }
};

export const reactionForAnyContent = async (message: Message<boolean>): Promise<void> => {
  await Promise.all([
    ...message.client.emojis.cache.map(emoji =>
      // Consider - as a space and caps as different key words when checking reactions
      emoji.name ? reactWith(emoji.id, emoji.name.replace('-', ' ').split(/(?=[A-Z])/), message) : Promise.resolve()
    ),
    reactWith('809906065247436830', ['brain', 'bot', 'coc'], message),
    reactWith('676623420997238784', ['69', 'nice'], message),
    reactWith('854864449101103105', ['cow'], message),
    reactWith('854863643115520020', ['but', 'bun'], message)
  ]);
};
