import { Button } from '@/components/ui/button'
import { UiWalletAccount } from '@wallet-ui/react'

import { useSolanasolanasolanasolanacounterInitializeMutation } from '@/features/solanasolanasolanacounter/data-access/use-solanasolanasolanacounter-initialize-mutation'

export function SolanasolanasolanasolanacounterUiButtonInitialize({ account }: { account: UiWalletAccount }) {
  const mutationInitialize = useSolanasolanasolanasolanacounterInitializeMutation({ account })

  return (
    <Button onClick={() => mutationInitialize.mutateAsync()} disabled={mutationInitialize.isPending}>
      Initialize Solanasolanasolanasolanacounter {mutationInitialize.isPending && '...'}
    </Button>
  )
}
