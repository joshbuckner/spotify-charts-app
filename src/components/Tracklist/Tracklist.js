import React from 'react';
import Track from '../Track/Track';
import Headers from '../Headers/Headers';
import './Tracklist.css';
// import { spotify } from './sample_database';
// import { spotify2 } from './sample_database2';



const Tracklist = ({ genreList }) => {
	

	// console.log(genreList.artists.items[0]);
	const sortedByPopular = genreList.artists.items.sort((a, b) => {
		return b.popularity - a.popularity || b.followers.total - a.followers.total;
	});

	const commafy = (num) => {
	    var str = num.toString().split('.');
	    if (str[0].length >= 5) {
	        str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
	    }
	    if (str[1] && str[1].length >= 5) {
	        str[1] = str[1].replace(/(\d{3})/g, '$1 ');
	    }
	    return str.join('.');
	}
	// const artistRanking = 
	
	const trackComponent = sortedByPopular.map((song, i) => {
		let rank = 0;
		// if (genreList.artists.items[i] === genreList.artists.items[0]) {
		// 	rank = rank + 1;
		// }
		// else if (genreList.artists.items[i].popularity === genreList.artists.items[i-1].popularity) {
		// 	rank = rank;
		// }
		// else rank = rank + 1;
				
		return (
			<Track 
				key={i}
				rank={rank + i + 1}
				artistName={genreList.artists.items[i].name} 
				followerCount={commafy(genreList.artists.items[i].followers.total)} 
				popularity={genreList.artists.items[i].popularity} 
			/>
		);
	})

	function isEmpty(obj) {
	    for(var key in obj) {
	        if(obj.hasOwnProperty(key))
	            return false;
	    }
	    return true;
	}

	if (isEmpty(trackComponent)) {
		return (
			<div className="notFound">
				<h3>Genre not found. Please try again.</h3>
				<div className="searchTips">
					<h5>Search Tips:</h5>
					<ul>
						<li>Try alternate spellings for your search terms</li>
						<li>Use different search terms</li>
					</ul>
				</div>
			</div>
		);
	} else return (
			<div>
				<Headers />
				{trackComponent}
				<div className="underline-bottom"></div>
			</div>
		);
}

export default Tracklist;

// spotify2.items[].track.name
// 	spotify2.items[].track.artists[0].name
// 	spotify2.items[].track.popularity
	
//this code is used for retrieving a get from tracks

// 	const Tracklist = () => {
// 	const sortedByPopular = spotify[0].tracks.sort((a, b) => {
// 		return b.popularity - a.popularity
// 	});

// 	const trackComponent = sortedByPopular.map((song, i) => {
// 		let rank = 0;
// 		return <Track 
// 					rank={rank + i + 1}
// 					trackName={spotify[0].tracks[i].name} 
// 					artistName={spotify[0].tracks[i].artists[0].name} 
// 					popularity={spotify[0].tracks[i].popularity} 
// 				/>
// 	});
	
// 	return (
// 			<div>
// 				<Headers />
// 				{trackComponent}
// 				<div className="underline-bottom"></div>
// 			</div>
// 		);
// }