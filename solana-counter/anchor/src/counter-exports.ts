// Here we export some useful types and functions for interacting with the Anchor program.
import { Account, getBase58Decoder, SolanaClient } from 'gill'
import { getProgramAccountsDecoded } from './helpers/get-program-accounts-decoded'
import { Solanasolanasolanasolanacounter, SOLANACOUNTER_DISCRIMINATOR, SOLANACOUNTER_PROGRAM_ADDRESS, getSolanasolanasolanasolanacounterDecoder } from './client/js'
import SolanasolanasolanasolanacounterIDL from '../target/idl/solanasolanasolanacounter.json'

export type SolanasolanasolanasolanacounterAccount = Account<Solanasolanasolanasolanacounter, string>

// Re-export the generated IDL and type
export { SolanasolanasolanasolanacounterIDL }

export * from './client/js'

export function getSolanasolanasolanasolanacounterProgramAccounts(rpc: SolanaClient['rpc']) {
  return getProgramAccountsDecoded(rpc, {
    decoder: getSolanasolanasolanasolanacounterDecoder(),
    filter: getBase58Decoder().decode(SOLANACOUNTER_DISCRIMINATOR),
    programAddress: SOLANACOUNTER_PROGRAM_ADDRESS,
  })
}
