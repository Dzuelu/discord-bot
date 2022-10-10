import { Message } from 'discord.js';
import { fetchVideo } from 'tiktok-scraper-ts';
import { get } from 'https';
import { createWriteStream, unlinkSync, mkdtempSync } from 'fs';

const downloadUrl = async (filename: string, url: string): Promise<string> =>
  new Promise((resolve, reject) => {
    get(url, res => {
      const fileName = `${mkdtempSync('videos')}/${filename}`;
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
    const video = await fetchVideo(url);
    // Hack, should instead check the encoding in url. But this should work for now
    const file = await downloadUrl(`${video.id}.mp4`, video.downloadURL);
    await message.edit({ files: [file] });
    // await message.channel.send({ files: [file] });
    unlinkSync(file);
  } catch (error) {
    console.error('tiktokUrl error', { error, url });
  }
};
