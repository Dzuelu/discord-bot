import { roll } from 'commands/roll';
import { CacheType, Client, ChatInputCommandInteraction } from 'discord.js';

describe('roll', () => {
  it('calls for the input string', async () => {
    const interaction = {
      isChatInputCommand: () => true,
      options: { getString: jest.fn().mockReturnValue('1d6') },
      reply: jest.fn()
    } as unknown as ChatInputCommandInteraction<CacheType>;
    jest.spyOn(Math, 'random').mockReturnValue(0.9999999999999999);

    await roll.execute(interaction, jest.fn() as unknown as Client);

    expect(interaction.options.getString).toHaveBeenCalledWith('input');
  });

  it('replies with a simple dice roll at max random value', async () => {
    const interaction = {
      isChatInputCommand: () => true,
      options: { getString: jest.fn().mockReturnValue('1d6') },
      reply: jest.fn()
    } as unknown as ChatInputCommandInteraction<CacheType>;
    jest.spyOn(Math, 'random').mockReturnValue(0.9999999999999999);

    await roll.execute(interaction, jest.fn() as unknown as Client);

    expect(interaction.reply).toHaveBeenCalledWith({ content: '1d6: 6' });
  });

  it('replies with a simple dice roll at min random value', async () => {
    const interaction = {
      isChatInputCommand: () => true,
      options: { getString: jest.fn().mockReturnValue('1d6') },
      reply: jest.fn()
    } as unknown as ChatInputCommandInteraction<CacheType>;
    jest.spyOn(Math, 'random').mockReturnValue(0.0000000000000001);

    await roll.execute(interaction, jest.fn() as unknown as Client);

    expect(interaction.reply).toHaveBeenCalledWith({ content: '1d6: 1' });
  });

  it('adds up multiple of the same dice roll at the end', async () => {
    const interaction = {
      isChatInputCommand: () => true,
      options: { getString: jest.fn().mockReturnValue('5d6') },
      reply: jest.fn()
    } as unknown as ChatInputCommandInteraction<CacheType>;
    jest.spyOn(Math, 'random').mockReturnValue(0.9999999999999999);

    await roll.execute(interaction, jest.fn() as unknown as Client);

    expect(interaction.reply).toHaveBeenCalledWith({ content: '5d6: 6, 6, 6, 6, 6 = 30' });
  });

  it('rolls multiple different dice, adds each at the end, and totals all after', async () => {
    const interaction = {
      isChatInputCommand: () => true,
      options: { getString: jest.fn().mockReturnValue('5d6,1d4,3d100') },
      reply: jest.fn()
    } as unknown as ChatInputCommandInteraction<CacheType>;
    jest.spyOn(Math, 'random').mockReturnValue(0.9999999999999999);

    await roll.execute(interaction, jest.fn() as unknown as Client);

    expect(interaction.reply).toHaveBeenCalledWith({
      content: [
        // Split up for easier reading
        '5d6: 6, 6, 6, 6, 6 = 30',
        '1d4: 4',
        '3d100: 100, 100, 100 = 300',
        'Total: 334'
      ].join('\n')
    });
  });
});
