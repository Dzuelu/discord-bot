import { get } from 'https';
import { createWriteStream, mkdtempSync } from 'fs';

export const downloadUrl = async (filename: string, url: string): Promise<string> =>
  new Promise((resolve, reject) => {
    get(url, res => {
      const fileName = `${mkdtempSync('downloads')}/${filename}`;
      const stream = createWriteStream(fileName);
      stream.on('error', error => reject(error));
      stream.on('finish', () => {
        stream.close();
        resolve(fileName);
      });
      res.pipe(stream);
    });
  });
