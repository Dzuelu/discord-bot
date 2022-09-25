import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/rest';
import { commandList } from 'commands';
import { discordClientId, discordToken } from 'utils';

const rest = new REST({ version: '9' }).setToken(discordToken());
const commands = commandList.map(commandItem => commandItem.slashCommand.toJSON());

// Clear old guild specific commands, only needs to be run once
rest.put(Routes.applicationGuildCommands(discordClientId(), '223498053246648321'), { body: [] });

rest
  .put(Routes.applicationCommands(discordClientId()), { body: commands })
  .then(() => console.log('Successfully registered application commands.'))
  .catch(console.error);
