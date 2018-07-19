import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import FilterBy from './components/Filterby/Filterby';
import Tracklist from './components/Tracklist/Tracklist';
import { genreList } from './components/Tracklist/sample_genre_database';
// import PlaylistInput from './components/PlaylistInput/PlaylistInput';

// 9aa1fc52decc4038a023620ce8e2f47b

class App extends Component {
  constructor() {
  	super()
  	this.state = {
      genreList: genreList,
	  searchField: ''
  	}
  }

  // componentDidMount() {
  // 	fetch('https://api.spotify.com/v1/search?q=genre%3Apop&type=track')
	 //  	.then(response=> {
	 //  		response.json();
	 //  	})
	 //  	.then(tracks => {
	 //  		this.setState({ genreList: tracks })
	 //  	})
	 //  	console.log(this.state.genreList);
  // }

  onSearchChange = (event) => {
  	this.setState({ searchField: event.target.value })
  	// console.log(this.state.searchField);
  	// const filteredByGenre = this.state.genreList
  }

  // updateGenreList = (event) => {
  // 	console.log(this.state.genreList);
  // }

  render() {
    return (
      <div id="content" className="App">
        <Navigation />
       {/*<PlaylistInput />*/}
        <FilterBy updateGenreList={this.updateGenreList} searchChange={this.onSearchChange}/>
        {<Tracklist genreList={this.state.genreList} />}
      </div>
    );
  }
}

export default App;
