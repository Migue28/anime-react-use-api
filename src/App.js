import './App.css';
import SearchForm from './components/SearchForm';
import AnimeResults from './components/AnimeResults';
import React from 'react';

class App extends React.Component {
  state = {animes: []}
  render() {
    return (
      <div className="App">
        <SearchForm />
        <AnimeResults animes={this.state.animes}/>
      </div>
    );
  }
  
}

export default App;
