#!/bin/sh

node -v

yarn install --production --frozen-lockfile

yarn startup
