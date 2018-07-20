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

  updateGenreList = (event) => {
      // console.log('this.state', this.state);
      const BASE_URL = 'https://api.spotify.com/v1/search?';
      const FETCH_URL = BASE_URL + 'query=genre%3A' + this.state.searchField + '&type=track&market=US&offset=0&limit=50';
      var accessToken = 'BQCy-_8u3_OU0Ky4yM0EkSn-sqIof0VryUyoK1l_D_KdQccWQYLOukxvcUdD4wMMw7iWCO8VefoROi18wUV93Jh2HyzZo2h5sxVCvzP5rhrZmDbr4KZdjnUcnkbjNDYclCJtGWEn2EBs0td8TTKphM5GJh1S0g'

      var myOptions = {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + accessToken
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
