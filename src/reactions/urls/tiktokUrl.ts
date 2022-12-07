import { Message } from 'discord.js';
import { fetchVideo } from 'tiktok-scraper-ts';
import { unlinkSync } from 'fs';
import { downloadUrl } from './downloadUrl';
import { debugLog } from 'utils';

export const tiktokUrl = async (url: string, message: Message<boolean>): Promise<void> => {
  console.log(`tiktok url detected: ${url}`);
  try {
    const video = await fetchVideo(url);
    if (video == null) {
      return;
    }
    debugLog('tiktok video found', video);
    const file = await downloadUrl(`${video.id}.${video.format ?? 'mp4'}`, video.downloadURL);
    await message.channel.send({ files: [file] });
    unlinkSync(file);
  } catch (error) {
    console.error('tiktokUrl error', { error, url });
  }
};
