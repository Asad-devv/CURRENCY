import { useState, useEffect } from 'react';
import axios from 'axios';

const UseAxios = (url) => {
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoaded(true);
        const response = await axios(url);
        console.log('API response', response);
        setData(response.data);
      } catch (error) {
        setError(error);
        console.log(error)
      } finally {
        setLoaded(false);
      }
    };

    fetchData();
  }, [url]);

  return [data, loaded, error];
};

export default UseAxios;
