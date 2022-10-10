import { Message } from 'discord.js';
import { fetchVideo } from 'tiktok-scraper-ts';

export const tiktokUrl = async (url: string, message: Message<boolean>): Promise<void> => {
  try {
    if (message.channelId === '1028811140630843434') {
      // Temp channel check
      const tiktokVideo = await fetchVideo(url);
      await message.channel.send({ content: tiktokVideo.downloadURL });
    }
  } catch (error) {
    console.error(error);
  }
};
