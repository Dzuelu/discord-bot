#!/usr/bin/env bash
# This script sets up a docker image that contains the ssh keys
# to pull from a private repo on github. Allows an /update 
# command that restarts the docker container and pulls the new
# code to run easily.

# Stop old image
docker stop DiscordBot
docker rm DiscordBot

# Update the local code
git pull

# Build docker image
docker build -t discord-bot:latest -f- . <<EOF
FROM node:16

RUN eval $(ssh-agent -s) &&\
    ssh-add id_ed25519 &&\
    ssh-keyscan -H github.com >> /etc/ssh/ssh_known_hosts &&\
    git clone git@github.com:Dzuelu/discord-bot.git /opt/discord-bot

WORKDIR /opt/discord-bot
CMD [ "./bin/start.sh" ]

EOF

# Run new image
docker run \
  -d --name DiscordBot \
  --restart on-failure \
  discord-bot:latest 
