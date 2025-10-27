import { useSolana } from '@/components/solana/use-solana'

export function useSolanasolanasolanasolanacounterAccountsQueryKey() {
  const { cluster } = useSolana()

  return ['solanasolanasolanacounter', 'accounts', { cluster }]
}
