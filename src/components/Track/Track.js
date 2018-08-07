import React from 'react';
import './Track.css';

const Track = ({ artistName, followerCount, popularity, rank }) => {
	function handleClick(e) {
		e.preventDefault();
		console.log('link to ' + artistName + " artist info");
	}
	return (
			<div className="track">
				<a className="trackBar" onClick={handleClick}>
					<div className="container-track">
						<table>
							<tbody className="chart-table-body">
								<tr>
									<td className="chart-table-rank">{rank}</td>
									<td className="chart-table-artist"><strong>{artistName}</strong></td>
									<td className="chart-table-followers">{followerCount}</td>
									<td className="chart-table-popularity">{popularity}</td>
								</tr>
							</tbody>
						</table>
					</div>
				</a>
			</div>
		);
}

export default Track;