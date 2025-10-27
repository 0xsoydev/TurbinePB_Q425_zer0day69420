import { SOLANACOUNTER_PROGRAM_ADDRESS } from '@project/anchor'
import { AppExplorerLink } from '@/components/app-explorer-link'
import { ellipsify } from '@wallet-ui/react'

export function SolanasolanasolanasolanacounterUiProgramExplorerLink() {
  return <AppExplorerLink address={SOLANACOUNTER_PROGRAM_ADDRESS} label={ellipsify(SOLANACOUNTER_PROGRAM_ADDRESS)} />
}
