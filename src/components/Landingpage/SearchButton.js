import React from 'react';
import './SearchButton.css';

const SearchButton = ({ updateGenreList }) => {
	return (
		<div className="">
			{/*<input
							className="button"
							type="button"
							value="Search"
							onClick={updateGenreList}
						/>*/}
			<button className="landing-button" onClick={updateGenreList}>
				<span>Search</span>
			</button>
		</div>
	)
}

export default SearchButton;