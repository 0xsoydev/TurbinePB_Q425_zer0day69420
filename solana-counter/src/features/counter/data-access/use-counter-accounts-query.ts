import { useSolana } from '@/components/solana/use-solana'
import { useQuery } from '@tanstack/react-query'
import { getSolanasolanasolanasolanacounterProgramAccounts } from '@project/anchor'
import { useSolanasolanasolanasolanacounterAccountsQueryKey } from './use-solanasolanasolanacounter-accounts-query-key'

export function useSolanasolanasolanasolanacounterAccountsQuery() {
  const { client } = useSolana()

  return useQuery({
    queryKey: useSolanasolanasolanasolanacounterAccountsQueryKey(),
    queryFn: async () => await getSolanasolanasolanasolanacounterProgramAccounts(client.rpc),
  })
}
