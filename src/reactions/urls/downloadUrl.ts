import { get } from 'https';
import { createWriteStream } from 'fs';

export const downloadUrl = async (filename: string, url: string): Promise<string> =>
  new Promise((resolve, reject) => {
    get(url, res => {
      const stream = createWriteStream(filename);
      stream.on('error', error => reject(error));
      stream.on('finish', () => {
        stream.close();
        resolve(filename);
      });
      res.pipe(stream);
    });
  });
