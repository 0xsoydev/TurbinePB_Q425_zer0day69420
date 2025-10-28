# Decentralized Voting Counter on Solana

## User Story

As a community organizer in a decentralized autonomous organization (DAO), I want to create a simple voting mechanism on the Solana blockchain where members can increment their vote count for proposals. This ensures votes are transparent, immutable, and verifiable by anyone, preventing tampering and building trust in the decision-making process.

## Use Case

This project demonstrates a foundational decentralized voting system using a basic counter program on Solana. Users connect their Solana wallet via the web interface to interact with an on-chain counter, which can represent vote tallies for proposals.

- **Key Features**:
  - Increment/decrement a counter (e.g., vote yes/no) via Solana transactions.
  - Real-time UI updates using Anchor's generated client and @solana/web3.js.
  - Wallet integration for secure, user-owned interactions.
  - Extensible: This counter can be built upon for multi-proposal voting, with added logic for one-vote-per-user via token gating or NFTs.

The program is written in Rust with Anchor for safety and ease of development, while the frontend uses Next.js with Tailwind CSS for a responsive UI.

## Architecture

The system follows a client-serverless architecture leveraging Solana's blockchain with distinct layers for user interaction, blockchain communication, and on-chain logic:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              FRONTEND LAYER                                 │
├─────────────────────────────────────────────────────────────────────────────┤
│  ┌──────────────────┐    ┌──────────────────┐    ┌──────────────────┐      │
│  │   Web Browser    │    │  Wallet Adapter  │    │   React UI with  │      │
│  │  (Next.js App)   │◄──►│   (Phantom etc.) │◄──►│   Tailwind CSS   │      │
│  │                  │    │                  │    │                  │      │
│  │ - User Interface │    │ - Signing Txns   │    │ - Vote Controls  │      │
│  │ - State Mgmt     │    │ - Key Management │    │ - Real-time Data │      │
│  └──────────────────┘    └──────────────────┘    └──────────────────┘      │
└───────────────────────────────▲─────────────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                           COMMUNICATION LAYER                               │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│                    ┌──────────────────────────────┐                         │
│                    │    Solana JSON RPC API       │                         │
│                    │  (web3.js Provider/Connection)◄────────┐                │
│                    │                              │        │                │
│                    └─────────────┬────────────────┘        │                │
│                                  │                         │                │
│                                  ▼                         │                │
│                    ┌──────────────────────────────┐         │                │
│                    │    Solana Validator Node     │         │                │
│                    │  (Localnet or Devnet/Mainnet)│         │                │
│                    └─────────────┬────────────────┘         │                │
└──────────────────────────────────┼──────────────────────────┼────────────────┘
                                   │                          │
                                   ▼                          ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                            ON-CHAIN LAYER                                   │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │                     Counter Program (Rust/Anchor)                    │   │
│  │                                                                      │   │
│  │  • Initialize Counter Instruction                                    │   │
│  │  • Increment Counter Instruction                                     │   │
│  │  • Decrement Counter Instruction                                     │   │
│  │  • Get Counter State (via account data)                              │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │                        Counter Account                               │   │
│  │                                                                      │   │
│  │  • count: u64 (vote tally)                                           │   │
│  │  • bump: u8 (PDA bump seed)                                          │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Data Flow:**

1. **User Interaction**: User interacts with the React UI to vote (increment/decrement)
2. **Wallet Integration**: Wallet adapter handles transaction signing with user's private key
3. **Transaction Creation**: Frontend creates a transaction with the appropriate instruction
4. **RPC Communication**: Transaction is sent to Solana RPC endpoint
5. **Validation & Execution**: Solana validator executes the program logic
6. **State Update**: Counter account data is updated on-chain
7. **Confirmation**: Frontend receives confirmation and updates UI

**Components:**

- **Frontend**: Next.js React application with Tailwind CSS for responsive UI
- **Wallet Adapter**: @solana/wallet-adapter for secure wallet integration
- **Web3.js**: @solana/web3.js for blockchain interaction
- **Anchor Client**: Auto-generated SDK for interacting with the program
- **Solana RPC**: Gateway to the Solana network (localnet/devnet/mainnet)
- **On-Chain Program**: Rust/Anchor program containing voting logic
- **Counter Account**: Program Derived Address (PDA) storing vote count

## Getting Started

### Installation

#### Clone and Setup

Since this is a modified template, clone the repository or download the code:

```shell
git clone <your-repo-url>
cd solana-counter
```

#### Install Dependencies

```shell
bun install
```

## Running the Project

### Local Development

1. **Sync Program ID** (generates new keypair and updates config):

   ```shell
   bun run anchor keys sync
   ```

   _Note: Manually update the `PROGRAM_ID` constant in `anchor/src/counter-exports.ts` to match the new program ID._

2. **Build the Program**:

   ```shell
   bun run anchor-build
   ```

3. **Start Local Validator** (in one terminal, deploys program to localnet):

   ```shell
   bun run anchor-localnet
   ```

4. **Start the Web App** (in another terminal, opens at http://localhost:3000):

   ```shell
   bun run dev
   ```

   Connect a wallet (e.g., Phantom) and interact with the counter to simulate voting.

### Testing

- **Anchor Program Tests** (run in the project root, tests on-chain logic):

  ```shell
  bun run anchor-test
  ```

- **Frontend Linting and Formatting**:

  ```shell
  bun run lint
  bun run format:check
  ```

### Deployment

1. **Build the Program**:

   ```shell
   bun run anchor-build
   ```

2. **Deploy to Devnet** (configure your wallet keypair in `anchor/Anchor.toml` first; fund the wallet with SOL):

   ```shell
   bun run anchor deploy --provider.cluster devnet
   ```

   Update the frontend's cluster config to use devnet RPC.

3. **Build the Web App for Production**:

   ```shell
   bun run build
   ```

4. **Start Production Server** (e.g., on Vercel or a Node server):

   ```shell
   bun run start
   ```

_Note: For Anchor commands, use `bun run anchor <subcommand>` from the project root, or `cd anchor && anchor <subcommand>`._

## Apps

### anchor

Solana program in Rust using Anchor for the counter (voting) logic.

### web

Next.js app with React, Tailwind CSS, and Solana wallet integration for the user interface.
