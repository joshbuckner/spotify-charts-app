import React from 'react';
import Track from '../Track/Track';
import Headers from '../Headers/Headers';
import './Tracklist.css';
// import { spotify } from './sample_database';
// import { spotify2 } from './sample_database2';

const Tracklist = ({ genreList }) => {
	const sortedByPopular = genreList.tracks.items.sort((a, b) => {
		return b.popularity - a.popularity
	});

	const trackComponent = sortedByPopular.map((song, i) => {
		let rank = 0;
		return (
			<Track 
				key={i}
				rank={rank + i + 1}
				trackName={genreList.tracks.items[i].name} 
				artistName={genreList.tracks.items[i].artists[0].name} 
				popularity={genreList.tracks.items[i].popularity} 
			/>
		);
	})
	
	return (
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