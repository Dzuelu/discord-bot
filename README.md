# Discord Bot

A bot for the Wrinkle Brains discord server

## Changes
When changes are made, github workflows will start up a new ubuntu VM.
That VM will pull the repo and node v16, and will then run the following commands.
- `yarn install --frozen-lockfile` to install everything committed to the [yarn.lock](yarn.lock) file.
- `yarn lint` will check the current code for programmatic and stylistic errors.
- `yarn test:unit` will run all the unit tests for the project contained in [spec](spec/)

If all commands succeeded, the github branch will have a green check after it's done.
If something failed, it will have a red check and can not not be merged into master until it's fixed.

## Startup
When starting up, the bot will run the following commands
- `yarn rest` setups any slash commands that the bot can respond to.
- `yarn client` starts up the client that the bot is contained in

These commands are both started with their respective name in the [/src/\<command>.ts](/src) directory.

### Helpful links
- [Discord Developer Portal](https://discord.com/developers/applications)
- [DiscordJS API Docs](https://discordjs.guide)
