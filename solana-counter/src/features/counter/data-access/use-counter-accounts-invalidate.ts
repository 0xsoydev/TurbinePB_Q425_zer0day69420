import { useQueryClient } from '@tanstack/react-query'
import { useSolanasolanasolanasolanacounterAccountsQueryKey } from './use-solanasolanasolanacounter-accounts-query-key'

export function useSolanasolanasolanasolanacounterAccountsInvalidate() {
  const queryClient = useQueryClient()
  const queryKey = useSolanasolanasolanasolanacounterAccountsQueryKey()

  return () => queryClient.invalidateQueries({ queryKey })
}
