import { useState, useCallback } from 'react';

export const useLoadingState = () => {
  const [isLoading, setIsLoading] = useState(false);

  const withLoading = useCallback(async (callback: () => Promise<void>) => {
    setIsLoading(true);
    try {
      await callback();
    } finally {
      // Add a minimum loading time of 500ms for better UX
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
  }, []);

  return { isLoading, withLoading };
};