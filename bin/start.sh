#!/usr/bin/env bash

git pull
yarn install --production --frozen-lockfile
yarn rest
yarn client
