import { Client, ActivityType } from 'discord.js';
import { randomFrom } from 'utils';

const setActivity = async (client: Client<boolean>): Promise<void> => {
  await client.user?.setActivity(
    randomFrom(
      {},
      { name: 'bideo james, ur not invited.', type: ActivityType.Playing },
      { name: 'Skyrim with ToddBot', type: ActivityType.Playing },
      { name: 'Skyrim with ToddBot', type: ActivityType.Competing },
      { name: 'ToddBot talk about Skyrim', type: ActivityType.Listening },
      { name: 'Looking up magic tricks to make friends' },
      { name: 'bideos', type: ActivityType.Watching },
      {
        name: 'a video to cool people',
        type: ActivityType.Streaming,
        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      },
      { name: 'for any foul play...', type: ActivityType.Watching }
    )
  );
};

export const cronDaily = async (client: Client<boolean>): Promise<void> => {
  await setActivity(client);
};
