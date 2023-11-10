FROM oven/bun

WORKDIR /usr/src/app

COPY bun.lockb package.json .

RUN bun i

COPY  *.js *.ts *.json .

COPY __generated__ __generated__

COPY src src

RUN bun run build

CMD ["bun", "run", "start"]