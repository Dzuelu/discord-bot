import { Message } from 'discord.js';
import { anyContent, iSleep } from 'reactions';
import { chance } from 'utils';

export const messageCreate = async (message: Message<boolean>): Promise<void> => {
  console.log('messageCreate', message);

  chance(0.001, () => iSleep(message));
  anyContent(message);
};
