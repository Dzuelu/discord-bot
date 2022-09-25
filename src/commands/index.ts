import { outputDebug } from './outputDebug';
import { ping } from './ping';
import { roll } from './roll';
import { say } from './say';
import { toggleDebug } from './toggleDebug';
import { update } from './update';

export const commandList = [
  // Gotta keep it sorted!
  outputDebug,
  ping,
  roll,
  say,
  toggleDebug,
  update
];
