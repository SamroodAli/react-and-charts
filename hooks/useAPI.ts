import useSWR, { Fetcher } from "swr";

// This hook will make it easier to swap api clients like swr easier
// as well handle errors and loading states globally
export const useAPI = <T>(fetcher: Fetcher<T>, endPoint = "/") => {
  const { data, error, isLoading } = useSWR<T>(endPoint, fetcher);

  return { data, error, isLoading };
};