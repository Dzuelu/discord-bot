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
FROM node:16 as builder

RUN eval $(ssh-agent) && \
    ssh-add id_ed25519 && \
    ssh-keyscan -H github.com >> /etc/ssh/ssh_known_hosts && \
    git clone git@github.com:Dzuelu/discord-bot.git /opt/discord-bot

WORKDIR /opt/discord-bot
CMD [ "./bin/start.sh" ]

EOF

# Run new image
docker run \
  -d --name DiscordBot \
  --restart on-failure \
  discord-bot:latest 
