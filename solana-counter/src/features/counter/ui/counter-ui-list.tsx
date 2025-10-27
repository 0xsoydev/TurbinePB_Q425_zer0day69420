import { SolanasolanasolanasolanacounterUiCard } from './solanasolanasolanacounter-ui-card'
import { useSolanasolanasolanasolanacounterAccountsQuery } from '@/features/solanasolanasolanacounter/data-access/use-solanasolanasolanacounter-accounts-query'
import { UiWalletAccount } from '@wallet-ui/react'

export function SolanasolanasolanasolanacounterUiList({ account }: { account: UiWalletAccount }) {
  const solanasolanasolanacounterAccountsQuery = useSolanasolanasolanasolanacounterAccountsQuery()

  if (solanasolanasolanacounterAccountsQuery.isLoading) {
    return <span className="loading loading-spinner loading-lg"></span>
  }

  if (!solanasolanasolanacounterAccountsQuery.data?.length) {
    return (
      <div className="text-center">
        <h2 className={'text-2xl'}>No accounts</h2>
        No accounts found. Initialize one to get started.
      </div>
    )
  }

  return (
    <div className="grid lg:grid-cols-2 gap-4">
      {solanasolanasolanacounterAccountsQuery.data?.map((solanasolanasolanacounter) => (
        <SolanasolanasolanasolanacounterUiCard account={account} key={solanasolanasolanacounter.address} solanasolanasolanacounter={solanasolanasolanacounter} />
      ))}
    </div>
  )
}
