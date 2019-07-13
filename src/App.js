import React, {useEffect, useState} from 'react';
import axios from 'axios';

const App = () => {
  const API_KEY = '4a3b711b'

  const [data, setData] = useState([]);
  const [query, setQuery] = useState('batman');
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState(`https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`);

  useEffect(() => {
    const fetchData = async () => {
        const result = await axios(url)
        setData(result.data.Search);
    }
    fetchData()
    setLoading(false);
  }, [url]);

  return(
    <div>
      <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <button
        type="button"
        onClick={() => {
          setUrl(`https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`)
        }}
      >
        Search
      </button>
      <ul>
      {console.log(data)}
      
      {loading
          ? <div>...Loading</div>
          : data.map(movie => (
            <span>
              <img src={movie.Poster} />
              <li>{movie.Title}</li>  
            </span>
           
          ))
        
      }
      </ul>
    </div>
  )
}

export default App;
