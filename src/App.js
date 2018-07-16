import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import FilterBy from './components/Filterby/Filterby';

class App extends Component {
  render() {
    return (
      <div id="content" className="App">
        <Navigation />
        <FilterBy />
           {/*<Headers />
           <Tracklist />*/}
      </div>
    );
  }
}

export default App;
