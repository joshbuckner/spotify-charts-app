import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import FilterBy from './components/Filterby/Filterby';
import Tracklist from './components/Tracklist/Tracklist';
import { genreList } from './components/Tracklist/sample_genre_database';
// import PlaylistInput from './components/PlaylistInput/PlaylistInput';

class App extends Component {
  constructor() {
  	super()
  	this.state = {
      genreList: genreList,
	  genreSearch: ''
  	}
  }
  render() {
    return (
      <div id="content" className="App">
        <Navigation />
       {/*<PlaylistInput />*/}
        <FilterBy />
        <Tracklist genreList={this.state.genreList} />
      </div>
    );
  }
}

export default App;
