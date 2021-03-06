import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import FilterBy from './components/Filterby/Filterby';
import Tracklist from './components/Tracklist/Tracklist';
import GenreDisplay from './components/Genredisplay/GenreDisplay';
import LandingPage from './components/Landingpage/LandingPage';
import { genreList } from './components/Tracklist/sample_genre_database';

class App extends Component {
  constructor() {
  	super()
  	this.state = {
      route: 'landingpage',
      genreList: genreList,
      genreDisplay: 'Pop',
	    searchField: '',
      accessToken: ''
  	}
  }
  // on initial page open request a new spotify api access token from /auth endpoint from backend server
  componentDidMount() {
    fetch('https://stark-hollows-70483.herokuapp.com/auth')
      .then(response => response.json())
      .then(data => this.setState({ accessToken: data.access_token }));
  }

  // update the genreList state with a json object from spotify's api based on the query the user has entered
  updateGenreList = (event) => {
    const BASE_URL = 'https://api.spotify.com/v1/search?';
    const FETCH_URL = BASE_URL + 'query=genre%3A' + this.state.searchField + '&type=artist&market=US&offset=0&limit=50';
    const EMPTY_FETCH_URL = BASE_URL + 'query=genre%3Aabc&type=artist&market=US&offset=0&limit=50';
    var myOptions = {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + this.state.accessToken
      },
      mode: 'cors',
      cache: 'default'
    };
    this.setState({route: 'resultspage'});
    //this needs to be refactored bad
    if (this.state.searchField === "" || this.state.searchField.charAt(0) === ";" || this.state.searchField.charAt(0) === "`" || this.state.searchField.charAt(0) === "{" || this.state.searchField.charAt(0) === "}") {
      fetch(EMPTY_FETCH_URL, myOptions)
      .then(response => response.json())
      .then(tracks => {        
        this.setState({ genreList: tracks })
      });
       this.setState({ genreDisplay: '' });
    } else {
      fetch(FETCH_URL, myOptions)
      .then(response => response.json())
      .then(tracks => {        
        this.setState({ genreList: tracks })
      });
      this.setState({ genreDisplay: this.state.searchField });
    };
  }

  // update searchField state to reflect whatever the user has typed in
  onSearchChange = (event) => {
  // if searchField includes spaces add " to the beginning and end of the searchfield string, per spotify api query requirements
    if (/\s/g.test(event.target.value)) {
      this.setState({ searchField: '"' + event.target.value + '"' })
    } else {
      this.setState({ searchField: event.target.value })
    };
  }

  // onRouteChange = (event) => {
  //   if (this.state.route !== 'resultspage') {
  //     this.setState({ route: 'resultspage' });
  //   }
  // }

  render() {
    let body_background = this.state.route === 'landingpage' ? "landing-page-back" : "results-page-back";
    return (
      <div id="content" className={body_background}>
        <Navigation />
        { this.state.route === 'landingpage' ? 
          <div>
            <LandingPage updateGenreList={this.updateGenreList} searchChange={this.onSearchChange} />
          </div>
        : 
          <div>
            <GenreDisplay genreDisplay={this.state.genreDisplay} genreList={this.state.genreList} />
            <FilterBy updateGenreList={this.updateGenreList} searchChange={this.onSearchChange} />
            <Tracklist onRouteChange={this.onRouteChange} genreList={this.state.genreList} />
          </div>
        }
      </div>
    )
	}
}

export default App;
