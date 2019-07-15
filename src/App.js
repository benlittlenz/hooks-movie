import React, {useEffect, useState} from 'react';
import FetchAPIData from './FetchAPIData';
import { Input, Button, Form, Icon, List, Grid, Image } from 'semantic-ui-react';

const App = () => {
  const [query, setQuery] = useState('batman');
  const [{ data, loading, error}, performFetch] = FetchAPIData([]);
  const API_KEY = '4a3b711b'
  return(
    <div>
      <Form
        onSubmit={event => {
          performFetch(`https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`)
          event.preventDefault();
        }}
      >
      <span>
        <Form.Input
          type="text"
          placeholder="Search for a movie"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          style={{ maxWidth: '40%', display: 'inline-block'}}
        />
        <Button color='blue'>
          <Icon name="search"  inverted link/>
        </Button>
      </span>
      </Form>
      <List style={{ textAlign: 'center'}}>
      {console.log(data)}
      {error && <div>Something went wrong...</div>}
      <Grid.Row>
      {loading
        ? <div>...Loading</div>
        : data.map(movie => (
            <Grid.Column>
            <Image src={movie.Poster} />
            <List.Item>{movie.Title}</List.Item>  
            </Grid.Column>
         
        ))
      }
      </Grid.Row>
      
      </List>
    </div>
  )
}

export default App;
