import { SlashCommandBuilder } from '@discordjs/builders';
import { CommandItem } from 'models';

const add = (accumulator, a): number => accumulator + a;

const randomBetween = (min: number, max: number): number =>
  Math.round(Math.max(Math.min(Math.random() * (max - min) + min, max), min));

const parseNum = (num: string, defaultNum = 1): number => {
  const parsed = parseInt(num, 10);
  if (Number.isNaN(parsed)) {
    return defaultNum;
  }
  return parsed;
};

// ex: 3d4: 4, 1, 2 = 7
const outputRollSet = (maxNum: number, rolls: number[]): string =>
  `${rolls.length}d${maxNum}: ${rolls.join(', ')}${rolls.length > 1 ? ` = ${rolls.reduce(add, 0)}` : ''}`;

const generateOutput = (input: string): string => {
  const splitRolls = input.split(',');
  const rollOutput = splitRolls.map(countAndMax => {
    const rolls: number[] = [];
    let determinedMax = 0;
    if (countAndMax.includes('d')) {
      const [count, max] = countAndMax.split('d');
      determinedMax = parseNum(max, 2);
      for (let i = 0; i < parseNum(count); i += 1) {
        rolls.push(randomBetween(1, determinedMax));
      }
    } else {
      determinedMax = parseNum(countAndMax, 2);
      rolls.push(randomBetween(1, determinedMax));
    }
    return {
      append: outputRollSet(determinedMax, rolls),
      total: rolls.reduce(add, 0)
    };
  });
  const appendedText = rollOutput.map(o => o.append);
  if (splitRolls.length > 1) {
    appendedText.push(`Total: ${rollOutput.map(o => o.total).reduce(add, 0)}`);
  }
  return `${appendedText.join('\n')}`;
};

export const roll: CommandItem = {
  execute: async (interaction): Promise<void> => {
    if (!interaction.isChatInputCommand()) return;

    const input = interaction.options.getString('input');
    if (input == null) {
      await interaction.reply({ content: `Rolling a 1d6 because your so indecisive...\n${generateOutput('1d6')}` });
    } else {
      await interaction.reply({ content: generateOutput(input) });
    }
  },
  slashCommand: new SlashCommandBuilder()
    .addStringOption(option => option.setName('input').setDescription('The dice descriptions').setRequired(false))
    .setDescription('Rolls dice between 1 and the given number')
    .setDMPermission(true)
    .setName('roll')
};
