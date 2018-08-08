import React from 'react';
import './InputSearchBox.css'

const InputSearchBox = ({ searchChange, updateGenreList }) => {
	const onKeyPress = (event) => {
		if (event.key === 'Enter') {
			updateGenreList();
		}
	}
	return (
		<div className="landing-search-box">
			<input
				type="search" 
				placeholder="search genre" 
				onChange={searchChange} 
				onKeyPress={onKeyPress}
			/>
		</div>
	)
}

export default InputSearchBox;