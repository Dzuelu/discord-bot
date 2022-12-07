let debug = false;

export const setDebug = (value: boolean): void => {
  debug = value;
};

export const getDebug = (): boolean => debug;

export const debugLog = (message?: unknown, ...optionalParams: unknown[]): void => {
  if (debug) {
    console.log(message, optionalParams);
  }
};
