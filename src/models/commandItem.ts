import { SlashCommandBuilder } from '@discordjs/builders';
import { CommandInteraction, CacheType, Client } from 'discord.js';

export interface CommandItem {
  execute: (interaction: CommandInteraction<CacheType>, server: Client) => Promise<void>;
  slashCommand: SlashCommandBuilder;
}
