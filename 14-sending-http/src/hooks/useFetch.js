import { useEffect, useState } from "react";

export function useFetch(fetchFunction, initialValue) {
  const [isFetching, setIsFetching] = useState(false);
  const [fetchedData, setFetchedData] = useState(initialValue);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const data = await fetchFunction();
        setFetchedData(data);
      } catch (e) {
        setError({
          message: e.message || "Failed to fetch data",
        });
      } finally {
        setIsFetching(false);
      }
    }

    fetchData();
  }, [fetchFunction]);

  return { isFetching, fetchedData, error, setFetchedData };
}
