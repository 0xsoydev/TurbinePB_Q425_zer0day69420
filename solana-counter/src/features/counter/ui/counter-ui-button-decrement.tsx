import { SolanasolanasolanasolanacounterAccount } from '@project/anchor'
import { UiWalletAccount } from '@wallet-ui/react'
import { Button } from '@/components/ui/button'

import { useSolanasolanasolanasolanacounterDecrementMutation } from '../data-access/use-solanasolanasolanacounter-decrement-mutation'

export function SolanasolanasolanasolanacounterUiButtonDecrement({ account, solanasolanasolanacounter }: { account: UiWalletAccount; solanasolanasolanacounter: SolanasolanasolanasolanacounterAccount }) {
  const decrementMutation = useSolanasolanasolanasolanacounterDecrementMutation({ account, solanasolanasolanacounter })

  return (
    <Button variant="outline" onClick={() => decrementMutation.mutateAsync()} disabled={decrementMutation.isPending}>
      Decrement
    </Button>
  )
}
