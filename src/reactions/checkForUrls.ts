import { Message } from 'discord.js';
import { tiktokUrl } from './urls/tiktokUrl';

const matchers: {
  fn: (url: string, message: Message<boolean>) => Promise<void>;
  regex: RegExp;
}[] = [
  {
    fn: tiktokUrl,
    regex: /(?:(?:https?):\/\/.*.tiktok.com\/)/
  }
];

export const checkForUrls = async (message: Message<boolean>): Promise<void> => {
  await Promise.all(
    message.content.split(' ').map(possibleUrl => {
      const foundMatcher = matchers.find(matchFinder => possibleUrl.match(matchFinder.regex));
      return foundMatcher ? foundMatcher.fn(possibleUrl, message) : Promise.resolve();
    })
  );
};
