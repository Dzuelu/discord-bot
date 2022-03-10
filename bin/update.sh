#!/usr/bin/env bash
# This script sets up a docker image that contains the ssh keys
# to pull from a private repo on github. Allows an /update 
# command that restarts the docker container and pulls the new
# code to run easily.

# Stop old image
docker stop DiscordBot
docker rm DiscordBot
docker image rm discord-bot

# Update the local code
git pull

# temp copy ssh keys to include in image
cp ~/.ssh/id_ed25519 bin/id_ed25519
cp ~/.ssh/id_ed25519.pub bin/id_ed25519.pub

# Build docker image
docker build -t discord-bot:latest -f- . <<EOF
FROM node:16

# Copy over private key, and set permissions
# Warning! Anyone who gets their hands on this image will be able
# to retrieve this private key file from the corresponding image layer
RUN mkdir /root/.ssh/
ADD bin/id_ed25519 /root/.ssh/id_ed25519
ADD bin/id_ed25519.pub /root/.ssh/id_ed25519.pub

RUN ssh-keyscan -H github.com >> /etc/ssh/ssh_known_hosts &&\
    git clone git@github.com:Dzuelu/discord-bot.git /opt/discord-bot

WORKDIR /opt/discord-bot

# Include secrets and start client
COPY .env .env
CMD ["./bin/start.sh"]
EOF

# remove our temp ssh keys
rm bin/id_ed25519
rm bin/id_ed25519.pub

# Run new image
docker run \
  -d --name DiscordBot \
  --restart on-failure \
  discord-bot:latest 
