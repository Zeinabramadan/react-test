import { useState, useEffect } from 'react';

const useFetch = (entity) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/${entity}`);
        if (!res.ok) {
          throw new Error('Network error while fetching data!');
        }
        const result = await res.json();
        setData(result);
      } catch (error) {
        setIsError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [entity]);

  return { data, isLoading, isError };
};

export default useFetch;