import React from 'react';
import './Track.css';

const Track = ({ artistName, followerCount, popularity, rank }) => {
	return (
			<div className="track">
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
			</div>
		);
}

export default Track;