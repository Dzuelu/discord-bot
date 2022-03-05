import { chance } from 'utils';

describe('chance', () => {
  it('calls the function when the chance is under the random value', async () => {
    jest.spyOn(Math, 'random').mockReturnValue(0.1);
    const mockCallFunction = jest.fn();

    await chance(0.2, mockCallFunction);

    expect(mockCallFunction).toBeCalledTimes(1);
  });

  it('does not call the function when the chance is over the random value', async () => {
    jest.spyOn(Math, 'random').mockReturnValue(0.3);
    const mockCallFunction = jest.fn();

    await chance(0.2, mockCallFunction);

    expect(mockCallFunction).toBeCalledTimes(0);
  });

  it('does not call the function when the chance is equal to the random value', async () => {
    jest.spyOn(Math, 'random').mockReturnValue(0.2);
    const mockCallFunction = jest.fn();

    await chance(0.2, mockCallFunction);

    expect(mockCallFunction).toBeCalledTimes(0);
  });
});
