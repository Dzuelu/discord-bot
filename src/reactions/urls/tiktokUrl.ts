import { Message } from 'discord.js';
import { fetchVideo } from 'tiktok-scraper-ts';
import { unlinkSync, readFile } from 'fs';
import { downloadUrl } from './downloadUrl';
import { debugLog } from 'utils';
import { v4 as uuid } from 'uuid';

const verifyVideo = (file: string): Promise<boolean> =>
  new Promise<boolean>((resolve, reject) => {
    readFile(file, (error, data) => {
      if (error) reject(error);
      // Response will give 200, but downloaded data will have access denied html
      resolve(data.includes('<H1>Access Denied</H1>'));
    });
  });

export const tiktokUrl = async (url: string, message: Message<boolean>): Promise<void> => {
  console.log(`tiktok url detected: ${url}`);
  try {
    const video = await fetchVideo(url);
    debugLog('tiktok video for url', url, video);
    if (video == null) {
      debugLog('failed to find video');
      return;
    }
    const file = await downloadUrl(`${video.id ?? uuid()}.${video.format ?? 'mp4'}`, video.downloadURL);
    if (await verifyVideo(file)) {
      await message.channel.send({ files: [file] });
    } else {
      debugLog('Video file failed to validate');
    }
    unlinkSync(file);
  } catch (error) {
    console.error('tiktokUrl error', { error, url });
  }
};
