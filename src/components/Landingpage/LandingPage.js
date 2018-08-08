import React from 'react';
import './LandingPage.css';
// import Searchgenre from './Searchgenre';
import InputSearchBox from './InputSearchBox';
// import SearchButton from './SearchButton';

const LandingPage = ({ searchChange, updateGenreList, onRouteChange }) => {
	return (
			<div className="wrapper">
				<div className="landing-container">
					<div className="landing-page">
						{/*<label>Filter by Genre</label>*/}
						{/*<SearchButton updateGenreList={updateGenreList}/>*/}
						<InputSearchBox updateGenreList={updateGenreList} searchChange={searchChange}/>
						{/*<Searchgenre searchChange={searchChange}/>*/}
					</div>
				</div>
			</div>
		);
}

export default LandingPage;
