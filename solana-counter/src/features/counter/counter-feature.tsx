import { useSolana } from '@/components/solana/use-solana'
import { WalletDropdown } from '@/components/wallet-dropdown'
import { AppHero } from '@/components/app-hero'
import { SolanasolanasolanasolanacounterUiButtonInitialize } from './ui/solanasolanasolanacounter-ui-button-initialize'
import { SolanasolanasolanasolanacounterUiList } from './ui/solanasolanasolanacounter-ui-list'
import { SolanasolanasolanasolanacounterUiProgramExplorerLink } from './ui/solanasolanasolanacounter-ui-program-explorer-link'
import { SolanasolanasolanasolanacounterUiProgramGuard } from './ui/solanasolanasolanacounter-ui-program-guard'

export default function SolanasolanasolanasolanacounterFeature() {
  const { account } = useSolana()

  return (
    <SolanasolanasolanasolanacounterUiProgramGuard>
      <AppHero
        title="Solanasolanasolanasolanacounter"
        subtitle={
          account
            ? "Initialize a new solanasolanasolanacounter onchain by clicking the button. Use the program's methods (increment, decrement, set, and close) to change the state of the account."
            : 'Select a wallet to run the program.'
        }
      >
        <p className="mb-6">
          <SolanasolanasolanasolanacounterUiProgramExplorerLink />
        </p>
        {account ? (
          <SolanasolanasolanasolanacounterUiButtonInitialize account={account} />
        ) : (
          <div style={{ display: 'inline-block' }}>
            <WalletDropdown />
          </div>
        )}
      </AppHero>
      {account ? <SolanasolanasolanasolanacounterUiList account={account} /> : null}
    </SolanasolanasolanasolanacounterUiProgramGuard>
  )
}
