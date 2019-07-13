import React, {useEffect, useState} from 'react';
import FetchAPIData from './FetchAPIData';

const App = () => {
  const [query, setQuery] = useState('batman');
  const [{ data, loading, error}, doFetch] = FetchAPIData();
  const API_KEY = '4a3b711b'
  return(
    <div>
      <form
        onSubmit={event => {
          doFetch(`https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`)
          event.preventDefault();
        }}
      >
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button type="submit">
          Search
        </button>
      </form>
      <ul>
      {console.log(data)}
      {error && <div>Something went wrong...</div>}
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
