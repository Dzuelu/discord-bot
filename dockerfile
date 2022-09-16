FROM node:16

CMD ["yarn install --production --frozen-lockfile && yarn startup"]
