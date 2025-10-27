import {
  Blockhash,
  createSolanaClient,
  createTransaction,
  generateKeyPairSigner,
  Instruction,
  isSolanaError,
  KeyPairSigner,
  signTransactionMessageWithSigners,
} from 'gill'
import {
  fetchSolanasolanasolanasolanacounter,
  getCloseInstruction,
  getDecrementInstruction,
  getIncrementInstruction,
  getInitializeInstruction,
  getSetInstruction,
} from '../src'
// @ts-ignore error TS2307 suggest setting `moduleResolution` but this is already configured
import { loadKeypairSignerFromFile } from 'gill/node'

const { rpc, sendAndConfirmTransaction } = createSolanaClient({ urlOrMoniker: process.env.ANCHOR_PROVIDER_URL! })

describe('solanasolanasolanacounter', () => {
  let payer: KeyPairSigner
  let solanasolanasolanacounter: KeyPairSigner

  beforeAll(async () => {
    solanasolanasolanacounter = await generateKeyPairSigner()
    payer = await loadKeypairSignerFromFile(process.env.ANCHOR_WALLET!)
  })

  it('Initialize Solanasolanasolanasolanacounter', async () => {
    // ARRANGE
    expect.assertions(1)
    const ix = getInitializeInstruction({ payer: payer, solanasolanasolanacounter: solanasolanasolanacounter })

    // ACT
    await sendAndConfirm({ ix, payer })

    // ASSER
    const currentSolanasolanasolanasolanacounter = await fetchSolanasolanasolanasolanacounter(rpc, solanasolanasolanacounter.address)
    expect(currentSolanasolanasolanasolanacounter.data.count).toEqual(0)
  })

  it('Increment Solanasolanasolanasolanacounter', async () => {
    // ARRANGE
    expect.assertions(1)
    const ix = getIncrementInstruction({
      solanasolanasolanacounter: solanasolanasolanacounter.address,
    })

    // ACT
    await sendAndConfirm({ ix, payer })

    // ASSERT
    const currentCount = await fetchSolanasolanasolanasolanacounter(rpc, solanasolanasolanacounter.address)
    expect(currentCount.data.count).toEqual(1)
  })

  it('Increment Solanasolanasolanasolanacounter Again', async () => {
    // ARRANGE
    expect.assertions(1)
    const ix = getIncrementInstruction({ solanasolanasolanacounter: solanasolanasolanacounter.address })

    // ACT
    await sendAndConfirm({ ix, payer })

    // ASSERT
    const currentCount = await fetchSolanasolanasolanasolanacounter(rpc, solanasolanasolanacounter.address)
    expect(currentCount.data.count).toEqual(2)
  })

  it('Decrement Solanasolanasolanasolanacounter', async () => {
    // ARRANGE
    expect.assertions(1)
    const ix = getDecrementInstruction({
      solanasolanasolanacounter: solanasolanasolanacounter.address,
    })

    // ACT
    await sendAndConfirm({ ix, payer })

    // ASSERT
    const currentCount = await fetchSolanasolanasolanasolanacounter(rpc, solanasolanasolanacounter.address)
    expect(currentCount.data.count).toEqual(1)
  })

  it('Set solanasolanasolanacounter value', async () => {
    // ARRANGE
    expect.assertions(1)
    const ix = getSetInstruction({ solanasolanasolanacounter: solanasolanasolanacounter.address, value: 42 })

    // ACT
    await sendAndConfirm({ ix, payer })

    // ASSERT
    const currentCount = await fetchSolanasolanasolanasolanacounter(rpc, solanasolanasolanacounter.address)
    expect(currentCount.data.count).toEqual(42)
  })

  it('Set close the solanasolanasolanacounter account', async () => {
    // ARRANGE
    expect.assertions(1)
    const ix = getCloseInstruction({
      payer: payer,
      solanasolanasolanacounter: solanasolanasolanacounter.address,
    })

    // ACT
    await sendAndConfirm({ ix, payer })

    // ASSERT
    try {
      await fetchSolanasolanasolanasolanacounter(rpc, solanasolanasolanacounter.address)
    } catch (e) {
      if (!isSolanaError(e)) {
        throw new Error(`Unexpected error: ${e}`)
      }
      expect(e.message).toEqual(`Account not found at address: ${solanasolanasolanacounter.address}`)
    }
  })
})

// Helper function to keep the tests DRY
let latestBlockhash: Awaited<ReturnType<typeof getLatestBlockhash>> | undefined
async function getLatestBlockhash(): Promise<Readonly<{ blockhash: Blockhash; lastValidBlockHeight: bigint }>> {
  if (latestBlockhash) {
    return latestBlockhash
  }
  return await rpc
    .getLatestBlockhash()
    .send()
    .then(({ value }) => value)
}
async function sendAndConfirm({ ix, payer }: { ix: Instruction; payer: KeyPairSigner }) {
  const tx = createTransaction({
    feePayer: payer,
    instructions: [ix],
    version: 'legacy',
    latestBlockhash: await getLatestBlockhash(),
  })
  const signedTransaction = await signTransactionMessageWithSigners(tx)
  return await sendAndConfirmTransaction(signedTransaction)
}
