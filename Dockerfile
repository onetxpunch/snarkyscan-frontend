FROM oven/bun

WORKDIR /usr/src/app

COPY bun.lockb .

RUN bun i

COPY src src

RUN bun run build

CMD ["bun", "run", "start"]