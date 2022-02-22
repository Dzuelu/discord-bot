import { ping } from 'commands/ping';
import { CommandInteraction, CacheType } from 'discord.js';

describe('ping', () => {
  it('replys pong', async () => {
    const interaction = {
      reply: jest.fn()
    } as unknown as CommandInteraction<CacheType>;

    await ping.execute(interaction);

    expect(interaction.reply).toHaveBeenCalledWith({ content: 'pong!' });
  });
});
