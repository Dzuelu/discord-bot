import { Client, GuildMember } from 'discord.js';

export const memberAdded = async (member: GuildMember, server: Client): Promise<void> => {
  const generalChannel = server.channels.cache.get('223498053246648321'); // wrinkle brains general
  await (generalChannel?.isTextBased() && !generalChannel.isVoiceBased()
    ? generalChannel.send(`Welcome <@${member.id}>!`)
    : Promise.resolve());
};
