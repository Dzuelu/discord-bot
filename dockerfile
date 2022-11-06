FROM node:16

# For chromium process, see https://stackoverflow.com/a/71128432
RUN apt-get update && \
  apt-get install -y \
    libnss3 \
    libnspr4 \
    libatk1.0-0 \
    libatk-bridge2.0-0 \
    libcups2 \
    libdrm2 \
    libxkbcommon0 \
    libxcomposite1 \
    libxdamage1 \
    libxfixes3 \
    libxrandr2 \
    libgbm1 \
    libasound2


WORKDIR /app

COPY . .

CMD ["bin/start.sh"]
