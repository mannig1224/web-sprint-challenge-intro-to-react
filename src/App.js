import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';
import {url} from './config'
import Character from './components/Character';

const App = () => {
  const [characters, setCharacters] = useState();
  const [currentPageUrl, setcurrentPageUrl] = useState(url);
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();

  useEffect(() => {
    axios.get(currentPageUrl)
      .then(results => {
        console.log(results);
        setCharacters(results.data);
        setNextPageUrl()
      })
      .catch(err => {
        console.log(err);
      })
  }, [currentPageUrl])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {(!characters) ? <h3>Loading...</h3> :<Character characters={characters} />}
    </div>
  );
}

export default App;
