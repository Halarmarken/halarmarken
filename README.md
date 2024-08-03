# Halarmärken

## Prerequisites

- [Node.js v22](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [pnpm](https://pnpm.io/) `npm install -g pnpm`

## Setup

1. Clone repository

```bash
git clone https://github.com/Halarmarken/halarmarken
cd halarmarken
```

2. Install dependencies

```bash
pnpm install
```

3. Start local database

```bash
pnpm db:up
```

4. Start development server

```bash
pnpm dev
```

## Development

Run code checks locally

```bash
pnpm lint
pnpm typecheck
pnpm format:check
```

Run [Prisma Studio](https://www.prisma.io/studio)

```bash
npx prisma studio
```
