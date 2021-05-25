import './App.css';
import SearchForm from './components/SearchForm';
import AnimeResults from './components/AnimeResults';
import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state = {animes: []}

  getAnimes(query) {
    axios.get(`https://api.jikan.moe/v3/search/anime?q=${query}&page=1`).then(
      Response => {const {data} = Response
      console.log(data.results) 
      return data.results}
    ).catch((e) => this.setState({error: e}))
  }

  render() {
    return (
      <div className="App">
        <SearchForm getAnimes={this.getAnimes}/>
        <AnimeResults animes={this.state.animes}/>
      </div>
    );
  }
  
}

export default App;
