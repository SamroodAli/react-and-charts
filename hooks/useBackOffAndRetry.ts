import { useState, useEffect } from "react";

// back and retry strategy. double each time we fail
export const useRetry = (error: Error, onRetry: () => void) => {
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    if (error) {
      // starting with 2 second delay and then doubles each time
      const delay = 2 ** retryCount * 1000;
      const timeoutId = setTimeout(() => {
        setRetryCount(retryCount + 1);
        onRetry();
      }, delay);
      return () => clearTimeout(timeoutId);
    } else {
      setRetryCount(0);
    }
  }, [error, retryCount, onRetry]);

  return retryCount;
};
