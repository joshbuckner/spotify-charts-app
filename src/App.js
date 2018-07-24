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
	    searchField: '',
      accessToken: ''
  	}
  }


  componentDidMount() {
    fetch('http://localhost:8888/auth')
        .then(response => response.json())
        .then(data => this.setState({ accessToken: data.access_token }))
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


  updateGenreList = (event) => {

    console.log(this.state.accessToken);
      // console.log('this.state', this.state);
      const BASE_URL = 'https://api.spotify.com/v1/search?';
      const FETCH_URL = BASE_URL + 'query=genre%3A' + this.state.searchField + '&type=track&market=US&offset=0&limit=50';
      // var accessToken = ''

      var myOptions = {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + this.state.accessToken
        },
        mode: 'cors',
        cache: 'default'
      };

      fetch(FETCH_URL, myOptions)
        .then(response => response.json())
        .then(tracks => {        
          this.setState({ genreList: tracks });
        })

    }

  

  onSearchChange = (event) => {
  	this.setState({ searchField: event.target.value })
  	// console.log(this.state.searchField);
  	// const filteredByGenre = this.state.genreList
  }

  // updateGenreList = (event) => {
  // 	console.log(this.state.genreList);
  // }

  render() {
  	if (this.state.genreList.length === 0) {
  		return <h1>Loading</h1>
  	} else {
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
}

export default App;
