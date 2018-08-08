import React from 'react';
import './Filterby.css';
// import Searchgenre from './Searchgenre';
import InputSearchBox from './InputSearchBox';
import SearchButton from './SearchButton';

const Filterby = ({ searchChange, updateGenreList, onRouteChange }) => {
	return (
			<div className="wrapper">
				<div className="container">
					<div className="wrapper">
						<div className="container">
							<div className="chart-filters">
								<label>Filter by Genre</label>
								<SearchButton updateGenreList={updateGenreList}/>
								<InputSearchBox updateGenreList={updateGenreList} searchChange={searchChange}/>
								{/*<Searchgenre searchChange={searchChange}/>*/}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
}

export default Filterby;
