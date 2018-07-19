import React from 'react';

const SearchButton = ({ updateGenreList }) => {
	return (
		<div className="search-box">
			<input
				type="button"
				value="Search"
				onClick={updateGenreList}
			/>
		</div>
	)
}

export default SearchButton;