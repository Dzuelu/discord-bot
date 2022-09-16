FROM node:16

WORKDIR /app

COPY . .

RUN yarn install --production --frozen-lockfile

CMD ["yarn", "startup"]
