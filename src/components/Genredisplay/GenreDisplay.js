import React from 'react';
import './GenreDisplay.css';

const GenreDisplay = ({ display, genreDisplay }) => {
	if (display) {
	return (
		<div className="wrapper">
			<div className="container">
				<div>
					<h3 className="genre-display">{genreDisplay}</h3>
				</div>
			</div>
		</div>
		);
	} else return (
		<div className="wrapper">
			<div className="container">
				<div>
				</div>
			</div>
		</div>
	);
}

export default GenreDisplay;