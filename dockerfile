FROM node:16

RUN yarn install --production --frozen-lockfile

CMD ["yarn startup"]
