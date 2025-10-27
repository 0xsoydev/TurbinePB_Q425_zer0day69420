import { SolanasolanasolanasolanacounterAccount, getDecrementInstruction } from '@project/anchor'
import { useMutation } from '@tanstack/react-query'
import { UiWalletAccount, useWalletUiSigner } from '@wallet-ui/react'
import { useWalletUiSignAndSend } from '@wallet-ui/react-gill'
import { toastTx } from '@/components/toast-tx'
import { useSolanasolanasolanasolanacounterAccountsInvalidate } from './use-solanasolanasolanacounter-accounts-invalidate'

export function useSolanasolanasolanasolanacounterDecrementMutation({
  account,
  solanasolanasolanacounter,
}: {
  account: UiWalletAccount
  solanasolanasolanacounter: SolanasolanasolanasolanacounterAccount
}) {
  const invalidateAccounts = useSolanasolanasolanasolanacounterAccountsInvalidate()
  const signer = useWalletUiSigner({ account })
  const signAndSend = useWalletUiSignAndSend()

  return useMutation({
    mutationFn: async () => await signAndSend(getDecrementInstruction({ solanasolanasolanacounter: solanasolanasolanacounter.address }), signer),
    onSuccess: async (tx) => {
      toastTx(tx)
      await invalidateAccounts()
    },
  })
}
