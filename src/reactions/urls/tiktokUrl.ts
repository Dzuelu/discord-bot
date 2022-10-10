import { Message } from 'discord.js';
import { fetchVideo } from 'tiktok-scraper-ts';

export const tiktokUrl = async (url: string, message: Message<boolean>): Promise<void> => {
  console.log(`tiktok url detected: ${url}`);
  try {
    if (message.channelId === '1028811140630843434') {
      // Temp channel check
      const tiktokVideo = await fetchVideo(url);
      await message.channel.send({ files: [tiktokVideo.downloadURL] });
    }
  } catch (error) {
    console.error(error);
  }
};
