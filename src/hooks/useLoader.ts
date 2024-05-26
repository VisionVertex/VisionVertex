import { useState } from 'react';

interface LoaderHook {
  loading: boolean;
  showLoader: () => void;
  hideLoader: () => void;
}

const useLoader = (): LoaderHook => {
  const [loading, setLoading] = useState<boolean>(false);

  const showLoader = () => {
    setLoading(true);
  };

  const hideLoader = () => {
    setLoading(false);
  };

  return {
    loading,
    showLoader,
    hideLoader,
  };
};

export default useLoader;
