import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/rest';
import { commandList } from 'commands';
import { discordClientId, discordGuildId, discordToken } from 'utils';

const rest = new REST({ version: '9' }).setToken(discordToken());
const commands = commandList.map(commandItem => commandItem.slashCommand.toJSON());

rest
  .put(Routes.applicationGuildCommands(discordClientId(), discordGuildId()), { body: commands })
  .then(() => console.log('Successfully registered application commands.'))
  .catch(console.error);
