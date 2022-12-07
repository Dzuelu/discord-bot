import { randomFrom } from 'utils';

describe('randomFrom', () => {
  const items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  it('first item for very close to 0 random value', () => {
    jest.spyOn(Math, 'random').mockReturnValue(0.0000000000000001);
    expect(randomFrom(...items)).toEqual(0);
  });

  it('last item for very close to 1 random value', () => {
    jest.spyOn(Math, 'random').mockReturnValue(0.9999999999999999);
    expect(randomFrom(...items)).toEqual(9);
  });

  it('for percentage exact match', () => {
    jest.spyOn(Math, 'random').mockReturnValue(0.1);
    expect(randomFrom(...items)).toEqual(1);
  });
});
