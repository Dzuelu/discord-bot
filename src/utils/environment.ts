const envVar = <T>(envKey: string): T => {
  const envValue = process.env[envKey];
  if (!envValue) {
    throw new Error(`Environment variable '${envKey}' not set`);
  }
  return envValue as unknown as T;
};

export const discordClientId = (): string => envVar('DISCORD_CLIENT_ID');
export const discordGuildId = (): string => envVar('DISCORD_GUILD_ID');
export const discordToken = (): string => envVar('DISCORD_TOKEN');
