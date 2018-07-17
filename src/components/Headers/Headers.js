import React from 'react';
import './Headers.css';

const Headers = () => {
	return (
			<div class="wrapper">
				<div class="container">
					<table class="chart-table">
						<thead>
							<tr>
								<th class="chart-table-track">Track</th>
								<th class="chart-table-streams">Streams</th>
							</tr>
						</thead>
					</table>
				</div>
			</div>
		);
}

export default Headers;