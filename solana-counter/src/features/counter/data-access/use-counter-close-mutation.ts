import { SolanasolanasolanasolanacounterAccount, getCloseInstruction } from '@project/anchor'
import { useMutation } from '@tanstack/react-query'
import { UiWalletAccount, useWalletUiSigner } from '@wallet-ui/react'
import { useWalletUiSignAndSend } from '@wallet-ui/react-gill'
import { toastTx } from '@/components/toast-tx'
import { useSolanasolanasolanasolanacounterAccountsInvalidate } from './use-solanasolanasolanacounter-accounts-invalidate'

export function useSolanasolanasolanasolanacounterCloseMutation({ account, solanasolanasolanacounter }: { account: UiWalletAccount; solanasolanasolanacounter: SolanasolanasolanasolanacounterAccount }) {
  const invalidateAccounts = useSolanasolanasolanasolanacounterAccountsInvalidate()
  const signAndSend = useWalletUiSignAndSend()
  const signer = useWalletUiSigner({ account })

  return useMutation({
    mutationFn: async () => {
      return await signAndSend(getCloseInstruction({ payer: signer, solanasolanasolanacounter: solanasolanasolanacounter.address }), signer)
    },
    onSuccess: async (tx) => {
      toastTx(tx)
      await invalidateAccounts()
    },
  })
}
