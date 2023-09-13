import fetchCall from "@utils/fetchCall";
import { useQuery } from "react-query";

const useFetchQuery = <T, E>(
  queryId: (string | number)[],
  url: string,
  staleTime?: number
) => {
  const data = useQuery<T, E>(queryId, () => fetchCall(url), {
    staleTime: staleTime,
  });

  return data;
};

export default useFetchQuery;
