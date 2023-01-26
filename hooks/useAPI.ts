import useSWR, { Fetcher } from "swr";

// This hook will make it easier to swap api clients like swr easier
// as well handle errors and loading states globally
export const useAPI = <T>(endPoint: string, fetcher: Fetcher<T>) => {
  const { data, error, isLoading } = useSWR<T>(endPoint, fetcher);

  return { data, error, isLoading };
};
