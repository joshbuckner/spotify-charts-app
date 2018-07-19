import React from 'react';
import './InputSearchBox.css'

const InputSearchBox = ({ searchChange }) => {
	return (
		<div className="search-box">
			<input
				type="search" 
				placeholder="search genre" 
				onChange={searchChange}
			/>
		</div>
	)
}

export default InputSearchBox;