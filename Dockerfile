FROM oven/bun

WORKDIR /usr/src/app

COPY bun.lockb package.json .

RUN bun i

COPY  *.js *.ts *.json .

COPY __generated__ __generated__

COPY src src

ARG NODE_ENV
ENV NODE_ENV=${NODE_ENV}

RUN bun run build

CMD ["bun", "run", "start"]