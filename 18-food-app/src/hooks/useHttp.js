import { useCallback, useEffect, useState } from "react";

export default function useHttp(
  sendHttpRequest,
  initialValue,
  withEffect = false
) {
  const [isLoading, setIsFetching] = useState(false);
  const [fetchedData, setFetchedData] = useState(initialValue);
  const [error, setError] = useState();

  function clearData() {
    setFetchedData(initialValue);
  }

  const sendRequest = useCallback(
    async function sendRequest(requestBody) {
      setIsFetching(true);
      try {
        const data = await sendHttpRequest(requestBody);
        setFetchedData(data);
      } catch (e) {
        setError(e.message || "Failed to fetch data");
      } finally {
        setIsFetching(false);
      }
    },
    [sendHttpRequest]
  );

  useEffect(() => {
    if (withEffect) {
      sendRequest();
    }
  }, [sendHttpRequest, withEffect]);

  return [isLoading, fetchedData, error, sendRequest, clearData];
}
