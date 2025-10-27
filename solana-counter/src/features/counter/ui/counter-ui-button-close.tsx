import { SolanasolanasolanasolanacounterAccount } from '@project/anchor'
import { UiWalletAccount } from '@wallet-ui/react'
import { Button } from '@/components/ui/button'

import { useSolanasolanasolanasolanacounterCloseMutation } from '@/features/solanasolanasolanacounter/data-access/use-solanasolanasolanacounter-close-mutation'

export function SolanasolanasolanasolanacounterUiButtonClose({ account, solanasolanasolanacounter }: { account: UiWalletAccount; solanasolanasolanacounter: SolanasolanasolanasolanacounterAccount }) {
  const closeMutation = useSolanasolanasolanasolanacounterCloseMutation({ account, solanasolanasolanacounter })

  return (
    <Button
      variant="destructive"
      onClick={() => {
        if (!window.confirm('Are you sure you want to close this account?')) {
          return
        }
        return closeMutation.mutateAsync()
      }}
      disabled={closeMutation.isPending}
    >
      Close
    </Button>
  )
}
