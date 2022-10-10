import { Message } from 'discord.js';
import { fetchVideo } from 'tiktok-scraper-ts';
import { get } from 'https';
import { createWriteStream, unlinkSync } from 'fs';

const downloadUrl = async (filename: string, url: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    get(url, res => {
      const stream = createWriteStream(`./temp/${filename}`);
      stream.on('error', error => reject(error));
      stream.on('finish', () => {
        stream.close();
        resolve();
      });
      res.pipe(stream);
    });
  });
};

export const tiktokUrl = async (url: string, message: Message<boolean>): Promise<void> => {
  console.log(`tiktok url detected: ${url}`);
  try {
    if (message.channelId === '1028811140630843434') {
      // Temp channel check
      const video = await fetchVideo(url);
      await downloadUrl(video.id, video.downloadURL);
      await message.channel.send({ files: [`./temp/${video.id}`] });
      unlinkSync(`./temp/${video.id}`);
    }
  } catch (error) {
    console.error(error);
  }
};
