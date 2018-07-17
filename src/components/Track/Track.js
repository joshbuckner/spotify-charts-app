import React from 'react';
import './Track.css';

const Track = () => {
	return (
			<div className="track">
				<div className="container-track">
					<tbody className="chart-table-body">
						<tr>
							<td className="chart-table-position">1</td>
							<td className="chart-table-track">
								<strong>In My Feelings</strong>
								<span className="chart-table-artist">by Drake</span>
							</td>
							<td className="chart-table-streamstats">9,665,341</td>
						</tr>
					</tbody>
				</div>
			</div>
		);
}

export default Track;