import { Client } from 'discord.js';
import { ActivityTypes } from 'discord.js/typings/enums';
import { randomFrom } from 'utils';

const setActivity = async (client: Client<boolean>): Promise<void> => {
  await client.user?.setActivity(
    randomFrom(
      {},
      { name: 'bideo james, ur not invited.', type: ActivityTypes.PLAYING },
      { name: 'Skyrim with ToddBot', type: ActivityTypes.PLAYING },
      { name: 'Skyrim with ToddBot', type: ActivityTypes.COMPETING },
      { name: 'ToddBot talk about Skyrim', type: ActivityTypes.LISTENING },
      { name: 'Looking up magic tricks to make friends' },
      { name: 'bideos', type: ActivityTypes.WATCHING },
      {
        name: 'a video to cool people',
        type: ActivityTypes.STREAMING,
        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      },
      { name: 'for any foul play...', type: ActivityTypes.WATCHING }
    )
  );
};

export const cronDaily = async (client: Client<boolean>): Promise<void> => {
  await setActivity(client);
};
