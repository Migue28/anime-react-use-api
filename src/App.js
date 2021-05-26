import './App.css';
import SearchForm from './components/SearchForm';
import AnimeResults from './components/AnimeResults';
import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {animes: []}
    this.handleAnimes = this.handleAnimes.bind(this)
  }

  handleAnimes(animes) {
    this.setState({animes: animes})
  }

  getAnimes(query) {
    axios.get(`https://api.jikan.moe/v3/search/anime?q=${query}&page=1`).then(
      Response => {const {data} = Response
      this.handleAnimes(data.results)}
    ).catch((e) => this.setState({error: e}))
  }

  render() {
    return (
      <div className="App">
        <SearchForm getAnimes={this.getAnimes} handleAnimes={this.handleAnimes}/>
        <AnimeResults animes={this.state.animes}/>
      </div>
    );
  }
  
}

export default App;
