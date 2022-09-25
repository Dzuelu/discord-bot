import { Client, Message } from 'discord.js';

const reactWith = async (
  reactionId: string,
  keyWords: string[],
  message: Message<boolean>,
  server: Client
): Promise<void> => {
  const keyWordsFound = keyWords.filter(keyWord => message.content.toLowerCase().includes(keyWord.toLowerCase()));
  if (keyWordsFound.length > 0) {
    const reactionName = server.emojis.cache.get(reactionId)?.name;
    console.log(
      [
        `message (${message.content}) reacted with ${reactionName}(${reactionId})`,
        `because of (${keyWordsFound.join(',')})`
      ].join('')
    );
    await message.react(reactionId);
  }
};

export const reactionForAnyContent = async (message: Message<boolean>, server: Client): Promise<void> => {
  await Promise.all([
    ...message.client.emojis.cache.map(emoji =>
      // Consider _ as a space and caps as different key words when checking reactions
      emoji.name
        ? reactWith(emoji.id, emoji.name.replace('_', ' ').split(/(?=[A-Z])/), message, server)
        : Promise.resolve()
    ),
    reactWith('809906065247436830', ['brain', 'bot', 'coc'], message, server),
    reactWith('676623420997238784', ['69', 'nice'], message, server),
    reactWith('854864449101103105', ['cow'], message, server),
    reactWith('854863643115520020', ['but', 'bun'], message, server)
  ]);
};
