#!/usr/bin/env bash
# This 'app' is run on a raspberryPi. To update I have to ssh into the Pi and run this script.
# Eventually I would like to find a way to redeploy this to the pi with a github action
# or similar but for now this will do.

# Stop old image
docker stop DiscordBot
docker rm DiscordBot

# Update the local code
git pull

# Build docker image
docker build -t discord-bot:latest -f- . <<EOF
FROM node:16

EXPOSE 8080

WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
RUN yarn install --production --frozen-lockfile

# Bundle app source
COPY . .

# Update rest endpoints
RUN yarn rest

# Run the discord bot
CMD [ "yarn", "client" ]
EOF

# Run new image
docker run -d --name DiscordBot --restart on-failure discord-bot:latest 
