import { SolanasolanasolanasolanacounterAccount, getIncrementInstruction } from '@project/anchor'
import { UiWalletAccount, useWalletUiSigner } from '@wallet-ui/react'
import { useWalletUiSignAndSend } from '@wallet-ui/react-gill'
import { useMutation } from '@tanstack/react-query'
import { toastTx } from '@/components/toast-tx'
import { useSolanasolanasolanasolanacounterAccountsInvalidate } from './use-solanasolanasolanacounter-accounts-invalidate'

export function useSolanasolanasolanasolanacounterIncrementMutation({
  account,
  solanasolanasolanacounter,
}: {
  account: UiWalletAccount
  solanasolanasolanacounter: SolanasolanasolanasolanacounterAccount
}) {
  const invalidateAccounts = useSolanasolanasolanasolanacounterAccountsInvalidate()
  const signAndSend = useWalletUiSignAndSend()
  const signer = useWalletUiSigner({ account })

  return useMutation({
    mutationFn: async () => await signAndSend(getIncrementInstruction({ solanasolanasolanacounter: solanasolanasolanacounter.address }), signer),
    onSuccess: async (tx) => {
      toastTx(tx)
      await invalidateAccounts()
    },
  })
}
