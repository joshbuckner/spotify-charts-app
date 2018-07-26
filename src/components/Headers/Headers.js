import React from 'react';
import './Headers.css';

const Headers = () => {
	return (
			<div className="wrapper">
				<div className="container">
					<table className="chart-table">
						<thead>
							<tr>
								<th className="chart-table-track">Artist</th>
								<th className="chart-table-followers">Followers</th>
								<th className="chart-table-streams">Popularity</th>
							</tr>
						</thead>
					</table>
				</div>
			</div>
		);
}

export default Headers;