import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import FilterBy from './components/Filterby/Filterby';
import Tracklist from './components/Tracklist/Tracklist';
// import PlaylistInput from './components/PlaylistInput/PlaylistInput';

class App extends Component {
  render() {
    return (
      <div id="content" className="App">
        <Navigation />
       {/*<PlaylistInput />*/}
        <FilterBy />
        <Tracklist />
      </div>
    );
  }
}

export default App;
