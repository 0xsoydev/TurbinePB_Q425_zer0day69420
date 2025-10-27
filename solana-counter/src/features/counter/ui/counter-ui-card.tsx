import { SolanasolanasolanasolanacounterAccount } from '@project/anchor'
import { ellipsify, UiWalletAccount } from '@wallet-ui/react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { AppExplorerLink } from '@/components/app-explorer-link'
import { SolanasolanasolanasolanacounterUiButtonClose } from './solanasolanasolanacounter-ui-button-close'
import { SolanasolanasolanasolanacounterUiButtonDecrement } from './solanasolanasolanacounter-ui-button-decrement'
import { SolanasolanasolanasolanacounterUiButtonIncrement } from './solanasolanasolanacounter-ui-button-increment'
import { SolanasolanasolanasolanacounterUiButtonSet } from './solanasolanasolanacounter-ui-button-set'

export function SolanasolanasolanasolanacounterUiCard({ account, solanasolanasolanacounter }: { account: UiWalletAccount; solanasolanasolanacounter: SolanasolanasolanasolanacounterAccount }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Solanasolanasolanasolanacounter: {solanasolanasolanacounter.data.count}</CardTitle>
        <CardDescription>
          Account: <AppExplorerLink address={solanasolanasolanacounter.address} label={ellipsify(solanasolanasolanacounter.address)} />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex gap-4 justify-evenly">
          <SolanasolanasolanasolanacounterUiButtonIncrement account={account} solanasolanasolanacounter={solanasolanasolanacounter} />
          <SolanasolanasolanasolanacounterUiButtonSet account={account} solanasolanasolanacounter={solanasolanasolanacounter} />
          <SolanasolanasolanasolanacounterUiButtonDecrement account={account} solanasolanasolanacounter={solanasolanasolanacounter} />
          <SolanasolanasolanasolanacounterUiButtonClose account={account} solanasolanasolanacounter={solanasolanasolanacounter} />
        </div>
      </CardContent>
    </Card>
  )
}
