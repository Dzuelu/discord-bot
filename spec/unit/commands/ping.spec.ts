import { ping } from 'commands/ping';
import { CommandInteraction, CacheType, Client } from 'discord.js';

describe('ping', () => {
  it('replies pong', async () => {
    const interaction = { reply: jest.fn() } as unknown as CommandInteraction<CacheType>;

    await ping.execute(interaction, jest.fn() as unknown as Client);

    expect(interaction.reply).toHaveBeenCalledWith({ content: 'pong!' });
  });
});
