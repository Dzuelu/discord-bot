export const chance = <T>(percentage: number, fn: () => Promise<T>): Promise<T | void> => {
  if (percentage > Math.random()) {
    return fn();
  }
  return Promise.resolve();
};
