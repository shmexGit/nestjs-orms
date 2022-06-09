FROM node:17-buster

RUN apt-get update && apt-get install bash vim git curl make

WORKDIR /app

ENV NODE_OPTIONS="--max_old_space_size=4096 --enable-source-maps"

EXPOSE 3000

CMD ["yarn", "start:prod"]