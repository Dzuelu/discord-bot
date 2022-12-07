/* eslint-disable @typescript-eslint/no-empty-function */
import { debugLog, getDebug, setDebug } from 'utils';

beforeEach(() => {
  setDebug(false); // default state
});

describe('debug', () => {
  it('defaults to false', () => {
    expect(getDebug()).toEqual(false);
  });

  it('can be set true', () => {
    setDebug(true);
    expect(getDebug()).toEqual(true);
  });

  it('does not log when debug is false', () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    debugLog('test');
    expect(logSpy).not.toHaveBeenCalled();
  });

  it('logs when debug is true', () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    setDebug(true);
    debugLog('test', 'test2');
    expect(logSpy).toHaveBeenCalledWith('test', ['test2']);
  });
});
