export const randomFrom = <T>(...items: T[]): T => items[Math.floor(Math.random() * items.length)];
