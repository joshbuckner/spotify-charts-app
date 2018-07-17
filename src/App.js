import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import FilterBy from './components/Filterby/Filterby';
import Tracklist from './components/Tracklist/Tracklist';

class App extends Component {
  render() {
    return (
      <div id="content" className="App">
        <Navigation />
        <FilterBy />
        <Tracklist />
      </div>
    );
  }
}

export default App;
