import { SlashCommandBuilder } from '@discordjs/builders';
import { CommandInteraction, CacheType, Client } from 'discord.js';

export interface CommandItem {
  execute: (interaction: CommandInteraction<CacheType>, client: Client) => Promise<void>;
  slashCommand: SlashCommandBuilder;
}
