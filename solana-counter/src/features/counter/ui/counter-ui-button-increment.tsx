import { SolanasolanasolanasolanacounterAccount } from '@project/anchor'
import { UiWalletAccount } from '@wallet-ui/react'
import { Button } from '@/components/ui/button'
import { useSolanasolanasolanasolanacounterIncrementMutation } from '../data-access/use-solanasolanasolanacounter-increment-mutation'

export function SolanasolanasolanasolanacounterUiButtonIncrement({ account, solanasolanasolanacounter }: { account: UiWalletAccount; solanasolanasolanacounter: SolanasolanasolanasolanacounterAccount }) {
  const incrementMutation = useSolanasolanasolanasolanacounterIncrementMutation({ account, solanasolanasolanacounter })

  return (
    <Button variant="outline" onClick={() => incrementMutation.mutateAsync()} disabled={incrementMutation.isPending}>
      Increment
    </Button>
  )
}
