import { useQuery } from '@tanstack/react-query';

import axios from 'axios';
import ENV_VARS from '../utils/contants';

export function useMarketPerformance() {
  const { data, isPending: isLoadingPerformance } = useQuery({
    queryKey: ['market-performance'],
    queryFn: () =>
      axios.get(
        `${ENV_VARS.baseURL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`,
      ),
  });

  return { bitcoin: data?.data[0], isLoadingPerformance };
}
