import { Message } from 'discord.js';
import { reactionForAnyContent, iSleep } from 'reactions';
import { chance } from 'utils';

export const messageCreate = async (message: Message<boolean>): Promise<void> => {
  chance(0.001, () => iSleep(message));
  reactionForAnyContent(message);
};
