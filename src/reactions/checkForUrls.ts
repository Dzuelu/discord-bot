/* eslint-disable max-len */
import { Message, Client } from 'discord.js';
import { fetchVideo } from 'tiktok-scraper-ts';

export const checkForUrls = async (message: Message<boolean>, server: Client): Promise<void> => {
  const tiktokUrl = message.content.match(/(?:(?:https?):\/\/.*\.tiktok.com\/)/);
  if (tiktokUrl) {
    const tiktokVideo = await fetchVideo(tiktokUrl.toString());
    console.log(`tiktok download url found: ${tiktokVideo.downloadURL}`);
    if (message.channelId === '1028811140630843434') {
      // Testing
      message.channel.send({ content: tiktokVideo.downloadURL });
    }
  }
};
