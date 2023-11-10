# 🟢💎 Snarkyscan.com

[![.github/workflows/docker.yml](https://github.com/onetxpunch/snarkyscan-frontend/actions/workflows/docker.yml/badge.svg)](https://github.com/onetxpunch/snarkyscan-frontend/actions/workflows/docker.yml)

## Overview

[Snarkyscan](https://snarkyscan.com) is an open source block explorer for [Mina](https://minaprotocol.com) protocol that you can selfhost and explore information about Mina accounts and ZkApps deployed on different networks.

- [🟢💎 Snarkyscan.com](#-snarkyscancom)
	- [Overview](#overview)
	- [Getting Started](#getting-started)
		- [Canonical URLs](#canonical-urls)
			- [Mina Mainnet: https://snarkyscan.com](#mina-mainnet-httpssnarkyscancom)
			- [Mina's Berkeley Testnet: https://berkeley.snarkyscan.com](#minas-berkeley-testnet-httpsberkeleysnarkyscancom)
			- [App Documentation:  https://docs.snarkyscan.com](#app-documentation--httpsdocssnarkyscancom)
	- [Features](#features)
	- [Deployment](#deployment)
		- [Docker](#docker)
		- [Docker-compose](#docker-compose)
	- [Architecture](#architecture)
	- [Contributing](#contributing)

## Getting Started

The easiest way to get started exploring Mina is with the canonical deployments.

### Canonical URLs

#### Mina Mainnet: <https://snarkyscan.com>

#### Mina's Berkeley Testnet: <https://berkeley.snarkyscan.com>

Additional documentation exists that can guide you through different features of the application.

#### App Documentation:  <https://docs.snarkyscan.com>

## Features

The key features in the alpha release of the project are:

- Overview of Mina market and recent blocks
- Detailed lookups of wallets, blocks, and transactions
- Support for [Berkeley testnet](https://berkeley.snarkyscan.com) and [Mina mainnet](https://snarkyscan.com)
- Responsive design for mobile, tablet, desktop layouts
- Open source auditable code with various deployment methods

## Deployment

Deploying Snarkyscan is easy with Docker. Images are published from the latest branch commits. For example to start up an instance with the latest develop code:

### Docker

```bash
docker run - --rm -p 80:3000 ghcr.io/onetxpunch/snarkyscan:develop
```

### Docker-compose

A reference docker-compose.yml for your application could look like the following:

```yml
services:
 snarkyscan:
  image: ghcr.io/onetxpunch/snarkyscan:develop
  restart: unless-stopped
  ports:
   - 80:3000
  env:
   - NEXT_PUBLIC_API_URL= # local graphql endpoint
```

## Architecture

![](./diagram.png)

Snarkyscan is built as a hybrid application using Next.js. This permits developers to develop tightly coupled web applications with a trusted execution layer on the server side. Industry leading applications using are many such as: Uniswap, 1inch. It's also one of the recommended starting options for the o1js templates.

The UI is developed in React using Typescript and TailwindCSS. These are performant and result in highly optimized applications with a single page design.

Support for interactions with Mina network is provided using `o1js` to fetch account information and over GraphQL using Relay to lint queries to archive Mina data providers.

## Contributing

To streamline contributions and avoid git conflicts, heres a good way to prepare a PR:

1. Clone the Repository: Start by cloning the repository to your local machine or creating a fork.
2. Create a Branch: Branch off from the develop branch. Name your branch in a way that helps to describe the proposed change.
3. Commit Your Changes: Make your changes and commit them with clear commit messages.
4. Open a Pull Request: Once your changes are committed, open a pull request against the develop branch.
5. Describe Your Changes: In the pull request, provide a concise description of your changes.

When in doubt, feel free to still propose your change or start a discussion. Strong support and clear reasoning can lead to a contributor implementing your suggestions.
