import { SlashCommandBuilder } from '@discordjs/builders';
import { CommandInteraction, CacheType } from 'discord.js';

export interface CommandItem {
  execute: (interaction: CommandInteraction<CacheType>) => Promise<void>;
  slashCommand: SlashCommandBuilder;
}
