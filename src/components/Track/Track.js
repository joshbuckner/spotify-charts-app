import React from 'react';
import './Track.css';

const Track = ({ trackName, artistName, popularity, rank }) => {
	return (
			<div className="track">
				<div className="container-track">
					<tbody className="chart-table-body">
						<tr>
							<td className="chart-table-position">{rank}</td>
							<td className="chart-table-track">
								<strong>{trackName}</strong>
								<span className="chart-table-artist">by {artistName}</span>
							</td>
							<td className="chart-table-streamstats">{popularity}</td>
						</tr>
					</tbody>
				</div>
			</div>
		);
}

export default Track;