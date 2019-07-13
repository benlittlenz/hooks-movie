import React, {useEffect, useState} from 'react';
import axios from 'axios';

const FetchAPIData = () => {
    const API_KEY = '4a3b711b'

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [url, setUrl] = useState(`https://www.omdbapi.com/?s=${"batman"}&apikey=${API_KEY}`);
    const [error, setError] = useState(false);

    useEffect(() => {
    const fetchData = async () => {
        setLoading(true);
        setError(false);

        try {
            const result = await axios(url)
            setData(result.data.Search);
        } catch(err) {
            setError(true);
        }
    }
    fetchData()
    setLoading(false);

  }, [url]);

  return [{
      data,
      loading,
      error
  }, setUrl]
}

export default FetchAPIData