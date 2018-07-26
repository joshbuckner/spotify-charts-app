import React from 'react';
import './Track.css';

const Track = ({ artistName, followerCount, popularity, rank }) => {
	return (
			<div className="track">
				<div className="container-track">
					<tbody className="chart-table-body">
						<tr>
							<td className="chart-table-position">{rank}</td>
							<td className="chart-table-track">
								<strong>{artistName}</strong>
								<span className="chart-table-artist">{followerCount}</span>
							</td>
							<td className="chart-table-streamstats">{popularity}</td>
						</tr>
					</tbody>
				</div>
			</div>
		);
}

export default Track;