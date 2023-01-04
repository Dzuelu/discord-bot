#!/usr/bin/env bash

ls -la

# echo node version
node -v

git pull
yarn install --production --frozen-lockfile
yarn startup
