FROM node:16

WORKDIR /app

COPY . .

CMD ["bin/start.sh"]
