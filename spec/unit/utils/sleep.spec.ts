import { sleep } from 'utils';

describe('sleep', () => {
  it('first item for very close to 0 random value', async () => {
    const start = Date.now();
    await sleep(110); // test may fail at 100 if calculation was fast (ie got 99 sometimes)
    expect(Date.now() - start).toBeGreaterThanOrEqual(100);
  });
});
