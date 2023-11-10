# snarkyscan-frontend

Snarkyscan is an open-source selfhostable block explorer for Mina Protocol.

A canonical deployment is available at: <https://snarkyscan.com> or <https://berkeley.snarkyscan.com>

- [snarkyscan-frontend](#snarkyscan-frontend)
	- [Overview](#overview)
	- [Getting Started](#getting-started)
		- [Canonical Deployment](#canonical-deployment)
		- [Docker](#docker)
		- [Docker Compose](#docker-compose)
	- [Architecture](#architecture)
	- [Contributing](#contributing)
	- [Why Mina?](#why-mina)

## Overview

With it users can view transactions, verify contracts, and keep private notes on different public keys. This is an essential facet of decentralized applications for 1 key reason: security. It is imperative that users have platforms where they can monitor. While many protocols provide barebones, it's up to individual teams to choose what information.

In our case we took a close look at industry leading application such as Blockscout and Etherscan. Further we explored native solutions such as minaexplorer, minascan to inform our choice about what information is useful to end users and what has room for innovation. We identified a key area around ZkApps which Mina is preparing to rollout to mainnet before a full featureet.

The primary function of Snarkyscan is providing end users a browser client to inspect information about the state of Mina. The ability to selfhost is highly useful for operators that run their own nodes. It provides them them with continence and privacy.

This is accomplished in a few ways:

- Detailed pages on applications
- Details pages for ZkApps
- Overview and transactions in blocks
- Support for multiple networks such as Berkeley, Maiinet
- Support for browser extensions such as Auro Wallet
- Support for mobile layouts
- Open source codebase
- Varied deployment options

## Getting Started

Getting started with Snarkyscan is easy. There are instructions for running in Docker and for running with Systemd.

### Canonical Deployment

If you are an end-user, you most likely can access: <https://snarkyscan.com>

If you cannot or need a reference deployment, follow these supported hosting options:

### Docker

If you operate your own Mina node, it may be in your interest to host a standalone project.

There are automated docker builds you can pull from this repository:

```bash
docker run --rm -p 8080:3000 registry.github.com/snarkyscan/frontend:latest
```

### Docker Compose

`docker-compose` is another great choice for managing the lifecycle of your application. Here is a reference file

```yml
services:
 snarkyscan:
  image: registry.github.com/snarkyscan/frontend:latest
  restart: unless-stopped
  ports:
   - 8080:3000 # in this case your application binds to 0.0.0.0:8080
  env:
   - GRAPHQL_HOST= # your local node url
```

## Architecture

[ Diagram goes here ]

Snarkyscan is built as a hybrid application using Next.js. This permits developers to develop tightly coupled web applications with a trusted execution layer on the server side. Industry leading applications using are many such as: Uniswap, 1inch. It's also one of the recommended starting options for the o1js templates.

The UI is developed in React using Typescript and TailwindCSS. These are performant and result in highly optimized applications with a single page design. Support for interactions with Mina network is provided using `o1js` and over GraphQL with archive Mina data providers.

Snarkyscan is a first-party adopter of the ZkApp Verification Service. This allows external developers to verify code in one shared API, as future block explorers adopt the verification service it becomes easy for users to trust the ZKApps they are interacting with and easy for developers to verify metadata on their app is safe to use.

## Contributing

Contributions to the project are always appreciated. We lay out some guidelines to streamline the maintenence of external code, if you follow these guidelines it becomes easier to merge in of a quick turnaround is very high.

1. Clone the repository
2. Create a branch off `develop` which described the change you propose
3. Provide clear commit messages with your changes
4. Open a pull request
5. Fill out a short description with your changes

In alternate cases you might still propose your change. Other users can then join in the discussion, and if strong support is signalled there is a high chance the task will be examined by a contributor.

## Why Mina?

Mina is a great choice for developers interested in 3 key areas: Zero knowledge cryptography, Cryptography, decentralized application platforms.

Zero knowledge cryptography is an exciting area where two parties can prove claims without. This is enforced by ZkApp developers who write code that is forced to adhere to strict rules to generate valid corresponding proofs.

Compared to the other dominant smart contract protocol Ethereum, this provides a few clear benefits. Instead of putting the onus on node operators to execute transaction, all valid actions are instead provide on a client side. Instead the end user passes  a proof that their action satisfies the constraits determined by the ZkApps verification key. If a user cannot preemtively prove their transaction meets the constraints, the effort is not even send to node operators.
