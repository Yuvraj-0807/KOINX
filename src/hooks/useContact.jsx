import { useQuery } from '@tanstack/react-query';

import axios from 'axios';
import ENV_VARS from '../utils/contants';

export function useContact() {
  const {
    data,
    isPending: isLoadingUser,
    refetch,
  } = useQuery({
    queryKey: ['user'],
    queryFn: () =>
      axios.get(`${ENV_VARS.baseURL}/simple/supported_vs_currencies`),
  });

  return { user: data?.data, refetch, isLoadingUser };
}
