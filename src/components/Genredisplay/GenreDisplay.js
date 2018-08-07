import React from 'react';
import './GenreDisplay.css';

const GenreDisplay = ({ genreDisplay, genreList }) => {
	// capitalize the first letter of each word in a string
	function toTitleCase(str) {
	    return str.replace(
	        /\w\S*/g,
	        function(txt) {
	            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	        }
	    );
	}
	// remove quotation marks from string
	function noQuotes(str) {
	    return str.replace(/"/g, '');
	}
	// only display a title for the list of artists if a valid search was made
	if (genreList.artists.items.length !== 0) {
		return (
			<div className="wrapper">
				<div className="container">
					<div>
						<h3 className="genre-display">{noQuotes(toTitleCase(genreDisplay))}</h3>
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<div className="wrapper">
				<div className="container">
					<div>
					</div>
				</div>
			</div>
		);
	}
} 

export default GenreDisplay;