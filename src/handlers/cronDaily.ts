import { ActivityOptions, Client } from 'discord.js';
import { ActivityTypes } from 'discord.js/typings/enums';
import { randomFrom } from 'utils';

const randomStatuses: ActivityOptions[] = [
  {},
  { name: 'Skyrim with ToddBot', type: ActivityTypes.PLAYING },
  { name: 'with ToddBot', type: ActivityTypes.COMPETING },
  { name: 'to ToddBot', type: ActivityTypes.LISTENING },
  { name: 'videos', type: ActivityTypes.WATCHING }
];

export const cronDaily = async (client: Client<boolean>): Promise<void> => {
  await client.user?.setActivity(randomFrom(...randomStatuses));
};
