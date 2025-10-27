import { SolanasolanasolanasolanacounterAccount } from '@project/anchor'
import { UiWalletAccount } from '@wallet-ui/react'
import { Button } from '@/components/ui/button'

import { useSolanasolanasolanasolanacounterSetMutation } from '@/features/solanasolanasolanacounter/data-access/use-solanasolanasolanacounter-set-mutation'

export function SolanasolanasolanasolanacounterUiButtonSet({ account, solanasolanasolanacounter }: { account: UiWalletAccount; solanasolanasolanacounter: SolanasolanasolanasolanacounterAccount }) {
  const setMutation = useSolanasolanasolanasolanacounterSetMutation({ account, solanasolanasolanacounter })

  return (
    <Button
      variant="outline"
      onClick={() => {
        const value = window.prompt('Set value to:', solanasolanasolanacounter.data.count.toString() ?? '0')
        if (!value || parseInt(value) === solanasolanasolanacounter.data.count || isNaN(parseInt(value))) {
          return
        }
        return setMutation.mutateAsync(parseInt(value))
      }}
      disabled={setMutation.isPending}
    >
      Set
    </Button>
  )
}
