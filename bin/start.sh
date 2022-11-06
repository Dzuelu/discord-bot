#!/usr/bin/env bash

# echo node version
node -v

git pull
yarn install --production --frozen-lockfile
yarn startup
