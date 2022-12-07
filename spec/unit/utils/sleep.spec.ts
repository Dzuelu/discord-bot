import { sleep } from 'utils';

describe('sleep', () => {
  it('first item for very close to 0 random value', async () => {
    const start = Date.now();
    await sleep(100);
    expect(Date.now() - start).toBeGreaterThanOrEqual(100);
  });
});
