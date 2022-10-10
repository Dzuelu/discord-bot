import { Message } from 'discord.js';
import { fetchVideo } from 'tiktok-scraper-ts';
import { get } from 'https';
import { createWriteStream, unlinkSync, mkdtempSync } from 'fs';

const downloadUrl = async (filename: string, url: string): Promise<string> =>
  new Promise((resolve, reject) => {
    get(url, res => {
      const fileName = `${mkdtempSync('videos')}/${filename}.mp4`;
      const stream = createWriteStream(fileName);
      stream.on('error', error => reject(error));
      stream.on('finish', () => {
        stream.close();
        resolve(fileName);
      });
      res.pipe(stream);
    });
  });

export const tiktokUrl = async (url: string, message: Message<boolean>): Promise<void> => {
  console.log(`tiktok url detected: ${url}`);
  try {
    if (message.channelId === '1028811140630843434') {
      // Temp channel check
      const video = await fetchVideo(url);
      console.log('downloading file...');
      const file = await downloadUrl(video.id, video.downloadURL);
      console.log('sending file to discord...');
      await message.channel.send({ files: [file] });
      console.log('deleting file...');
      unlinkSync(file);
    }
  } catch (error) {
    console.error(error);
  }
};
