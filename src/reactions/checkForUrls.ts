import { Message } from 'discord.js';
import { tiktokUrl } from './urls/tiktokUrl';

const matchers: { [key: string]: (url: string, message: Message<boolean>) => Promise<void> } = {
  /* eslint-disable @typescript-eslint/naming-convention */
  '/(?:(?:https?)://.*.tiktok.com/)/': tiktokUrl
  /* eslint-enable @typescript-eslint/naming-convention */
};

export const checkForUrls = async (message: Message<boolean>): Promise<void> => {
  await Promise.all(
    message.content.split(' ').map(possibleUrl => {
      const foundMatcher = Object.keys(matchers).find(regex => possibleUrl.match(regex));
      return foundMatcher ? matchers[foundMatcher](possibleUrl, message) : Promise.resolve();
    })
  );
};
